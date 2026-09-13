import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms and Conditions — CodeZeon-LLC",
  description:
    "Terms for using the CodeZeon-LLC website. Paid work is governed by a separate written agreement.",
};

const sections = [
  {
    title: "Agreement to these terms",
    body: [
      "These terms govern your use of the website operated by CodeZeon-LLC (“CodeZeon,” “we,” “us”), a Delaware limited liability company at 418 N Market Street, Suite 210, Wilmington, DE 19801. If you do not agree, do not use the site.",
      "A conversation, a contact-form message, or a proposal is not a contract for services. Paid work starts only when both sides sign a written agreement—typically a statement of work or retainer letter.",
    ],
  },
  {
    title: "The website",
    body: [
      "This site is provided to describe our practices and to make it easy to reach us. Content is for general information. It is not legal, security, or investment advice, and it is not a promise that we will take on any particular engagement.",
      "We may change or withdraw pages, case studies, or service descriptions at any time. We do not warrant that the site will be uninterrupted, error-free, or free of harmful code.",
    ],
  },
  {
    title: "Inquiries and proposals",
    body: [
      "If you write to us, you confirm that the information you send is accurate to the best of your knowledge and that you are authorized to share it. Do not send passwords, production secrets, or personal data that is not needed to start a conversation.",
      "A quote, timeline, or recommended model (fixed scope or retainer) is an estimate until it is written into a signed agreement. Either of us may stop talks at any time before that signature.",
    ],
  },
  {
    title: "Engagements",
    body: [
      "If we work together, the signed agreement controls scope, fees, timelines, intellectual property, confidentiality, and how the relationship can end. Where that agreement and these website terms conflict, the signed agreement wins for that engagement.",
      "Work samples on this site are selected and, where needed, anonymized. They describe the shape of past work. They are not a guarantee of the same result for your company.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "The site’s design, copy, marks, and media that we own remain ours. You may view the pages and share a link. You may not copy the site, scrape it at volume, or use our name or marks to imply a partnership we have not agreed to in writing.",
      "Photographs may be licensed from third parties. Client names, products, and marks that appear in any work sample remain with their owners.",
    ],
  },
  {
    title: "Acceptable use",
    body: [
      "You may not use the site to break the law, to interfere with its operation, or to attempt unauthorized access to our systems or anyone else’s. We may block access if we believe these terms are being abused.",
    ],
  },
  {
    title: "Third-party sites",
    body: [
      "Links and embedded media may point to services we do not control, including image hosts. Their terms and privacy practices apply when you leave this site. We are not responsible for those services.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the fullest extent the law allows, CodeZeon-LLC is not liable for any indirect, incidental, special, consequential, or punitive damages, or for lost profits, data, or goodwill, arising from your use of this website or from reliance on its content.",
      "Our total liability arising from use of the website is limited to one hundred U.S. dollars (US $100). This cap does not apply to liability that the law does not let us limit. Liability for a paid engagement is set only in that engagement’s agreement.",
    ],
  },
  {
    title: "Indemnity",
    body: [
      "You will defend and indemnify CodeZeon-LLC against claims, losses, and reasonable legal fees that arise from your misuse of the site or from material you send us that you were not entitled to share.",
    ],
  },
  {
    title: "Governing law",
    body: [
      "These terms are governed by the laws of the State of Delaware, without regard to conflict-of-law rules. Courts located in Delaware have exclusive jurisdiction over disputes about this website, except where applicable law requires otherwise.",
    ],
  },
  {
    title: "Changes",
    body: [
      "We may update these terms by posting a new version on this page and changing the date below. Continued use of the site after a change means you accept the updated terms.",
    ],
  },
];

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
              Terms and conditions
            </h1>
            <div className="mt-5 h-px w-16 bg-cream/70 sm:w-24" />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
              How this website may be used. Paid work is governed by a separate
              written agreement.
            </p>
            <p className="mt-4 text-sm text-cream/60">
              Last updated September 13, 2026
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
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 text-base leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              <section className="border-t border-line pt-10">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-brand sm:text-2xl">
                  Contact
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  CodeZeon-LLC
                  <br />
                  418 N Market Street, Suite 210
                  <br />
                  Wilmington, DE 19801
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  <a
                    href="mailto:hello@codezeon.com"
                    className="font-semibold text-brand transition-colors hover:text-brand-soft"
                  >
                    hello@codezeon.com
                  </a>
                  <br />
                  <a
                    href="tel:+13025550184"
                    className="font-semibold text-brand transition-colors hover:text-brand-soft"
                  >
                    +1 (302) 555-0184
                  </a>
                </p>
              </section>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
