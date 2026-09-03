import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-brand">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=80"
          alt="Earth from orbit representing global software systems"
          fill
          priority
          className="object-cover animate-kenburns"
          sizes="100vw"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/85 to-brand/45" /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-transparent to-brand/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col justify-end px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-24 sm:px-6 sm:pb-16 sm:pt-32 lg:px-10 lg:pb-24">
        <div className="w-full max-w-3xl">
          <p className="animate-rise font-[family-name:var(--font-display)] text-[clamp(1.5rem,7.2vw,4.5rem)] font-extrabold leading-none tracking-tight text-cream whitespace-nowrap">
            CodeZeon{"\u2011"}LLC
          </p>
          <div className="animate-draw mt-4 h-px w-16 bg-cream/70 sm:mt-5 sm:w-24" />
          <h1 className="animate-rise delay-1 mt-5 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.25rem,5.2vw,2.25rem)] font-semibold leading-snug tracking-tight text-pretty text-cream sm:mt-8">
            Software, design, and security built around your goals.
          </h1>
          <p className="animate-rise delay-2 mt-4 max-w-xl text-sm leading-relaxed text-cream/80 sm:mt-5 sm:text-base md:text-lg">
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
