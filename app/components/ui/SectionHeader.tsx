import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
        {eyebrow}
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-[rgb(var(--foreground))]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-[rgb(var(--muted))] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
