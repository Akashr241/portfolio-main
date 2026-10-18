export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  certificateUrl?: string;
  certificateLabel?: string;
  description: string;
  internshipProjects?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  url?: string;
}

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Unified Mentor Pvt. Ltd.",
    duration: "Aug 2025 to Nov 2025 (3 months)",
    certificateUrl: "https://unifiedmentor.com/verify-certificate/UMID21082555860",
    certificateLabel: "Verify Internship Certificate",
    description:
      "Built the frontend of an internship project with HTML5, CSS3 and JavaScript, created responsive layouts and interactive features, debugged UI issues across screen sizes and browsers, and used Git and GitHub for version control and collaboration.",
    internshipProjects: ["GYM Management System", "Super Mall Management System"],
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "AWS Educate: Getting Started with Serverless",
    issuer: "Amazon Web Services",
    url: "https://www.credly.com/badges/abd548b4-d13b-4ddd-bbf8-97240c80cb22/public_url",
  },
  {
    title: "Full Stack Web Development Internship Certificate",
    issuer: "Unified Mentor Pvt. Ltd.",
    url: "https://unifiedmentor.com/verify-certificate/UMID21082555860",
  },
];

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    title: "150+ LeetCode Problems Solved",
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
      "Built and deployed a full stack e-commerce application with JWT authentication, role-based authorization and Razorpay payment integration.",
    icon: "ShoppingCart",
  },
  {
    title: "AI Application Development",
    description:
      "Built MediPharm, an AI-assisted pharmacy platform integrating Gemini AI, OCR and prescription analysis.",
    icon: "BrainCircuit",
  },
];

export interface EducationItem {
  degree: string;
  cgpa: string;
  institution: string;
  expected?: string;
}

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    cgpa: "7.8",
    institution: "Krupanidhi College of Commerce & Management",
    expected: "2027",
  },
];

export const hackathon = {
  title: "DECIPHER-X 2026 Hackathon (Security Track)",
  description:
    "Participated in DECIPHER-X 2026, a national-level 24-hour hackathon organized by St. Francis College, Bengaluru, in the Security Track.",
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
  stat: "150+",
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
  { label: "Full Stack E-Commerce Application", icon: "ShoppingCart" },
  { label: "JWT + Security + Payments", icon: "Lock" },
  { label: "Cloud Deployment", icon: "Cloud" },
  { label: "MediPharm AI + OCR Platform", icon: "BrainCircuit" },
  { label: "150+ LeetCode Problems", icon: "Code2" },
  { label: "DECIPHER-X 2026 Hackathon (Security Track)", icon: "ShieldCheck" },
];
