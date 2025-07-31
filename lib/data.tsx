import {
  ShoppingCart,
  Clipboard,
  Satellite,
  Cloud,
  Database,
} from "lucide-react";

import React from "react";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: React.ReactNode;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A MERN stack e-commerce app with admin and user dashboards.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: <ShoppingCart size={40} className="mx-auto mb-3" />,
    github: "https://github.com/matmatraga/ecommerce-app",
    demo: "https://fullstack-eight-blue.vercel.app/",
  },
  {
    title: "Learning Management System (Ongoing)",
    description:
      "A MERN-based e-learning platform supporting roles and quizzes.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: <Clipboard size={40} className="mx-auto mb-3" />,
    github: "https://github.com/AndreiAmorado/LMSproj",
    demo: "#",
  },
  {
    title: "Communication Channel App",
    description: "App integrating email, SMS, calls, and real-time chat.",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "Twilio",
    ],
    image: <Satellite size={40} className="mx-auto mb-3" />,
    github: "https://github.com/matmatraga/comm-channel-app",
    demo: "https://comm-channel-app.vercel.app/",
  },
  {
    title: "GDrive Transfer Ownership Script",
    description:
      "A Node.js script for transferring file ownership in Google Drive accounts.",
    tech: ["Google API", "Node.js"],
    image: <Cloud size={40} className="mx-auto mb-3" />,
    github: "https://github.com/matmatraga/gdrive-transfer-ownership",
    demo: "#",
  },
  {
    title: "In-memory Store (Redis-like)",
    description: "Fast key-value store inspired by Redis.",
    tech: ["Node.js", "Redis"],
    image: <Database size={40} className="mx-auto mb-3" />,
    github: "https://github.com/matmatraga/redis-memstore",
    demo: "#",
  },
];
