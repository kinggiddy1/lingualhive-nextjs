import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/components/pages/policy-page";

export const metadata: Metadata = {
  title: "Privacy Policy — LingualHive Language Solutions",
  description:
    "Learn how LingualHive Ltd collects, uses, stores, and protects your personal information.",
  openGraph: {
    title: "Privacy Policy — LingualHive",
    description: "How we collect, use, and protect your personal information.",
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
