export const personalInfo = {
  name: 'Satyam',
  fullName: 'Satyam Tiwari',
  surname: 'Tiwari',
  initials: 'S.',
  brandName: 'developersatyam',
  role: 'MERN Stack Developer',
  tagline: 'Computer Science Engineering Student & Aspiring MERN Stack Developer',
  bio: 'Computer Science Engineering student and aspiring MERN Stack Developer passionate about building scalable full-stack web applications, backend APIs, and intuitive digital experiences.',
  location: 'India',
  email: 'satyam.developer@example.com',
  github: 'https://github.com/Satyam-hub25',
  linkedin: 'https://www.linkedin.com/in/satyam-tiwari-mern/',
  leetcode: 'https://leetcode.com/u/satyam_1211/',
  instagram: 'https://www.instagram.com/_satyamtiwari11/',
  avatar: '/images/satyam_hero.jpg',
  resumeUrl: '#contact',
};

export const whatIDo = [
  {
    id: 'fullstack-mern',
    icon: 'browser',
    title: 'Full-Stack MERN Development',
    description:
      'Developing end-to-end web applications with React frontend, Node.js and Express REST APIs, MongoDB databases, and secure token authentication.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    id: 'backend-apis',
    icon: 'server',
    title: 'Backend Engineering & REST APIs',
    description:
      'Architecting resilient server-side services, relational & NoSQL database schemas, middleware integration, and automated pipelines.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'RESTful Architecture'],
  },
  {
    id: 'dsa-systems',
    icon: 'code',
    title: 'Data Structures & System Design',
    description:
      'Writing optimized, scalable code with solid algorithmic foundations in Java and JavaScript, focusing on problem solving and maintainable architecture.',
    tags: ['Java', 'JavaScript', 'DSA', 'System Design', 'Clean Code'],
  },
];

/* Compact, icon-based skills categorized as requested */
export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: 'react' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'React Router', icon: 'react-router' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Languages',
    skills: [
      { name: 'Java', icon: 'java' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'REST APIs', icon: 'restapi' },
      { name: 'JWT', icon: 'jwt' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Redis', icon: 'redis' },
      { name: 'SQL', icon: 'sql' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools / DevOps',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Docker', icon: 'docker' },
      { name: 'GitHub Actions', icon: 'github-actions' },
    ],
  },
];

export const projectsData = [
  {
    id: 'dev-nexus',
    title: 'DevNexus - Developer Collaboration Platform',
    category: 'Full Stack',
    featured: true,
    description:
      'A full-stack collaborative social hub for software developers featuring real-time code snippet sharing, technical discussion forums, developer profiles, and interactive project showcases.',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'CSS3'],
    liveDemoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    image: '/images/proj1.jpg',
    colorTheme: '#f5b72e',
    highlights: [
      'Comprehensive RESTful API with token-based authorization and granular permissions.',
      'Optimized MongoDB indexing for fast sub-second search and hashtag lookups.',
      'Interactive dark UI theme inspired by modern developer IDE aesthetics.',
    ],
  },
  {
    id: 'task-flow',
    title: 'TaskFlow Pro - Agile Project Management',
    category: 'MERN Apps',
    featured: true,
    description:
      'A Kanban-style project management suite with drag-and-drop workflow tracking, sprint analytics, multi-user assignment, and automated deadline reminder notifications.',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    liveDemoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    image: '/images/proj2.png',
    colorTheme: '#60a5fa',
    highlights: [
      'Custom drag-and-drop state machine built without external heavy libraries.',
      'Automated background notifications when tasks are reassigned or due.',
      'Real-time status filters and milestone completion burn-down charts.',
    ],
  },
  {
    id: 'crypto-pulse',
    title: 'CryptoPulse - Market Analytics Dashboard',
    category: 'Frontend',
    featured: true,
    description:
      'Real-time financial cryptocurrency tracking dashboard featuring interactive price history graphs, market cap rankings, currency converters, and customizable watchlists.',
    technologies: ['React.js', 'JavaScript', 'REST APIs', 'CSS Keyframes'],
    liveDemoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    image: '/images/crypto.png',
    colorTheme: '#10b981',
    highlights: [
      'Live websocket updates and auto-refreshing ticker feeds.',
      'Mobile-optimized touch swipeable coin inspection cards.',
    ],
  },
  {
    id: 'krishi-portal',
    title: 'Krishi Portal - Agro Marketplace',
    category: 'Full Stack',
    featured: false,
    description:
      'An agricultural e-marketplace platform connecting local farmers directly with bulk buyers, crop pricing insights, and logistics tracking.',
    technologies: ['React.js', 'Express', 'MongoDB', 'CSS Grid'],
    liveDemoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    image: '/images/krishi.png',
    colorTheme: '#22c55e',
    highlights: [
      'Bilingual interface with regional language support.',
      'Direct buyer-to-farmer price discovery engine.',
    ],
  },
  {
    id: 'pixel-craft',
    title: 'PixelCraft - UI Component Studio',
    category: 'Frontend',
    featured: false,
    description:
      'An interactive playground of handcrafted, accessible, responsive CSS micro-interactions, modal dialogs, and navigation systems designed for production frontend teams.',
    technologies: ['HTML5', 'CSS3 Variables', 'React.js', 'Modular Components'],
    liveDemoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    image: '/images/proj3.jpg',
    colorTheme: '#a855f7',
    highlights: [
      'Zero dependency CSS custom component system.',
      'Fluid typography and full WCAG AA contrast compliance.',
    ],
  },
];

export const experienceData = [
  {
    id: 'exp-1',
    type: 'experience',
    title: 'Full Stack MERN Developer',
    organization: 'Innovatech Solutions',
    period: '2023 - Present',
    description:
      'Leading development of scalable client-facing web applications using React and Node.js. Optimized frontend performance by 40%, built reusable design components, and designed RESTful microservice architectures.',
    highlights: [
      'Developed and shipped 6+ high-traffic MERN stack production features.',
      'Implemented automated notification engines and webhook listeners.',
      'Mentored junior developers on modular React component patterns.',
    ],
  },
  {
    id: 'hack-1',
    type: 'hackathon',
    title: 'Winner - National Smart India Hackathon',
    organization: 'Ministry of Education & AICTE',
    period: '2023',
    description:
      'Secured 1st Place out of 350+ participating national teams by architecting a centralized real-time disaster resource management portal using React, Node.js, and geospatial mapping.',
    highlights: [
      'Built functional prototype under intense 36-hour non-stop hackathon sprint.',
      'Awarded cash prize and certificate of excellence from panel of tech leaders.',
    ],
  },
  {
    id: 'cert-1',
    type: 'certification',
    title: 'Meta Certified Front-End Developer',
    organization: 'Meta / Coursera',
    period: '2023',
    description:
      'Comprehensive professional certification covering advanced React concepts, JavaScript ES6+, UX principles, unit testing, and version control.',
    highlights: ['Earned verified credential with 98% grade across practical assessments.'],
  },
  {
    id: 'edu-1',
    type: 'education',
    title: 'Bachelor of Technology in Computer Science & Engineering',
    organization: 'Technical University',
    period: '2020 - 2024',
    description:
      'Graduated with First Class Honors (CGPA: 8.8/10). Coursework emphasized Data Structures, Algorithms, Database Management Systems, Computer Networks, and Web Technologies.',
    highlights: [
      'Core Member of University Developer Student Club.',
      'Organized 5+ technical workshops on Web Development and Open Source.',
    ],
  },
];
