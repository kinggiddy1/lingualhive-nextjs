"use client";

import Link from "next/link";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";




export function AboutPage() {
const { t } = useLang();

const values = [
  {
    img: "/assets/value-precision.jpg",
    title: t("about.one"),
    body: t("about.oneone"),
  },
  {
    img: "/assets/value-cultural.jpg",
    title: t("about.two"),
    body: t("about.twotwo"),
  },
  {
    img: "/assets/value-innovation.jpg",
    title: t("about.three"),
    body: t("about.threethree"),
  },
  {
    img: "/assets/value-inclusion.jpg",
    title: t("about.four"),
    body: t("about.fourfour"),
  },
  {
    img: "/assets/value-panafrican.jpg",
    title: t("about.five"),
    body: t("about.fivefive"),
  },
  {
    img: "/assets/value-excellence.jpg",
    title: t("about.six"),
    body: t("about.sixsix"),
  },
];
  return (
    <Layout>
      <section className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{t("about.eyebrow")}</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-6xl">{t("about.title")}</h1>
          <p className="mt-6 max-w-3xl text-lg text-primary-foreground/85 md:text-xl">{t("about.body")}</p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
          <img
            src="/assets/about-team.jpg"
            alt="LingualHive interpreter in conference booth"
            className="rounded-2xl object-cover"
            width={1280}
            height={960}
            loading="lazy"
          />
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">{t("about.story")}</h2>
            <p className="mt-4 text-muted-foreground">
              {t("about.body.story")}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="font-display text-3xl font-bold text-magenta">{t("about.mission")}</div>
                <p className="mt-2 text-sm text-muted-foreground">
                 {t("about.body.mission")}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="font-display text-3xl font-bold text-gold">{t("about.vision")}</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t("about.body.vision")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-magenta">What guides us</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">{t("about.two")}</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map(({ img, title, body }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={1024}
                    height={768}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
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
