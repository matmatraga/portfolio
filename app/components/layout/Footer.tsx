import { siteConfig, navSections } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-surface-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-[rgb(var(--muted))]">
            © {year} {siteConfig.name}. Built with Next.js & Tailwind.
          </p>

          <nav
            className="flex flex-wrap justify-center gap-4 text-sm"
            aria-label="Footer"
          >
            {navSections.slice(1, 5).map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-[rgb(var(--muted))] hover:text-accent transition-colors"
              >
                {label}
              </button>
            ))}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(var(--muted))] hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(var(--muted))] hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
