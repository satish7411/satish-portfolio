import profileImage from "../assets/profile.jpg";
import projectLibrary from "../assets/project-library.svg";
import projectDeepfake from "../assets/project-deepfake.svg";

export const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Certifications",
];

export const heroData = {
  greeting: "Hi, I'm",
  name: "Satish C",
  roles: ["Java Full Stack Developer"],
  intro:
    "Java Full Stack Developer with strong knowledge in Java, Spring Boot, React.js, MySQL, HTML, CSS, and JavaScript. Passionate about building scalable web applications and solving real-world problems through clean and efficient code. Strong interest in backend development, full stack applications, and AI-based solutions.",
  image: profileImage,
  resumeUrl: "/assets/SatishC_FS_Engineer_Updated - Copy.pdf",
};

export const aboutText =
  "I’m Satish C, a Computer Science Engineering graduate with a strong interest in Full Stack Development, Java Backend Development, and AI-based applications. I enjoy building practical and user-friendly solutions that solve real-world problems.\n\nI have hands-on experience working with Java, Spring Boot, React.js, MySQL, HTML, CSS, JavaScript, and Python. My background also includes Machine Learning, NLP, and Deep Learning projects, where I worked on model building, preprocessing pipelines, and transformer-based language understanding.\n\nI have internship experience in AI and Machine Learning, where I contributed to contextual language understanding projects and gained practical exposure to transformer models and modern AI systems.\n\nBeyond coding, I enjoy exploring new technologies, improving problem-solving skills, and continuously learning modern software development practices.";

export const aboutHighlights = [
  "Fresher",
  "Java Full Stack Developer",
  "Based in Bengaluru",
  "Open to Work",
];

export const skills = {
  "Programming Languages": ["Java", "Python", "JavaScript", "SQL", "HTML", "CSS"],
  "Frameworks & Libraries": ["Spring Boot", "React.js", "Node.js", "REST APIs", "TensorFlow", "OpenCV"],
  Databases: ["MySQL", "PostgreSQL", "NoSQL"],
  "DevOps & Tools": ["Git", "GitHub", "Docker", "IntelliJ IDEA", "VS Code", "Postman"],
};

export const projects = [
  {
    title: "College Library Management System",
    description:
      "Developed a web-based library management system using Java Spring Boot and MySQL to manage books, member records, issue-return tracking, due dates, and librarian authentication. Built a responsive frontend using HTML, CSS, and JavaScript to improve usability and automate manual library processes.",
    tech: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    image: projectLibrary,
    github: "#",
    liveDemo: "#",
  },
  {
    title: "Deep Fake Detection Using Deep Learning",
    description:
      "Built a deep learning-based system to detect manipulated or face-swapped videos using CNN models. Used Python, TensorFlow, and OpenCV for frame extraction, preprocessing, and classification. The system identifies facial inconsistencies and motion irregularities for accurate deep fake detection.",
    tech: ["Python", "TensorFlow", "OpenCV", "Deep Learning", "CNN"],
    image: projectDeepfake,
    github: "#",
    liveDemo: "#",
  },
  {
    title: "Farm2Market",
    description:
      "A platform bridging farmers and consumers for fresh organic products directly from farm to home",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: "https://farm2market-nu.vercel.app/og-image.png",
    github: "#",
    liveDemo: "https://farm2market-nu.vercel.app/",
  },
];

export const experiences = [
  {
    role: "AI - Machine Learning Engineer Intern",
    company: "Rooman Technologies",
    duration: "Sept 2024 - Feb 2025",
    location: "Bengaluru",
    description:
      "Worked as an AI - Machine Learning Engineer Intern and gained hands-on experience in machine learning and deep learning projects. Worked on data preprocessing, model training, evaluation, and transformer architectures for contextual language understanding. Contributed to real-world AI workflows and model deployment strategies.",
    certificateLink: "https://drive.google.com/file/d/1F-68ZKAeRQVAu9eT-ao2DW_6cJC_-UvQ/view",
  },
  {
    role: "NLP Intern",
    company: "IBM",
    duration: "Sept 2022 - Oct 2022",
    location: "Bengaluru",
    description:
      "Worked on Natural Language Processing fundamentals, contextual embeddings, and transformer-based language models. Gained practical exposure to language understanding, text preprocessing, and AI-based NLP workflows.",
  },
  {
    role: "Data Analyst Intern",
    company: "Ipec Solutions",
    duration: "APR 2025 - JUN 2025",
    location: "Bengaluru",
    description:
      "Hands-on training focused on exploring, cleaning, and analyzing datasets using Python. Covered key techniques such as data wrangling and manipulation with Pandas, creating descriptive statistics, and visualizing data insights with Seaborn and Matplotlib. Applied these tools to generate actionable insights through real-world datasets.",
    certificateLink: "https://drive.google.com/file/d/1pHcyVS6slywKFdcbEefvY8aJXH5UXUi4/view",
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institute: "City Engineering College, Bengaluru",
    year: "2021 - 2025",
    score: "CGPA: 7.89",
  },
  {
    degree: "PUC in Science (Biology)",
    institute: "SetruGuru Shantappa College Of Commerce, Arts And Science",
    year: "2019 - 2021",
    score: "Percentage: 68.5%",
  },
  {
    degree: "SSLC",
    institute: "Sasya Shyamala Eng Med High School, Kurugodu",
    year: "2018 - 2019",
    score: "Percentage: 73.05%",
  },
];

export const certifications = [
  {
    name: "Artificial Intelligence and Machine Learning",
    issuer: "Mind Luster",
    link: "https://drive.google.com/file/d/1LD7xUlxQp8lBGsvF-BHO3LHqM3SPTNj_/view",
  },
  {
    name: "SQL and SQL Server for Beginners",
    issuer: "Mind Luster",
    link: "https://drive.google.com/file/d/1CY2f6V9IbbwkZc2zPmYd5YsU0CKn1wyd/view",
  },
  {
    name: "HTML and CSS",
    issuer: "Mind Luster",
    link: "https://drive.google.com/file/d/1gPCXGuqjp_F8vpaBos5Glmc1W4ptcrI4/view",
  },
  {
    name: "Contextual Language Understanding with Transformer Models",
    issuer: "Mind Luster",
    link: "https://drive.google.com/file/d/1RQIgbGXcFAfRUoBrhUcUEFQp4O73ftPS/view",
  },
];

export const contactData = {
  email: "satishsatish8078@gmail.com",
  phone: "7411792674",
  linkedin: "https://www.linkedin.com/in/satish711",
  github: "https://github.com/satish7411",
};
