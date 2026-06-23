"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";

export function ServicesPage() {
  const { t } = useLang();

  const services = [
    {
      img: "/assets/service-translation.jpg",
      number: "01",
      titleKey: "services.translation.title",
      descKey: "services.translation.desc",
      features: [],
    },
    {
      img: "/assets/service-interpretation.jpg",
      number: "02",
      titleKey: "services.interpretation.title",
      descKey: "services.interpretation.desc",
      features: [],
    },
    {
      img: "/assets/service-localization.jpg",
      number: "03",
      titleKey: "services.localization.title",
      descKey: "services.localization.desc",
      features: [],
    },
    {
      img: "/assets/service-transcription.jpg",
      number: "04",
      titleKey: "services.transcription.title",
      descKey: "services.transcription.desc",
      features: [],
    },
    {
      img: "/assets/service-consultancy.jpg",
      number: "05",
      titleKey: "services.consultancy.title",
      descKey: "services.consultancy.desc",
      features: [],
    },
    {
      img: "/assets/service-training.jpg",
      number: "06",
      titleKey: "services.training.title",
      descKey: "services.training.desc",
      features: [],
    },
  ];

  return (
    <Layout>
      <section className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{t("services.eyebrow")}</p>
          {/* <h1 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-6xl">{t("services.title")}</h1> */}
          <p className="mt-6 max-w-3xl text-lg text-primary-foreground/85 md:text-xl">{t("services.subtitle")}</p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl space-y-24 px-4 md:px-8">
          {services.map(({ img, number, titleKey, descKey, features }, i) => {
            const reversed = i % 2 === 1;
            return (
              <article key={titleKey} className="grid gap-10 lg:grid-cols-12 lg:items-center">
                <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src={img}
                      alt={t(titleKey)}
                      className="aspect-[4/3] w-full object-cover"
                      width={1200}
                      height={900}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
                  <span className="font-display text-6xl font-bold text-primary/15 md:text-7xl">{number}</span>
                  <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">{t(titleKey)}</h2>
                  <p className="mt-3 text-muted-foreground">{t(descKey)}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm font-medium text-foreground/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-magenta" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
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
