import Link from "next/link";

export default function GlobalPartnership() {
  return (
    <section
      id="global-partnership"
      className="bg-brand py-24 text-cream lg:py-32"
      data-reveal
    >
      <div className="shell max-w-3xl">
        <p
          className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/60"
          data-reveal-child
          style={{ "--reveal-delay": 0 }}
        >
          Global Partnership
        </p>
        <h2
          className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          data-reveal-child
          style={{ "--reveal-delay": 80 }}
        >
          Global Delivery Capability.
        </h2>
        <p
          className="mt-6 text-base leading-relaxed text-cream/80 sm:text-lg"
          data-reveal-child
          style={{ "--reveal-delay": 140 }}
        >
          Codezeon operates from Georgia, USA, backed by our strategic global
          partner in Bangladesh, Native Lessons. This integrated partnership
          allows us to provide round-the-clock development cycles, cost-effective
          scaling, and accelerated project delivery without compromising on
          engineering standards.
        </p>
        <div
          className="mt-10"
          data-reveal-child
          style={{ "--reveal-delay": 200 }}
        >
          <Link href="/about" className="btn btn-primary-inverse">
            Learn about us
          </Link>
        </div>
      </div>
    </section>
  );
}
