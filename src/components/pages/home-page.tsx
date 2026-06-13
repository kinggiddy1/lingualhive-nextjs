"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";

const serviceItems = [
  { img: "/assets/service-translation.jpg", titleKey: "services.translation.title", descKey: "services.translation.desc" },
  { img: "/assets/service-interpretation.jpg", titleKey: "services.interpretation.title", descKey: "services.interpretation.desc" },
  { img: "/assets/service-localization.jpg", titleKey: "services.localization.title", descKey: "services.localization.desc" },
  { img: "/assets/service-transcription.jpg", titleKey: "services.transcription.title", descKey: "services.transcription.desc" },
  { img: "/assets/service-consultancy.jpg", titleKey: "services.consultancy.title", descKey: "services.consultancy.desc" },
  { img: "/assets/service-training.jpg", titleKey: "services.training.title", descKey: "services.training.desc" },
];

export function HomePage() {
  const { t } = useLang();

  return (
    <Layout>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src="/assets/hero-language.jpg"
          alt="Professional African interpreter at work"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_35%,oklch(0.16_0.05_268/0.55)_60%,oklch(0.14_0.05_268/0.85)_100%)] md:bg-[linear-gradient(to_right,transparent_0%,transparent_45%,oklch(0.16_0.05_268/0.55)_65%,oklch(0.14_0.05_268/0.9)_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 md:px-8 md:py-36 lg:grid-cols-12 lg:py-44">
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-black/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
              {t("hero.eyebrow")}
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/90 md:text-xl">{t("hero.subtitle")}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
                <Link href="/contact">
                  {t("hero.cta.primary")} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/services">{t("hero.cta.secondary")}</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative border-t border-primary-foreground/15 bg-[oklch(0.14_0.05_268/0.85)] backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4 md:px-8">
            {[
              { v: "50+", k: "stats.languages" },
              { v: "1.2K", k: "stats.projects" },
              { v: "180+", k: "stats.clients" },
              { v: "200+", k: "stats.experts" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-4xl font-bold text-gold">{s.v}</div>
                <div className="mt-1 text-sm text-primary-foreground/80">{t(s.k)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            {t("trust.title")}
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-8 opacity-70 sm:grid-cols-3 md:grid-cols-6">
            {["UNHCR", "AU", "MINEDUC", "Heineken", "GIZ", "RDB"].map((name) => (
              <div
                key={name}
                className="text-center font-display text-xl font-semibold tracking-tight text-foreground/60"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
          
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-magenta">{t("about.eyebrow1")}</p>
            {/* <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">{t("about.title1")}</h2> */}
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t("about.body1")}</p><br /><br /><br />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-magenta">{t("about.eyebrow2")}</p>
            {/* <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">{t("about.title1")}</h2> */}
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t("about.body2")}</p>

            <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
              <Link href="/about">
                {t("about.cta")} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <img
              src="/assets/about-team.jpg"
              alt="LingualHive interpreter at work"
              className="rounded-2xl object-cover"
              width={1280}
              height={960}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-magenta">{t("services.eyebrow")}</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">{t("services.title")}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("services.subtitle")}</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map(({ img, titleKey, descKey }) => (
              <article
                key={titleKey}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img}
                    alt={t(titleKey)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={1200}
                    height={900}
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold">{t(titleKey)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(descKey)}</p>
                  <Link
                    href="/services"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-magenta"
                  >
                    {t("services.learnMore")} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src="/assets/about-team.jpg"
              alt="LingualHive interpreter at work"
              className="rounded-2xl object-cover"
              width={1280}
              height={960}
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-magenta">{t("about.eyebrow")}</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">{t("about.title")}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t("about.body")}</p>
            <ul className="mt-6 space-y-3">
              {[
                "Native African linguists across 50+ languages",
                "Certified ISO-grade quality processes",
                "Confidentiality and data protection by default",
                "Accessibility-first delivery (WCAG 2.1 AA)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/85">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
              <Link href="/about">
                {t("about.cta")} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">{t("cta.title")}</h2>
          <p className="mt-4 text-lg text-primary-foreground/85">{t("cta.subtitle")}</p>
          <Button asChild size="lg" className="mt-8 bg-gold text-gold-foreground hover:bg-gold/90">
            <Link href="/contact">
              {t("cta.button")} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
