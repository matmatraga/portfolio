"use client";

import { Github, Linkedin, Mail, MapPin, Calendar } from "lucide-react";

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" id="home">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div
            className={`w-48 h-48 mx-auto mt-8 mb-6 rounded-full overflow-hidden ${
              darkMode
                ? "bg-gray-800 border-2 border-gray-700"
                : "bg-gray-200 border-2 border-gray-300"
            }`}
          >
            <img
              src="/avatar.jpg"
              alt="Matthew Raga"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-2">Matthew Raga</h1>

          <p
            className={`text-base md:text-xl mb-4 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Full Stack Developer
          </p>

          <div
            className={`max-w-3xl mx-auto p-6 rounded-2xl text-left ${
              darkMode
                ? "bg-gray-800/50 border border-gray-700 text-gray-300"
                : "bg-white/50 border border-gray-200 text-gray-700"
            } backdrop-blur-sm`}
          >
            <p className="text-md leading-relaxed mb-3">
              I'm a Junior IT Instructor at Zuitt Coding Bootcamp and a
              certified Full Stack Web Developer experienced in building
              responsive web apps using the MERN stack. Passionate about
              technology, I love turning real-world problems into scalable
              digital solutions.
            </p>
            <p className="text-md leading-relaxed">
              Outside of coding, I explore new technologies, contribute to
              open-source, and mentor aspiring devs.
            </p>

            <div className="flex flex-wrap gap-3 mt-5 mb-5">
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <MapPin size={16} />
                <span>Laguna, Philippines</span>
              </div>
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <Calendar size={16} />
                <span>Available for freelance</span>
              </div>
            </div>

            <div className="flex justify-start space-x-4">
              <a
                href="https://github.com/matthewraga"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/matthewraga"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:matthewmondoy.raga@gmail.com"
                className={`p-2.5 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
