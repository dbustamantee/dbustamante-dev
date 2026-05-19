"use client";

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
    <>
      <div className="cv-container mx-auto flex h-[297mm] w-[210mm] bg-white text-[9px] leading-[1.35] text-gray-800 shadow-2xl">
        {/* Sidebar */}
        <aside className="flex w-[68mm] shrink-0 flex-col bg-[#1e293b] px-5 py-6 text-white">
          {/* Photo */}
          <div className="mb-4 flex justify-center">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-white/20">
              <img
                src="/diego-bustamante.png"
                alt={content.profile.name}
                className="h-full w-full object-cover object-[center_5px]"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-center text-[14px] font-bold leading-tight">
            {content.profile.name}
          </h1>
          <p className="mt-1 text-center text-[9px] font-medium text-blue-300">
            {content.profile.title}
          </p>

          {/* Contact */}
          <div className="mt-5 space-y-1.5 border-t border-white/10 pt-4">
            <h2 className="mb-2 text-[8px] font-bold uppercase tracking-widest text-blue-300">
              {locale === "es" ? "Contacto" : "Contact"}
            </h2>
            <p className="text-[8px] text-gray-300">{content.profile.contact.email}</p>
            <p className="text-[8px] text-gray-300">linkedin.com/in/diegobustamanteescalona</p>
            {content.profile.contact.github && (
              <p className="text-[8px] text-gray-300">github.com/dbustamantee</p>
            )}
          </div>

          {/* Skills */}
          <div className="mt-5 space-y-3 border-t border-white/10 pt-4">
            <h2 className="mb-2 text-[8px] font-bold uppercase tracking-widest text-blue-300">
              {locale === "es" ? "Habilidades" : "Skills"}
            </h2>
            {content.skills.map((group) => (
              <div key={group.id}>
                <h3 className="text-[7.5px] font-semibold text-blue-200">{group.category}</h3>
                {group.items.map((line, i) => (
                  <p key={i} className="text-[8px] leading-snug text-gray-300">{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-auto space-y-2 border-t border-white/10 pt-4">
            <h2 className="mb-2 text-[8px] font-bold uppercase tracking-widest text-blue-300">
              {locale === "es" ? "Educación" : "Education"}
            </h2>
            {content.education.map((item) => (
              <div key={item.id}>
                <p className="text-[8.5px] font-semibold">{item.degree}</p>
                <p className="text-[7.5px] text-gray-400">{item.institution}</p>
                <p className="text-[7px] text-gray-500">{item.periodLabel}</p>
              </div>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-hidden px-6 py-6">
          {/* Summary */}
          <section className="mb-4 pb-3">
            <h2 className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-[#1e293b]">
              {locale === "es" ? "Perfil Profesional" : "Professional Summary"}
            </h2>
            <p className="text-[9px] leading-relaxed text-gray-600">{content.profile.bio}</p>
          </section>

          {/* Experience */}
          <section className="mb-4">
            <h2 className="mb-2 border-b border-gray-200 pb-1 text-[10px] font-bold uppercase tracking-wider text-[#1e293b]">
              {locale === "es" ? "Experiencia" : "Experience"}
            </h2>
            <div className="space-y-3">
              {content.experience.slice(0, 4).map((item) => (
                <div key={item.id}>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-[9.5px] font-bold text-gray-800">{item.role}</h3>
                    <span className="shrink-0 text-[8px] text-gray-400">{item.periodLabel}</span>
                  </div>
                  <p className="text-[8px] font-medium text-blue-600">{item.company}</p>
                  {item.description && (
                    <p className="mt-0.5 text-[8px] italic text-gray-500">{item.description}</p>
                  )}
                  <ul className="mt-1 space-y-0.5">
                    {item.achievements.slice(0, 2).map((a, i) => (
                      <li key={i} className="flex gap-1.5 text-[8.5px] text-gray-700">
                        <span className="mt-[3px] h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="mb-2 border-b border-gray-200 pb-1 text-[10px] font-bold uppercase tracking-wider text-[#1e293b]">
              {locale === "es" ? "Proyectos Personales" : "Personal Projects"}
            </h2>
            <div className="space-y-1.5">
              {content.projects.map((item) => (
                <div key={item.id}>
                  <span className="text-[9px] font-bold text-gray-800">{item.name}</span>
                  <span className="text-[8.5px] text-gray-500"> — {item.solution}</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Print button */}
      <div className="no-print mt-6 text-center">
        <button
          onClick={() => window.print()}
          className="rounded-lg bg-[#1e293b] px-6 py-3 text-sm font-medium text-white hover:bg-[#334155]"
        >
          {locale === "es" ? "Imprimir / Guardar PDF" : "Print / Save as PDF"}
        </button>
      </div>

      <style>{`
        @media print {
          @page { margin: 0; size: A4; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; color-adjust: exact !important; }
          html, body { margin: 0; padding: 0; }
          .no-print { display: none !important; }
          .cv-container { width: 210mm; height: 297mm; box-shadow: none; }
        }
        @media screen {
          body { background: #f1f5f9; padding: 2rem 0; }
        }
      `}</style>
    </>
  );
}
