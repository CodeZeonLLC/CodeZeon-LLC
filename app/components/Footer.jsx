import Link from "next/link";
import { services } from "../data/services";
import { social } from "../data/social";

const socialIcons = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M18.9 1.5h3.67l-8.02 9.17L24 22.5h-7.41l-5.8-7.59-6.64 7.59H.46l8.58-9.81L0 1.5h7.6l5.24 6.93L18.9 1.5zm-1.29 18.88h2.03L6.48 3.5H4.3l13.31 16.88z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3z" />
    </svg>
  ),
};

const nav = [
  { href: "/services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="bg-brand text-cream">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
              CodeZeon-LLC
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              Software, design, security, and counsel for teams that need
              technology to serve the business.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-10 w-10 items-center justify-center border border-cream/25 text-cream/80 transition-colors hover:border-cream hover:text-cream"
                  >
                    {socialIcons[item.label]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Services
            </p>
            <ul className="mt-5 space-y-3">
              {services.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="link-underline text-sm text-cream/80 hover:text-cream"
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
                    className="link-underline text-sm text-cream/80 hover:text-cream"
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
              className="link-underline mt-5 block text-sm text-cream/80 hover:text-cream"
            >
              hello@codezeon.com
            </a>
            <Link href="/contact" className="btn btn-primary-inverse mt-6">
              Start a project
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-cream/70">
            © {new Date().getFullYear()} CodeZeon-LLC. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="link-underline text-sm text-cream/70 hover:text-cream"
            >
              Privacy policy
            </Link>
            <Link
              href="/terms"
              className="link-underline text-sm text-cream/70 hover:text-cream"
            >
              Terms
            </Link>
            <Link
              href="/faq"
              className="link-underline text-sm text-cream/70 hover:text-cream"
            >
              FAQ
            </Link>
            <Link
              href="/sitemap"
              className="link-underline text-sm text-cream/70 hover:text-cream"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
