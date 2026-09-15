import Image from "next/image";

export default function Approach() {
  return (
    <section id="approach" className="bg-brand text-cream" data-reveal>
      <div className="shell grid lg:min-h-[560px] lg:grid-cols-2 lg:gap-16">
        <div
          className="relative aspect-[16/10] min-h-0 sm:aspect-auto sm:min-h-[280px] lg:h-full lg:min-h-0"
          data-reveal-child
          style={{ "--reveal-delay": 0 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
            alt="Circuit board close-up representing precise engineering"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex min-w-0 flex-col justify-center py-14 sm:py-20 lg:py-28">
          <p
            className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/60"
            data-reveal-child
            style={{ "--reveal-delay": 80 }}
          >
            Approach
          </p>
          <h2
            className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-[clamp(1.5rem,6.5vw,2.25rem)] font-bold leading-tight tracking-tight text-pretty sm:text-4xl sm:leading-snug"
            data-reveal-child
            style={{ "--reveal-delay": 140 }}
          >
            Clarity first. Velocity next. Quality always.
          </h2>
          <p
            className="mt-5 max-w-lg text-sm leading-relaxed text-cream/80 sm:mt-6 sm:text-base"
            data-reveal-child
            style={{ "--reveal-delay": 200 }}
          >
            CodeZeon-LLC partners as an embedded engineering team. We define the
            problem tightly, ship in short cycles, and leave systems your team
            can own with confidence.
          </p>

          <ol className="mt-10 space-y-7 sm:mt-12 sm:space-y-8">
            {[
              {
                step: "01",
                title: "Discover",
                text: "Map goals, constraints, and the shortest path to measurable value.",
              },
              {
                step: "02",
                title: "Build",
                text: "Ship production-ready increments with clean architecture and tests.",
              },
              {
                step: "03",
                title: "Scale",
                text: "Harden performance, observability, and delivery pipelines as you grow.",
              },
            ].map((item, index) => (
              <li
                key={item.step}
                className="grid grid-cols-[2.75rem_1fr] gap-3 sm:grid-cols-[3.5rem_1fr] sm:gap-4"
                data-reveal-child
                style={{ "--reveal-delay": 260 + index * 100 }}
              >
                <span className="font-mono text-sm text-cream/50">{item.step}</span>
                <div className="min-w-0">
                  <h3 className="font-[family-name:var(--font-display)] text-base font-semibold sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream/70">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
