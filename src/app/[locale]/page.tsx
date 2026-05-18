import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

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
      <main>
        <Hero profile={content.profile} />
        <About bio={content.profile.bio} />
        <Experience items={content.experience} />
        <Projects items={content.projects} />
        <Skills groups={content.skills} />
        <Contact contact={content.profile.contact} />
      </main>
      <Footer lastUpdated={content.lastUpdated} />
    </>
  );
}
