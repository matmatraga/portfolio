import { experience } from '@/lib/data';

interface ExperienceProps {
  darkMode: boolean;
}

export default function Experience({ darkMode }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Experience</h2>
        
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
              darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-gray-200'
            } backdrop-blur-sm`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                  <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {job.company}
                  </p>
                </div>
                <span className={`text-sm px-3 py-1 rounded-full ${
                  darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                }`}>
                  {job.period}
                </span>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}