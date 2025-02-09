import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
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
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
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
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Elizabeth, NJ ",
  phoneNo: "908-967-8878 ",
  email: "tirsoo@kean.edu",
};
