import { useTranslations } from "next-intl";
import { ProjectItem } from "@/content/types";

export function Projects({ items }: { items: ProjectItem[] }) {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        {t("title")}
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.id}
            className="flex flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-border-hover"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-heading text-lg font-semibold">{item.name}</h3>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm text-accent-blue hover:underline"
                >
                  ↗
                </a>
              )}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              <span className="font-medium text-ink">Problem:</span> {item.problem}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              <span className="font-medium text-ink">Solution:</span> {item.solution}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              <span className="font-medium text-ink">Result:</span> {item.result}
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-4">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-bg px-3 py-1 text-xs font-medium text-ink-muted"
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
