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

      <div className="mt-10 grid gap-12 md:grid-cols-5">
        {/* Bio + highlights */}
        <div className="md:col-span-3">
          <p className="text-lg leading-relaxed text-ink-muted">{bio}</p>
          <ul className="mt-6 space-y-3">
            {[
              { icon: "🌐", text: t("highlight1") },
              { icon: "☁️", text: t("highlight2") },
              { icon: "🔧", text: t("highlight3") },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-3 text-sm text-ink-muted">
                <span className="mt-0.5 text-base">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 gap-6 md:col-span-2">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-accent-blue md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
