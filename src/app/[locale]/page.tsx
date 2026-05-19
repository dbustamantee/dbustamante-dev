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

        {/* Interactive section */}
        <section className="mx-auto max-w-5xl space-y-8 px-6 py-16">
          <Terminal />
          <div className="grid gap-8 md:grid-cols-2">
            <CommitGraph />
            <IoTPing />
          </div>
        </section>

        <Experience items={content.experience} />
        <Projects items={content.projects} />
        <Skills groups={content.skills} />
        <Education items={content.education} />
        <Contact contact={content.profile.contact} />
      </main>
      <Footer lastUpdated={content.lastUpdated} />
    </>
  );
}
