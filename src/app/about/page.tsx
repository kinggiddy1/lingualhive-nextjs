import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about-page";

export const metadata: Metadata = {
  title: "About — Rwandan Language Services Company",
  description:
    "Learn about LingualHive Ltd: a Kigali-based language solutions company connecting Africa to the world through translation, interpretation and localization.",
  openGraph: {
    title: "About LingualHive",
    description: "Africa's voice, in every language. Meet the team behind LingualHive.",
  },
};

export default function Page() {
  return <AboutPage />;
}
