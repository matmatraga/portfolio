"use client";

import Image from "next/image";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Briefcase } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Button } from "../ui/button";
import { scrollToSection } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8" id="home">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="relative shrink-0">
            <div
              className={cn(
                "w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden",
                "ring-2 ring-accent/50 ring-offset-4 ring-offset-surface",
                "flex items-center justify-center bg-surface-elevated"
              )}
            >
              {!avatarError ? (
                <Image
                  src="/avatar.jpg"
                  alt={siteConfig.name}
                  width={192}
                  height={192}
                  priority
                  className="w-full h-full object-cover"
                  onError={() => setAvatarError(true)}
                />
              ) : (
                <span className="text-4xl font-bold text-accent">MR</span>
              )}
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-medium text-accent mb-2">
              {siteConfig.title} · {siteConfig.company}
            </p>

            <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
              {siteConfig.name}
            </h1>

            <p className="text-lg md:text-xl text-[rgb(var(--muted))] mb-3 max-w-xl mx-auto lg:mx-0">
              Enterprise apps at work (Java, Vue, MySQL). MERN projects and
              contract work on the side.
            </p>
            <p className="text-sm text-[rgb(var(--muted))] mb-6 max-w-xl mx-auto lg:mx-0">
              Open to freelance builds—APIs, dashboards, and full-stack features.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm bg-surface-elevated border border-surface-border text-[rgb(var(--muted))]">
                <MapPin size={16} className="text-accent" />
                {siteConfig.location}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm bg-accent/10 border border-accent/20 text-accent">
                <Briefcase size={16} />
                {siteConfig.availability}
              </span>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <Button
                className="bg-accent hover:bg-accent-muted text-accent-foreground px-6 py-3 min-h-[48px] text-sm font-semibold"
                onClick={() => scrollToSection("contact")}
              >
                Discuss a project
              </Button>
              <Button
                variant="outline"
                className="border-surface-border text-[rgb(var(--foreground))] hover:bg-surface-elevated px-6 py-3 min-h-[48px] text-sm dark:border-gray-600"
                onClick={() => scrollToSection("projects")}
              >
                See my work
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full border border-surface-border hover:border-accent/50 hover:bg-surface-elevated transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full border border-surface-border hover:border-accent/50 hover:bg-surface-elevated transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="p-3 rounded-full border border-surface-border hover:border-accent/50 hover:bg-surface-elevated transition-colors"
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
