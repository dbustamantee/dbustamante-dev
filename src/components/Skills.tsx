import { useTranslations } from "next-intl";
import { SkillGroup } from "@/content/types";

const CATEGORY_COLORS: Record<string, string> = {
  frontend: "#61DAFB",
  backend: "#5FA04E",
  cloud: "#FF9900",
  iot: "#10B981",
  tooling: "#A855F7",
};

export function Skills({ groups }: { groups: SkillGroup[] }) {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        {t("title")}
      </h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.id} className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
              {group.category}
            </h3>
            {group.items.map((line, i) => (
              <div key={i} className="flex items-center gap-3">
                <span
                  className="h-5 w-[3px] shrink-0 rounded-full"
                  style={{ backgroundColor: CATEGORY_COLORS[group.id] || "#6b7280" }}
                />
                <span className="text-sm text-ink">{line}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
