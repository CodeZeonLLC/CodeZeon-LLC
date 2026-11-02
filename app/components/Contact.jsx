import Image from "next/image";
import Link from "next/link";
import { contact } from "../data/contact";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-24 lg:py-32" data-reveal>
      <div className="shell grid items-center gap-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-16">
        <div className="max-w-4xl">
          <h2
            className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,10vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight text-ink"
            data-reveal-child
            style={{ "--reveal-delay": 0 }}
          >
            Have an idea?
          </h2>
          <p
            className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:mt-8 sm:text-lg"
            data-reveal-child
            style={{ "--reveal-delay": 80 }}
          >
            Share the product, the brand, or the risk you want to close. We
            respond within one business day.
          </p>

          <div
            className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8"
            data-reveal-child
            style={{ "--reveal-delay": 160 }}
          >
            <Link href="/contact" className="btn btn-primary shrink-0">
              Contact us
            </Link>
            <a
              href={`mailto:${contact.email}`}
              className="link-underline font-[family-name:var(--font-display)] text-2xl font-semibold text-brand transition-colors hover:text-brand-soft sm:text-3xl"
            >
              {contact.email}
            </a>
          </div>
        </div>

        <div
          className="flex justify-center lg:justify-end"
          data-reveal-child
          style={{ "--reveal-delay": 220 }}
        >
          <Image
            src="/have-an-idea.webp"
            alt="Illustration of a person juggling flying sheets of paper"
            width={400}
            height={318}
            className="h-auto w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-[25rem]"
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 352px, 288px"
          />
        </div>
      </div>
    </section>
  );
}
