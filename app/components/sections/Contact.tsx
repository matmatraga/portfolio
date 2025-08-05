import { Github, Linkedin, Mail } from "lucide-react";

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In Touch
        </h2>

        <div
          className={`p-8 rounded-2xl ${
            darkMode
              ? "bg-gray-800/50 border border-gray-700"
              : "bg-white/50 border border-gray-200"
          } backdrop-blur-sm`}
        >
          <div className="text-center mb-8">
            <p
              className={`text-md ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="mailto:matthewmondoy.raga@gmail.com"
              className={`w-full md:w-1/3 flex items-center gap-3 p-4 rounded-lg transition-all duration-200 hover:scale-105 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <Mail size={24} />
              <div className="overflow-hidden min-w-0">
                <p className="font-medium">Email</p>
                <p
                  className={`text-sm truncate ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  matthewmondoy.raga@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/matthewraga"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full md:w-1/3 flex items-center gap-3 p-4 rounded-lg transition-all duration-200 hover:scale-105 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <Linkedin size={24} />
              <div className="overflow-hidden min-w-0">
                <p className="font-medium">LinkedIn</p>
                <p
                  className={`text-sm truncate ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  linkedin.com/in/matthewraga
                </p>
              </div>
            </a>

            <a
              href="https://github.com/matmatraga"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full md:w-1/3 flex items-center gap-3 p-4 rounded-lg transition-all duration-200 hover:scale-105 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <Github size={24} />
              <div className="overflow-hidden min-w-0">
                <p className="font-medium">GitHub</p>
                <p
                  className={`text-sm truncate ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  github.com/matthewraga
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
