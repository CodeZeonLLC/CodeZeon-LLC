import Image from "next/image";

export default function Approach() {
  return (
    <section id="approach" className="bg-brand text-cream">
      <div className="shell grid lg:min-h-[560px] lg:grid-cols-2 lg:gap-16">
        <div className="relative min-h-[320px] lg:h-full lg:min-h-0">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
            alt="Circuit board close-up representing precise engineering"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center py-20 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/60">
            Approach
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            Clarity first. Velocity next. Quality always.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/80">
            CodeZeon-LLC partners as an embedded engineering team. We define the
            problem tightly, ship in short cycles, and leave systems your team
            can own with confidence.
          </p>

          <ol className="mt-12 space-y-8">
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
            ].map((item) => (
              <li key={item.step} className="grid grid-cols-[3.5rem_1fr] gap-4">
                <span className="font-mono text-sm text-cream/50">{item.step}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
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
