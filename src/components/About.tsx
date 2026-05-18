import { useTranslations } from "next-intl";

export function About({ bio }: { bio: string }) {
  const t = useTranslations("about");

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-bold">{t("title")}</h2>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
        {bio}
      </p>
    </section>
  );
}
