"use client";

import { usePathname } from "next/navigation";
import { contact } from "../data/contact";

export default function WhatsAppFloat() {
  const pathname = usePathname();

  if (pathname === "/connect-with-us" || pathname === "/qr") {
    return null;
  }

  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CodeZeon on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
        <path d="M12.04 2C6.58 2 2.15 6.42 2.15 11.87c0 1.75.46 3.45 1.34 4.95L2 22l5.34-1.4c1.45.79 3.08 1.21 4.7 1.21h.01c5.46 0 9.89-4.42 9.89-9.87C21.94 6.42 17.5 2 12.04 2zm0 18.05h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.16.83.84-3.08-.2-.32a8.16 8.16 0 0 1-1.26-4.36c0-4.52 3.68-8.2 8.2-8.2 4.52 0 8.2 3.68 8.2 8.2 0 4.51-3.69 8.18-8.21 8.18z" />
      </svg>
    </a>
  );
}
