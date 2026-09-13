import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getService, services } from "../../data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service — CodeZeon-LLC" };
  }

  return {
    title: `${service.title} — CodeZeon-LLC`,
    description: service.short,
  };
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
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand/70 to-brand/40" />
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
          <div className="shell grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
            <div>
              <p className="max-w-2xl text-lg leading-relaxed text-muted">
                {service.body}
              </p>
              <Link
                href={`/contact?service=${service.slug}`}
                className="mt-10 inline-flex bg-brand px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-deep"
              >
                Start a conversation
              </Link>
            </div>

            <ol className="space-y-8 border-t border-line pt-8 lg:border-t-0 lg:pt-0">
              {service.points.map((point, index) => (
                <li key={point.title} className="grid grid-cols-[3.5rem_1fr] gap-4">
                  <span className="font-mono text-sm text-muted">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-brand">
                      {point.title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {point.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-line bg-cream-dim py-16">
          <div className="shell">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              More from CodeZeon
            </p>
            <ul className="mt-8 grid gap-8 sm:grid-cols-3">
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
