export interface ProjectFeature {
  text: string;
}

export interface ProjectArchitecture {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  badge: string;
  category: string;
  filters: string[];
  status: "Completed" | "In Development";
  liveDemo?: string;
  github?: string;
  description: string;
  problem?: string;
  solution?: string;
  tech: string[];
  features: string[];
  architecture?: ProjectArchitecture[];
  challenges?: string;
  whatILearned?: string;
  workflow?: string[];
  disclaimer?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "E-commerce",
    title: "Full Stack E-Commerce Platform",
    badge: "Featured Project",
    category: "Full Stack / E-Commerce / Payments",
    filters: ["Full Stack", "Java", "Web Applications"],
    status: "Completed",
    liveDemo: "https://e-commerce-zeta-sepia-33.vercel.app/",
    github: "https://github.com/Akashr241/E-commerce",
    description:
      "Built and deployed a full-stack pharmacy e-commerce platform using Spring Boot and React, implementing authentication, authorization, product management, shopping cart, checkout, order management and online payment workflows.",
    problem:
      "Pharmacies need a complete online platform for managing products, processing orders and accepting secure online payments.",
    solution:
      "A full-stack e-commerce system with Spring Boot REST APIs, Spring Security JWT authentication, role-based authorization, product management, cart and order workflows, and Razorpay payment integration.",
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "Hibernate",
      "JPA",
      "REST APIs",
      "Razorpay",
      "Docker",
      "Render",
      "Vercel",
      "Swagger",
    ],
    features: [
      "JWT authentication",
      "Role-based authorization",
      "Admin and User workflows",
      "Product management",
      "Product CRUD operations",
      "Shopping cart",
      "Checkout",
      "Order management",
      "Order details",
      "Razorpay payment integration",
      "Payment verification",
      "REST APIs",
      "PostgreSQL database",
      "Swagger API documentation",
      "Responsive React frontend",
      "Backend deployment using Render",
      "Frontend deployment using Vercel",
    ],
    architecture: [
      { label: "Frontend", value: "React" },
      { label: "Backend", value: "Spring Boot REST APIs" },
      { label: "Security", value: "Spring Security + JWT" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Payment", value: "Razorpay" },
      { label: "Deployment", value: "Vercel + Render" },
    ],
    challenges:
      "Implementing secure JWT-based authentication and role-based authorization while integrating Razorpay payment verification across the full stack.",
    whatILearned:
      "Building production-grade full-stack applications with secure authentication, payment integration, REST API design and cloud deployment.",
    featured: true,
  },
  {
    id: "mediai",
    title: "MediAI — AI Pharmacy & Prescription Assistant",
    badge: "In Development",
    category: "AI / Full Stack / OCR",
    filters: ["Full Stack", "Java", "AI"],
    status: "In Development",
    description:
      "MediAI is an AI-powered pharmacy assistant being developed as an extension of the MediPharm ecosystem. It combines AI chat, prescription OCR and medicine information to help users interact with pharmacy services and understand prescription-related information.",
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "Google Gemini",
      "Tesseract OCR",
      "REST APIs",
      "PostgreSQL",
    ],
    features: [
      "AI Pharmacy Chatbot",
      "Prescription Image Upload",
      "Prescription OCR",
      "Image Processing",
      "Prescription Text Extraction",
      "Medicine Identification",
      "Medicine Database Lookup",
      "Medicine Information",
      "Medicine Composition Information",
      "Medicine Price Information",
      "Prescription Analysis",
      "AI-assisted medicine understanding",
      "Add identified medicines to cart",
      "Responsive React interface",
      "Backend REST APIs",
    ],
    workflow: [
      "Prescription Image",
      "Image Processing",
      "Tesseract OCR",
      "Extracted Text",
      "Prescription Analysis",
      "Medicine Identification",
      "Medicine Database",
      "Medicine Information",
      "Add to Cart",
    ],
    challenges:
      "Improving OCR accuracy, prescription text extraction and medicine identification for real-world handwritten prescriptions.",
    whatILearned:
      "Integrating AI models (Gemini), OCR (Tesseract) and full-stack architecture into a cohesive pharmacy assistant application.",
    disclaimer:
      "MediAI is a software project for educational and application-development purposes and should not be treated as a medical diagnosis or substitute for professional medical advice.",
  },
  {
    id: "gym-management",
    title: "GYM Management System",
    badge: "Unified Mentor Internship Project",
    category: "Full Stack / Management System",
    filters: ["Full Stack", "Internship", "Web Applications"],
    status: "Completed",
    liveDemo: "https://akashr241.github.io/Gym-app-using-typescrpit/",
    description:
      "Built a digital operations platform for gyms to replace paper-based receipts and manual notices with a role-based member management system.",
    problem:
      "Traditional gym operations can rely heavily on paper receipts, manual notices and repetitive administrative work.",
    solution:
      "A digital platform that centralizes membership management, billing, diet plans, notifications and member access.",
    tech: ["HTML5", "Bootstrap 5", "TypeScript", "JavaScript", "Firebase Firestore"],
    features: [
      "Role-based Admin / Member access",
      "Secure authentication",
      "Digital billing",
      "Downloadable payment receipts",
      "Membership package management",
      "Fee package assignment",
      "Diet plan assignment",
      "Monthly notifications",
      "Member self-service portal",
      "Receipt viewing",
      "Supplement store management",
      "Firebase Firestore data persistence",
    ],
    challenges:
      "Designing role-based access control and real-time data persistence with Firebase Firestore for a management system.",
    whatILearned:
      "Full-stack web development with TypeScript, Firebase Firestore and role-based system design for real-world operations management.",
  },
  {
    id: "super-mall",
    title: "Super Mall Management System",
    badge: "Unified Mentor Internship Project",
    category: "Web Application / E-Commerce Management",
    filters: ["Internship", "Web Applications"],
    status: "Completed",
    liveDemo: "https://akashr241.github.io/super-mall/",
    description:
      "Designed and developed an e-commerce management portal that enables local shops to manage products and promotional offers while allowing users to browse and compare products across vendors.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase Firestore"],
    features: [
      "Admin CRUD for shops",
      "Category management",
      "Floor management",
      "Promotional offer management",
      "Role-based Admin / User login",
      "Session management",
      "Product filtering",
      "Product comparison",
      "Firebase Firestore real-time data persistence",
    ],
    challenges:
      "Designing an ER-diagram-driven data model around Shop, Product, Offer and Category relationships.",
    whatILearned:
      "Data modeling, real-time Firestore integration and building a multi-entity e-commerce management portal.",
  },
];

export const projectFilters = [
  "All",
  "Full Stack",
  "Java",
  "AI",
  "Internship",
  "Web Applications",
];

export const backendEngineering = {
  title: "Java & Spring Boot Engineering",
  description:
    "Hands-on backend development focused on building REST APIs, authentication, authorization, CRUD workflows, DTO-based communication, database integration and clean service architecture.",
  label: "Backend Engineering & Development Work",
  tech: [
    "Spring Boot",
    "REST APIs",
    "Spring Security",
    "JWT",
    "JPA / Hibernate",
    "PostgreSQL",
    "MySQL",
    "DTOs",
    "Validation",
    "Exception Handling",
    "Maven",
    "Swagger",
    "Postman",
  ],
};
