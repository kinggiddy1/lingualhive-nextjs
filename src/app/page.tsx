import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";

export const metadata: Metadata = {
  title: "Translation, Interpretation & Localization in Africa",
  description:
    "Professional translation, interpretation and localization services from Kigali, Rwanda. Trusted by ministries, NGOs and global enterprises across Africa.",
  openGraph: {
    title: "LingualHive — Language Solutions Across Africa",
    description: "From words to wisdom — language solutions that lead the way across Africa.",
  },
};

export default function Page() {
  return <HomePage />;
}
