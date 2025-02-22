import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I’m your AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false); // Toggle collapse

     const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
     setMessages([...messages, newMessage]);
     setInput(""); 
     setIsTyping(true);
 
     // Debugging: Ensure API key is correctly loaded
     console.log("Using API Key:", import.meta.env.VITE_OPENAI_API_KEY);

     try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: input }],
                max_tokens: 100,
                temperature: 0.7,
            },
            {
                headers: {
                    "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,  // ✅ Ensure this is correct
                    "Content-Type": "application/json",
                },
            }
        );

        const botReply = response.data.choices[0].message.content;
        setMessages([...messages, newMessage, { sender: "bot", text: botReply }]);
     } catch (error) {
        console.error("Error fetching OpenAI response:", error);
        setMessages([...messages, newMessage, { sender: "bot", text: "Oops! Something went wrong. Try again later." }]);
     }

      setIsTyping(false);
 

     };


  return (
    <div className={`chatbot-container ${isCollapsed ? "collapsed" : ""}`}>
      <div className="chatbot-header" onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? "Open Chatbot" : "Close Chatbot"}
      </div>
      {!isCollapsed && (
        <div className="chat-window">
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
            {isTyping && <div className="message bot typing">AI is typing...</div>}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" ? sendMessage() : null}
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
