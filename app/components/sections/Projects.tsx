import { Github, ExternalLink, Settings } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeader from "../ui/SectionHeader";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";

const techIconMap: Record<string, JSX.Element> = {
  "React.js": <SiReact className="w-4 h-4 text-blue-500" />,
  React: <SiReact className="w-4 h-4 text-blue-500" />,
  "Node.js": <SiNodedotjs className="w-4 h-4 text-green-600" />,
  "Express.js": <SiExpress className="w-4 h-4 text-gray-500 dark:text-gray-300" />,
  Express: <SiExpress className="w-4 h-4 text-gray-500 dark:text-gray-300" />,
  MongoDB: <SiMongodb className="w-4 h-4 text-green-600" />,
  default: <Settings className="w-4 h-4 text-gray-500" />,
};

const statusLabels = {
  shipped: "Live demo",
  ongoing: "In progress",
  oss: "Open source",
} as const;

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[0];
  featured?: boolean;
}) {
  const hasDemo = project.demo && project.demo !== "#";
  const status = project.status ? statusLabels[project.status] : null;

  return (
    <article
      className={cn(
        "group flex flex-col rounded-xl border border-surface-border bg-surface overflow-hidden",
        "transition-shadow hover:shadow-card dark:hover:shadow-card-dark hover:border-accent/30",
        featured && "md:col-span-1"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center bg-surface-elevated border-b border-surface-border",
          featured ? "h-32" : "h-24"
        )}
      >
        <div className={cn("text-accent", featured ? "scale-110" : "")}>
          {project.image}
        </div>
      </div>

      <div className="flex flex-col flex-grow p-5 pb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {status && (
            <Badge className="bg-accent/10 text-accent text-xs py-0">
              {status}
            </Badge>
          )}
        </div>

        <h3 className="font-semibold text-lg mb-1">{project.title}</h3>

        {project.impact && (
          <p className="text-sm text-accent/90 mb-2">{project.impact}</p>
        )}

        <p className="text-sm text-[rgb(var(--muted))] flex-grow mb-4">
          {project.description}
        </p>

        {project.highlights && featured && (
          <ul className="space-y-1 mb-4">
            {project.highlights.slice(0, 2).map((h) => (
              <li
                key={h}
                className="text-xs text-[rgb(var(--muted))] flex gap-1.5"
              >
                <span className="text-accent">•</span>
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-surface-elevated border border-surface-border"
              title={tech}
            >
              {techIconMap[tech] || techIconMap.default}
              <span className="font-medium">{tech}</span>
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-auto pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button
                variant="outline"
                className="gap-2 px-4 py-2.5 min-h-[40px] text-sm border-surface-border dark:border-gray-600"
              >
                <Github size={16} />
                Code
              </Button>
            </a>
          )}
          {hasDemo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button className="gap-2 px-4 py-2.5 min-h-[40px] text-sm bg-accent hover:bg-accent-muted text-accent-foreground">
                <ExternalLink size={16} />
                Demo
              </Button>
            </a>
          ) : project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
              title="View README on GitHub"
            >
              <Button
                variant="ghost"
                className="gap-2 px-4 py-2.5 min-h-[40px] text-sm text-[rgb(var(--muted))]"
              >
                <ExternalLink size={16} />
                README
              </Button>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Work"
          title="Selected projects"
          subtitle="Examples you can click through—demos where available, code always."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </div>

        {other.length > 0 && (
          <>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[rgb(var(--muted))] mb-4">
              More work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {other.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
