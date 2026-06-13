import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "LingualHive — Language Solutions Across Africa",
    template: "%s | LingualHive",
  },
  description:
    "LingualHive Ltd is a Rwandan language services company offering professional translation, interpretation, localization, and language consultancy across Africa.",
  authors: [{ name: "LingualHive Ltd" }],
  openGraph: {
    type: "website",
    siteName: "LingualHive",
    title: "LingualHive — Language Solutions Across Africa",
    description:
      "With care and commitment — language solutions that lead the way across Africa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LingualHive — Language Solutions Across Africa",
    description:
      "With care and commitment — language solutions that lead the way across Africa.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1f1a4a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
