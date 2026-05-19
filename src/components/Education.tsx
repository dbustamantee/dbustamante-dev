import { useTranslations } from "next-intl";
import { EducationItem } from "@/content/types";

const ITEM_ICONS: Record<string, string> = {
  "aws-dev": "🏆",
  "university": "🎓",
};

export function Education({ items }: { items: EducationItem[] }) {
  const t = useTranslations("education");

  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        {t("title")}
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent-blue/50 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <span className="text-2xl">{ITEM_ICONS[item.id] || "📄"}</span>
              <span className="rounded-full bg-accent-blue/10 px-3 py-0.5 text-xs font-medium text-accent-blue">
                {item.periodLabel}
              </span>
            </div>
            <h3 className="mt-4 font-heading text-base font-semibold">{item.degree}</h3>
            {item.field && (
              <p className="mt-1 text-sm text-ink-muted">{item.field}</p>
            )}
            <p className="mt-2 text-sm text-accent-blue">{item.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
