import { useTranslations } from "next-intl";
import { Profile } from "@/content/types";

export function Hero({ profile }: { profile: Profile }) {
  const t = useTranslations("hero");

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-6 py-20">
      <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
        {t("headline")}
      </h1>
      <p className="mt-4 max-w-2xl text-xl text-[var(--color-ink-muted)] md:text-2xl">
        {t("subheadline")}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#contact"
          className="inline-flex min-h-[44px] items-center rounded-lg bg-[var(--color-accent-blue)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          {t("cta")}
        </a>
        <a
          href={profile.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium transition-colors hover:border-[var(--color-accent-blue)]"
        >
          LinkedIn →
        </a>
      </div>
    </section>
  );
}
