"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && (localStorage.getItem("lh-lang") as Lang)) || null;
    if (stored && translations[stored]) setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lh-lang", l);
  };

  const t = (key: string) => translations[lang][key] ?? translations.en[key] ?? key;

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
