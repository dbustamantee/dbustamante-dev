import { useTranslations } from "next-intl";
import { SkillGroup } from "@/content/types";

export function Skills({ groups }: { groups: SkillGroup[] }) {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-bold">{t("title")}</h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.id}>
            <h3 className="text-lg font-semibold">{group.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-[var(--color-border)] px-3 py-1 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
