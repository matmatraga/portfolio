import {
  ShoppingCart,
  Clipboard,
  Satellite,
  Cloud,
  Code2,
  Plug,
  Radio,
  Wrench,
} from "lucide-react";
import React from "react";

export interface Project {
  title: string;
  description: string;
  impact?: string;
  highlights?: string[];
  tech: string[];
  image: React.ReactNode;
  github?: string;
  demo?: string;
  status?: "shipped" | "ongoing" | "oss";
  featured?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  deliverables: string[];
  icon: React.ReactNode;
}

/** Production stack at WelcomeWare — shown in Skills only (Experience links here) */
export const currentWorkStack = {
  company: "WelcomeWare",
  role: "Software Engineer",
  groups: [
    { category: "Backend", skills: ["Java", "Hibernate"] },
    { category: "Frontend & UI", skills: ["Vue", "JSF", "PrimeFaces", "JavaScript"] },
    { category: "Database", skills: ["MySQL"] },
    { category: "Platform", skills: ["Janus"] },
  ],
} as const;

/** Compact list for Skills — project proof lives on Work cards */
export const projectSkillsCompact = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "TypeScript",
  "Tailwind CSS",
  "Socket.io",
  "WebRTC",
  "Git",
  "Vercel",
] as const;

export const experience: ExperienceItem[] = [
  {
    company: "WelcomeWare",
    role: "Software Engineer",
    period: "Present",
    description:
      "Enterprise web applications with Java on the server, Vue and JSF/PrimeFaces on the UI, and MySQL-backed data layers.",
    highlights: [
      "Ship and maintain features in a Java + Hibernate production codebase",
      "Develop UI with Vue alongside legacy JSF and PrimeFaces components",
      "Work with MySQL-backed data layers and platform integrations including Janus",
      "Collaborate in code reviews and production release workflows",
    ],
    current: true,
  },
  {
    company: "Zuitt Coding Bootcamp",
    role: "Junior IT Instructor",
    period: "– November 2025",
    description:
      "Taught full-stack web development and mentored bootcamp students through hands-on MERN projects.",
    highlights: [
      "Taught APIs, auth, and MERN architecture in live cohort sessions",
      "Guided students through project builds, debugging, and code reviews",
      "Delivered clear written and verbal explanations for non-technical learners",
    ],
  },
];

export const services: ServiceItem[] = [
  {
    title: "Full-stack web apps",
    description:
      "End-to-end MERN applications—dashboards, auth, admin panels, and user flows.",
    deliverables: [
      "React frontends with responsive UI",
      "Node/Express APIs and data models",
      "Deployment-ready builds (e.g. Vercel)",
    ],
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: "APIs & integrations",
    description:
      "REST APIs and third-party integrations tailored to your product.",
    deliverables: [
      "Webhook handlers and service wiring",
      "Google and similar third-party SDK integrations",
      "Documentation for handoff to your team",
    ],
    icon: <Plug className="w-6 h-6" />,
  },
  {
    title: "Real-time features",
    description:
      "Live chat, WebRTC video/voice calls, and event-driven UX with Socket.io.",
    deliverables: [
      "Socket.io rooms and messaging patterns",
      "WebRTC peer connections for in-app calls",
      "Production-minded error handling",
    ],
    icon: <Radio className="w-6 h-6" />,
  },
  {
    title: "Enhancements & fixes",
    description:
      "Part-time help on an existing codebase—bugs, features, or refactors.",
    deliverables: [
      "Scoped tickets with clear estimates",
      "Async updates and readable PRs",
      "Stack familiarity: React, Node, MongoDB",
    ],
    icon: <Wrench className="w-6 h-6" />,
  },
];

export const projects: Project[] = [
  {
    title: "Communication Channel App",
    description:
      "Full-stack messenger with real-time chat, WebRTC audio/video calls, file attachments, and an email demo.",
    impact: "In-app chat, calls, and multi-channel comms in one app",
    highlights: [
      "Socket.io for live chat, presence, and call signaling",
      "Custom WebRTC (simple-peer) for in-browser video and voice",
      "JWT auth on REST and WebSocket; JWT-protected file attachments",
    ],
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "WebRTC",
    ],
    image: <Satellite size={40} className="mx-auto" />,
    github: "https://github.com/matmatraga/comm-channel-app",
    demo: "https://comm-channel-app.vercel.app/",
    status: "shipped",
    featured: true,
  },
  {
    title: "E-Commerce Platform (ASTER)",
    description:
      "Full MERN e-commerce app with storefront, admin dashboard, and Philippine payment options.",
    impact: "Storefront, cart, PayMongo checkout, and admin RBAC",
    highlights: [
      "PayMongo hosted checkout with HMAC-verified webhooks",
      "Cross-origin httpOnly JWT cookies (Vercel + Render)",
      "Admin product CRUD, orders, and role-based access",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: <ShoppingCart size={40} className="mx-auto" />,
    github: "https://github.com/matmatraga/ecommerce-app",
    demo: "https://aster-olive.vercel.app/login",
    status: "shipped",
    featured: true,
  },
  {
    title: "GDrive Transfer Ownership Script",
    description:
      "Node.js utility to transfer Google Drive file ownership across accounts.",
    impact: "Automation for bulk ownership changes",
    highlights: [
      "Google Drive API integration",
      "CLI-oriented workflow for ops tasks",
    ],
    tech: ["Google API", "Node.js"],
    image: <Cloud size={40} className="mx-auto" />,
    github: "https://github.com/matmatraga/gdrive-transfer-ownership",
    status: "oss",
  },
  {
    title: "Learning Management System",
    description:
      "Collaborative MERN e-learning platform with roles, courses, and quizzes.",
    impact: "Team project — LMS core flows (in progress)",
    highlights: [
      "Role-based access for instructors and students",
      "Course and quiz modules",
      "Shared MERN codebase with cohort teammates",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: <Clipboard size={40} className="mx-auto" />,
    github: "https://github.com/AndreiAmorado/LMSproj",
    status: "ongoing",
  },
];
