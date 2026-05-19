"use client";

import { useTranslations } from "next-intl";
import { SkillGroup } from "@/content/types";

const SKILL_COLORS: Record<string, string> = {
  // Frontend
  "React": "text-[#61DAFB]",
  "Next.js": "text-white",
  "TypeScript": "text-[#3178C6]",
  "Tailwind CSS": "text-[#06B6D4]",
  "React Native": "text-[#61DAFB]",
  "PrimeFaces": "text-[#35A1F2]",
  // Backend
  "Node.js": "text-[#5FA04E]",
  "Java": "text-[#ED8B00]",
  "Spring Boot": "text-[#6DB33F]",
  "Hibernate": "text-[#59666C]",
  "PostgreSQL": "text-[#4169E1]",
  "REST APIs": "text-[#10B981]",
  // Cloud
  "AWS Lambda": "text-[#FF9900]",
  "API Gateway": "text-[#FF4F8B]",
  "ECS": "text-[#FF9900]",
  "EC2": "text-[#FF9900]",
  "S3": "text-[#569A31]",
  "CDK": "text-[#FF9900]",
  "Cognito": "text-[#DD344C]",
  "SQS": "text-[#FF4F8B]",
  "Aurora": "text-[#4169E1]",
  // IoT
  "Device Communication": "text-[#10B981]",
  "Radio Detection": "text-[#F59E0B]",
  "Flow Meters": "text-[#06B6D4]",
  "DynamoDB": "text-[#4053D6]",
  "MQTT": "text-[#660066]",
  "Field Networks": "text-[#10B981]",
  // Tooling
  "Git": "text-[#F05032]",
  "CI/CD": "text-[#2088FF]",
  "Docker": "text-[#2496ED]",
  "Serverless": "text-[#FD5750]",
  "Spec-Driven AI Dev (Kiro, Codex)": "text-[#A855F7]",
  // Spanish variants
  "Comunicación de Dispositivos": "text-[#10B981]",
  "Detección de Radio": "text-[#F59E0B]",
  "Caudalímetros": "text-[#06B6D4]",
  "Redes de Campo": "text-[#10B981]",
  "Protocolos IoT": "text-[#10B981]",
  "AI Dev Spec-Driven (Kiro, Codex)": "text-[#A855F7]",
};

const CATEGORY_ICONS: Record<string, string> = {
  "Frontend & Product": "◆",
  "Backend & Data": "◆",
  "Cloud & Infrastructure": "◆",
  "IoT & Protocols": "◆",
  "Tooling & Practices": "◆",
  "Frontend & Producto": "◆",
  "Backend & Datos": "◆",
  "Cloud & Infraestructura": "◆",
  "IoT & Protocolos": "◆",
  "Herramientas & Prácticas": "◆",
};

export function Skills({ groups }: { groups: SkillGroup[] }) {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        {t("title")}
      </h2>
      <div className="mt-10 space-y-10">
        {groups.map((group) => (
          <div key={group.id}>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ink-muted">
              <span className="text-accent-blue">{CATEGORY_ICONS[group.category] || "◆"}</span>
              {group.category}
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {group.items.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2.5 transition-all hover:border-border-hover hover:shadow-sm"
                >
                  <span className={`text-lg ${SKILL_COLORS[skill] || "text-ink-muted"}`}>●</span>
                  <span className="text-sm font-medium text-ink">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
