'use client';

import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

interface NavigationProps {
  activeSection: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navigation({ activeSection, darkMode, toggleDarkMode }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false); // close menu on click
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        darkMode
          ? 'bg-black/80 backdrop-blur-md border-b border-gray-800'
          : 'bg-white/80 backdrop-blur-md border-b border-gray-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
            MR
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex space-x-8 items-center">
            {['about', 'experience', 'projects', 'stack', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`capitalize transition-all duration-200 hover:text-gray-400 ${
                  activeSection === section
                    ? 'text-gray-400 font-medium'
                    : darkMode
                    ? 'text-gray-300'
                    : 'text-gray-600'
                }`}
              >
                {section === 'stack' ? 'Tech Stack' : section.replace('-', ' ')}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-200 ${
                darkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-all duration-200 ${
                darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
            <div
                className={`md:hidden flex flex-col space-y-4 px-4 pt-6 pb-6 rounded-b-lg transition-all duration-300 ${
                darkMode ? 'bg-black border-t border-gray-800' : 'bg-white border-t border-gray-200'
                }`}
            >
            {['about', 'experience', 'projects', 'stack', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`text-left capitalize transition-all duration-200 ${
                  activeSection === section
                    ? 'text-gray-400 font-medium'
                    : darkMode
                    ? 'text-gray-300'
                    : 'text-gray-700'
                }`}
              >
                {section === 'stack' ? 'Tech Stack' : section.replace('-', ' ')}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`w-fit p-2 rounded-full transition-all duration-200 ${
                darkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
