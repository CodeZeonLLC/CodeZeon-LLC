import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-24 lg:py-32" data-reveal>
      <div className="shell border-t border-line pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] text-muted"
              data-reveal-child
              style={{ "--reveal-delay": 0 }}
            >
              Contact
            </p>
            <h2
              className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
              data-reveal-child
              style={{ "--reveal-delay": 80 }}
            >
              Ready to talk through the next move?
            </h2>
            <p
              className="mt-5 max-w-lg text-base leading-relaxed text-muted"
              data-reveal-child
              style={{ "--reveal-delay": 140 }}
            >
              Share the product, the brand, or the risk you want to close. We
              respond within one business day.
            </p>
          </div>

          <div className="space-y-6" data-reveal-child style={{ "--reveal-delay": 200 }}>
            <a
              href="mailto:hello@codezeon.com"
              className="link-underline block font-[family-name:var(--font-display)] text-2xl font-semibold text-brand transition-colors hover:text-brand-soft sm:text-3xl"
            >
              hello@codezeon.com
            </a>
            <Link href="/contact" className="btn btn-primary">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
