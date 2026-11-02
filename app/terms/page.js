import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { buildPageMetadata } from "../data/site";

export const metadata = buildPageMetadata({
  title: "Terms and Conditions",
  description:
    "Terms governing access to the Codezeon website, services, communications, and projects arranged through Codezeon.",
  path: "/terms",
});

const sections = [
  {
    title: "1. Introduction",
    blocks: [
      {
        type: "p",
        text: "Welcome to Codezeon (“Codezeon,” “we,” “our,” or “us”).",
      },
      {
        type: "p",
        text: "These Terms and Conditions (“Terms”) govern your access to and use of our website, services, communications, and any projects or transactions arranged through Codezeon.",
      },
      {
        type: "p",
        text: "By accessing our website, contacting us, requesting a quotation, or engaging our services, you agree to these Terms. If you do not agree, please do not use our website or services.",
      },
    ],
  },
  {
    title: "2. About Codezeon",
    blocks: [
      {
        type: "p",
        text: "Codezeon is a U.S.-based business providing technology-related services and digital solutions to businesses, organizations, and individuals.",
      },
      {
        type: "p",
        text: "Our services may include:",
      },
      {
        type: "ul",
        items: [
          "Website design and development",
          "Mobile application development",
          "Software development and digital solutions",
          "Graphic design and UI/UX design",
          "IT support and technical services",
          "Digital project coordination",
          "Other technology-related services agreed upon in writing",
        ],
      },
      {
        type: "p",
        text: "Codezeon works with independent professionals, vendors, contractors, and international partners where appropriate.",
      },
    ],
  },
  {
    title: "3. Global Partner",
    blocks: [
      {
        type: "p",
        text: "Codezeon works with Native Lessons as its Global Partner.",
      },
      {
        type: "p",
        text: "Through this partnership, Native Lessons may assist with local coordination, communications, project administration, vendor coordination, and other business activities, as agreed between the parties.",
      },
      {
        type: "p",
        text: "Depending on the applicable project agreement, services may be delivered by Codezeon, Native Lessons, independent professionals, subcontractors, or a combination of these parties.",
      },
      {
        type: "p",
        text: "The specific responsibilities of each party will be determined by the relevant written agreement or project documentation.",
      },
    ],
  },
  {
    title: "4. Eligibility and Acceptable Use",
    blocks: [
      {
        type: "p",
        text: "You must have the legal capacity to enter into a binding agreement to purchase or use our services.",
      },
      {
        type: "p",
        text: "You agree not to:",
      },
      {
        type: "ul",
        items: [
          "Use our website for unlawful, fraudulent, or deceptive purposes.",
          "Submit false, misleading, or unauthorized information.",
          "Infringe intellectual property or other legal rights.",
          "Attempt to gain unauthorized access to our systems.",
          "Introduce malicious software or interfere with website security.",
          "Use our services to facilitate illegal activities.",
        ],
      },
      {
        type: "p",
        text: "We may restrict access to our website or services where reasonably necessary to protect our business, users, systems, or legal rights.",
      },
    ],
  },
  {
    title: "5. Service Requests and Project Agreements",
    blocks: [
      {
        type: "p",
        text: "All project inquiries, quotations, proposals, and service requests are subject to review and acceptance by Codezeon.",
      },
      {
        type: "p",
        text: "Before work begins, the parties may agree in writing on:",
      },
      {
        type: "ul",
        items: [
          "Project scope and deliverables",
          "Pricing and payment terms",
          "Project milestones and deadlines",
          "Revisions and additional work",
          "Responsibilities of the client and service provider",
          "Ownership and licensing of deliverables",
          "Confidentiality and other project-specific conditions",
        ],
      },
      {
        type: "p",
        text: "A written proposal, statement of work, invoice, or signed agreement may supplement these Terms.",
      },
      {
        type: "p",
        text: "If a project-specific agreement conflicts with these Terms, the project-specific agreement will control for that project to the extent of the conflict.",
      },
    ],
  },
  {
    title: "6. Pricing and Payments",
    blocks: [
      {
        type: "p",
        text: "Prices, currencies, payment schedules, and accepted payment methods will be communicated in the applicable quotation, invoice, or project agreement.",
      },
      {
        type: "p",
        text: "Unless otherwise agreed in writing:",
      },
      {
        type: "ul",
        items: [
          "Work may begin after the required advance payment is received.",
          "Milestone payments must be made according to the agreed schedule.",
          "Additional work outside the agreed scope may incur additional charges.",
          "The client is responsible for applicable taxes, bank charges, and transaction fees unless otherwise agreed or required by law.",
        ],
      },
      {
        type: "p",
        text: "Failure to make a payment when due may result in a reasonable suspension of work or services, subject to the applicable agreement and law.",
      },
    ],
  },
  {
    title: "7. Cancellations and Refunds",
    blocks: [
      {
        type: "p",
        text: "Cancellation and refund eligibility will depend on the applicable service agreement, the stage of project completion, payments already made, and applicable law.",
      },
      {
        type: "p",
        text: "Fees for completed work, committed resources, approved expenses, or non-cancellable third-party services may be non-refundable to the extent permitted by law and the applicable agreement.",
      },
      {
        type: "p",
        text: "Any refund, credit, or cancellation arrangement must be confirmed in writing.",
      },
      {
        type: "p",
        text: "Nothing in these Terms excludes a refund or other remedy that cannot lawfully be excluded.",
      },
    ],
  },
  {
    title: "8. Client Responsibilities",
    blocks: [
      {
        type: "p",
        text: "Clients agree to:",
      },
      {
        type: "ul",
        items: [
          "Provide accurate project requirements and information.",
          "Supply necessary content, materials, credentials, and approvals.",
          "Ensure they have the rights to materials they provide.",
          "Respond to reasonable requests for feedback or clarification.",
          "Make payments according to the agreed terms.",
          "Maintain appropriate backups of their own data and materials.",
        ],
      },
      {
        type: "p",
        text: "Delays in providing information, approvals, or payments may affect project timelines and delivery dates.",
      },
    ],
  },
  {
    title: "9. Project Delivery and Revisions",
    blocks: [
      {
        type: "p",
        text: "Estimated timelines are provided in good faith but may change due to project complexity, client delays, third-party dependencies, or circumstances beyond our reasonable control.",
      },
      {
        type: "p",
        text: "The number of revisions, acceptance criteria, support period, and delivery format will be determined by the relevant project agreement.",
      },
      {
        type: "p",
        text: "Requests outside the agreed scope may require a revised quotation or timeline.",
      },
    ],
  },
  {
    title: "10. Intellectual Property",
    blocks: [
      {
        type: "p",
        text: "Unless otherwise agreed in writing:",
      },
      {
        type: "ul",
        items: [
          "Each party retains ownership of its pre-existing intellectual property.",
          "Codezeon retains ownership of its existing tools, frameworks, templates, processes, and reusable materials.",
          "Ownership or licensing of project-specific deliverables will be stated in the applicable project agreement.",
          "Third-party software, fonts, plugins, libraries, and other materials remain subject to their respective licenses.",
        ],
      },
      {
        type: "p",
        text: "Payment alone does not automatically transfer ownership of every tool, component, or third-party material used in a project.",
      },
      {
        type: "p",
        text: "Clients must not use materials supplied by Codezeon beyond the rights granted in the applicable agreement.",
      },
    ],
  },
  {
    title: "11. Confidentiality",
    blocks: [
      {
        type: "p",
        text: "Each party agrees to take reasonable steps to protect confidential information received from the other party and to use it only for legitimate business or project purposes.",
      },
      {
        type: "p",
        text: "Confidentiality obligations do not apply to information that is publicly available through no breach, already lawfully known, independently developed, or lawfully received from another source.",
      },
      {
        type: "p",
        text: "Disclosure may be made when required by law, subject to any legally available notice requirements.",
      },
      {
        type: "p",
        text: "Where a separate non-disclosure agreement applies, its terms will also govern the relevant information.",
      },
    ],
  },
  {
    title: "12. Third-Party Services",
    blocks: [
      {
        type: "p",
        text: "Our services may involve third-party hosting providers, payment processors, software platforms, APIs, vendors, or independent professionals.",
      },
      {
        type: "p",
        text: "Third-party services are subject to their own terms, availability, and privacy practices.",
      },
      {
        type: "p",
        text: "We are not responsible for third-party acts or failures except to the extent responsibility cannot lawfully be excluded or is expressly accepted in a written agreement.",
      },
    ],
  },
  {
    title: "13. International Services",
    blocks: [
      {
        type: "p",
        text: "Codezeon may provide services to clients in different countries and coordinate work with international professionals and partners.",
      },
      {
        type: "p",
        text: "Clients are responsible for complying with laws applicable to their own business, industry, use of deliverables, and transactions.",
      },
      {
        type: "p",
        text: "International transfers, payment processing, taxes, and delivery arrangements may be subject to additional legal or contractual requirements.",
      },
    ],
  },
  {
    title: "14. Website Content and Availability",
    blocks: [
      {
        type: "p",
        text: "We aim to keep our website accurate and accessible, but we do not guarantee that all content will always be complete, current, uninterrupted, or error-free.",
      },
      {
        type: "p",
        text: "Website content is provided for general informational purposes and does not constitute a binding service offer unless expressly stated.",
      },
      {
        type: "p",
        text: "We may update, modify, suspend, or discontinue website features as reasonably necessary.",
      },
    ],
  },
  {
    title: "15. Disclaimers",
    blocks: [
      {
        type: "p",
        text: "To the maximum extent permitted by applicable law, our website and general informational content are provided on an “as is” and “as available” basis.",
      },
      {
        type: "p",
        text: "We do not guarantee specific business results, revenue, customer acquisition, rankings, or outcomes from the use of our services unless expressly stated in a written agreement.",
      },
      {
        type: "p",
        text: "Any project-specific warranties must be set out in the applicable agreement.",
      },
      {
        type: "p",
        text: "Nothing in these Terms excludes warranties or rights that cannot legally be excluded.",
      },
    ],
  },
  {
    title: "16. Limitation of Liability",
    blocks: [
      {
        type: "p",
        text: "To the maximum extent permitted by applicable law, Codezeon will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, including loss of profits, revenue, business opportunities, or data, arising from the use of our website or services.",
      },
      {
        type: "p",
        text: "To the extent permitted by law, Codezeon’s total liability arising from a particular project will not exceed the fees paid or payable to Codezeon for that project during the twelve (12) months preceding the event giving rise to the claim.",
      },
      {
        type: "p",
        text: "This limitation does not apply to liability that cannot legally be limited or excluded, including any non-waivable statutory rights.",
      },
      {
        type: "p",
        text: "Any different liability terms in a signed project agreement will apply to that project to the extent stated.",
      },
    ],
  },
  {
    title: "17. Indemnification",
    blocks: [
      {
        type: "p",
        text: "To the extent permitted by applicable law, you agree to indemnify and hold Codezeon harmless from third-party claims, losses, and reasonable expenses arising directly from your unlawful use of our services, infringement of third-party rights through materials you supplied, or material breach of these Terms.",
      },
      {
        type: "p",
        text: "This provision does not apply to the extent a claim results from Codezeon’s own conduct for which indemnification cannot lawfully be required.",
      },
    ],
  },
  {
    title: "18. Suspension and Termination",
    blocks: [
      {
        type: "p",
        text: "We may suspend or terminate access to our website or services where reasonably necessary because of a material breach, non-payment, unlawful activity, security concerns, or other legitimate business reasons, subject to applicable law and any governing project agreement.",
      },
      {
        type: "p",
        text: "Termination does not eliminate payment obligations or other rights and responsibilities that accrued before termination.",
      },
    ],
  },
  {
    title: "19. Governing Law and Disputes",
    blocks: [
      {
        type: "p",
        text: "These Terms will be governed by the laws of the State of Delaware, United States, without regard to conflict-of-law principles, except where applicable law requires otherwise.",
      },
      {
        type: "p",
        text: "Any dispute will be brought before the state or federal courts located in New Castle County, Delaware, unless the parties agree in writing to another lawful dispute-resolution process.",
      },
      {
        type: "p",
        text: "Nothing in this section limits rights that cannot lawfully be waived.",
      },
    ],
  },
  {
    title: "20. Changes to These Terms",
    blocks: [
      {
        type: "p",
        text: "We may revise these Terms from time to time.",
      },
      {
        type: "p",
        text: "The updated version will be published on our website with a revised “Last Updated” date. Changes will apply prospectively unless otherwise required by law or expressly agreed.",
      },
      {
        type: "p",
        text: "Continued use of our website after updated Terms are published constitutes acceptance to the extent permitted by law.",
      },
    ],
  },
  {
    title: "21. Contact Information",
    blocks: [
      {
        type: "p",
        text: "For questions regarding these Terms, please contact:",
      },
      {
        type: "contact",
        name: "Codezeon ",
        lines: [
          "Email: info@codezeon.com",
          "Website: https://codezeon.com",
          "Business Address: CodeZeon, 1334 Mile Post Drive, Georgia, USA.",
        ],
        email: "info@codezeon.com",
        website: "https://codezeon.com",
      },
      {
        type: "p",
        text: "Global Partner:",
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

function TermsBlocks({ blocks }) {
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

export default function TermsPage() {
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
              Terms and Conditions
            </h1>
            <div className="mt-5 h-px w-16 bg-cream/70 sm:w-24" />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
              Terms governing use of the Codezeon website, services,
              communications, and projects.
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
                  <TermsBlocks blocks={section.blocks} />
                </section>
              ))}

              <p className="mt-10 border-t border-line pt-8 text-sm text-muted">
                Related pages:{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-brand transition-colors hover:text-brand-soft"
                >
                  Privacy Policy
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
