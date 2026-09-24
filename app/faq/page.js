import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { faqGroups, faqIntro } from "../data/faq";

export const metadata = {
  title: "FAQ — CodeZeon-LLC",
  description:
    "Answers about Codezeon LLC services, international projects, freelancer arrangements, payments, and our partnership with Native Lessons in Bangladesh.",
};

function FaqBlocks({ blocks }) {
  return (
    <div className="mt-3 space-y-3 text-base leading-relaxed text-muted">
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return <p key={index}>{block.text}</p>;
        }

        if (block.type === "ul") {
          return (
            <ul key={index} className="list-disc space-y-1.5 pl-5">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "links") {
          return (
            <ul key={index} className="list-disc space-y-1.5 pl-5">
              {block.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-medium text-brand transition-colors hover:text-brand-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "contact") {
          return (
            <div
              key={index}
              className="border border-line bg-cream-dim/60 px-5 py-4"
            >
              <p className="font-[family-name:var(--font-display)] text-base font-semibold text-brand">
                {block.name}
              </p>
              <p className="mt-2 text-sm">
                Phone/WhatsApp:{" "}
                <a
                  href={block.phoneHref}
                  className="font-medium text-brand transition-colors hover:text-brand-soft"
                >
                  {block.phone}
                </a>
                {" · "}
                <a
                  href={block.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand transition-colors hover:text-brand-soft"
                >
                  WhatsApp
                </a>
              </p>
              <p className="mt-1 text-sm">{block.address}</p>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-brand pt-28 pb-14 sm:pt-32 sm:pb-16">
          <div className="shell">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/60">
              FAQ
            </p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2rem,7vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-cream">
              Frequently Asked Questions
            </h1>
            <div className="mt-5 h-px w-16 bg-cream/70 sm:w-24" />
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-cream/80 sm:text-base">
              {faqIntro}
            </p>
          </div>
        </section>

        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="shell">
            <div className="max-w-3xl space-y-14">
              {faqGroups.map((group) => (
                <section key={group.title}>
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-brand sm:text-2xl">
                    {group.title}
                  </h2>
                  <dl className="mt-6 divide-y divide-line border-y border-line">
                    {group.items.map((item) => (
                      <details key={item.q} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-[family-name:var(--font-display)] text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                          <span className="text-pretty">{item.q}</span>
                          <span
                            aria-hidden="true"
                            className="mt-1 shrink-0 text-muted transition-transform group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <FaqBlocks blocks={item.blocks} />
                      </details>
                    ))}
                  </dl>
                </section>
              ))}

              <div className="border-t border-line pt-10">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink sm:text-2xl">
                  Still have a question?
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                  Share your project, partnership idea, or freelance profile and
                  we will point you to the right next step.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    data-cursor="cta"
                    className="inline-flex min-h-12 items-center bg-brand px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-deep"
                  >
                    Contact us
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex min-h-12 items-center border border-line px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-cream-dim"
                  >
                    See services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
