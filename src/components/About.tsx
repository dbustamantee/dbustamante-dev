import { useTranslations } from "next-intl";

export interface AboutStat {
  value: string;
  label: string;
}

export function About({ bio, stats }: { bio: string; stats?: AboutStat[] }) {
  const t = useTranslations("about");

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        {t("title")}
      </h2>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
        {bio}
      </p>
      {stats && stats.length > 0 && (
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-border bg-surface p-5 text-center transition-colors hover:border-accent-blue"
            >
              <p className="font-heading text-3xl font-bold text-accent-blue">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
