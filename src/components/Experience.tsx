import { useTranslations } from "next-intl";
import { ExperienceItem } from "@/content/types";

export function Experience({ items }: { items: ExperienceItem[] }) {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        {t("title")}
      </h2>

      {/* Timeline */}
      <div className="relative mt-10">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[9px]" />

        <div className="space-y-6">
          {items.map((item, idx) => (
            <article key={item.id} className="relative pl-8 md:pl-10">
              {/* Timeline dot */}
              <span
                className={`absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 md:left-0 md:h-[19px] md:w-[19px] ${
                  idx === 0
                    ? "border-accent-blue bg-accent-blue/20"
                    : "border-border bg-surface"
                }`}
              />

              <div className="rounded-lg border-l-2 border-l-accent-blue/40 bg-surface p-5 shadow-sm transition-all hover:shadow-md hover:border-l-accent-blue">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-heading text-base font-semibold md:text-lg">{item.role}</h3>
                    <p className="text-sm font-medium text-accent-blue">{item.company}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-accent-blue/10 px-3 py-0.5 text-xs font-medium text-accent-blue">
                    {item.periodLabel}
                  </span>
                </div>

                {item.description && (
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                )}

                {item.achievements.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2 text-sm text-ink-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
