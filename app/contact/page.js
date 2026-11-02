import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { contact } from "../data/contact";
import { getService, getServiceOfferings } from "../data/services";
import { buildPageMetadata } from "../data/site";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contact Codezeon about your next product, brand, or business system. Email info@codezeon.com — we respond within one business day.",
  path: "/contact",
});

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const requested = typeof params.service === "string" ? params.service : "";
  const matchedCategory = getService(requested);
  const matchedOffering = getServiceOfferings().find(
    (item) => item.title === requested,
  );
  const defaultService = matchedOffering?.title ?? matchedCategory?.title ?? "";

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[56svh] overflow-hidden bg-brand sm:min-h-[60svh]">
          <div className="absolute inset-0">
            <Image
              src="/contact-us-hero-image.webp"
              alt="Two people shaking hands across a desk"
              fill
              priority
              className="object-cover object-[center_40%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand/25 to-transparent" />
          </div>

          <div className="shell relative z-10 flex min-h-[56svh] flex-col justify-end pb-12 pt-28 sm:min-h-[60svh] sm:pb-16 sm:pt-32 lg:pb-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/60">
              Contact
            </p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2rem,8vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-cream">
              Tell us what you need next.
            </h1>
            <div className="mt-5 h-px w-16 bg-cream/70 sm:w-24" />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
              Share the product, the brand, or the risk you want to close. We
              read every brief and reply within one business day.
            </p>
          </div>
        </section>

        <section className="bg-cream py-16 sm:py-20 lg:py-28">
          <div className="shell grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                Brief
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Start the conversation.
              </h2>
              <div className="mt-10">
                <ContactForm defaultService={defaultService} />
              </div>
            </div>

            <aside className="space-y-10 lg:pt-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Email
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-3 block font-[family-name:var(--font-display)] text-xl font-semibold text-brand transition-colors hover:text-brand-soft sm:text-2xl"
                >
                  {contact.email}
                </a>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Prefer to skip the form? Send a short note — goals, timing,
                  and what already exists.
                </p>
              </div>

              <div className="border-t border-line pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Phone
                </p>
                <a
                  href={contact.phoneHref}
                  className="mt-3 block font-[family-name:var(--font-display)] text-xl font-semibold text-brand transition-colors hover:text-brand-soft"
                >
                  {contact.phoneDisplay}
                </a>
                <p className="mt-2 text-sm text-muted">{contact.hours}</p>
              </div>

              <div className="border-t border-line pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Business address
                </p>
                <address className="mt-3 not-italic">
                  <p className="font-[family-name:var(--font-display)] text-base font-semibold text-brand">
                    {contact.company}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {contact.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </address>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
