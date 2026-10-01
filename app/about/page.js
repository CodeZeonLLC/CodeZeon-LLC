import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { whyChooseUs } from "../data/whyChooseUs";
import { buildPageMetadata } from "../data/site";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "Codezeon is a technology and design agency based in Georgia, USA. We build scalable software and digital experiences that drive measurable business outcomes.",
  path: "/about",
});

const principles = [
  {
    title: "Built on Experience, Trust, and Excellence",
    text: "We deliver reliable infrastructure tailored to your operational needs.",
  },
  {
    title: "Technology Backed by Business Understanding",
    text: "We don't just write code; we solve business bottlenecks.",
  },
  {
    title: "Delivering Long-Term Value",
    text: "Solutions designed to scale alongside your company's growth.",
  },
];

const leaders = [
  {
    name: "Rej Rahman",
    role: "Chief Executive Officer & President",
    image: "/raj_rehman.png",
    imageAlt: "Rej Rahman, Chief Executive Officer and President of CodeZeon",
    bio: "A visionary technology leader with extensive experience in software development, digital transformation, and business strategy, Rej leads CodeZeon's global growth, client partnerships, and innovation initiatives. His leadership philosophy is centered on delivering measurable business value through exceptional engineering talent, trusted relationships, and operational excellence.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[70svh] overflow-hidden bg-brand sm:min-h-[78svh]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80"
              alt="Engineering team collaborating on digital products"
              fill
              priority
              className="object-cover object-[center_35%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand/60 to-brand/35" />
          </div>

          <div className="shell relative z-10 flex min-h-[70svh] flex-col justify-end pb-12 pt-28 sm:min-h-[78svh] sm:pb-16 sm:pt-32 lg:pb-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/60">
              About Us
            </p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.5rem,10vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight text-cream">
              CodeZeon
            </p>
            <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(1.5rem,5vw,2.75rem)] font-semibold leading-snug tracking-tight text-cream">
              Ambition Meets Engineering Discipline.
            </h1>
            <div className="mt-5 h-px w-16 bg-cream/70 sm:w-24" />
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-cream/80 sm:text-base">
              Codezeon is a technology and design agency based in Georgia, USA.
              We build scalable software and digital experiences that drive
              measurable business outcomes.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-primary-inverse">
                Talk to us
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-cream py-16 sm:py-20 lg:py-28" data-reveal>
          <div className="shell">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] text-muted"
              data-reveal-child
              style={{ "--reveal-delay": 0 }}
            >
              Core Principles
            </p>
            <h2
              className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-ink"
              data-reveal-child
              style={{ "--reveal-delay": 80 }}
            >
              How we show up for every engagement.
            </h2>

            <ul className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-3 sm:gap-8 lg:gap-12">
              {principles.map((item, index) => (
                <li
                  key={item.title}
                  data-reveal-child
                  style={{ "--reveal-delay": 140 + index * 80 }}
                >
                  <span className="font-mono text-sm text-muted">
                    0{index + 1}
                  </span>
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

        <section className="bg-brand py-16 text-cream sm:py-20 lg:py-28" data-reveal>
          <div className="shell">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/60"
              data-reveal-child
              style={{ "--reveal-delay": 0 }}
            >
              Leadership
            </p>
            <h2
              className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight"
              data-reveal-child
              style={{ "--reveal-delay": 80 }}
            >
              Meet the leadership behind CodeZeon.
            </h2>

            <ul className="mt-14 space-y-16 lg:mt-16">
              {leaders.map((person, index) => (
                <li
                  key={person.name}
                  className="grid gap-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-14"
                  data-reveal-child
                  style={{ "--reveal-delay": 140 + index * 100 }}
                >
                  <div className="relative aspect-[4/5] max-w-xs overflow-hidden bg-brand-deep lg:max-w-none">
                    <Image
                      src={person.image}
                      alt={person.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 320px, 288px"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold sm:text-3xl">
                      {person.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-cream/55">
                      {person.role}
                    </p>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/80">
                      {person.bio}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-cream-dim py-16 sm:py-20 lg:py-28" data-reveal>
          <div className="shell">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] text-muted"
              data-reveal-child
              style={{ "--reveal-delay": 0 }}
            >
              Why Choose CodeZeon
            </p>
            <h2
              className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-ink"
              data-reveal-child
              style={{ "--reveal-delay": 80 }}
            >
              What sets the partnership apart.
            </h2>

            <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
              {whyChooseUs.map((item, index) => (
                <li
                  key={item.title}
                  className="border-t border-line pt-6"
                  data-reveal-child
                  style={{ "--reveal-delay": 120 + index * 60 }}
                >
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-brand">
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

        <section className="bg-cream py-16 sm:py-20 lg:py-28" data-reveal>
          <div className="shell max-w-3xl">
            <h2
              className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-ink"
              data-reveal-child
              style={{ "--reveal-delay": 0 }}
            >
              Ready to build what&apos;s next?
            </h2>
            <p
              className="mt-5 text-base leading-relaxed text-muted sm:text-lg"
              data-reveal-child
              style={{ "--reveal-delay": 80 }}
            >
              Tell us about the product, system, or digital experience you want
              to ship. We respond within one business day.
            </p>
            <div
              className="mt-10"
              data-reveal-child
              style={{ "--reveal-delay": 140 }}
            >
              <Link href="/contact" className="btn btn-primary">
                Start a conversation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
