//import image by doing: import project# from "../assets/projects/project-#.jpg"
import experience1 from "../assets/experiences/experience1.png";
import experience2 from "../assets/experiences/experience2.png";
import project1 from "../assets/projects/project1.png";

export const ABOUT_TEXT = `Hello and welcome to my website!

I’m Ivan, a 3rd-year Computer Science student at SFU. When I’m not in class, you’ll probably find me playing soccer or exploring Vancouver’s food scene in search of the best bites.

This site is my little corner of the web where I’ll be sharing updates, showcasing projects, and jotting down random thoughts. Feel free to look around and get to know me!

If something here sparks your interest and you’d like to chat, my socials are linked at the top—don’t hesitate to reach out! I’m always up for a coffee chat. ☕`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Lead Kinesiologist",
    company: "CBI",
    location: "Vancouver, BC",
    image: experience1,
    description: `Collaborated with multidisciplinary healthcare teams to develop personalized treatment plans, supporting individuals with diverse abilities, including Autism, developmental disorders, and brain injuries, to achieve optimal outcomes.`,
  },
  {
    year: "2022 - 2023",
    role: "Laboratory Technician",
    company: "Nautilus Environmental",
    location: "Vancouver, BC",
    image: experience2,
    description: `Performed environmental toxicological and microbiological tests to ensure regulatory compliance, while conducting applied research to address specific project needs, leveraging analytical skills to deliver accurate, actionable results.`,
  },
];

export const PROJECTS = [
  {
    title: "PAIN2GO",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Portfolio Website",
    //image:
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
];

export const CONTACT = {
  email: "yuivan2000@gmail.com",
  linkedin: "https://www.linkedin.com/in/ivannyuu",
  github: "https://github.com/ivannyuu",
};

export const EDUCATION = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "Simon Fraser University",
    location: "Vancouver, BC",
    expectedGraduation: "Dec 2025",
    coursework: [
      "Computing in Python",
      "Data Structures & Algorithms",
      "Computer Architecture",
      "Combinatorics",
      "Object-Oriented Programming",
      "Computer Vision & Graphics",
    ],
  },
  {
    degree: "B.Sc. in Kinesiology",
    institution: "Simon Fraser University",
    location: "Vancouver, BC",
    graduation: "Jun 2023",
    concentration: "Active Health and Rehabilitation",
  },
];

export const SKILLS = [
  "Python",
  "JavaScript",
  "HTML/CSS",
  "React.js",
  "MATLAB",
  "C++",
  "C",
  "Git",
  "Github",
];

export const ACTIVITIES = [
  {
    role: "Peer Tutor",
    organization: "Simon Fraser University",
    duration: "Sep 2024 - Present",
    courses: ["CMPT120", "CMPT125", "MACM 101"],
  },
  {
    role: "Athletic Trainer",
    organization: "Simon Fraser University",
    duration: "Jan 2022 - Apr 2022",
  },
];

