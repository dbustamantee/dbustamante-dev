import { useTranslations } from "next-intl";
import { ProjectItem } from "@/content/types";

const PROJECT_ICONS: Record<string, string> = {
  fonoapp: "🗣️",
  "easy-account": "💰",
  portfolio: "🚀",
};

export function Projects({ items }: { items: ProjectItem[] }) {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        {t("title")}
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent-blue/50 hover:shadow-lg hover:shadow-accent-blue/5"
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <span className="text-2xl">{PROJECT_ICONS[item.id] || "📦"}</span>
              <div className="flex gap-2">
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md px-2 py-1 text-xs font-medium text-accent-blue transition-colors hover:bg-accent-blue/10"
                  >
                    Live ↗
                  </a>
                )}
                {item.repo && (
                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md px-2 py-1 text-xs font-medium text-ink-muted transition-colors hover:bg-border hover:text-ink"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>

            {/* Title + description */}
            <h3 className="mt-3 font-heading text-lg font-semibold">{item.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
              {item.solution}
            </p>

            {/* Result badge */}
            <p className="mt-3 text-xs font-medium text-accent-green">
              → {item.result}
            </p>

            {/* Stack */}
            <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-4">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-bg px-2 py-0.5 text-[11px] font-medium text-ink-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
