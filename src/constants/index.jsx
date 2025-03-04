import project1 from "../assets/Hotel Analysis.jpeg";
import project2 from "../assets/TextSummarization.jpeg";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a dedicated Computer Science student with a passion for data 
analysis, natural language processing, and software development.
 With experience in Python, Java, HTML, MYSQL and various research projects involving text summarization, sentiment analysis, 
 and data visualization, I thrive on solving complex problems with innovative solutions. 
 My goal is to leverage my technical skills and research background to develop impactful applications 
 that enhance information processing and user experience.`;

export const ABOUT_TEXT = `I am a dedicated and innovated Computer Science Information Systems student 
 with a strong passiong for data analysis, software development, and natural language processing.  
 With hands-on experience in Python, Java, and data visualization, I have worked on projects involoving text processing, sentiment analysis, 
 and news aggregation to tackle real-world challenges in data-driven applications. My research has been showcased at academic conferences, 
 highlighting my ability to analyze large datasets and apply NLP techniques to optimize information processing. 
 Beyond, academics, I actively engage in STEM reserach initiatives and have earned scholarships and stipends for my contributions. 
 I thrive in collaborative environments, enjoy solving complex problems, and continuously seek opportunities to learn and grow in the field of software
 engineering and AI-driven solutions.  `;

export const EXPERIENCES = [
  {
    year: "Sept 2024 - Present",
    role: "Student Assistant",
    company: "Kean University",
    description: `Managing data integration and content updates for the school website at CURF`,
    technologies: ["Python"],
  },
  {
    year: "May 2023 - Present",
    role: "Undergraduate Research Fellow",
    company: "NSF Build and Broaden Program",
    description: `Gather and Visualize data using STATA and Python for Economic Conditions and the Gig Economy to measure the Impact and Implications for Social Welfare Programs`,
    technologies: ["STATA", "Python"],
  },
  {
    year: "May 2023 - August 2024",
    role: "Student Scholar",
    company: "NSF Improving Undergraduate STEM Education",
    description: `Utilizing natural languge processing techniqures for text summarization and sentiment analysis in the context of hotel reviews. It offers an opportunity to investigate the practical applications of these methods.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  
];

export const PROJECTS = [
  {
    title: "Simplifying Hotel Reviews",
    image: project1,
    description:
      "Explores techniques within the context of hotel reviews, offering a blueprint for similar analysis in other industries.",
    technologies: ["Python"],
  },
  {
    title: "News Aggregation through Text Summarization",
    image: project2,
    description:
      "Developed and evaluated automated text summarization methods to address the issue of information overload caused by increasing volume of daily news articles. Enhanced productivity and knowledge management through the creation of a system that optimizes information processingand aggregation.",
    technologies: ["Python"], 
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. Contributes to the broad field of sentiment analysis and topic modeling",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Cat Breed Detection App",
    image: project4,
    description:
      "Developed a user-friendly app for cat breed identification through photo uploads. Utilize AI and machine learning to identify cat breeds accurately. Provide users with detailed information about the identified breed, including its traits, care needs, and general behavior. Educate users on proper cat care and breed-specific needs.",
    technologies: ["Swift", "Python"],
  },
];

export const CONTACT = {
  address: "Elizabeth, NJ ",
  phoneNo: "908-967-8878 ",
  email: "tirsoo@kean.edu",
};
