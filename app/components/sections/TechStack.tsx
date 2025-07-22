import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVuedotjs,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPhp,
  SiLaravel,
  SiDotnet,
  SiGit,
  SiDocker,
  SiAmazon,
  SiFigma,
  SiTrello,
} from "react-icons/si";

import { Code, Database, Globe, Settings } from "lucide-react";
import { VscSymbolNamespace } from "react-icons/vsc"; // Optional: for ASP.NET

interface TechStackProps {
  darkMode: boolean;
}

// Tech stack to Devicon mapping with corrected names
const techIconMap: { [key: string]: JSX.Element } = {
  // Frontend
  React: <SiReact className="text-blue-500 w-6 h-6" />,
  "Next.js": <SiNextdotjs className="text-black w-6 h-6" />,
  TypeScript: <SiTypescript className="text-blue-600 w-6 h-6" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500 w-6 h-6" />,
  "Vue.js": <SiVuedotjs className="text-green-500 w-6 h-6" />,
  Bootstrap: <SiBootstrap className="text-purple-600 w-6 h-6" />,

  // Backend
  "Node.js": <SiNodedotjs className="text-green-600 w-6 h-6" />,
  Express: <SiExpress className="text-gray-800 w-6 h-6" />,
  MySQL: <SiMysql className="text-blue-600 w-6 h-6" />,
  MongoDB: <SiMongodb className="text-green-600 w-6 h-6" />,
  PHP: <SiPhp className="text-indigo-500 w-6 h-6" />,
  Laravel: <SiLaravel className="text-red-600 w-6 h-6" />,
  "C#": <SiDotnet className="text-purple-700 w-6 h-6" />,
  "ASP.NET": <VscSymbolNamespace className="text-blue-800 w-6 h-6" />,

  // Tools
  Git: <SiGit className="text-orange-500 w-6 h-6" />,
  Docker: <SiDocker className="text-blue-500 w-6 h-6" />,
  AWS: <SiAmazon className="text-yellow-500 w-6 h-6" />,
  Vercel: <span className="text-2xl">▲</span>, // emoji fallback
  Figma: <SiFigma className="text-pink-500 w-6 h-6" />,
  Trello: <SiTrello className="text-blue-600 w-6 h-6" />,

  // Fallback
  default: <Settings className="w-6 h-6" />,
};

export default function TechStack({ darkMode }: TechStackProps) {
  const techStacks = [
    {
      category: "Frontend",
      icon: <Globe size={32} />,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vue.js",
        "Bootstrap",
      ],
    },
    {
      category: "Backend",
      icon: <Database size={32} />,
      skills: [
        "Node.js",
        "Express",
        "MySQL",
        "MongoDB",
        "PHP",
        "Laravel",
        "C#",
        "ASP.NET",
      ],
    },
    {
      category: "Tools",
      icon: <Code size={32} />,
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Trello"],
    },
  ];

  const getTechIcon = (tech: string) =>
    techIconMap[tech] || techIconMap["default"];

  const renderTechIcon = (tech: string) => getTechIcon(tech);

  return (
    <>
      {/* Add Devicon CDN link to head */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <section id="stack" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Tech Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStacks.map((stack, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-gray-800/50 border border-gray-700"
                    : "bg-white/50 border border-gray-200"
                } backdrop-blur-sm`}
              >
                <div
                  className={`inline-flex p-3 rounded-full mb-4 ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  {stack.icon}
                </div>
                <h3 className="text-lg font-bold mb-4">{stack.category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {stack.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-200 hover:scale-105 ${
                        darkMode
                          ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                      title={skill}
                    >
                      {renderTechIcon(skill)}
                      <span className="text-xs font-medium text-center leading-tight">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
