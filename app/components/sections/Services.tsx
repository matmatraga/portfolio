import { services } from "@/lib/data";
import SectionHeader from "../ui/SectionHeader";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Services"
          title="What I can help you build"
          subtitle="Contract and part-time engagements—scoped deliverables, clear communication, async-friendly."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className={cn(
                "p-6 hover:shadow-card dark:hover:shadow-card-dark",
                "hover:border-accent/30 !scale-100"
              )}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-[rgb(var(--muted))] mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-[rgb(var(--muted))] flex gap-2"
                      >
                        <span className="text-accent shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
