"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLang } from "@/i18n/LanguageContext";
import { LANGS } from "@/i18n/translations";
import { NavLink } from "./NavLink";

export function Header() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "/", label: t("nav.home"), exact: true as const },
    { href: "/about", label: t("nav.about"), exact: false as const },
    { href: "/services", label: t("nav.services"), exact: false as const },
    { href: "/industries", label: t("nav.industries"), exact: false as const },
    { href: "/contact", label: t("nav.contact"), exact: false as const },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="LingualHive home">
          <img
            src="/assets/lingualhive-logo.jpg"
            alt="LingualHive logo"
            className="h-11 w-auto"
            width={160}
            height={44}
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              exact={item.exact}
              className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              activeClassName="rounded-md px-4 py-2 text-sm font-semibold text-primary bg-secondary"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" aria-label="Change language" className="gap-1.5">
                <Globe className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs font-semibold">{lang.toUpperCase()}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {LANGS.map((l) => (
                <DropdownMenuItem
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={lang === l.code ? "font-semibold text-primary" : ""}
                >
                  {l.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild variant="default" size="sm" className="hidden bg-primary hover:bg-primary/90 md:inline-flex">
            <Link href="/contact">{t("nav.quote")}</Link>
          </Button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-4">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                exact={item.exact}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-base font-medium text-foreground/85 hover:bg-secondary"
                activeClassName="rounded-md px-4 py-3 text-base font-semibold text-primary bg-secondary"
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild className="mt-2 bg-primary hover:bg-primary/90">
              <Link href="/contact" onClick={() => setOpen(false)}>
                {t("nav.quote")}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
