import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact-page";

export const metadata: Metadata = {
  title: "Contact — Request a Quote",
  description:
    "Get in touch with LingualHive. Request a free language services quote within 24 hours. Based in Kigali, Rwanda — serving Africa and beyond.",
  openGraph: {
    title: "Contact LingualHive",
    description: "Tell us about your project. Our team replies within one business day.",
  },
};

export default function Page() {
  return <ContactPage />;
}
