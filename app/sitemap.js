import { services } from "./data/services";
import { absoluteUrl } from "./data/site";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/sitemap", priority: 0.4, changeFrequency: "monthly" },
  ];

  const serviceRoutes = services.map((service) => ({
    path: `/services/${service.slug}`,
    priority: 0.8,
    changeFrequency: "weekly",
  }));

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
