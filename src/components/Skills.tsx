"use client";

import { useTranslations } from "next-intl";
import { SkillGroup } from "@/content/types";
import { TECH_ICONS } from "./tech-icons";

export function Skills({ groups }: { groups: SkillGroup[] }) {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        {t("title")}
      </h2>
      <div className="mt-10 space-y-10">
        {groups.map((group) => (
          <div key={group.id}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-ink-muted">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {group.items.map((skill) => {
                const icon = TECH_ICONS[skill];
                return (
                  <div
                    key={skill}
                    className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent-blue/50 hover:shadow-md"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8"
                      fill={icon?.color || "#a8a29e"}
                    >
                      <path d={icon?.path || "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"} />
                    </svg>
                    <span className="text-center text-xs font-medium text-ink">
                      {skill}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
