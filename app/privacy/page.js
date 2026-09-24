import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy — CodeZeon-LLC",
  description:
    "How Codezeon LLC collects, uses, discloses, stores, and protects personal information when you visit our website, contact us, or work with us.",
};

const sections = [
  {
    title: "1. Introduction",
    blocks: [
      {
        type: "p",
        text: "Codezeon LLC (“Codezeon,” “we,” “our,” or “us”) respects your privacy and is committed to handling personal information responsibly.",
      },
      {
        type: "p",
        text: "This Privacy Policy explains how we may collect, use, disclose, store, and protect personal information when you visit our website, contact us, request services, or work with us.",
      },
      {
        type: "p",
        text: "This policy is intended to describe our practices in a transparent manner. It must be read consistently with applicable privacy and data-protection laws.",
      },
    ],
  },
  {
    title: "2. Who We Are",
    blocks: [
      {
        type: "p",
        text: "Codezeon LLC is a U.S.-based technology services business.",
      },
      {
        type: "p",
        text: "We work with clients, vendors, independent professionals, and international partners, including Native Lessons, our Global Partner in Bangladesh.",
      },
      {
        type: "p",
        text: "Depending on the circumstances, Codezeon may act as a business deciding how and why personal information is used, or may process information on behalf of a client under a separate agreement.",
      },
    ],
  },
  {
    title: "3. Personal Information We May Collect",
    blocks: [
      {
        type: "p",
        text: "Depending on how you interact with us, we may collect the following categories of information:",
      },
      {
        type: "h3",
        text: "A. Contact and identification information",
      },
      {
        type: "ul",
        items: [
          "Name",
          "Email address",
          "Telephone number",
          "Business name",
          "Business address",
          "Job title or professional role",
        ],
      },
      {
        type: "h3",
        text: "B. Project and transaction information",
      },
      {
        type: "ul",
        items: [
          "Project requirements and communications",
          "Quotations, invoices, and payment status",
          "Contract and service-delivery information",
          "Files, content, or materials you choose to provide",
        ],
      },
      {
        type: "p",
        text: "We generally do not need full payment-card details to be sent to us directly. Where applicable, payment information may be handled by third-party payment processors.",
      },
      {
        type: "h3",
        text: "C. Technical and website information",
      },
      {
        type: "p",
        text: "Depending on our website configuration and the services we use, we may collect:",
      },
      {
        type: "ul",
        items: [
          "IP address",
          "Browser and device information",
          "Website usage and diagnostic data",
          "Approximate location inferred from technical information",
          "Cookie identifiers and similar technologies",
        ],
      },
      {
        type: "h3",
        text: "D. Communications",
      },
      {
        type: "p",
        text: "We may retain emails, contact-form submissions, support requests, and other communications you send to us.",
      },
      {
        type: "h3",
        text: "E. Recruitment and professional information",
      },
      {
        type: "p",
        text: "If you apply to work with us, we may collect your résumé, portfolio, professional experience, skills, and contact details.",
      },
      {
        type: "p",
        text: "Please do not send sensitive personal information unless it is genuinely necessary and requested through an appropriate channel.",
      },
    ],
  },
  {
    title: "4. How We Collect Information",
    blocks: [
      {
        type: "p",
        text: "We may collect personal information:",
      },
      {
        type: "ul",
        items: [
          "Directly from you when you contact us or request a quotation.",
          "Through forms, email, or other communication channels.",
          "During the delivery and administration of a project.",
          "Automatically through website logs, cookies, or analytics tools, where enabled.",
          "From business partners, vendors, or professional references where lawful.",
        ],
      },
    ],
  },
  {
    title: "5. How We Use Personal Information",
    blocks: [
      {
        type: "p",
        text: "We may use personal information to:",
      },
      {
        type: "ul",
        items: [
          "Respond to inquiries and service requests.",
          "Prepare proposals, quotations, and contracts.",
          "Deliver, manage, and improve our services.",
          "Communicate about projects, payments, and support.",
          "Coordinate with authorized vendors and project professionals.",
          "Process transactions and maintain business records.",
          "Protect our website, systems, and business against fraud or misuse.",
          "Meet legal, accounting, regulatory, and contractual obligations.",
          "Send business updates or marketing communications where permitted.",
        ],
      },
      {
        type: "p",
        text: "We will not use personal information for materially different purposes without providing any notice or obtaining any consent required by applicable law.",
      },
    ],
  },
  {
    title: "6. Legal Bases and Applicable Privacy Rights",
    blocks: [
      {
        type: "p",
        text: "Depending on the law that applies and the nature of the information, we may process personal information to perform a contract, take steps at your request before entering a contract, comply with legal obligations, protect legitimate business interests, or act with your consent where required.",
      },
      {
        type: "p",
        text: "Certain U.S. state privacy laws provide eligible residents with rights concerning their personal information. These may include rights to:",
      },
      {
        type: "ul",
        items: [
          "Know or access personal information.",
          "Request correction of inaccurate information.",
          "Request deletion of personal information.",
          "Obtain a portable copy of certain information.",
          "Opt out of certain sales, targeted advertising, or profiling activities.",
          "Appeal certain decisions concerning privacy requests.",
        ],
      },
      {
        type: "p",
        text: "The availability and scope of these rights depend on applicable law, eligibility, and any legal exceptions.",
      },
    ],
  },
  {
    title: "7. How We Share Personal Information",
    blocks: [
      {
        type: "p",
        text: "We may disclose personal information to the following categories of recipients, where appropriate:",
      },
      {
        type: "h3",
        text: "A. Service providers",
      },
      {
        type: "p",
        text: "Technology, hosting, communications, payment processing, analytics, security, and administrative providers who assist us in operating our business.",
      },
      {
        type: "h3",
        text: "B. Project professionals and vendors",
      },
      {
        type: "p",
        text: "Independent developers, designers, contractors, and other professionals who need relevant information to perform an authorized project.",
      },
      {
        type: "h3",
        text: "C. Business partners",
      },
      {
        type: "p",
        text: "Native Lessons and other authorized partners may receive information necessary to coordinate projects, communications, or business activities in Bangladesh.",
      },
      {
        type: "h3",
        text: "D. Professional advisers",
      },
      {
        type: "p",
        text: "Lawyers, accountants, auditors, insurers, and other professional advisers where reasonably necessary.",
      },
      {
        type: "h3",
        text: "E. Legal and safety-related disclosures",
      },
      {
        type: "p",
        text: "We may disclose information when required by law, legal process, or a valid governmental request, or when reasonably necessary to protect rights, safety, security, or prevent fraud.",
      },
      {
        type: "h3",
        text: "F. Business transfers",
      },
      {
        type: "p",
        text: "Information may be transferred as part of a merger, restructuring, financing, acquisition, or sale of business assets, subject to applicable legal requirements.",
      },
      {
        type: "p",
        text: "We do not state that we never sell or share personal information unless that statement has been verified against our actual business and website practices.",
      },
    ],
  },
  {
    title: "8. Cookies and Similar Technologies",
    blocks: [
      {
        type: "p",
        text: "Our website may use cookies and similar technologies to support essential functionality, remember preferences, understand website usage, or support marketing activities.",
      },
      {
        type: "p",
        text: "The specific cookies used depend on the website configuration and third-party tools enabled.",
      },
      {
        type: "p",
        text: "Where required by law, we will provide appropriate notice and consent or opt-out mechanisms.",
      },
      {
        type: "p",
        text: "You can also manage cookies through your browser settings. Disabling certain cookies may affect website functionality.",
      },
      {
        type: "p",
        text: "If applicable privacy laws require us to recognize a browser-based opt-out preference signal, such as Global Privacy Control, we will handle it in accordance with those laws.",
      },
    ],
  },
  {
    title: "9. International Data Transfers",
    blocks: [
      {
        type: "p",
        text: "Codezeon may coordinate projects involving the United States, Bangladesh, and other countries.",
      },
      {
        type: "p",
        text: "Personal information may therefore be accessed or processed in countries other than the country in which it was collected.",
      },
      {
        type: "p",
        text: "Where required, we will use appropriate safeguards and contractual arrangements for international transfers.",
      },
    ],
  },
  {
    title: "10. Data Retention",
    blocks: [
      {
        type: "p",
        text: "We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including service delivery, contractual obligations, accounting, dispute resolution, security, and legal compliance.",
      },
      {
        type: "p",
        text: "Retention periods vary depending on the type of information and the circumstances.",
      },
      {
        type: "p",
        text: "When information is no longer required, we will take reasonable steps to delete, destroy, or de-identify it, subject to legal and operational requirements.",
      },
    ],
  },
  {
    title: "11. Data Security",
    blocks: [
      {
        type: "p",
        text: "We use reasonable administrative, technical, and organizational measures designed to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.",
      },
      {
        type: "p",
        text: "However, no website, electronic communication, or storage system can be guaranteed to be completely secure.",
      },
      {
        type: "p",
        text: "Please avoid sending passwords, payment-card details, or other highly sensitive information through ordinary email or public website forms.",
      },
    ],
  },
  {
    title: "12. Children’s Privacy",
    blocks: [
      {
        type: "p",
        text: "Our website and business services are not directed to children under 13, and we do not knowingly collect personal information online from children under 13 without legally required authorization.",
      },
      {
        type: "p",
        text: "If you believe a child has provided personal information in violation of this policy, please contact us so that we can review the matter and take appropriate action.",
      },
      {
        type: "p",
        text: "Additional requirements may apply under the Children’s Online Privacy Protection Act (COPPA) and other applicable laws.",
      },
    ],
  },
  {
    title: "13. Your Privacy Choices and Requests",
    blocks: [
      {
        type: "p",
        text: "You may contact us to:",
      },
      {
        type: "ul",
        items: [
          "Request access to personal information we maintain about you.",
          "Request correction or deletion, where applicable.",
          "Withdraw consent where processing relies on consent.",
          "Opt out of marketing emails using the unsubscribe mechanism provided.",
          "Submit an applicable privacy-rights request.",
        ],
      },
      {
        type: "p",
        text: "We may need to verify your identity or authority before responding. We will handle requests within the timeframes required by applicable law.",
      },
      {
        type: "p",
        text: "We will not unlawfully discriminate against individuals for exercising applicable privacy rights.",
      },
    ],
  },
  {
    title: "14. Third-Party Websites",
    blocks: [
      {
        type: "p",
        text: "Our website may contain links to third-party websites, platforms, or services.",
      },
      {
        type: "p",
        text: "We do not control their privacy practices. Please review the privacy policies of those third parties before providing them with personal information.",
      },
    ],
  },
  {
    title: "15. Changes to This Privacy Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this policy to reflect changes in our services, technology, business practices, or legal obligations.",
      },
      {
        type: "p",
        text: "The latest version will be published on our website with an updated “Last Updated” date.",
      },
      {
        type: "p",
        text: "Where required by law, we will provide additional notice or obtain consent for material changes.",
      },
    ],
  },
  {
    title: "16. Contact Us",
    blocks: [
      {
        type: "p",
        text: "For privacy questions or requests, contact:",
      },
      {
        type: "contact",
        name: "Codezeon LLC",
        lines: [
          "Privacy Contact: Privacy Team",
          "Email: info@codezeon.com",
          "Website: https://codezeon.com",
          "Business Address: 1334 Mile Post Drive",
        ],
        email: "info@codezeon.com",
        website: "https://codezeon.com",
      },
      {
        type: "p",
        text: "Global Partner in Bangladesh:",
      },
      {
        type: "contact",
        name: "Native Lessons",
        lines: [
          "Phone/WhatsApp: 01333254050",
          "Address: 57/7/C Panthapath, Dhaka-1215, Bangladesh",
        ],
        phone: "01333254050",
        phoneHref: "tel:+8801333254050",
        whatsapp: "https://wa.me/8801333254050",
      },
    ],
  },
];

