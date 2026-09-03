import Link from "next/link";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ variant = "overlay" }) {
  const solid = variant === "solid";

  return (
    <header
      className={
        solid
          ? "relative z-20 bg-brand"
          : "absolute inset-x-0 top-0 z-20"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-6 lg:px-10">
        <Link
          href="/"
          className="min-w-0 shrink font-[family-name:var(--font-display)] text-base font-bold tracking-tight text-cream sm:text-lg md:text-xl"
        >
          CodeZeon-LLC
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="shrink-0 border border-cream/40 bg-cream/10 px-3 py-2 text-xs font-medium text-cream backdrop-blur-sm transition-colors hover:bg-cream hover:text-brand sm:px-4 sm:text-sm"
        >
          Talk to us
        </Link>
      </div>
    </header>
  );
}
