export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "Code2",
    skills: ["Java", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "JWT",
      "Hibernate",
      "JPA",
      "REST APIs",
      "Maven",
    ],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: ["React", "JavaScript", "TypeScript", "Bootstrap", "Tailwind CSS", "Axios"],
  },
  {
    title: "Database",
    icon: "Database",
    skills: ["PostgreSQL", "MySQL", "Firebase Firestore"],
  },
  {
    title: "AI",
    icon: "BrainCircuit",
    skills: ["Google Gemini", "OCR", "Tesseract OCR"],
  },
  {
    title: "Payments",
    icon: "CreditCard",
    skills: ["Razorpay"],
  },
  {
    title: "DevOps / Deployment",
    icon: "Cloud",
    skills: ["Docker", "Kubernetes", "Render", "Vercel", "GitHub Pages"],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Postman", "Swagger", "VS Code", "IntelliJ IDEA"],
  },
];

export const heroTechOrbs = [
  { label: "Java", icon: "Coffee", color: "from-orange-500/30 to-red-500/30" },
  { label: "Spring Boot", icon: "Leaf", color: "from-green-500/30 to-emerald-500/30" },
  { label: "React", icon: "Atom", color: "from-cyan-500/30 to-blue-500/30" },
  { label: "Database", icon: "Database", color: "from-blue-500/30 to-indigo-500/30" },
  { label: "REST API", icon: "Network", color: "from-purple-500/30 to-fuchsia-500/30" },
  { label: "AI", icon: "BrainCircuit", color: "from-cyan-400/30 to-teal-500/30" },
  { label: "Cloud", icon: "Cloud", color: "from-sky-500/30 to-blue-500/30" },
];
