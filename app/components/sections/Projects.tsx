import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import Head from "next/head";

interface ProjectsProps {
  darkMode: boolean;
}

// Tech stack to Devicon mapping with corrected names
const techIconMap: { [key: string]: string } = {
  // Frontend
  "React.js": "devicon-react-original colored",
  React: "devicon-react-original colored",
  "Next.js": "devicon-nextjs-original-wordmark",
  TypeScript: "devicon-typescript-plain colored",
  "Vue.js": "devicon-vuejs-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  HTML: "devicon-html5-plain colored",
  CSS: "devicon-css3-plain colored",
  "Tailwind CSS": "devicon-tailwindcss-original colored",
  Bootstrap: "devicon-bootstrap-plain colored",

  // Backend
  "Node.js": "devicon-nodejs-plain colored",
  "Express.js": "devicon-express-original-wordmark",
  Express: "devicon-express-original-wordmark",
  PHP: "devicon-php-plain colored",
  Laravel: "devicon-laravel-plain colored",
  "C#": "devicon-csharp-plain colored",
  "ASP.NET": "⚙️", // No Devicon available, fallback
  Python: "devicon-python-plain colored",
  Django: "devicon-django-plain colored",
  Flask: "devicon-flask-original-wordmark",

  // Databases
  MongoDB: "devicon-mongodb-plain colored",
  MySQL: "devicon-mysql-plain colored",
  PostgreSQL: "devicon-postgresql-plain colored",
  Redis: "devicon-redis-plain colored",

  // Tools & Others
  Git: "devicon-git-plain colored",
  Docker: "devicon-docker-plain colored",
  AWS: "devicon-amazonwebservices-original colored",
  Firebase: "devicon-firebase-plain colored",
  Figma: "devicon-figma-plain colored",
  "Socket.io": "devicon-socketio-original",
  JWT: "🔐", // emoji fallback
  Twilio: "📞", // emoji fallback
  "Google API": "🌐", // emoji fallback
  Multer: "devicon-nodejs-plain colored", // fallback

  // Default fallback
  default: "⚙️",
};

export default function Projects({ darkMode }: ProjectsProps) {
  const getTechIcon = (tech: string) => {
    const iconClass = techIconMap[tech] || techIconMap["default"];
    // Check if it's an emoji fallback
    if (!iconClass.includes("devicon-")) {
      return iconClass; // Return emoji directly
    }
    return iconClass;
  };

  const renderTechIcon = (tech: string) => {
    const icon = getTechIcon(tech);
    if (!icon.includes("devicon-")) {
      // It's an emoji fallback
      return <span className="text-lg">{icon}</span>;
    }
    return <i className={`${icon} text-lg`}></i>;
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-gray-800/50 border border-gray-700"
                    : "bg-white/50 border border-gray-200"
                } backdrop-blur-sm rounded-xl overflow-hidden`}
              >
                <div className="p-6">
                  <div className="text-4xl mb-4 text-center">
                    {project.image}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p
                    className={`mb-4 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Updated tech stack with icons */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className={`flex items-center gap-2 px-3 py-2 text-sm rounded-full transition-all duration-200 hover:scale-105 ${
                          darkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-200 text-gray-700"
                        }`}
                        title={tech}
                      >
                        {renderTechIcon(tech)}
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
    </>
  );
}
