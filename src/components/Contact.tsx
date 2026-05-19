"use client";

import { useTranslations } from "next-intl";
import { ContactLinks } from "@/content/types";

export function Contact({ contact }: { contact: ContactLinks }) {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        {t("title")}
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-ink-muted">
        {t("description")}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center rounded-lg bg-accent-blue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-blue-hover"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex min-h-[44px] items-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent-blue hover:text-accent-blue"
        >
          {contact.email}
        </a>
        {contact.github && (
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent-blue hover:text-accent-blue"
          >
            GitHub
          </a>
        )}
      </div>
    </section>
  );
}
