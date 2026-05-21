import { siteConfig } from "@/lib/constants";
import SectionHeader from "../ui/SectionHeader";
import { Card } from "../ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="About"
          title="How I work with clients"
          subtitle="How I collaborate on contract and part-time engagements."
        />

        <Card className="p-6 md:p-10 !scale-100">
          <div className="space-y-4 text-[rgb(var(--muted))] leading-relaxed">
            <p>
              I&apos;m a software engineer at{" "}
              <strong className="text-[rgb(var(--foreground))]">
                {siteConfig.company}
              </strong>
              , building production web applications. I previously taught as a
              Junior IT Instructor at Zuitt Coding Bootcamp (through November
              2025)—so I communicate clearly, document well, and scope work
              realistically.
            </p>
            <p>
              For freelance and contract work, I prefer{" "}
              <strong className="text-[rgb(var(--foreground))]">
                defined milestones
              </strong>{" "}
              with async updates (written summaries, demos, or Loom when
              helpful). I&apos;m based in {siteConfig.location} (
              {siteConfig.timezone}) and collaborate well with distributed
              teams.
            </p>
            <p>
              Outside client work, I explore new tools, contribute to open
              source, and keep shipping side projects that stay close to what
              clients need—MERN apps, APIs, and real-time features.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
