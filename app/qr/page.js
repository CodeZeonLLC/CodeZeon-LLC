import Image from "next/image";
import ConnectQrCard from "../components/ConnectQrCard";
import { buildPageMetadata, site } from "../data/site";

export const metadata = buildPageMetadata({
  title: "Connect QR",
  description:
    "Download the CodeZeon Connect With Us QR code for print, events, and sharing.",
  path: "/qr",
  noIndex: true,
});

export default function QrPage() {
  return (
    <main className="min-h-full bg-[radial-gradient(circle_at_top,_#ffffff_0%,_var(--cream)_55%,_var(--cream-dim)_100%)]">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-5 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8 h-24 w-[9.25rem]">
            <Image
              src="/codezeon-logo.png"
              alt={site.name}
              fill
              priority
              className="object-contain"
              sizes="148px"
            />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            QR Code
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3rem)] font-extrabold tracking-tight text-ink">
            Connect With Us
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Scan or download this QR code to open the CodeZeon Connect With Us
            page.
          </p>
        </div>

        <div className="mt-12">
          <ConnectQrCard />
        </div>

        <footer className="mt-16 border-t border-line pt-8 text-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
