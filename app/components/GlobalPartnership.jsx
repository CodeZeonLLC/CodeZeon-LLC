import Image from "next/image";
import Link from "next/link";

export default function GlobalPartnership() {
  return (
    <section
      id="global-partnership"
      className="bg-brand py-24 text-cream lg:py-32"
      data-reveal
    >
      <div className="shell grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
        <div className="max-w-3xl">
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
            partner, Native Lessons IT. This integrated partnership
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

        <div
          className="flex flex-col items-start gap-4 lg:items-end"
          data-reveal-child
          style={{ "--reveal-delay": 160 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">
            Strategic global partner
          </p>
          <div className="flex w-full max-w-sm items-center justify-center bg-white px-6 py-8 sm:px-8 sm:py-10">
            <Image
              src="/native-lessons-it.png"
              alt="Native Lessons IT logo"
              width={1463}
              height={699}
              className="h-auto w-full max-w-[18rem] object-contain sm:max-w-[20rem]"
              sizes="320px"
            />
          </div>
          <p className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-cream">
            Native Lessons IT
          </p>
          {/* <p className="text-sm text-cream/60">Bangladesh</p> */}
        </div>
      </div>
    </section>
  );
}