function PolicyBlocks({ blocks }) {
  return (
    <div className="mt-4 space-y-4">
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return (
            <p key={index} className="text-base leading-relaxed text-muted">
              {block.text}
            </p>
          );
        }

        if (block.type === "h3") {
          return (
            <h3
              key={index}
              className="pt-2 font-[family-name:var(--font-display)] text-base font-semibold text-ink"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "ul") {
          return (
            <ul
              key={index}
              className="list-disc space-y-1.5 pl-5 text-base leading-relaxed text-muted"
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "contact") {
          return (
            <div
              key={index}
              className="border border-line bg-cream-dim/60 px-5 py-4"
            >
              <p className="font-[family-name:var(--font-display)] text-base font-semibold text-brand">
                {block.name}
              </p>
              <div className="mt-2 space-y-1 text-sm leading-relaxed text-muted">
                {block.lines.map((line) => {
                  if (block.email && line.includes(block.email)) {
                    return (
                      <p key={line}>
                        Email:{" "}
                        <a
                          href={`mailto:${block.email}`}
                          className="font-medium text-brand transition-colors hover:text-brand-soft"
                        >
                          {block.email}
                        </a>
                      </p>
                    );
                  }
                  if (block.website && line.includes(block.website)) {
                    return (
                      <p key={line}>
                        Website:{" "}
                        <a
                          href={block.website}
                          className="font-medium text-brand transition-colors hover:text-brand-soft"
                        >
                          {block.website}
                        </a>
                      </p>
                    );
                  }
                  if (block.phone && line.includes(block.phone)) {
                    return (
                      <p key={line}>
                        Phone/WhatsApp:{" "}
                        <a
                          href={block.phoneHref}
                          className="font-medium text-brand transition-colors hover:text-brand-soft"
                        >
                          {block.phone}
                        </a>
                        {block.whatsapp ? (
                          <>
                            {" · "}
                            <a
                              href={block.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-brand transition-colors hover:text-brand-soft"
                            >
                              WhatsApp
                            </a>
                          </>
                        ) : null}
                      </p>
                    );
                  }
                  return <p key={line}>{line}</p>;
                })}
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-brand pt-28 pb-14 sm:pt-32 sm:pb-16">
          <div className="shell">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/60">
              Legal
            </p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2rem,7vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-cream">
              Privacy Policy
            </h1>
            <div className="mt-5 h-px w-16 bg-cream/70 sm:w-24" />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
              How Codezeon LLC collects, uses, discloses, stores, and protects
              personal information.
            </p>
            <p className="mt-4 text-sm text-cream/60">
              Effective Date: September 19, 2026
              <br />
              Last Updated: September 19, 2026
            </p>
          </div>
        </section>

        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <article className="shell">
            <div className="max-w-3xl">
              {sections.map((section) => (
                <section
                  key={section.title}
                  className="border-t border-line py-10 first:border-t-0 first:pt-0"
                >
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-brand sm:text-2xl">
                    {section.title}
                  </h2>
                  <PolicyBlocks blocks={section.blocks} />
                </section>
              ))}

              <p className="mt-10 border-t border-line pt-8 text-sm text-muted">
                Related pages:{" "}
                <Link
                  href="/terms"
                  className="font-medium text-brand transition-colors hover:text-brand-soft"
                >
                  Terms and Conditions
                </Link>
                {" · "}
                <Link
                  href="/faq"
                  className="font-medium text-brand transition-colors hover:text-brand-soft"
                >
                  FAQ
                </Link>
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
