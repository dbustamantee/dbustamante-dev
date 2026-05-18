export const siteConfig = {
  url: "https://dbustamante.dev",
  domain: "dbustamante.dev",
  name: "Diego Bustamante",
  locales: ["en", "es"] as const,
  defaultLocale: "en" as const,
} as const;

export type Locale = (typeof siteConfig.locales)[number];
