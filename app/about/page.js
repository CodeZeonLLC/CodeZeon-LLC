import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { whyChooseUs } from "../data/whyChooseUs";

export const metadata = {
  title: "About — CodeZeon-LLC",
  description:
    "CodeZeon partners with startups, high-growth organizations, and enterprises to turn bold ideas into scalable digital solutions.",
};

const leaders = [
  {
    name: "Rej Rahman",
    role: "Chief Executive Officer & President",
    image: "/raj_rehman.png",
    imageAlt: "Rej Rahman, Chief Executive Officer and President of CodeZeon",
    bio: "A visionary technology leader with extensive experience in software development, digital transformation, and business strategy, Rej leads CodeZeon's global growth, client partnerships, and innovation initiatives. His leadership philosophy is centered on delivering measurable business value through exceptional engineering talent, trusted relationships, and operational excellence.",
  },
  // {
  //   name: "Riazul Islam",
  //   role: "Global Partner, Bangladesh",
  //   image:
  //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80",
  //   imageAlt: "Professional portrait placeholder for Riazul Islam",
  //   bio: "Riazul plays a pivotal role in expanding CodeZeon's global delivery capabilities and cultivating high-performing engineering teams. His expertise in talent development, technology operations, and strategic execution helps ensure consistent delivery excellence across international markets.",
  // },
];

