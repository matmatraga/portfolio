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
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "🛒"
  },
  {
    title: "Learning Management System",
    description: "Collaborative project management tool with real-time updates, team chat, and progress tracking.",
    tech: ["Next.js", "PostgreSQL", "Socket.io", "Redis"],
    image: "📋"
  },
  {
    title: "Communication Channel App",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and personalized alerts.",
    tech: ["React", "Express", "Node", "Socket.io", "Twillio", "Google API"],
    image: "🌤️"
  }
];

export const experience: Experience[] = [
  {
    title: "Jr IT Instructor",
    company: "Zuitt Inc.",
    period: "August 2023 - Present",
    description: "Led development of scalable web applications using React, Node.js, and cloud technologies. Managed a team of 4 developers and implemented CI/CD pipelines."
  },
  {
    title: "Product Manager",
    company: "Trends Academy",
    period: "August-December 2024",
    description: "Developed responsive user interfaces and improved application performance by 40%. Collaborated with design team to implement pixel-perfect designs."
  }
];