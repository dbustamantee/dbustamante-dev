import Image from "next/image";
import { useTranslations } from "next-intl";
import { Profile } from "@/content/types";

export function Hero({ profile }: { profile: Profile }) {
  const t = useTranslations("hero");

  return (
    <section className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center gap-8 px-6 py-20 md:flex-row md:gap-16 md:py-32">
      {/* Text content */}
      <div className="z-10 flex-1 text-center md:text-left">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-blue">
          {profile.title}
        </p>
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
          {t("headline")}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
          {t("subheadline")}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="#contact"
            className="inline-flex min-h-[48px] items-center rounded-full bg-accent-blue px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-blue/25 transition-all hover:bg-accent-blue-hover hover:shadow-xl hover:shadow-accent-blue/30"
          >
            {t("cta")}
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center rounded-full border-2 border-border px-8 py-3 text-sm font-semibold text-ink transition-all hover:border-accent-blue hover:text-accent-blue"
          >
            LinkedIn →
          </a>
        </div>
      </div>

      {/* Profile photo */}
      <div className="relative z-10 shrink-0">
        <div className="relative h-72 w-72 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-surface-alt/50 sm:h-80 sm:w-80 md:h-96 md:w-96">
          <Image
            src="/diego-bustamante.jpg"
            alt={profile.name}
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
          />
        </div>
        {/* Decorative element */}
        <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-accent-blue/10" />
      </div>
    </section>
  );
}
