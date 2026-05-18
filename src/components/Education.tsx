import { useTranslations } from "next-intl";
import { EducationItem } from "@/content/types";

export function Education({ items }: { items: EducationItem[] }) {
  const t = useTranslations("education");

  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        {t("title")}
      </h2>
      <div className="mt-10 space-y-6">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="font-medium">{item.degree}</h3>
              {item.field && <p className="text-sm text-ink-muted">{item.field}</p>}
              <p className="text-sm text-accent-blue">{item.institution}</p>
            </div>
            <time className="text-sm text-ink-muted">{item.periodLabel}</time>
          </div>
        ))}
      </div>
    </section>
  );
}
