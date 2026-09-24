const audiences = [
  {
    title: "Startups",
    text: "Turn an idea into a functional digital product.",
  },
  {
    title: "Small Businesses",
    text: "Improve operations with websites and business systems.",
  },
  {
    title: "Growing Companies",
    text: "Build scalable applications and digital infrastructure.",
  },
  {
    title: "Established Businesses",
    text: "Modernize existing systems and digital experiences.",
  },
];

export default function WhoWeWorkWith() {
  return (
    <section id="who-we-work-with" className="bg-cream py-24 lg:py-32" data-reveal>
      <div className="shell">
        <p
          className="text-sm font-semibold uppercase tracking-[0.2em] text-muted"
          data-reveal-child
          style={{ "--reveal-delay": 0 }}
        >
          Who We Work With
        </p>
        <h2
          className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
          data-reveal-child
          style={{ "--reveal-delay": 80 }}
        >
          Built for businesses at different stages.
        </h2>

        <ul className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {audiences.map((item, index) => (
            <li
              key={item.title}
              className="border-t border-line pt-6 sm:border-t-0 sm:pt-0 lg:border-t-0"
              data-reveal-child
              style={{ "--reveal-delay": 140 + index * 80 }}
            >
              <span className="font-mono text-sm text-muted">0{index + 1}</span>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-brand">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
