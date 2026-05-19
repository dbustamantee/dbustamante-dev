import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Terminal } from "@/components/Terminal";
import { CommitGraph } from "@/components/CommitGraph";
import { IoTPing } from "@/components/IoTPing";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = (await import(`@/content/${locale}`)).default;

  return (
    <>
      <JsonLd locale={locale} />
      <Header />
      <main id="main-content">
        <Hero profile={content.profile} />
        <About bio={content.profile.bio} stats={content.profile.stats} />
        <Experience items={content.experience} />

        {/* Evidence section — visual proof between Experience and Projects */}
        <section className="border-y border-border bg-surface/50 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-ink-muted">
              {locale === "es" ? "En acción" : "In action"}
            </p>
            <div className="grid items-start gap-6 lg:grid-cols-2">
              <CommitGraph />
              <IoTPing />
            </div>
          </div>
        </section>

        <Projects items={content.projects} />
        <Skills groups={content.skills} />

        {/* Terminal — between Skills and Education as a playful break */}
        <section className="mx-auto max-w-5xl px-6 py-12">
          <p className="mb-4 text-center text-sm text-ink-muted">
            {locale === "es"
              ? "¿Prefieres la terminal? Prueba escribir un comando 👇"
              : "Prefer the terminal? Try typing a command 👇"}
          </p>
          <Terminal />
        </section>

        <Education items={content.education} />
        <Contact contact={content.profile.contact} />
      </main>
      <Footer lastUpdated={content.lastUpdated} />
    </>
  );
}
