import { useTranslations } from "next-intl";
import { SkillGroup } from "@/content/types";

export function Skills({ groups }: { groups: SkillGroup[] }) {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        {t("title")}
      </h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.id}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-ink-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
