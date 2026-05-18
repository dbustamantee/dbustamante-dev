import Image from "next/image";
import { useTranslations } from "next-intl";
import { Profile } from "@/content/types";

export function Hero({ profile }: { profile: Profile }) {
  const t = useTranslations("hero");

  return (
    <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-0 px-6 py-20 md:flex-row md:gap-0 md:py-32">
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
      <div className="relative z-10 md:-ml-12">
        <Image
          src="/diego-bustamante.png"
          alt={profile.name}
          width={700}
          height={875}
          className="h-auto w-[280px] drop-shadow-2xl sm:w-[360px] md:w-[480px] lg:w-[560px] xl:w-[640px]"
          priority
          sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, (max-width: 1024px) 480px, (max-width: 1280px) 560px, 640px"
        />
      </div>
    </section>
  );
}
