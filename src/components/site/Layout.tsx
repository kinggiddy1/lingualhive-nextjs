"use client";

import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useLang } from "@/i18n/LanguageContext";

export function Layout({ children }: { children: ReactNode }) {
  const { t } = useLang();
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="skip-link">
        {t("skip")}
      </a>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
