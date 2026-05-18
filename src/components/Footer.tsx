import { useTranslations } from "next-intl";

export function Footer({ lastUpdated }: { lastUpdated: string }) {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-sm text-[var(--color-ink-muted)]">
        <p>{t("copyright", { year })}</p>
        <p>Last updated: {lastUpdated}</p>
      </div>
    </footer>
  );
}
