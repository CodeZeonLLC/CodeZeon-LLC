import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  getAllServiceGroups,
  getServiceGroup,
} from "../../../data/services";

export function generateStaticParams() {
  return getAllServiceGroups().map(({ serviceSlug, groupSlug }) => ({
    slug: serviceSlug,
    group: groupSlug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug, group: groupSlug } = await params;
  const match = getServiceGroup(slug, groupSlug);

  if (!match) {
    return { title: "Service — CodeZeon-LLC" };
  }

  return {
    title: `${match.group.title} — ${match.service.title} — CodeZeon-LLC`,
    description: match.group.short,
  };
}

export default async function ServiceGroupPage({ params }) {
  const { slug, group: groupSlug } = await params;
  const match = getServiceGroup(slug, groupSlug);

  if (!match) {
    notFound();
  }

  const { service, group } = match;
  const otherGroups = service.groups.filter((item) => item.slug !== group.slug);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[52svh] overflow-hidden bg-brand sm:min-h-[56svh]">
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

          <div className="shell relative z-10 flex min-h-[52svh] flex-col justify-end pb-12 pt-28 sm:min-h-[56svh] sm:pb-16 sm:pt-32 lg:pb-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/60">
              <Link
                href={`/services/${service.slug}`}
                className="transition-colors hover:text-cream"
              >
                {service.title}
              </Link>
            </p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2rem,8vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-cream">
              {group.title}
            </h1>
            <div className="mt-5 h-px w-16 bg-cream/70 sm:w-24" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
              {group.short}
            </p>
          </div>
        </section>

        <section className="bg-cream py-16 sm:py-20 lg:py-28">
          <div className="shell max-w-3xl">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-brand sm:text-3xl">
              What we offer
            </h2>
            <ul className="mt-8 space-y-0 border-t border-line">
              {group.offerings.map((item) => (
                <li
                  key={item.title}
                  className="grid gap-1 border-b border-line py-5 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-10"
                >
                  <p className="flex items-start gap-2 text-base font-medium text-brand sm:text-lg">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    />
                    {item.title}
                  </p>
                  <p className="pl-3.5 text-sm leading-relaxed text-muted sm:pl-0 sm:text-base">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>

            <Link
              href={`/contact?service=${service.slug}`}
              className="mt-12 inline-flex bg-brand px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-deep"
            >
              Start a conversation
            </Link>
          </div>
        </section>

        {otherGroups.length ? (
          <section className="border-t border-line bg-cream-dim py-16">
            <div className="shell">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                More in {service.title}
              </p>
              <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {otherGroups.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${service.slug}/${item.slug}`}
                      className="group block"
                    >
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-brand transition-colors group-hover:text-brand-soft">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.short}
                      </p>
                      <span className="mt-4 inline-flex text-sm font-semibold text-brand">
                        Explore
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
        ) : null}
      </main>
      <Footer />
    </>
  );
}
