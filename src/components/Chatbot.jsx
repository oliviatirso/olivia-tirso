import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I’m your friendly AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false); // State to control collapse

  // Predefined responses, including the joke response
  const predefinedResponses = {
    hi: 'Hi there! How can I assist you?',
    hello: 'Hello! How are you today?',
    bye: 'Goodbye! Have a nice day!',
    thanks: "You're welcome!",
    'tell me a joke': 'Why don’t skeletons fight each other? They don’t have the guts!', // Joke response
  };

  const sendMessage = async () => {
    if (!input.trim()) return; // Don't send empty messages

    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);
    setInput(''); // Clear input after sending
    setIsTyping(true);

    const userInput = input.toLowerCase();

    // Check if there's a predefined response
    if (predefinedResponses[userInput]) {
      const botMessage = { sender: 'bot', text: predefinedResponses[userInput] };
      setMessages([...messages, newMessage, botMessage]);
      setIsTyping(false);
      return;
    }

    // If no predefined response, call GPT-3 API
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003',
          prompt: input,
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // Use API key from .env
          },
        }
      );

      const botMessage = { sender: 'bot', text: response.data.choices[0].text.trim() };
      setMessages([...messages, newMessage, botMessage]);
    } catch (error) {
      console.error('Error with OpenAI API:', error);
      setMessages([...messages, newMessage, { sender: 'bot', text: 'Oops! Something went wrong. Try again?' }]);
    }
    setIsTyping(false);
  };

  return (
    <div className={`chatbot-container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="chatbot-header" onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? 'Open Chatbot' : 'Close Chatbot'}
      </div>
      {!isCollapsed && (
        <div className="chat-window">
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
            {isTyping && <div className="message bot typing">The bot is typing...</div>}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
              placeholder="Ask me anything..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;