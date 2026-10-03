import Image from "next/image";
import Link from "next/link";
import ConnectChannelIcon, {
  channelTone,
} from "../components/ConnectChannelIcon";
import {
  connectChannels,
  connectContactBlocks,
  connectIntro,
} from "../data/connect";
import { buildPageMetadata, site } from "../data/site";

export const metadata = buildPageMetadata({
  title: "Connect With Us",
  description:
    "Connect with CodeZeon LLC — contact details, WhatsApp, and social channels in one place.",
  path: "/connect-with-us",
  noIndex: true,
});

export default function ConnectPage() {
  const iconChannels = connectChannels.filter((item) =>
    ["website", "whatsapp", "linkedin", "x", "github", "email", "call"].includes(
      item.kind,
    ),
  );

  return (
    <main className="min-h-full bg-[radial-gradient(circle_at_top,_#ffffff_0%,_var(--cream)_55%,_var(--cream-dim)_100%)]">
      <div className="mx-auto flex w-full max-w-3xl flex-col px-5 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="relative mb-8 block h-14 w-40">
            <Image
              src="/logo.png"
              alt={site.name}
              fill
              priority
              className="object-contain"
              sizes="160px"
            />
          </Link>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3rem)] font-extrabold tracking-tight text-ink">
            {connectIntro.title}
          </h1>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {connectIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-7 max-w-xl text-base italic leading-relaxed text-brand sm:text-lg">
            {connectIntro.invite}
          </p>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {iconChannels.map((channel) => (
              <li key={channel.kind}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={channel.label}
                  title={channel.label}
                  className={`flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-105 sm:h-14 sm:w-14 ${channelTone(channel.kind)}`}
                >
                  <ConnectChannelIcon kind={channel.kind} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <section className="mt-16 border-t border-line pt-14 sm:mt-20">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Contact Us
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              Visit our Georgia office, send us an email, give us a call, or
              reach out during business hours.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {connectContactBlocks.map((block) => {
              const content = (
                <>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    {block.title}
                  </p>
                  <div className="mt-3 space-y-1 text-base font-medium text-ink">
                    {block.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </>
              );

              if (block.href) {
                return (
                  <a
                    key={block.title}
                    href={block.href}
                    target={block.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      block.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block border border-line bg-cream/80 px-5 py-5 transition-colors hover:border-brand hover:bg-cream"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={block.title}
                  className="border border-line bg-cream/80 px-5 py-5"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-16 border-t border-line pt-14 sm:mt-20">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Find us on every platform
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              WhatsApp, email, social channels, and more — all in one place.
            </p>
          </div>

          <ul className="mt-10 space-y-3">
            {connectChannels.map((channel) => (
              <li key={`${channel.label}-${channel.detail}`}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 border border-line bg-cream/80 px-4 py-4 transition-colors hover:border-brand hover:bg-cream sm:px-5"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${channelTone(channel.kind)}`}
                  >
                    <ConnectChannelIcon kind={channel.kind} />
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="block text-sm font-semibold text-ink">
                      {channel.label}
                    </span>
                    <span className="block truncate text-sm text-muted">
                      {channel.detail}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-16 border-t border-line pt-8 text-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex text-sm font-semibold text-brand transition-colors hover:text-brand-soft"
          >
            Visit our website →
          </Link>
        </footer>
      </div>
    </main>
  );
}
