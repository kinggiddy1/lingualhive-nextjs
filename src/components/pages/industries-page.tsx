"use client";

import Link from "next/link";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";

export function IndustriesPage() {
  const { t } = useLang();

  const items = [
    { img: "/assets/industry-gov.jpg", titleKey: "industries.gov", descKey: "industries.gov.desc" },
    { img: "/assets/industry-ngo.jpg", titleKey: "industries.ngo", descKey: "industries.ngo.desc" },
    { img: "/assets/industry-legal.jpg", titleKey: "industries.legal", descKey: "industries.legal.desc" },
    { img: "/assets/industry-health.jpg", titleKey: "industries.health", descKey: "industries.health.desc" },
    { img: "/assets/industry-media.jpg", titleKey: "industries.media", descKey: "industries.media.desc" },
    { img: "/assets/industry-tech.jpg", titleKey: "industries.tech", descKey: "industries.tech.desc" },
  ];

  return (
    <Layout>
      <section className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Industries</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-6xl">{t("industries.title")}</h1>
          <p className="mt-6 max-w-3xl text-lg text-primary-foreground/85 md:text-xl">{t("industries.subtitle")}</p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-3">
          {items.map(({ img, titleKey, descKey }) => (
            <article
              key={titleKey}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt={t(titleKey)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={1024}
                  height={768}
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <h2 className="font-display text-xl font-semibold">{t(titleKey)}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(descKey)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">{t("cta.title")}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("cta.subtitle")}</p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90">
            <Link href="/contact">{t("cta.button")}</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
