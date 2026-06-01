// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import gssoc from './assets/company_logo/gssoc.png';

// Education Section Logo's
import dav from './assets/education_logo/DAV.png';
import nit from './assets/education_logo/NITLogo.png';

// Project Section Logo's
import texttospeech from './assets/work_logo/texttospeech.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import tracker from "./assets/work_logo/RealTimeTracker.png";

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: gssoc,
      role: "Frontend Developer",
      company: "GirlScript Summer of Code (GSSoC)",
      date: "Jul 2024 - Sep 2024",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
      ],
    },
    
  ];
  export const education = [
    {
      id: 0,
      img: nit,
      school: "",
      date: "August 2024 - Present",
      grade: "9.0 CGPA",
      desc: "I am pursuing my Bachelor's degree (B.Tech) in Mathematics and Computing from NIT, Kurukshetra.I am developing a strong foundation in programming, software development, and problem solving. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming and Web Development. I actively participates in various workshops and technical events, which enhanced my skills and knowledge. My experience at NIT, Kurukshetra has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - B.Tech (Mathematics and Computing)",
    },
    {
      id: 1,
      img: dav,
      school: "DAV Public School, Dudhichua",
      date: "April 2023 - June 2024",
      grade: "92%",
      desc: "I completed my class 12 education from DAV Public School, Dudhichua, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: dav,
      school: "DAV Public School, Dudhichua",
      date: "Apr 2021 - March 2022",
      grade: "97.2%",
      desc: "I completed my class 10 education from DAV Public School, Dudhichua, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Real Time Tracker",
      description:
        "Developed a real-time tracking application that provides live location and movement updates using WebSockets, enabling instant synchronization between users and devices with an interactive map interface.",
      image: tracker,
      tags: ["React.js","Node.js","Express.js","Socket.IO","JavaScript","WebSockets","REST API"],
      github: "https://github.com/jyoti-kumari-singh20/RealTime-Tracker",
      webapp: "https://real-time-tracker-steel.vercel.app/",
    },
    {
      id: 1,
      title: "Text-to-Speech Converter",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: texttospeech,
      tags: ["HTML", "CSS", "JavaScript","API"],
      github: "https://github.com/jyoti-kumari-singh20/text-to-speech",
      webapp: "https://text-to-speech-beryl-eight.vercel.app/",
    },
    {
      id: 2,
      title: "Image Search App",
      description:
        "A javascript image search application that allows users to search high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["HTML", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/jyoti-kumari-singh20/ImageSearchApp",
      webapp: "https://image-search-app-six-zeta.vercel.app/",
    },
  ];  