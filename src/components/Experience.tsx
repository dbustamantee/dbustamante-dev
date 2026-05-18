import { useTranslations } from "next-intl";
import { ExperienceItem } from "@/content/types";

export function Experience({ items }: { items: ExperienceItem[] }) {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        {t("title")}
      </h2>
      <div className="mt-10 space-y-8">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-lg border border-border bg-surface p-6 transition-colors hover:border-border-hover"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-heading text-lg font-semibold">{item.role}</h3>
                <p className="text-sm font-medium text-accent-blue">{item.company}</p>
              </div>
              <time className="text-sm text-ink-muted">{item.periodLabel}</time>
            </div>
            {item.description && (
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            )}
            {item.achievements.length > 0 && (
              <ul className="mt-4 space-y-2">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
                    {achievement}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
