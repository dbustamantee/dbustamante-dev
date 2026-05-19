export const siteConfig = {
  url: "https://diegobustamante.dev",
  domain: "diegobustamante.dev",
  name: "Diego Bustamante",
  locales: ["en", "es"] as const,
  defaultLocale: "en" as const,
} as const;

export type Locale = (typeof siteConfig.locales)[number];
