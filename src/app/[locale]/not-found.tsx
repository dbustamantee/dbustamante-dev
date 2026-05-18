import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations();
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-4 text-[var(--color-ink-muted)]">Page not found</p>
        <Link href="/" className="mt-6 inline-block text-[var(--color-accent-blue)] underline">
          ← {t("nav.about")}
        </Link>
      </div>
    </main>
  );
}
