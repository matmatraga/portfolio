"use client";

import { useState, useEffect } from "react";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";
import { ThemeProvider } from "./providers/ThemeProvider";
import { navSections } from "@/lib/constants";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = navSections.map((s) => s.id);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
