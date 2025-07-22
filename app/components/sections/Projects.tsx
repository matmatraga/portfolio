import { Github, ExternalLink, Settings } from "lucide-react";
import { projects } from "@/lib/data";

import {
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
} from "react-icons/si";

interface ProjectsProps {
  darkMode: boolean;
}

const techIconMap: { [key: string]: JSX.Element } = {
  // Frontend
  "React.js": <SiReact className="w-5 h-5 text-blue-500" />,
  React: <SiReact className="w-5 h-5 text-blue-500" />,

  // Backend
  "Node.js": <SiNodedotjs className="w-5 h-5 text-green-600" />,
  "Express.js": <SiExpress className="w-5 h-5 text-gray-800" />,
  Express: <SiExpress className="w-5 h-5 text-gray-800" />,

  // Databases
  MongoDB: <SiMongodb className="w-5 h-5 text-green-600" />,

  // Tools & Others
  "Socket.io": <span className="w-5 h-5 inline-block">🔌</span>,
  Twilio: <span className="w-5 h-5 inline-block">📞</span>,

  default: <Settings className="w-5 h-5 text-gray-500" />,
};

export default function Projects({ darkMode }: ProjectsProps) {
  const getTechIcon = (tech: string) =>
    techIconMap[tech] || techIconMap.default;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-gray-800/50 border border-gray-700"
                  : "bg-white/50 border border-gray-200"
              } backdrop-blur-sm rounded-xl overflow-hidden`}
            >
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{project.image}</div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p
                  className={`mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((tech, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 px-3 py-2 text-sm rounded-full transition-all duration-200 hover:scale-105 ${
                        darkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      title={tech}
                    >
                      {getTechIcon(tech)}
                      <span className="font-medium">{tech}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                    }`}
                  >
                    <Github size={16} />
                    Code
                  </button>
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                      darkMode
                        ? "bg-gray-600 hover:bg-gray-500 text-white"
                        : "bg-gray-300 hover:bg-gray-400 text-gray-900"
                    }`}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
