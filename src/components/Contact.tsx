"use client";

import { useTranslations } from "next-intl";
import { ContactLinks } from "@/content/types";

export function Contact({ contact }: { contact: ContactLinks }) {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-bold">{t("title")}</h2>
      <p className="mt-4 text-[var(--color-ink-muted)]">{t("description")}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center rounded-lg bg-[var(--color-accent-blue)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex min-h-[44px] items-center rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium transition-colors hover:border-[var(--color-accent-blue)]"
        >
          Email
        </a>
        {contact.github && (
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium transition-colors hover:border-[var(--color-accent-blue)]"
          >
            GitHub
          </a>
        )}
        <button
          onClick={() => window.print()}
          className="no-print inline-flex min-h-[44px] items-center rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium transition-colors hover:border-[var(--color-accent-blue)]"
        >
          {t("print")}
        </button>
      </div>
    </section>
  );
}
