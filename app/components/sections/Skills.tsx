import { currentWorkStack, projectSkillsCompact } from "@/lib/data";
import SectionHeader from "../ui/SectionHeader";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { Briefcase, FolderGit2 } from "lucide-react";

function SkillBadgeGrid({
  groups,
}: {
  groups: ReadonlyArray<{
    readonly category: string;
    readonly skills: readonly string[];
  }>;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {groups.map((group) => (
        <div key={group.category}>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[rgb(var(--muted))] mb-2">
            {group.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <Badge
                key={skill}
                variant="subtle"
                className="text-xs bg-accent/10 text-accent border border-accent/20"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-elevated/50"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Skills"
          title="Tech I work with"
          subtitle="Production stack at WelcomeWare, plus MERN tools for portfolio and contract work."
        />

        <div className="space-y-6 max-w-3xl mx-auto">
          <Card className="p-6 md:p-8 !scale-100 border-accent/25 ring-1 ring-accent/10">
            <div className="flex items-start gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-accent/15 text-accent shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">
                  Current · {currentWorkStack.company}
                </p>
                <h3 className="text-lg font-semibold">
                  {currentWorkStack.role} — production stack
                </h3>
              </div>
            </div>
            <SkillBadgeGrid groups={[...currentWorkStack.groups]} />
          </Card>

          <Card className="p-6 md:p-8 !scale-100">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-surface-elevated border border-surface-border text-[rgb(var(--muted))] shrink-0">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[rgb(var(--muted))] mb-1">
                  Projects & freelance
                </p>
                <h3 className="text-lg font-semibold">MERN & integrations</h3>
                <p className="text-sm text-[rgb(var(--muted))] mt-1">
                  See{" "}
                  <a href="#projects" className="text-accent hover:underline">
                    Work
                  </a>{" "}
                  for demos; typical tools below.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {projectSkillsCompact.map((skill) => (
                <Badge key={skill} variant="subtle" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
