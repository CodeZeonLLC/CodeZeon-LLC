import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { getService } from "../data/services";

export const metadata = {
  title: "Contact — CodeZeon-LLC",
  description:
    "Tell CodeZeon-LLC about the product, brand, or risk you want to close. We respond within one business day.",
};

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const requested = typeof params.service === "string" ? params.service : "";
  const matched = getService(requested);
  const defaultService = matched?.title ?? "";

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[56svh] overflow-hidden bg-brand sm:min-h-[60svh]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80"
              alt="Team in conversation around a table"
              fill
              priority
              className="object-cover object-[center_40%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand/55 to-brand/30" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[56svh] max-w-7xl flex-col justify-end px-4 pb-12 pt-28 sm:min-h-[60svh] sm:px-6 sm:pb-16 sm:pt-32 lg:px-10 lg:pb-20">
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

        <section className="bg-cream px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
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
                  href="mailto:hello@codezeon.com"
                  className="mt-3 block font-[family-name:var(--font-display)] text-xl font-semibold text-brand transition-colors hover:text-brand-soft sm:text-2xl"
                >
                  hello@codezeon.com
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
                  href="tel:+13025550184"
                  className="mt-3 block font-[family-name:var(--font-display)] text-xl font-semibold text-brand transition-colors hover:text-brand-soft"
                >
                  +1 (302) 555-0184
                </a>
                <p className="mt-2 text-sm text-muted">
                  Weekdays, 9:00–18:00 ET
                </p>
              </div>

              <div className="border-t border-line pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Studio
                </p>
                <address className="mt-3 not-italic">
                  <p className="font-[family-name:var(--font-display)] text-base font-semibold text-brand">
                    CodeZeon-LLC
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    418 N Market Street
                    <br />
                    Suite 210
                    <br />
                    Wilmington, DE 19801
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
