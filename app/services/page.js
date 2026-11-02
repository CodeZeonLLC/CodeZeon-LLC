import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { services, countOfferings } from "../data/services";
import { buildPageMetadata } from "../data/site";

export const metadata = buildPageMetadata({
  title: "Services",
  description:
    "Creative & Digital. Business Technology. Brand, product, and growth work on one side. Operational systems that run the business on the other.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[56svh] overflow-hidden bg-brand sm:min-h-[60svh]">
          <div className="absolute inset-0">
            <Image
              src="/service-section-hero.webp"
              alt="Hand holding a stylus over a drawing tablet"
              fill
              priority
              className="object-cover object-[center_45%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand/25 to-transparent" />
          </div>

          <div className="shell relative z-10 flex min-h-[56svh] flex-col justify-end pb-12 pt-28 sm:min-h-[60svh] sm:pb-16 sm:pt-32 lg:pb-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/60">
              Services
            </p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2rem,8vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-cream">
              Creative & Digital. Business Technology.
            </h1>
            <div className="mt-5 h-px w-16 bg-cream/70 sm:w-24" />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
              Brand, product, and growth work on one side. Operational systems
              that run the business on the other. The same delivery standard for
              both.
            </p>
          </div>
        </section>

        <section className="bg-cream py-16 sm:py-20 lg:py-28">
          <div className="shell">
            <ul className="grid gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16">
              {services.map((item, index) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-brand">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-brand/15" />
                    </div>
                    <span className="mt-6 block font-mono text-sm text-muted">
                      0{index + 1}
                    </span>
                    <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-brand transition-colors group-hover:text-brand-soft">
                      {item.title}
                    </h2>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                      {item.short}
                    </p>
                    <p className="mt-3 text-sm text-muted">
                      {countOfferings(item)} services
                    </p>
                    <span className="mt-4 inline-flex text-sm font-semibold text-brand">
                      {item.explore}
                      <span aria-hidden="true" className="ml-2">
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-line bg-cream-dim py-16 lg:py-20">
          <div className="shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                Next
              </p>
              <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Not sure which service comes first?
              </h2>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
                Tell us the outcome. We will recommend the work—and whether it
                should be fixed scope or a retainer.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-12 shrink-0 items-center bg-brand px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-deep"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
