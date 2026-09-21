export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export const profile = {
  name: "Akash R",
  title: "Java Full Stack Developer",
  primaryTagline: "Building secure, scalable and intelligent web applications.",
  secondaryTagline:
    "Java | Spring Boot | React | PostgreSQL | REST APIs | AI",
  objective:
    "Seeking Java Full Stack Developer / Software Developer Internship and entry-level opportunities.",
  heroDescription:
    "I build secure, scalable and intelligent web applications using Java, Spring Boot, React, PostgreSQL and modern development technologies.",
  heroTechLine: ["Java", "Spring Boot", "React", "PostgreSQL", "REST APIs", "AI"],
  about: `I am a Java Full Stack Developer focused on building complete, secure and scalable web applications.

My primary backend stack is Java and Spring Boot, with React for frontend development and PostgreSQL/MySQL for database-driven applications.

I completed a 3-month Full Stack Developer internship at Unified Mentor, where I worked on web application projects including a GYM Management System and Super Mall Management System.

I have also built and deployed a full-stack pharmacy e-commerce platform with JWT authentication, role-based authorization, order management and Razorpay payments.

Currently, I am developing MediAI, an AI-powered pharmacy and prescription assistant combining Spring Boot, React, Gemini AI and OCR.

I also actively practice Data Structures and Algorithms using Java and have solved 100+ problems on LeetCode.`,
  resumeUrl: "/resume/Akash-R-Resume.pdf",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "GitHub", href: "#github" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/Akashr241", icon: "github" },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/akashr5/",
    icon: "linkedin",
  },
  { label: "LeetCode", url: "https://leetcode.com/u/akashr7/", icon: "leetcode" },
];

export const quickHighlights = [
  {
    title: "3 Month",
    subtitle: "Full Stack Developer Internship",
    icon: "Briefcase",
  },
  {
    title: "100+",
    subtitle: "LeetCode Problems Solved",
    icon: "Code2",
  },
  {
    title: "Multiple",
    subtitle: "Deployed Projects",
    icon: "Rocket",
  },
  {
    title: "AI App",
    subtitle: "In Development",
    icon: "BrainCircuit",
  },
];
