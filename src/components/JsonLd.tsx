import { siteConfig } from "@/config/site";
import type { SiteContent } from "@/content/types";

export async function JsonLd({ locale }: { locale: string }) {
  const localContent: SiteContent = (await import(`@/content/${locale}`)).default;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: localContent.profile.name,
      url: siteConfig.url,
      jobTitle: localContent.profile.title,
      email: localContent.profile.contact.email,
      sameAs: [
        localContent.profile.contact.linkedin,
        localContent.profile.contact.github,
      ].filter(Boolean),
      knowsAbout: localContent.skills.flatMap((g) => g.items),
      inLanguage: locale,
    },
    dateModified: localContent.lastUpdated,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
