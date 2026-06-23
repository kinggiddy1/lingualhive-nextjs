"use client";

import Link from "next/link";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";

const sections = [
  {
    number: "01",
    title: "Introduction",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        Welcome to LingualHive Ltd ("LingualHive," "we," "our," or "us"). This Privacy Policy
        explains how we collect, use, store, and protect your personal information when you visit
        our website or use our services. By using our website, you agree to the terms described
        in this policy.
      </p>
    ),
  },
  {
    number: "02",
    title: "Information We Collect",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-display text-base font-semibold text-foreground mb-3">
            a) Personal Information
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            {[
              "Name",
              "Email address",
              "Phone number",
              "Organization or institution (if provided)",
              "Any information you submit through contact forms, emails, or service inquiries",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-base font-semibold text-foreground mb-3">
            b) Technical Information
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            {[
              "IP address",
              "Browser type and version",
              "Device information",
              "Pages visited and time spent on the website",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-base font-semibold text-foreground mb-3">
            c) Communication Information
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            {[
              "Messages, inquiries, or feedback you send to us",
              "Information shared during service requests or consultations",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "How We Use Your Information",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">We use your information to:</p>
        <ul className="space-y-2 text-muted-foreground">
          {[
            "Respond to inquiries and provide customer support",
            "Deliver and manage our services",
            "Improve our website and user experience",
            "Communicate important updates or service-related information",
            "Analyze website performance and usage trends",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          We only process personal data for legitimate business and professional purposes.
        </p>
      </div>
    ),
  },
  {
    number: "04",
    title: "Data Protection and Security",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          We take appropriate technical and organizational measures to protect your personal
          information against unauthorized access, loss, misuse, or alteration.
        </p>
        <p>
          However, please note that no method of internet transmission or electronic storage is
          completely secure, and we cannot guarantee absolute security.
        </p>
      </div>
    ),
  },
  {
    number: "05",
    title: "Data Sharing and Disclosure",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          We do not sell, rent, or trade your personal information. We may share your information
          only in the following situations:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          {[
            "With trusted service providers who support our website or operations",
            "When required by law, regulation, or legal process",
            "To protect the rights, safety, or property of LingualHive Ltd or others",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          All third parties are required to handle your data confidentially and securely.
        </p>
      </div>
    ),
  },
  {
    number: "06",
    title: "Data Retention",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        We keep personal information only for as long as necessary to fulfill the purposes
        outlined in this policy, unless a longer retention period is required by law.
      </p>
    ),
  },
  {
    number: "07",
    title: "Your Rights",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">You may have the right to:</p>
        <ul className="space-y-2 text-muted-foreground">
          {[
            "Access your personal data",
            "Request correction of inaccurate information",
            "Request deletion of your personal data",
            "Withdraw consent where applicable",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          To exercise these rights, please contact us using the details provided below.
        </p>
      </div>
    ),
  },
  {
    number: "08",
    title: "Cookies and Tracking Technologies",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        Our website may use cookies and similar technologies to improve functionality, analyze
        traffic, and enhance user experience. You may choose to disable cookies through your
        browser settings, but some features of the website may not function properly.
      </p>
    ),
  },
  {
    number: "09",
    title: "Third-Party Links",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        Our website may contain links to external websites. LingualHive is not responsible for
        the privacy practices, content, or policies of third-party websites.
      </p>
    ),
  },
  {
    number: "10",
    title: "Children's Privacy Policy",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        LingualHive Ltd does not knowingly collect personal information from children under the
        age of 13. If we become aware that we have unintentionally collected personal data from
        a child under 13, we will take immediate steps to delete such information from our
        records. If you are a parent or guardian and believe that your child has provided
        personal information to us, please contact us immediately.
      </p>
    ),
  },
  {
    number: "11",
    title: "Changes to This Policy",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        We may update this Privacy Policy from time to time. Any changes will be posted on this
        page with an updated revision date. Continued use of our website after changes means you
        accept the updated policy.
      </p>
    ),
  },
  {
    number: "12",
    title: "Contact Information",
    content: (
      <div className="space-y-1 text-muted-foreground leading-relaxed">
        <p className="font-semibold text-foreground">LingualHive Ltd</p>
        <p>Kigali, Rwanda</p>
        <p>
          Email:{" "}
          <a
            href="mailto:info@lingualhive.com"
            className="text-primary underline-offset-4 hover:underline"
          >
            info@lingualhive.com
          </a>
        </p>
        <p>Phone: +250 788 925</p>
      </div>
    ),
  },
];

export function PrivacyPolicyPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Legal
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">
            How we collect, use, and protect your personal information.
          </p>
          <p className="mt-4 text-sm text-primary-foreground/60">
            Last updated: June 2026
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="divide-y divide-border">
            {sections.map(({ number, title, content }) => (
              <div
                key={number}
                className="grid gap-6 py-12 md:grid-cols-[200px_1fr] md:gap-12"
              >
                {/* Left: number + title */}
                <div className="flex flex-row items-baseline gap-3 md:flex-col md:gap-2">
                  <span className="font-mono text-xs font-semibold tracking-widest text-gold">
                    {number}
                  </span>
                  <h2 className="font-display text-xl font-semibold leading-snug text-foreground">
                    {title}
                  </h2>
                </div>

                {/* Right: content */}
                <div>{content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            Questions about your data?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Reach out to our team and we'll be happy to help.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
