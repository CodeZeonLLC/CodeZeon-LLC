import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-frame">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=3200&q=80"
          alt="Earth from orbit representing global software systems"
          fill
          priority
          className="hero-media"
          sizes="100vw"
        />
        <div className="hero-shade-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-transparent to-transparent" />
      </div>

      <div className="hero-copy shell pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-24 sm:pb-16 sm:pt-32 lg:pb-20">
        <div className="hero-content w-full">
          <p className="hero-heading animate-rise font-[family-name:var(--font-display)] font-extrabold leading-none tracking-tight text-cream">
            CodeZeon{"\u2011"}LLC
          </p>
          <div className="animate-draw mt-4 h-px w-16 bg-cream/70 sm:mt-5 sm:w-24" />
          <h1 className="animate-rise delay-1 mt-5 font-[family-name:var(--font-display)] text-[clamp(1.25rem,2.4vw,2.25rem)] font-semibold leading-snug tracking-tight text-pretty text-cream sm:mt-8">
            Software, design, and security built around your goals.
          </h1>
          <p className="animate-rise delay-2 mt-4 text-sm leading-relaxed text-cream/80 sm:mt-5 sm:text-base md:text-lg">
            CodeZeon-LLC helps teams ship custom systems, clearer digital
            experiences, and practical protection—without forcing a generic mold.
          </p>
          <div className="animate-rise delay-3 mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <a
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center bg-cream px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-cream-dim sm:w-auto"
            >
              Start a project
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 w-full items-center justify-center border border-cream/50 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10 sm:w-auto"
            >
              See services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
