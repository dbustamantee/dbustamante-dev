import { useTranslations } from "next-intl";
import { Profile } from "@/content/types";

export function Hero({ profile }: { profile: Profile }) {
  const t = useTranslations("hero");

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-6 py-20 md:py-32">
      <p className="mb-3 text-sm font-medium tracking-wide text-accent-blue">
        {profile.title}
      </p>
      <h1 className="font-heading text-5xl font-bold tracking-tight text-ink md:text-7xl">
        {t("headline")}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
        {t("subheadline")}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#contact"
          className="inline-flex min-h-[44px] items-center rounded-lg bg-accent-blue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-blue-hover"
        >
          {t("cta")}
        </a>
        <a
          href={profile.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent-blue hover:text-accent-blue"
        >
          LinkedIn →
        </a>
      </div>
    </section>
  );
}
