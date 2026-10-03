export const site = {
  name: "CodeZeon LLC",
  shortName: "CodeZeon",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://codezeon.com",
  locale: "en_US",
  description:
    "CodeZeon is a technology and design agency based in Georgia, USA. We build creative digital experiences and business technology systems that drive measurable outcomes.",
  keywords: [
    "CodeZeon",
    "software development",
    "web design",
    "mobile app development",
    "UI UX design",
    "ERP",
    "CRM",
    "digital agency Georgia",
    "business technology",
    "creative digital services",
  ],
  email: "info@codezeon.com",
  phone: "+16789796504",
  ogImage: "/logo.png",
};

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }
  const base = site.url.replace(/\/$/, "");
  if (!path || path === "/") {
    return base;
  }
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  image = site.ogImage,
  noIndex = false,
}) {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(site.shortName)
    ? title
    : `${title} — ${site.shortName}`;

  if (noIndex) {
    return {
      title,
      description,
      robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
          "max-snippet": 0,
          "max-image-preview": "none",
          "max-video-preview": 0,
        },
      },
    };
  }

  return {
    title,
    description,
    keywords: site.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [
        {
          url: absoluteUrl(image),
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
    robots: { index: true, follow: true },
  };
}
