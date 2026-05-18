import { useTranslations } from "next-intl";

export function Footer({ lastUpdated }: { lastUpdated: string }) {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-ink-muted sm:flex-row">
        <p>{t("copyright", { year })}</p>
        <p>Last updated: {lastUpdated}</p>
      </div>
    </footer>
  );
}
