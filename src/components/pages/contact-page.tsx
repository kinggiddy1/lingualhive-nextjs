"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Send, Check } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLang } from "@/i18n/LanguageContext";

export function ContactPage() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="bg-primary py-24 text-primary-foreground md:py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{t("nav.contact")}</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-6xl">{t("contact.title")}</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold">Reach us directly</h2>
            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {t("contact.address")}
                  </div>
                  <p className="mt-1 text-foreground">KG 7 Avenue, Kigali, Rwanda</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {t("contact.email.label")}
                  </div>
                  <a href="mailto:info@lingualhive.com" className="mt-1 block text-foreground hover:text-magenta">
                    info@lingualhive.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {t("contact.phone")}
                  </div>
                  <a href="tel:+250788000000" className="mt-1 block text-foreground hover:text-magenta">
                    +250 788 000 000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {t("contact.hours")}
                  </div>
                  <p className="mt-1 text-foreground">{t("contact.hoursValue")}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-gold/40 bg-gold/10 p-10 text-center">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-gold-foreground">
                  <Check className="h-7 w-7" aria-hidden="true" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold">{t("contact.success")}</h2>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
                aria-label="Contact form"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <Label htmlFor="name">{t("contact.name")}</Label>
                    <Input id="name" name="name" required autoComplete="name" className="mt-1.5" />
                  </div>
                  <div className="sm:col-span-1">
                    <Label htmlFor="email">{t("contact.email")}</Label>
                    <Input id="email" name="email" type="email" required autoComplete="email" className="mt-1.5" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="company">{t("contact.company")}</Label>
                    <Input id="company" name="company" autoComplete="organization" className="mt-1.5" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="service">{t("contact.service")}</Label>
                    <Select name="service">
                      <SelectTrigger id="service" className="mt-1.5">
                        <SelectValue placeholder="—" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="translation">{t("services.translation.title")}</SelectItem>
                        <SelectItem value="interpretation">{t("services.interpretation.title")}</SelectItem>
                        <SelectItem value="localization">{t("services.localization.title")}</SelectItem>
                        <SelectItem value="transcription">{t("services.transcription.title")}</SelectItem>
                        <SelectItem value="consultancy">{t("services.consultancy.title")}</SelectItem>
                        <SelectItem value="training">{t("services.training.title")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="message">{t("contact.message")}</Label>
                    <Textarea id="message" name="message" required rows={5} className="mt-1.5" />
                  </div>
                </div>
                <Button type="submit" size="lg" className="mt-6 w-full bg-primary hover:bg-primary/90 sm:w-auto">
                  {t("contact.send")} <Send className="ml-1 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
