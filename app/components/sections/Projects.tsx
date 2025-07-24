import { Github, ExternalLink, Settings } from "lucide-react";
import { projects } from "@/lib/data";

import { SiReact, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";

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
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group cursor-pointer transition-all duration-300 hover:scale-105 relative ${
                darkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              } rounded-xl overflow-hidden flex flex-col`}
              style={{ minHeight: "320px" }}
            >
              <div
                className={`flex items-center justify-center h-24 ${
                  darkMode ? "bg-gray-900" : "bg-gray-100"
                }`}
              >
                <div className="text-6xl">{project.image}</div>
              </div>

              <div className="flex flex-col flex-grow p-4">
                <h3
                  className={`font-semibold mb-2 text-center text-md ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                  style={{ minHeight: "2.5rem" }}
                >
                  {project.title}
                </h3>

                <p
                  className={`flex-grow text-sm mb-4 text-center ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                  style={{ minHeight: "4.5rem" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {project.tech.map((tech, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-1.5 px-2 py-1 text-xs rounded-full transition-all duration-200 hover:scale-105 ${
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

                <div className="flex justify-center gap-2">
                  <button
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs transition-all duration-200 hover:scale-105 ${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                    }`}
                  >
                    <Github size={14} />
                    Code
                  </button>
                  <button
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs transition-all duration-200 hover:scale-105 ${
                      darkMode
                        ? "bg-gray-600 hover:bg-gray-500 text-white"
                        : "bg-gray-300 hover:bg-gray-400 text-gray-900"
                    }`}
                  >
                    <ExternalLink size={14} />
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
