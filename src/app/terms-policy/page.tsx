import type { Metadata } from "next";
import { TermsPage } from "@/components/pages/terms-page";

export const metadata: Metadata = {
  title: "Terms and Conditions — LingualHive Language Solutions",
  description:
    "Read the Terms and Conditions governing your use of LingualHive Ltd's website and services.",
  openGraph: {
    title: "Terms and Conditions — LingualHive",
    description: "The terms governing your use of our website and services.",
  },
};

export default function Page() {
  return <TermsPage />;
}
