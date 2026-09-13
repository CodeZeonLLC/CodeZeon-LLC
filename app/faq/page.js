import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { faqGroups } from "../data/faq";

export const metadata = {
  title: "FAQ — CodeZeon-LLC",
  description:
    "How CodeZeon-LLC works: services, fixed scope versus retainer, timelines, ownership, and how to start.",
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-brand pt-28 pb-14 sm:pt-32 sm:pb-16">
          <div className="shell">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/60">
              FAQ
            </p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2rem,7vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-cream">
              Questions before you write.
            </h1>
            <div className="mt-5 h-px w-16 bg-cream/70 sm:w-24" />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
              How we engage, what a first conversation is for, and what happens
              after you send a brief.
            </p>
          </div>
        </section>

        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="shell">
            <div className="max-w-3xl space-y-14">
              {faqGroups.map((group) => (
                <section key={group.title}>
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-brand sm:text-2xl">
                    {group.title}
                  </h2>
                  <dl className="mt-6 divide-y divide-line border-y border-line">
                    {group.items.map((item) => (
                      <details key={item.q} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-[family-name:var(--font-display)] text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                          {item.q}
                          <span
                            aria-hidden="true"
                            className="shrink-0 text-muted transition-transform group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <p className="mt-3 text-base leading-relaxed text-muted">
                          {item.a}
                        </p>
                      </details>
                    ))}
                  </dl>
                </section>
              ))}

            <div className="mt-16 border-t border-line pt-10">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink sm:text-2xl">
                Still looking for a number or a date?
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                Those follow the brief. Send the outcome and we will recommend a
                shape—and a timeline—within one business day.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center bg-brand px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-deep"
                >
                  Contact us
                </Link>
                <Link
                  href="/services"
                  className="inline-flex min-h-12 items-center border border-line px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-cream-dim"
                >
                  See services
                </Link>
              </div>
            </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
