import { Code, Database, Globe } from "lucide-react";

interface TechStackProps {
  darkMode: boolean;
}

// Tech stack to Devicon mapping with corrected names
const techIconMap: { [key: string]: string } = {
  // Frontend
  React: "devicon-react-original colored",
  "Next.js": "devicon-nextjs-original-wordmark", // More reliable than original
  TypeScript: "devicon-typescript-plain colored",
  "Tailwind CSS": "devicon-tailwindcss-plain colored",
  "Vue.js": "devicon-vuejs-plain colored",
  Bootstrap: "devicon-bootstrap-plain colored",

  // Backend
  "Node.js": "devicon-nodejs-plain colored",
  Express: "devicon-express-original-wordmark", // use wordmark for visibility
  MySQL: "devicon-mysql-plain colored",
  MongoDB: "devicon-mongodb-plain colored",
  PHP: "devicon-php-plain colored",
  Laravel: "devicon-laravel-plain colored",
  "C#": "devicon-csharp-plain colored",
  "ASP.NET": "⚙️", // No official icon for ASP.NET, fallback emoji or .NET

  // Tools
  Git: "devicon-git-plain colored",
  Docker: "devicon-docker-plain colored",
  AWS: "devicon-amazonwebservices-original colored",
  Vercel: "▲", // No devicon — using triangle symbol is good
  Figma: "devicon-figma-plain colored",
  Trello: "devicon-trello-plain colored",

  // Default fallback
  default: "⚙️",
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

  const getTechIcon = (tech: string) => {
    const iconClass = techIconMap[tech] || techIconMap["default"];
    // Check if it's an emoji/symbol fallback
    if (!iconClass.includes("devicon-")) {
      return iconClass; // Return emoji/symbol directly
    }
    return iconClass;
  };

  const renderTechIcon = (tech: string) => {
    const icon = getTechIcon(tech);
    if (!icon.includes("devicon-")) {
      // It's an emoji/symbol fallback
      return <span className="text-2xl">{icon}</span>;
    }
    return <i className={`${icon} text-2xl`}></i>;
  };

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
