import Link from "next/link";
import {
  LuCodeXml,
  LuPalette,
  LuShieldCheck,
  LuChartColumnIncreasing,
} from "react-icons/lu";
import { services } from "../data/services";

const iconClass = "h-6 w-6 sm:h-7 sm:w-7";

const icons = {
  "software-solutions": <LuCodeXml className={iconClass} aria-hidden="true" />,
  "digital-multimedia": <LuPalette className={iconClass} aria-hidden="true" />,
  "cyber-security": <LuShieldCheck className={iconClass} aria-hidden="true" />,
  "technology-consulting": (
    <LuChartColumnIncreasing className={iconClass} aria-hidden="true" />
  ),
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
          className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
          data-reveal-child
          style={{ "--reveal-delay": 80 }}
        >
          Four practices. One standard of delivery.
        </h2>

        <ul className="mt-16 divide-y divide-line border-y border-line">
          {services.map((item, index) => (
            <li
              key={item.slug}
              className="service-row group border-l-[3px] border-l-brand"
              data-reveal-child
              style={{ "--reveal-delay": 140 + index * 100 }}
            >
              <div className="service-row-inner">
                <span className="service-row-num font-mono text-base font-bold text-brand sm:text-lg">
                  0{index + 1}
                </span>

                <h3 className="service-row-title font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-brand sm:text-2xl">
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-start gap-3 transition-colors hover:text-brand-soft"
                  >
                    <span className="mt-0.5 inline-flex shrink-0 text-brand">
                      {icons[item.slug]}
                    </span>
                    <span>{item.title}</span>
                  </Link>
                </h3>

                <div className="service-row-copy">
                  <p className="text-base leading-relaxed text-muted">
                    {item.short}
                  </p>
                  <Link
                    href={`/services/${item.slug}`}
                    className="link-underline mt-5 inline-flex text-sm font-semibold text-brand transition-colors duration-300 ease-out group-hover:text-brand-soft hover:text-brand-soft"
                  >
                    {item.explore}
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
