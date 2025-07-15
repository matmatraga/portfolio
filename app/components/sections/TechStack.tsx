import { Code, Database, Globe } from 'lucide-react';

interface TechStackProps {
  darkMode: boolean;
}

export default function TechStack({ darkMode }: TechStackProps) {
  const techStacks = [
    {
      category: "Frontend",
      icon: <Globe size={32} />,
      skills: [
        "React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Bootstrap"
      ],
    },
    {
      category: "Backend",
      icon: <Database size={32} />,
      skills: ["Node.js", "Express", "MySQL", "MongoDB", "PHP", "Laravel", "C#", "ASP.NET"],
    },
    {
      category: "Tools",
      icon: <Code size={32} />,
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Trello"],
    },
  ];

  return (
    <section id="stack" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Tech Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'bg-gray-800/50 border border-gray-700'
                  : 'bg-white/50 border border-gray-200'
              } backdrop-blur-sm`}
            >
              <div
                className={`inline-flex p-3 rounded-full mb-4 ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}
              >
                {stack.icon}
              </div>
              <h3 className="text-lg font-bold mb-4">{stack.category}</h3>
              <div className="space-y-2">
                {stack.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
