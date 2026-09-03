import Link from "next/link";
import { services } from "../data/services";

export default function Capabilities() {
  return (
    <section
      id="services"
      className="relative bg-cream px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-60" />
      <div className="relative mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          Services
        </p>
        <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
          Four practices. One standard of delivery.
        </h2>

        <ul className="mt-16 divide-y divide-line border-y border-line">
          {services.map((item, index) => (
            <li
              key={item.slug}
              className="grid gap-4 py-8 md:grid-cols-[8rem_1fr_1.3fr] md:items-baseline md:gap-10"
            >
              <span className="font-mono text-sm text-muted">
                0{index + 1}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-brand sm:text-2xl">
                {item.title}
              </h3>
              <div>
                <p className="max-w-xl text-base leading-relaxed text-muted">
                  {item.short}
                </p>
                <Link
                  href={`#`}
                  className="mt-4 inline-flex text-sm font-semibold text-brand transition-colors hover:text-brand-soft"
                >
                  {item.explore}
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
