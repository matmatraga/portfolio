"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import SectionHeader from "../ui/SectionHeader";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  };

  const contactLinks = [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: siteConfig.linkedinHandle,
      href: siteConfig.linkedin,
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: siteConfig.githubHandle,
      href: siteConfig.github,
      icon: Github,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something"
          subtitle="Contract, part-time, or project-based work—tell me about your stack, timeline, and goals."
        />

        <Card className="p-6 md:p-10 !scale-100">
          <div className="text-center space-y-2 mb-10">
            <p className="text-[rgb(var(--muted))]">{siteConfig.responseTime}</p>
            <p className="text-sm text-[rgb(var(--muted))]">
              {siteConfig.availability}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 mb-10 px-2 sm:px-4">
            <Button
              className="bg-accent hover:bg-accent-muted text-accent-foreground gap-2.5 px-6 py-3 min-h-[48px] text-sm"
              onClick={() => {
                window.location.href = `mailto:${siteConfig.email}?subject=Project%20inquiry`;
              }}
            >
              <Mail size={18} />
              Email me
            </Button>
            <Button
              variant="outline"
              className="gap-2.5 px-6 py-3 min-h-[48px] text-sm border-surface-border dark:border-gray-600"
              onClick={copyEmail}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "Copied" : "Copy email"}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={
                  link.label !== "Email" ? "noopener noreferrer" : undefined
                }
                className="flex items-center gap-4 p-5 rounded-lg border border-surface-border hover:border-accent/40 hover:bg-surface-elevated transition-colors"
              >
                <link.icon size={22} className="text-accent shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-sm">{link.label}</p>
                  <p className="text-xs text-[rgb(var(--muted))] truncate">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
