"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();

  const sections = [
    { key: "about", href: "#about" },
    { key: "experience", href: "#experience" },
    { key: "projects", href: "#projects" },
    { key: "skills", href: "#skills" },
    { key: "contact", href: "#contact" },
  ] as const;

  function switchLocale(locale: "en" | "es") {
    router.replace(pathname, { locale });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-sm">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--color-accent-blue)] focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold">
          DB
        </a>
        <ul className="hidden items-center gap-6 text-sm md:flex">
          {sections.map(({ key, href }) => (
            <li key={key}>
              <a href={href} className="transition-colors hover:text-[var(--color-accent-blue)]">
                {t(key)}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 text-sm">
          <button onClick={() => switchLocale("en")} className="rounded px-2 py-1 hover:bg-[var(--color-border)]">
            EN
          </button>
          <span className="text-[var(--color-ink-muted)]">/</span>
          <button onClick={() => switchLocale("es")} className="rounded px-2 py-1 hover:bg-[var(--color-border)]">
            ES
          </button>
        </div>
      </nav>
    </header>
  );
}
