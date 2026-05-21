import { experience } from "@/lib/data";
import SectionHeader from "../ui/SectionHeader";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Experience"
          title="Where I work"
          subtitle="Java · Vue · MySQL at WelcomeWare today; prior bootcamp instruction through November 2025."
        />

        <div className="space-y-6 max-w-3xl mx-auto">
          {experience.map((item) => (
            <article
              key={item.company}
              className={cn(
                "relative pl-6 border-l-2 border-accent/40 py-2",
                item.current && "border-accent"
              )}
            >
              <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-accent ring-4 ring-surface" />

              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-semibold text-lg">{item.role}</h3>
                {item.current && (
                  <Badge className="bg-accent/15 text-accent text-xs py-0.5">
                    Current
                  </Badge>
                )}
              </div>

              <p className="text-accent font-medium text-sm mb-1">
                {item.company}
                <span className="text-[rgb(var(--muted))] font-normal">
                  {" "}
                  · {item.period}
                </span>
              </p>

              <p className="text-sm text-[rgb(var(--muted))] mb-3">
                {item.description}
              </p>

              {item.current && (
                <p className="text-xs text-[rgb(var(--muted))] mb-3">
                  Full production stack listed in{" "}
                  <a href="#skills" className="text-accent hover:underline">
                    Skills
                  </a>
                  .
                </p>
              )}

              <ul className="space-y-1.5">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm text-[rgb(var(--muted))] flex gap-2"
                  >
                    <span className="text-accent shrink-0">→</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
