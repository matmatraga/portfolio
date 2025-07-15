import { MapPin, Calendar } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
        
        <div className={`p-8 rounded-2xl ${
          darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
        } backdrop-blur-sm`}>
          <p className={`text-lg leading-relaxed mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I'm a Junior IT Instructor at Zuitt Coding Bootcamp and a certified Full Stack Web Developer experienced in building responsive web apps using the MERN stack. Passionate about technology, I love turning real-world problems into scalable digital solutions.
          </p>
          <p className={`text-lg leading-relaxed mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              darkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}>
              <MapPin size={16} />
              <span>Laguna, Philippines</span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              darkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}>
              <Calendar size={16} />
              <span>Available for freelance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}