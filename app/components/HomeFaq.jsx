"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    q: "How much does a project cost?",
    a: "It depends on scope. After a short discovery call we send a fixed quote, so you know the price before we start.",
  },
  {
    q: "How long does a typical build take?",
    a: "Most builds land between a few weeks and a few months. Timeline depends on scope, feedback speed, and whether we are starting from scratch or extending what you already have.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes. We help startups turn an idea into a functional digital product—focused on the smallest useful version that can ship and learn from real users.",
  },
  {
    q: "Who owns the code and data?",
    a: "You do. Project-specific deliverables and your data belong to you as set out in the project agreement. Our reusable tools and third-party licenses stay under their own terms.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Support and maintenance can be included in the agreement—so you have a clear window for fixes, updates, and questions after go-live.",
  },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-cream-dim" data-reveal>
      <div className="shell grid lg:min-h-[560px] lg:grid-cols-2 lg:gap-16">
        <div className="flex min-w-0 flex-col justify-center py-14 sm:py-20 lg:order-1 lg:py-28">
          <h2
            className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            data-reveal-child
            style={{ "--reveal-delay": 80 }}
          >
            Questions we get asked
          </h2>

          <ul
            className="mt-10 border-t border-line"
            data-reveal-child
            style={{ "--reveal-delay": 140 }}
          >
            {faqs.map((item, index) => {
              const open = openIndex === index;
              return (
                <li key={item.q} className="border-b border-line">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-[family-name:var(--font-display)] text-base font-semibold text-ink sm:text-lg">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 font-mono text-xl leading-none text-brand"
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open ? (
                    <p className="pb-5 text-sm leading-relaxed text-muted sm:text-base">
                      {item.a}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <p
            className="mt-8 text-sm text-muted"
            data-reveal-child
            style={{ "--reveal-delay": 200 }}
          >
            More answers on the{" "}
            <Link
              href="/faq"
              className="link-underline font-semibold text-brand"
            >
              FAQ page
            </Link>
            .
          </p>
        </div>

        <div
          className="relative aspect-[16/10] min-h-0 sm:aspect-auto sm:min-h-[280px] lg:order-2 lg:h-full lg:min-h-0"
          data-reveal-child
          style={{ "--reveal-delay": 0 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
            alt="Team in conversation answering project questions"
            fill
            className="object-cover object-[center_40%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
