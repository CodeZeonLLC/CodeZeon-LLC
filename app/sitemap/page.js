import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { services } from "../data/services";
import { buildPageMetadata } from "../data/site";

export const metadata = buildPageMetadata({
  title: "Sitemap",
  description:
    "A map of the CodeZeon LLC website: home, about, services, contact, FAQ, and legal pages.",
  path: "/sitemap",
});

const company = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

const legal = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms and conditions" },
  { href: "/sitemap", label: "Sitemap" },
];

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-brand pt-28 pb-14 sm:pt-32 sm:pb-16">
          <div className="shell">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/60">
              Sitemap
            </p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2rem,7vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-cream">
              Every page on this site.
            </h1>
            <div className="mt-5 h-px w-16 bg-cream/70 sm:w-24" />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
              Use this list to move through CodeZeon-LLC without hunting through
              the menu.
            </p>
          </div>
        </section>

        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="shell grid gap-14 md:grid-cols-3">
            <nav aria-labelledby="sitemap-company">
              <h2
                id="sitemap-company"
                className="font-[family-name:var(--font-display)] text-xl font-semibold text-brand"
              >
                Company
              </h2>
              <ul className="mt-6 space-y-3 border-t border-line pt-6">
                {company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-base text-ink transition-colors hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="sitemap-services">
              <h2
                id="sitemap-services"
                className="font-[family-name:var(--font-display)] text-xl font-semibold text-brand"
              >
                Services
              </h2>
              <ul className="mt-6 space-y-3 border-t border-line pt-6">
                <li>
                  <Link
                    href="/services"
                    className="text-base text-ink transition-colors hover:text-brand"
                  >
                    All services
                  </Link>
                </li>
                {services.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="text-base text-ink transition-colors hover:text-brand"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="sitemap-legal">
              <h2
                id="sitemap-legal"
                className="font-[family-name:var(--font-display)] text-xl font-semibold text-brand"
              >
                Legal
              </h2>
              <ul className="mt-6 space-y-3 border-t border-line pt-6">
                {legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-base text-ink transition-colors hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
