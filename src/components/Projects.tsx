import { useTranslations } from "next-intl";
import { ProjectItem } from "@/content/types";

export function Projects({ items }: { items: ProjectItem[] }) {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-bold">{t("title")}</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.id} className="rounded-xl border border-[var(--color-border)] p-6">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <div className="mt-4 space-y-3 text-sm text-[var(--color-ink-muted)]">
              <p><span className="font-medium text-[var(--color-ink)]">Problem:</span> {item.problem}</p>
              <p><span className="font-medium text-[var(--color-ink)]">Solution:</span> {item.solution}</p>
              <p><span className="font-medium text-[var(--color-ink)]">Result:</span> {item.result}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <span key={tech} className="rounded-full bg-[var(--color-border)] px-3 py-1 text-xs">
                  {tech}
                </span>
              ))}
            </div>
            {(item.url || item.repo) && (
              <div className="mt-4 flex gap-4 text-sm">
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-blue)] hover:underline">
                    Live →
                  </a>
                )}
                {item.repo && (
                  <a href={item.repo} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-blue)] hover:underline">
                    Code →
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
