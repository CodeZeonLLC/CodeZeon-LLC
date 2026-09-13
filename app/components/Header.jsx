"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ variant = "overlay" }) {
  const [scrolled, setScrolled] = useState(false);
  const solid = variant === "solid" || scrolled;

  useEffect(() => {
    if (variant === "solid") {
      return undefined;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  return (
    <header
      className={
        solid
          ? "fixed inset-x-0 top-0 z-30 bg-brand shadow-[0_1px_0_color-mix(in_srgb,var(--cream)_14%,transparent)] transition-[background-color,box-shadow] duration-300"
          : "fixed inset-x-0 top-0 z-30 bg-transparent transition-[background-color,box-shadow] duration-300"
      }
    >
      <div className="shell flex items-center justify-between gap-3 py-4 sm:py-6">
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
          className={
            solid
              ? "shrink-0 border border-cream/40 bg-cream/10 px-3 py-2 text-xs font-medium text-cream transition-colors hover:bg-cream hover:text-brand sm:px-4 sm:text-sm"
              : "shrink-0 border border-cream/40 bg-cream/10 px-3 py-2 text-xs font-medium text-cream backdrop-blur-sm transition-colors hover:bg-cream hover:text-brand sm:px-4 sm:text-sm"
          }
        >
          Talk to us
        </Link>
      </div>
    </header>
  );
}
