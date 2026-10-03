import { contact } from "./contact";
import { site } from "./site";

export const connectIntro = {
  title: `Welcome to ${site.name}`,
  paragraphs: [
    "CodeZeon is a technology and design agency based in Georgia, USA. We build creative digital experiences and business technology systems that drive measurable outcomes.",
    "Through software development, product design, web and mobile experiences, and business systems like ERP and CRM, we turn ideas into execution and help teams scale with clarity.",
    "Whether you are launching a product, modernizing operations, or looking for a trusted engineering partner, CodeZeon stands for craft, reliability, and long-term value.",
  ],
  invite:
    "Connect with CodeZeon — visit us, reach out directly, or follow us on social media.",
};

export const connectChannels = [
  {
    label: "Website",
    detail: "codezeon.com",
    href: site.url,
    kind: "website",
  },
  {
    label: "WhatsApp",
    detail: contact.phoneDisplay,
    href: contact.whatsappHref,
    kind: "whatsapp",
  },
  {
    label: "Email",
    detail: contact.email,
    href: `mailto:${contact.email}`,
    kind: "email",
  },
  {
    label: "Call",
    detail: contact.phoneDisplay,
    href: contact.phoneHref,
    kind: "call",
  },
  {
    label: "LinkedIn",
    detail: "codezeon-llc",
    href: "https://www.linkedin.com/company/codezeon-llc",
    kind: "linkedin",
  },
  {
    label: "X",
    detail: "@codezeon",
    href: "https://x.com/codezeon",
    kind: "x",
  },
  {
    label: "GitHub",
    detail: "codezeon",
    href: "https://github.com/codezeon",
    kind: "github",
  },
];

export const connectContactBlocks = [
  {
    title: "Visit Us",
    lines: contact.addressLines,
    href: "https://maps.google.com/?q=1334+Mile+Post+Drive+Georgia+USA",
  },
  {
    title: "Email Us",
    lines: [contact.email],
    href: `mailto:${contact.email}`,
  },
  {
    title: "Call Us",
    lines: [contact.phoneDisplay],
    href: contact.phoneHref,
  },
  {
    title: "Business Hours",
    lines: ["Weekdays", "09:00–17:00 EST", "Weekends", "By appointment"],
  },
];
