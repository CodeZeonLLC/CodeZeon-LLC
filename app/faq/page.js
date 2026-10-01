import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { faqIntro, faqItems } from "../data/faq";
import { buildPageMetadata } from "../data/site";

export const metadata = buildPageMetadata({
  title: "FAQ",
  description: faqIntro,
  path: "/faq",
});

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
              Frequently Asked Questions
            </h1>
            <div className="mt-5 h-px w-16 bg-cream/70 sm:w-24" />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
              {faqIntro}
            </p>
          </div>
        </section>

        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="shell max-w-3xl">
            <ul className="divide-y divide-line border-y border-line">
              {faqItems.map((item, index) => (
                <li key={item.q} className="py-8 sm:py-10">
                  <p className="font-mono text-sm text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-brand sm:text-2xl">
                    {item.q}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {item.a}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-12 text-sm text-muted">
              Still have a question?{" "}
              <Link
                href="/contact"
                className="link-underline font-semibold text-brand"
              >
                Contact us
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
