import project1 from "../assets/Hotel Analysis.jpeg";
import project2 from "../assets/TextSummarization.jpeg";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp"; 

export const HERO_CONTENT = `I’m a Computer Science student who loves turning ideas into real, useful tools. 
I’ve worked on projects involving data, research, and app development, and I enjoy finding creative ways to make 
technology easier and more meaningful for people to use. My goal is to keep building projects that make an impact 
and improve the way we connect with information.`;

export const ABOUT_TEXT = `I’m a software developer and researcher passionate about creating websites and apps that make 
technology more accessible and engaging. I love bringing ideas to life through design, data, and innovation—whether it’s 
building user-friendly interfaces or exploring how AI and data analysis can solve real-world problems.

My projects have explored text processing, sentiment analysis, and news aggregation, applying data-driven approaches to 
turn complex information into meaningful insights. I’ve presented my research at academic conferences and earned scholarships 
for my contributions to STEM initiatives.

I thrive in collaborative environments, enjoy tackling challenges creatively, and continuously seek opportunities to 
grow as a developer focused on impactful, AI-powered solutions.  `;

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