const supportModels = [
  {
    title: "Customized Engagement Models",
    text: "Whether you need a single specialist, a dedicated delivery team, or end-to-end product development capabilities, our services are tailored to meet your precise requirements.",
  },
  {
    title: "Rapid Team Deployment",
    text: "Our global talent network and streamlined onboarding processes enable experienced professionals to join your initiatives quickly, accelerating project execution and reducing time-to-value.",
  },
  {
    title: "Seamless Global Collaboration",
    text: "Through a combination of regional leadership and worldwide engineering expertise, we ensure smooth communication, efficient workflows, and operational alignment across time zones.",
  },
  {
    title: "Scalable Partnership",
    text: "As your priorities evolve, our teams can adapt and expand with confidence, providing the flexibility required to support both immediate initiatives and long-term growth strategies.",
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
              About
            </p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.5rem,10vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight text-cream">
              CodeZeon
            </p>
            <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.35rem,4.5vw,2.25rem)] font-semibold leading-snug tracking-tight text-cream">
              Engineering Innovation. Delivering Outcomes.
            </h1>
            <div className="mt-5 h-px w-16 bg-cream/70 sm:w-24" />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
              Transforming ambitious ideas into exceptional digital products.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-primary-inverse">
                Talk to us
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-cream py-16 sm:py-20 lg:py-28" data-reveal>
          <div className="shell max-w-3xl">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] text-muted"
              data-reveal-child
              style={{ "--reveal-delay": 0 }}
            >
              Who we partner with
            </p>
            <h2
              className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-ink"
              data-reveal-child
              style={{ "--reveal-delay": 80 }}
            >
              Ambition meets engineering discipline.
            </h2>
            <p
              className="mt-6 text-base leading-relaxed text-muted sm:text-lg"
              data-reveal-child
              style={{ "--reveal-delay": 140 }}
            >
              At CodeZeon, we partner with ambitious startups, high-growth
              organizations, and enterprise leaders to transform bold ideas into
              scalable digital solutions. By combining world-class software
              engineering expertise, advanced artificial intelligence
              capabilities, and a highly collaborative delivery model, we help
              organizations accelerate innovation, reduce complexity, and achieve
              meaningful business outcomes.
            </p>
            <p
              className="mt-5 text-base leading-relaxed text-muted sm:text-lg"
              data-reveal-child
              style={{ "--reveal-delay": 200 }}
            >
              Our mission is simple: to deliver technology solutions that create
              lasting value while providing our clients with complete confidence
              throughout their digital transformation journey.
            </p>
          </div>
        </section>

        <section className="bg-brand py-16 text-cream sm:py-20 lg:py-28" data-reveal>
          <div className="shell">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/60"
              data-reveal-child
              style={{ "--reveal-delay": 0 }}
            >
              Our People. Our Strength.
            </p>
            <h2
              className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight"
              data-reveal-child
              style={{ "--reveal-delay": 80 }}
            >
              Meet the leadership behind CodeZeon.
            </h2>

            <ul className="mt-14 space-y-16 lg:mt-16 lg:space-y-20">
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
          <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-[0.2em] text-muted"
                data-reveal-child
                style={{ "--reveal-delay": 0 }}
              >
                Culture
              </p>
              <h2
                className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-ink"
                data-reveal-child
                style={{ "--reveal-delay": 80 }}
              >
                Built on experience, trust, and excellence.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p data-reveal-child style={{ "--reveal-delay": 140 }}>
                Our greatest competitive advantage is our people. Many of our
                professionals have been part of the CodeZeon journey for more
                than five years, creating a culture founded on trust,
                collaboration, accountability, and continuous learning.
              </p>
              <p data-reveal-child style={{ "--reveal-delay": 200 }}>
                This longevity enables us to retain institutional knowledge,
                maintain consistent delivery standards, and foster strong client
                relationships built on reliability and results.
              </p>
              <p data-reveal-child style={{ "--reveal-delay": 260 }}>
                More than a collection of engineers, designers, architects, and
                consultants, we are a unified team of technology professionals
                committed to solving complex challenges and delivering
                transformative outcomes.
              </p>
              <p data-reveal-child style={{ "--reveal-delay": 320 }}>
                By combining diverse perspectives, specialized expertise, and a
                relentless pursuit of excellence, we help organizations innovate
                faster, operate more efficiently, and compete more effectively in
                rapidly evolving markets.
              </p>
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
              How We Support Our Clients
            </p>
            <h2
              className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-ink"
              data-reveal-child
              style={{ "--reveal-delay": 80 }}
            >
              Technology solutions built around your business.
            </h2>
            <p
              className="mt-5 max-w-2xl text-base leading-relaxed text-muted"
              data-reveal-child
              style={{ "--reveal-delay": 140 }}
            >
              Every organization faces unique challenges. That&apos;s why our
              engagement model is designed to be flexible, scalable, and aligned
              to your specific objectives.
            </p>

            <ol className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-14">
              {supportModels.map((item, index) => (
                <li
                  key={item.title}
                  data-reveal-child
                  style={{ "--reveal-delay": 180 + index * 70 }}
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
            </ol>
          </div>
        </section>

        <section className="bg-cream py-16 sm:py-20 lg:py-28" data-reveal>
          <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-[0.2em] text-muted"
                data-reveal-child
                style={{ "--reveal-delay": 0 }}
              >
                Who We Are
              </p>
              <h2
                className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-ink"
                data-reveal-child
                style={{ "--reveal-delay": 80 }}
              >
                Technology expertise backed by business understanding.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                <p data-reveal-child style={{ "--reveal-delay": 140 }}>
                  CodeZeon empowers organizations to innovate with confidence by
                  providing access to exceptional software engineering talent,
                  advanced AI capabilities, and proven delivery methodologies.
                </p>
                <p data-reveal-child style={{ "--reveal-delay": 200 }}>
                  We understand that successful technology initiatives require
                  more than technical proficiency. They require alignment with
                  strategic goals, effective communication, operational
                  discipline, and a deep understanding of business priorities.
                </p>
                <p data-reveal-child style={{ "--reveal-delay": 260 }}>
                  Our structured approach reduces risk, increases transparency,
                  and ensures every engagement remains focused on measurable
                  outcomes. The result is a trusted technology partnership that
                  empowers leaders to focus on growth while we manage the
                  complexities of execution.
                </p>
              </div>
            </div>

            <div className="border-t border-line pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
              <p
                className="text-sm font-semibold uppercase tracking-[0.2em] text-muted"
                data-reveal-child
                style={{ "--reveal-delay": 100 }}
              >
                Strategic Partnerships
              </p>
              <h2
                className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-ink"
                data-reveal-child
                style={{ "--reveal-delay": 160 }}
              >
                Delivering long-term business value.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                <p data-reveal-child style={{ "--reveal-delay": 220 }}>
                  We proudly collaborate with some of the world&apos;s most
                  innovative organizations and technology leaders to develop
                  future-ready digital solutions.
                </p>
                <p data-reveal-child style={{ "--reveal-delay": 280 }}>
                  Our partnerships extend beyond project delivery. We work
                  closely with clients to solve critical business challenges,
                  optimize operations, accelerate innovation, and create
                  sustainable competitive advantage.
                </p>
                <p data-reveal-child style={{ "--reveal-delay": 340 }}>
                  Every engagement is guided by transparency, accountability, and
                  engineering excellence, ensuring confidence and peace of mind
                  from concept through execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream-dim py-16 sm:py-20 lg:py-28" data-reveal>
          <div className="shell">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] text-muted"
              data-reveal-child
              style={{ "--reveal-delay": 0 }}
            >
              Why Organizations Choose CodeZeon
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
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] text-muted"
              data-reveal-child
              style={{ "--reveal-delay": 0 }}
            >
              Our Commitment
            </p>
            <h2
              className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-ink"
              data-reveal-child
              style={{ "--reveal-delay": 80 }}
            >
              Outcomes over output.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p data-reveal-child style={{ "--reveal-delay": 140 }}>
                At CodeZeon, success is measured not only by the software we
                build but by the business outcomes we help our clients achieve.
              </p>
              <p data-reveal-child style={{ "--reveal-delay": 200 }}>
                We are committed to delivering exceptional technology solutions,
                fostering long-term partnerships, empowering innovation, and
                creating meaningful impact through everything we do.
              </p>
              <p data-reveal-child style={{ "--reveal-delay": 260 }}>
                CodeZeon is more than a software development company. We are a
                strategic technology partner dedicated to helping organizations
                innovate faster, scale smarter, and achieve sustainable growth.
              </p>
            </div>
            <p
              className="mt-10 font-[family-name:var(--font-display)] text-xl font-semibold text-brand sm:text-2xl"
              data-reveal-child
              style={{ "--reveal-delay": 320 }}
            >
              Transforming ambitious ideas into exceptional digital products.
            </p>
            <div className="mt-10" data-reveal-child style={{ "--reveal-delay": 380 }}>
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
