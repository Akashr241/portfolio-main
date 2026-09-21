export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  certificateUrl?: string;
  certificateLabel?: string;
  description: string;
  internshipProjects?: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Unified Mentor",
    duration: "3 Months",
    certificateUrl: "https://unifiedmentor.com/verify-certificate/UMID21082555860",
    certificateLabel: "Verify Internship Certificate",
    description:
      "Completed a 3-month Full Stack Developer internship at Unified Mentor, gaining practical experience in designing and developing web applications across frontend, backend, database integration and application workflows.",
    internshipProjects: ["GYM Management System", "Super Mall Management System"],
  },
];

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    title: "100+ LeetCode Problems Solved",
    description:
      "Consistently practice Data Structures and Algorithms using Java to strengthen problem-solving and interview readiness.",
    icon: "Code2",
  },
  {
    title: "3-Month Full Stack Developer Internship",
    description:
      "Completed a structured internship at Unified Mentor, working on real-world full-stack web applications.",
    icon: "Briefcase",
  },
  {
    title: "Multiple Deployed Web Applications",
    description:
      "Built and deployed full-stack applications with frontend and backend hosting on Vercel, Render and GitHub Pages.",
    icon: "Rocket",
  },
  {
    title: "Cybersecurity Hackathon Participation",
    description:
      "Participated in a cybersecurity-focused hackathon, gaining exposure to CTF challenges and digital forensics.",
    icon: "ShieldCheck",
  },
  {
    title: "Full Stack E-Commerce Application",
    description:
      "Built and deployed MediPharm with JWT authentication, role-based authorization and Razorpay payment integration.",
    icon: "ShoppingCart",
  },
  {
    title: "AI Application Development",
    description:
      "Developing MediAI, an AI-powered pharmacy assistant integrating Gemini AI, OCR and prescription analysis.",
    icon: "BrainCircuit",
  },
];

export interface EducationItem {
  degree: string;
  cgpa: string;
  institution: string;
}

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    cgpa: "7.8",
    institution: "College / University name to be added",
  },
];

export const hackathon = {
  title: "Cybersecurity Hackathon Participant",
  description:
    "Participated in a cybersecurity-focused hackathon, gaining practical exposure to cybersecurity challenges, CTF-style problem solving, forensic analysis and technical collaboration.",
  skills: [
    "Cybersecurity",
    "Problem Solving",
    "CTF",
    "Digital Forensics",
    "Team Collaboration",
    "Technical Investigation",
  ],
  certificateLabel: "Participation Certificate",
};

export const leetcode = {
  stat: "100+",
  statLabel: "Problems Solved",
  platform: "LeetCode",
  profile: "https://leetcode.com/u/akashr7/",
  description:
    "I regularly practice Data Structures and Algorithms using Java to strengthen algorithmic thinking, coding efficiency and technical interview readiness.",
  buttonLabel: "View LeetCode Profile",
};

export const portfolioJourney = [
  { label: "BCA Student", icon: "GraduationCap" },
  { label: "Full Stack Developer Internship", icon: "Briefcase" },
  { label: "GYM Management System", icon: "Dumbbell" },
  { label: "Super Mall Management System", icon: "ShoppingBag" },
  { label: "Java + Spring Boot Development", icon: "Server" },
  { label: "MediPharm Full Stack E-Commerce", icon: "ShoppingCart" },
  { label: "JWT + Security + Payments", icon: "Lock" },
  { label: "Cloud Deployment", icon: "Cloud" },
  { label: "MediAI AI + OCR Development", icon: "BrainCircuit" },
  { label: "100+ LeetCode Problems", icon: "Code2" },
  { label: "Cybersecurity Hackathon Participation", icon: "ShieldCheck" },
];
