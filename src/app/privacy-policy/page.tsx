import type { Metadata } from "next";
import { IndustriesPage } from "@/components/pages/industries-page";

export const metadata: Metadata = {
  title: "Industries — LingualHive Language Solutions",
  description:
    "LingualHive serves government, NGOs, legal, healthcare, media, technology and education sectors with specialised language expertise.",
  openGraph: {
    title: "Industries served by LingualHive",
    description: "Tailored language expertise for sectors where precision matters.",
  },
};

export default function Page() {
  return <IndustriesPage />;
}
