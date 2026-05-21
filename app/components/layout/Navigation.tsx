"use client";

import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { navSections } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";
import { useTheme } from "../providers/ThemeProvider";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-md"
      >
        Skip to main content
      </a>

      <nav
        className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-md border-b border-surface-border"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
              className="text-xl font-bold text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              aria-label="Scroll to top"
            >
              MR
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navSections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  aria-current={activeSection === id ? "page" : undefined}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    activeSection === id
                      ? "text-accent font-medium bg-accent/10"
                      : "text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))]"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="p-2 rounded-full border border-surface-border hover:bg-surface-elevated transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {theme === "dark" ? (
                  <Sun size={18} className="text-accent" />
                ) : (
                  <Moon size={18} />
                )}
              </button>
              <Button
                className="bg-accent hover:bg-accent-muted text-accent-foreground text-sm h-9 px-4"
                onClick={() => handleNavClick("contact")}
              >
                Get in touch
              </Button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-md border border-surface-border"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md border border-surface-border"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-surface-border pt-3 flex flex-col gap-1">
              {navSections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  aria-current={activeSection === id ? "page" : undefined}
                  className={cn(
                    "text-left px-3 py-2 rounded-md text-sm",
                    activeSection === id
                      ? "text-accent font-medium bg-accent/10"
                      : "text-[rgb(var(--muted))]"
                  )}
                >
                  {label}
                </button>
              ))}
              <Button
                className="mt-2 bg-accent hover:bg-accent-muted text-accent-foreground w-full"
                onClick={() => handleNavClick("contact")}
              >
                Get in touch
              </Button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
