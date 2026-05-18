import { useTranslations } from "next-intl";
import { ExperienceItem } from "@/content/types";

export function Experience({ items }: { items: ExperienceItem[] }) {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-bold">{t("title")}</h2>
      <div className="mt-10 space-y-12">
        {items.map((item) => (
          <article key={item.id} className="border-l-2 border-[var(--color-accent-blue)] pl-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <span className="text-sm text-[var(--color-ink-muted)]">{item.periodLabel}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-[var(--color-accent-blue)]">{item.company}</p>
            {item.description && (
              <p className="mt-3 text-[var(--color-ink-muted)]">{item.description}</p>
            )}
            <ul className="mt-4 space-y-2">
              {item.achievements.map((achievement, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-coral)]" />
                  {achievement}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
