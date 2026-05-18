import { useTranslations } from "next-intl";

export function About({ bio }: { bio: string }) {
  const t = useTranslations("about");

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        {t("title")}
      </h2>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
        {bio}
      </p>
    </section>
  );
}
