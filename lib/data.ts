export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface TechStack {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A MERN stack-based e-commerce application developed during my bootcamp. It features an admin dashboard for managing products with full CRUD operations, and a user dashboard for browsing, adding items to cart, and checking out orders. The platform implements secure authentication and provides a responsive user experience.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Bootstrap"],
    image: "🛒"
  },
  {
    title: "Learning Management System (Ongoing)",
    description: "A collaborative full-stack MERN application developed by a team of three to simulate a real-world e-learning platform. It supports role-based access (Admin, Instructor, Student), course creation, enrollment, lesson tracking, and quiz functionalities. Built with React, Node.js, Express, MongoDB, and features JWT auth, Google OAuth, dashboards, and responsive UI using Tailwind. Deployed on Vercel and Render with MongoDB Atlas.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: "📋"
  },
  {
    title: "Communication Channel App",
    description: "A solo-developed full-stack web application that unifies multi-channel communication in one platform. It allows users to send and receive emails (via Gmail), SMS messages, and voice calls using Twilio, as well as real-time chat using Socket.IO. Built with the MERN stack, the app supports file attachments, message logging, and a responsive UI. Designed with modular, scalable architecture and deployed using modern cloud services.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "Twilio", "Google API", "Multer"],
    image: "📡"
  }
];

export const experience: Experience[] = [
  {
    title: "Jr IT Instructor",
    company: "Zuitt Inc.",
    period: "August 2023 - Present",
    description: "Conduct full-stack development training both online and in-person. Create engaging, curriculum-aligned lessons, track student progress, and collaborate with peers to develop and refine learning materials while actively engaging in professional development."
  },
  {
    title: "Product Manager",
    company: "Trends Academy",
    period: "August-December 2024",
    description: "Manage IT learning product lifecycles, oversee vendor relations, and drive pricing and marketing strategies through data-driven research. Align internal teams and external partners to meet business goals and ensure successful product delivery."
  }
];