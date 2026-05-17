import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/services-page";

export const metadata: Metadata = {
  title: "Services — Translation, Interpretation & Localization",
  description:
    "Explore LingualHive's full range of language services: translation, interpretation, localization, transcription, consultancy and corporate language training.",
  openGraph: {
    title: "LingualHive Services",
    description: "A full spectrum of language solutions for Africa's most ambitious organisations.",
  },
};

export default function Page() {
  return <ServicesPage />;
}
