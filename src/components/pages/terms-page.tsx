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
        Welcome to LingualHive Ltd. These Terms and Conditions ("Terms") govern your access to
        and use of our website, digital platforms, and any related services offered by
        LingualHive Ltd. By accessing or using this website, you confirm that you have read,
        understood, and agree to be bound by these Terms. If you do not agree with any part of
        these Terms, you should discontinue use of the website immediately.
      </p>
    ),
  },
  {
    number: "02",
    title: "About Us",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        LingualHive Ltd is a Rwanda-based language, communication, and events firm
        headquartered in Kigali. We provide professional services including translation and
        localization, interpretation, strategic communication, event and experience management,
        language and cultural advisory, and capacity building and training services.
      </p>
    ),
  },
  {
    number: "03",
    title: "Use of Website",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          You agree to use this website only for lawful purposes and in a manner that does not
          violate applicable laws or regulations. You must not:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          {[
            "Use the website in any way that may damage, disable, or impair its functionality",
            "Attempt to gain unauthorized access to any part of the website or systems",
            "Use the website for fraudulent, harmful, or misleading activities",
            "Interfere with the experience of other users",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          LingualHive reserves the right to restrict or terminate access to users who violate
          these conditions.
        </p>
      </div>
    ),
  },
  {
    number: "04",
    title: "Intellectual Property",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        All content on this website, including but not limited to text, branding, logos,
        graphics, design elements, downloadable materials, and service descriptions, is the
        intellectual property of LingualHive Ltd unless otherwise stated. No content may be
        copied, reproduced, republished, modified, or distributed without prior written
        permission from LingualHive Ltd. Unauthorized use may result in legal action.
      </p>
    ),
  },
  {
    number: "05",
    title: "Service Information",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        We aim to ensure that all information published on our website is accurate, complete,
        and up to date. However, LingualHive does not guarantee that all content will always be
        free from errors or omissions. LingualHive reserves the right to update, modify, or
        remove any content, services, or information at any time without prior notice.
      </p>
    ),
  },
  {
    number: "06",
    title: "Client Services",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        All professional services provided by LingualHive Ltd are governed by separate written
        agreements, contracts, or service-level agreements. Before the commencement of any
        project, scope, pricing, timelines, deliverables, and responsibilities will be clearly
        defined and agreed upon with the client.
      </p>
    ),
  },
  {
    number: "07",
    title: "Confidentiality",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          LingualHive Ltd is committed to maintaining the confidentiality of all client
          information. Any sensitive, private, or proprietary information shared with us during
          service delivery will be handled with strict confidentiality and used only for the
          intended purpose. We will not disclose such information to third parties unless:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          {[
            "We have written consent from the client, or",
            "Disclosure is required by law or legal authority",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    number: "08",
    title: "Third-Party Links",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        Our website may contain links to external or third-party websites for informational
        purposes. LingualHive is not responsible for the content, accuracy, policies, or
        practices of any third-party websites. Users access such external sites at their own
        risk.
      </p>
    ),
  },
  {
    number: "09",
    title: "Limitation of Liability",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          To the fullest extent permitted by law, LingualHive Ltd shall not be held liable for
          any direct, indirect, incidental, or consequential damages arising from:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          {[
            "Use or inability to use the website",
            "Reliance on any information provided on the website",
            "Service interruptions or technical issues",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          This limitation does not apply where liability cannot be excluded under applicable law.
        </p>
      </div>
    ),
  },
  {
    number: "10",
    title: "User Submissions",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        Any information, feedback, inquiries, or content submitted through our website (such as
        contact forms or emails) may be reviewed and used by LingualHive to improve our
        services, communication, and user experience. Unless explicitly agreed otherwise, such
        submissions do not grant users any ownership rights over LingualHive systems, content,
        or intellectual property.
      </p>
    ),
  },
  {
    number: "11",
    title: "Changes to Terms",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        LingualHive Ltd reserves the right to revise, update, or modify these Terms and
        Conditions at any time. Any changes will be effective immediately upon being posted on
        the website. Continued use of the website after updates constitutes acceptance of the
        revised Terms.
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
        <p>Phone: +250 788 925 535</p>
      </div>
    ),
  },
];

export function TermsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Legal</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-6xl">
            Terms and Conditions
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">
            Please read these terms carefully before using our website or services.
          </p>
          <p className="mt-4 text-sm text-primary-foreground/60">Last updated: June 2025</p>
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
            Have questions about our terms?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our team is happy to clarify anything before you get started.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
