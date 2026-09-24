import Link from "next/link";
import { services } from "../data/services";

const summaries = {
  "creative-and-digital":
    "Brand, design, and digital builds that keep your presence consistent and sharp.",
  "business-technology":
    "Systems built around how your organization really runs.",
};

export default function Capabilities() {
  return (
    <section id="services" className="bg-cream py-24 lg:py-32" data-reveal>
      <div className="shell">
        <p
          className="text-sm font-semibold uppercase tracking-[0.2em] text-muted"
          data-reveal-child
          style={{ "--reveal-delay": 0 }}
        >
          Services
        </p>
        <h2
          className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
          data-reveal-child
          style={{ "--reveal-delay": 80 }}
        >
          Creative and digital. Business technology.
        </h2>
        <p
          className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          data-reveal-child
          style={{ "--reveal-delay": 140 }}
        >
          Two service lines, one team. Each covers the work you will actually
          ask us for.
        </p>

        <ul className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {services.map((item, index) => (
            <li
              key={item.slug}
              className="flex flex-col border border-line bg-cream-dim/50 p-7 sm:p-8"
              data-reveal-child
              style={{ "--reveal-delay": 200 + index * 100 }}
            >
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-brand">
                <Link
                  href={`/services/${item.slug}`}
                  className="transition-colors hover:text-brand-soft"
                >
                  {item.slug === "creative-and-digital"
                    ? "Creative and Digital"
                    : "Business Technology"}
                </Link>
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {summaries[item.slug]}
              </p>

              <ul className="mt-8 flex flex-wrap gap-2">
                {item.groups.map((group) => (
                  <li key={group.slug}>
                    <Link
                      href={`/services/${item.slug}/${group.slug}`}
                      className="inline-flex border border-line px-3 py-1.5 text-sm text-ink transition-colors hover:border-brand hover:text-brand"
                    >
                      {group.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href={`/services/${item.slug}`}
                className="link-underline mt-8 inline-flex text-sm font-semibold text-brand"
              >
                {item.explore}
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
