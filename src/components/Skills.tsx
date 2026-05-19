import { useTranslations } from "next-intl";
import { SkillGroup } from "@/content/types";

const SKILL_COLORS: Record<string, string> = {
  "React": "border-[#61DAFB]/50 bg-[#61DAFB]/10 text-[#61DAFB]",
  "Next.js": "border-white/30 bg-white/5 text-white",
  "TypeScript": "border-[#3178C6]/50 bg-[#3178C6]/10 text-[#3178C6]",
  "Tailwind CSS": "border-[#06B6D4]/50 bg-[#06B6D4]/10 text-[#06B6D4]",
  "React Native": "border-[#61DAFB]/50 bg-[#61DAFB]/10 text-[#61DAFB]",
  "PrimeFaces": "border-[#35A1F2]/50 bg-[#35A1F2]/10 text-[#35A1F2]",
  "Node.js": "border-[#5FA04E]/50 bg-[#5FA04E]/10 text-[#5FA04E]",
  "Java": "border-[#ED8B00]/50 bg-[#ED8B00]/10 text-[#ED8B00]",
  "Spring Boot": "border-[#6DB33F]/50 bg-[#6DB33F]/10 text-[#6DB33F]",
  "Hibernate": "border-[#59666C]/50 bg-[#59666C]/10 text-[#bcaaa4]",
  "PostgreSQL": "border-[#4169E1]/50 bg-[#4169E1]/10 text-[#4169E1]",
  "REST APIs": "border-[#10B981]/50 bg-[#10B981]/10 text-[#10B981]",
  "AWS Lambda": "border-[#FF9900]/50 bg-[#FF9900]/10 text-[#FF9900]",
  "API Gateway": "border-[#FF4F8B]/50 bg-[#FF4F8B]/10 text-[#FF4F8B]",
  "ECS": "border-[#FF9900]/50 bg-[#FF9900]/10 text-[#FF9900]",
  "EC2": "border-[#FF9900]/50 bg-[#FF9900]/10 text-[#FF9900]",
  "S3": "border-[#569A31]/50 bg-[#569A31]/10 text-[#569A31]",
  "CDK": "border-[#FF9900]/50 bg-[#FF9900]/10 text-[#FF9900]",
  "Cognito": "border-[#DD344C]/50 bg-[#DD344C]/10 text-[#DD344C]",
  "SQS": "border-[#FF4F8B]/50 bg-[#FF4F8B]/10 text-[#FF4F8B]",
  "Aurora": "border-[#4169E1]/50 bg-[#4169E1]/10 text-[#4169E1]",
  "Git": "border-[#F05032]/50 bg-[#F05032]/10 text-[#F05032]",
  "CI/CD": "border-[#2088FF]/50 bg-[#2088FF]/10 text-[#2088FF]",
  "Docker": "border-[#2496ED]/50 bg-[#2496ED]/10 text-[#2496ED]",
  "Serverless": "border-[#FD5750]/50 bg-[#FD5750]/10 text-[#FD5750]",
  "MQTT": "border-[#660066]/50 bg-[#660066]/10 text-[#a855f7]",
  "DynamoDB": "border-[#4053D6]/50 bg-[#4053D6]/10 text-[#4053D6]",
  "Spec-Driven AI Dev (Kiro, Codex)": "border-[#A855F7]/50 bg-[#A855F7]/10 text-[#A855F7]",
  "AI Dev Spec-Driven (Kiro, Codex)": "border-[#A855F7]/50 bg-[#A855F7]/10 text-[#A855F7]",
};

export function Skills({ groups }: { groups: SkillGroup[] }) {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        {t("title")}
      </h2>
      <div className="mt-10 space-y-8">
        {groups.map((group) => (
          <div key={group.id}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-muted">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-transform hover:scale-105 ${
                    SKILL_COLORS[skill] || "border-border bg-surface text-ink-muted"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
