import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy — CodeZeon-LLC",
  description:
    "How CodeZeon-LLC collects, uses, and protects information you share with us.",
};

const sections = [
  {
    title: "Who we are",
    body: [
      "This policy covers the website operated by CodeZeon-LLC (“CodeZeon,” “we,” “us”), a Delaware limited liability company at 418 N Market Street, Suite 210, Wilmington, DE 19801. Questions about this policy can be sent to hello@codezeon.com.",
    ],
  },
  {
    title: "What this site collects",
    body: [
      "This website is a brochure and contact site. We do not run an account system, a store, or a newsletter signup.",
      "If you write to us through the contact page, your browser opens a message to hello@codezeon.com. The fields you fill in—name, email, company, area of interest, and your note—are placed in that message. They are sent by your own email client. We do not store those fields on this website’s servers.",
      "If you email us directly, we receive whatever you include in that message, including your address and any attachments.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "We use contact details and project notes only to reply, to understand the work you are asking about, and to keep a record of the conversation if an engagement starts. We do not sell personal information. We do not use it for advertising.",
    ],
  },
  {
    title: "Cookies and logs",
    body: [
      "This site does not set advertising or analytics cookies, and it does not use a tracking pixel.",
      "Hosting and content-delivery providers may keep ordinary technical logs—such as IP address, browser type, pages requested, and time of request—to operate the site, diagnose errors, and protect against abuse. Those logs are not used to build a marketing profile.",
    ],
  },
  {
    title: "Who else may see information",
    body: [
      "Email and hosting providers process messages and site traffic on our behalf so the service can run. If we take on counsel or subcontractors for a project you asked us about, we share only what they need to do that work, under a duty to keep it confidential.",
      "We may disclose information if the law requires it, or to protect the company, our clients, or the public from harm.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "Correspondence is kept as long as it is useful for the conversation or a related engagement, and then for a reasonable period required by tax, contract, or professional records. Technical logs follow the retention of the host. You can ask us to delete a message you sent; we will do so unless we are required to keep it.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can write to hello@codezeon.com to ask what we hold about you, to correct it, or to ask us to delete it. If you are in a place that grants further rights—such as access, portability, or a restriction on processing—we will honor a valid request. You may also complain to a data-protection authority where you live.",
      "You do not have to submit the contact form to reach us. A plain email is enough.",
    ],
  },
  {
    title: "Children",
    body: [
      "This site is intended for adults acting for a business. We do not knowingly collect information from children under 16. If you believe a child has sent us personal information, write to hello@codezeon.com and we will delete it.",
    ],
  },
  {
    title: "Changes",
    body: [
      "If we change how we handle information, we will update this page and the date below. Continued use of the site after a change means you have seen the new terms.",
    ],
  },
];

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
              Privacy policy
            </h1>
            <div className="mt-5 h-px w-16 bg-cream/70 sm:w-24" />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
              How CodeZeon-LLC treats the information you share with this site
              and with our studio.
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
              <section key={section.title} className="border-t border-line py-10 first:border-t-0 first:pt-0">
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
