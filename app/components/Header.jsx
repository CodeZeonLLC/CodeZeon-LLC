"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ variant = "overlay" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const solid = variant === "solid" || scrolled || menuOpen;

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={
        solid
          ? "fixed inset-x-0 top-0 z-30 bg-brand shadow-[0_1px_0_color-mix(in_srgb,var(--cream)_14%,transparent)] transition-[background-color,box-shadow] duration-300"
          : "fixed inset-x-0 top-0 z-30 bg-transparent transition-[background-color,box-shadow] duration-300"
      }
    >
      <div className="shell flex items-center justify-between gap-3 py-3 sm:py-4">
        <Link
          href="/"
          onClick={closeMenu}
          className="relative block h-12 w-[4.75rem] shrink-0 sm:h-14 sm:w-[5.5rem]"
        >
          <Image
            src="/codezeon-logo-white.png"
            alt="Codezeon"
            fill
            priority
            className="object-contain object-left"
            sizes="88px"
          />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
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

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link href="/contact" className="btn btn-header hidden sm:inline-flex">
            Talk to us
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-cream/40 text-cream transition-colors hover:bg-cream/10 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-cream/15 bg-brand md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="shell flex flex-col gap-1 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-3 text-base font-medium text-cream/90 transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-cream/15 pt-4">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="btn btn-primary-inverse w-full"
              >
                Talk to us
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
