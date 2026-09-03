import Link from "next/link";
import { services } from "../data/services";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
              CodeZeon-LLC
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              Software, design, security, and counsel for teams that need
              technology to serve the business.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Services
            </p>
            <ul className="mt-5 space-y-3">
              {services.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`#`}
                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Contact
            </p>
            <a
              href="mailto:hello@codezeon.com"
              className="mt-5 block text-sm text-cream/80 transition-colors hover:text-cream"
            >
              hello@codezeon.com
            </a>
            <Link
              href="/contact"
              className="mt-6 inline-flex border border-cream/35 px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-brand"
            >
              Start a project
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-cream/50">
            © {new Date().getFullYear()} CodeZeon-LLC. All rights reserved.
          </p>
          <p className="text-sm text-cream/50">Built for ambitious teams.</p>
        </div>
      </div>
    </footer>
  );
}
