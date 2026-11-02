import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getService, services } from "../../data/services";
import { whyChooseUs } from "../../data/whyChooseUs";
import OfferingGrid from "../../components/OfferingGrid";
import { buildPageMetadata } from "../../data/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service" };
  }

  return buildPageMetadata({
    title: service.title,
    description: service.short,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[56svh] overflow-hidden bg-brand sm:min-h-[60svh]">
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand/80 to-brand/55" />
          </div>

          <div className="shell relative z-10 flex min-h-[56svh] flex-col justify-end pb-12 pt-28 sm:min-h-[60svh] sm:pb-16 sm:pt-32 lg:pb-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/60">
              Service
            </p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2rem,8vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-cream">
              {service.title}
            </h1>
            <div className="mt-5 h-px w-16 bg-cream/70 sm:w-24" />
            <p className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-cream sm:text-xl">
              {service.lede}
            </p>
          </div>
        </section>

        <section className="bg-cream py-20 lg:py-28">
          <div className="shell">
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-muted">{service.body}</p>
              <Link
                href={`/contact?service=${service.slug}`}
                className="mt-10 inline-flex bg-brand px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-deep"
              >
                Start a conversation
              </Link>
            </div>

            <h2 className="mt-16 font-[family-name:var(--font-display)] text-2xl font-semibold text-brand sm:mt-20 sm:text-3xl">
              What we offer
            </h2>
            <OfferingGrid offerings={service.offerings} />
          </div>
        </section>

        <section className="bg-brand py-16 text-cream sm:py-20 lg:py-28">
          <div className="shell">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/60">
              Why Choose Us
            </p>
            <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight">
              What sets the partnership apart.
            </h2>
            <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
              {whyChooseUs.map((item, index) => (
                <li key={item.title} className="border-t border-cream/15 pt-6">
                  <span className="font-mono text-sm text-cream/50">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-cream/75">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-line bg-cream-dim py-16">
          <div className="shell">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              More from Codezeon
            </p>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="group block"
                  >
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-brand transition-colors group-hover:text-brand-soft">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.short}
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
      </main>
      <Footer />
    </>
  );
}
