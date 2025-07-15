import { Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className={`w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ${
            darkMode ? 'bg-gray-800 border-2 border-gray-700' : 'bg-gray-200 border-2 border-gray-300'
          }`}>
            <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-400">
              JS
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Matthew Raga
          </h1>

          <p className={`text-xl md:text-2xl mb-8 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Full Stack Developer
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/matthewraga"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/matthewraga"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:matthewmondoy.raga@gmail.com"
              className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
