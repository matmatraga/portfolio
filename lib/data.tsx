import {
  ShoppingCart,
  Clipboard,
  Satellite,
  Cloud,
  Database,
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
  "Twilio",
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
      "Build and maintain features in a Java + Hibernate production codebase",
      "Develop UI with Vue alongside JSF and PrimeFaces components",
      "Work with MySQL and platform integrations including Janus",
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
      "Explained APIs, auth, and MERN architecture in live sessions",
      "Guided students through projects, debugging, and code reviews",
      "Strengthened communication skills useful for client work",
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
      "Google, Twilio, and similar SDK integrations",
      "Documentation for handoff to your team",
    ],
    icon: <Plug className="w-6 h-6" />,
  },
  {
    title: "Real-time features",
    description:
      "Live updates, chat, and event-driven UX with Socket.io or similar.",
    deliverables: [
      "Socket.io rooms and messaging patterns",
      "Client state synced with server events",
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
    title: "E-Commerce Platform",
    description:
      "Full MERN e-commerce app with separate admin and customer experiences.",
    impact: "Storefront, cart, and admin dashboard with auth",
    highlights: [
      "Built product catalog, cart, and role-based admin",
      "JWT-secured API and React client",
      "Deployed live demo for review",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: <ShoppingCart size={40} className="mx-auto" />,
    github: "https://github.com/matmatraga/ecommerce-app",
    demo: "https://fullstack-eight-blue.vercel.app/",
    status: "shipped",
    featured: true,
  },
  {
    title: "Communication Channel App",
    description:
      "Unified comms hub integrating email, SMS, calls, and real-time chat.",
    impact: "Multi-channel customer communication in one app",
    highlights: [
      "Socket.io for live chat",
      "Twilio for SMS and voice flows",
      "Express API with React dashboard",
    ],
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "Twilio",
    ],
    image: <Satellite size={40} className="mx-auto" />,
    github: "https://github.com/matmatraga/comm-channel-app",
    demo: "https://comm-channel-app.vercel.app/",
    status: "shipped",
    featured: true,
  },
  {
    title: "Learning Management System",
    description:
      "MERN e-learning platform with roles, courses, and quizzes.",
    impact: "Team project — LMS core flows",
    highlights: [
      "Role-based access for instructors and students",
      "Course and quiz modules",
      "Collaborative MERN codebase",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: <Clipboard size={40} className="mx-auto" />,
    github: "https://github.com/AndreiAmorado/LMSproj",
    status: "ongoing",
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
    title: "In-memory Store (Redis-like)",
    description: "Lightweight in-memory key-value store inspired by Redis.",
    impact: "Exploration of data-structure storage patterns",
    highlights: [
      "Custom store semantics in Node.js",
      "Useful for learning caching concepts",
    ],
    tech: ["Node.js"],
    image: <Database size={40} className="mx-auto" />,
    github: "https://github.com/matmatraga/redis-memstore",
    status: "oss",
  },
];
