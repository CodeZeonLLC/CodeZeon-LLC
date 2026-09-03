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
        <section className="relative min-h-[70svh] overflow-hidden bg-brand">
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

          <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 lg:px-10 lg:pb-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/60">
              Service
            </p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-cream sm:text-5xl md:text-6xl">
              {service.title}
            </h1>
            <div className="mt-5 h-px w-24 bg-cream/70" />
            <p className="mt-8 max-w-2xl font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-cream sm:text-2xl">
              {service.lede}
            </p>
          </div>
        </section>

        <section className="bg-cream px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
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

        <section className="border-t border-line bg-cream-dim px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
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
