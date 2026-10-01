"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { faqIntro, faqItems } from "../data/faq";

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
            Frequently Asked Questions
          </h2>
          <p
            className="mt-4 max-w-lg text-base leading-relaxed text-muted"
            data-reveal-child
            style={{ "--reveal-delay": 110 }}
          >
            {faqIntro}
          </p>

          <ul
            className="mt-10 border-t border-line"
            data-reveal-child
            style={{ "--reveal-delay": 140 }}
          >
            {faqItems.map((item, index) => {
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
