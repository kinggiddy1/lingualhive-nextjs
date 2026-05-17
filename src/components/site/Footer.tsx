"use client";

import Link from "next/link";
import { Linkedin, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-2xl font-bold tracking-tight">
              Lingual<span className="text-gold">Hive</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-primary-foreground/75">{t("footer.tagline")}</p>
            <div className="mt-6 flex gap-3" aria-label={t("footer.follow")}>
              {[
                { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-gold hover:text-gold-foreground"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
              <a
                href="https://x.com"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-sm font-bold transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                X
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">{t("footer.company")}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-gold">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-primary-foreground/80 hover:text-gold">
                  {t("nav.industries")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-gold">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">{t("footer.services")}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-gold">
                  {t("services.translation.title")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-gold">
                  {t("services.interpretation.title")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-gold">
                  {t("services.localization.title")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-gold">
                  {t("services.training.title")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">{t("nav.contact")}</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>Kigali, Rwanda</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href="mailto:hello@lingualhive.rw" className="hover:text-gold">
                  hello@lingualhive.rw
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href="tel:+250788000000" className="hover:text-gold">
                  +250 788 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/65 md:flex-row md:items-center">
          <p>
            © {year} LingualHive Ltd. {t("footer.rights")}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/" className="hover:text-gold">
                {t("footer.privacy")}
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gold">
                {t("footer.terms")}
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gold">
                {t("footer.accessibility")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
