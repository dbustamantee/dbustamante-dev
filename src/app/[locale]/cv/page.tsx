"use client";

import { useTranslations } from "next-intl";
import type { SiteContent } from "@/content/types";
import { use, useEffect, useState } from "react";

export default function CVPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const [content, setContent] = useState<SiteContent | null>(null);

  useEffect(() => {
    import(`@/content/${locale}`).then((m) => setContent(m.default));
  }, [locale]);

  if (!content) return null;

  return (
    <div className="cv-page mx-auto max-w-[210mm] bg-white p-[12mm] text-black print:p-[8mm]">
      {/* Header */}
      <header className="border-b border-gray-300 pb-2">
        <h1 className="text-xl font-bold">{content.profile.name}</h1>
        <p className="text-sm text-gray-600">{content.profile.title}</p>
        <div className="mt-1 flex gap-4 text-xs text-gray-500">
          <span>{content.profile.contact.email}</span>
          <span>{content.profile.contact.linkedin}</span>
          {content.profile.contact.github && <span>{content.profile.contact.github}</span>}
        </div>
      </header>

      {/* Two column layout */}
      <div className="mt-3 grid grid-cols-[1fr_200px] gap-6">
        {/* Left column - main content */}
        <div className="space-y-3">
          {/* Summary */}
          <section>
            <h2 className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-500">
              {locale === "es" ? "Perfil" : "Summary"}
            </h2>
            <p className="text-[9px] leading-tight text-gray-700">{content.profile.bio}</p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-500">
              {locale === "es" ? "Experiencia" : "Experience"}
            </h2>
            <div className="space-y-2">
              {content.experience.slice(0, 4).map((item) => (
                <div key={item.id}>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-[9.5px] font-semibold">{item.role}</h3>
                    <span className="text-[8px] text-gray-500">{item.periodLabel}</span>
                  </div>
                  <p className="text-[8px] text-gray-500">{item.company}</p>
                  {item.achievements.length > 0 && (
                    <ul className="mt-0.5 space-y-0.5">
                      {item.achievements.slice(0, 2).map((a, i) => (
                        <li key={i} className="text-[8.5px] leading-tight text-gray-700">
                          • {a}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-500">
              {locale === "es" ? "Proyectos" : "Projects"}
            </h2>
            <div className="space-y-1">
              {content.projects.map((item) => (
                <div key={item.id} className="flex items-baseline gap-2">
                  <span className="text-[9px] font-semibold">{item.name}</span>
                  <span className="text-[8px] text-gray-600">— {item.result}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right column - sidebar */}
        <div className="space-y-3 border-l border-gray-200 pl-4">
          {/* Skills */}
          <section>
            <h2 className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-500">
              {locale === "es" ? "Habilidades" : "Skills"}
            </h2>
            <div className="space-y-2">
              {content.skills.map((group) => (
                <div key={group.id}>
                  <h3 className="text-[8px] font-semibold text-gray-500">{group.category}</h3>
                  {group.items.map((line, i) => (
                    <p key={i} className="text-[8.5px] leading-tight text-gray-700">{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-500">
              {locale === "es" ? "Educación" : "Education"}
            </h2>
            <div className="space-y-1.5">
              {content.education.map((item) => (
                <div key={item.id}>
                  <p className="text-[9px] font-semibold">{item.degree}</p>
                  <p className="text-[8px] text-gray-500">{item.institution}</p>
                  <p className="text-[8px] text-gray-400">{item.periodLabel}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Print button - hidden in print */}
      <div className="no-print mt-6 text-center">
        <button
          onClick={() => window.print()}
          className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          {locale === "es" ? "Imprimir / Guardar PDF" : "Print / Save as PDF"}
        </button>
      </div>

      <style>{`
        @media print {
          @page { margin: 8mm; size: A4; }
          .no-print { display: none !important; }
          .cv-page { padding: 0 !important; max-width: 100% !important; }
        }
      `}</style>
    </div>
  );
}
