"use client";

import { useState } from "react";
import { services } from "../data/services";

const fieldClass =
  "mt-2 w-full border border-line bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand";

export default function ContactForm({ defaultService = "" }) {
  const [status, setStatus] = useState("idle");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(
      service ? `${service} — ${name}` : `Project brief from ${name}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        service ? `Interest: ${service}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `mailto:hello@codezeon.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-cream-dim px-6 py-10 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          Brief received
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
          Open your email client to send it.
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          If nothing opened, write us directly at{" "}
          <a
            href="mailto:hello@codezeon.com"
            className="font-semibold text-brand hover:text-brand-soft"
          >
            hello@codezeon.com
          </a>
          . We reply within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 inline-flex min-h-12 items-center border border-line px-5 text-sm font-semibold text-brand transition-colors hover:bg-cream"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Name
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Email
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Company
          <input
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Optional"
            className={fieldClass}
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Interest
          <select
            name="service"
            defaultValue={defaultService}
            className={`${fieldClass} appearance-none`}
          >
            <option value="">Tell us in the note</option>
            {services.map((item) => (
              <option key={item.slug} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-ink">
        What are you trying to build or fix?
        <textarea
          required
          name="message"
          rows={6}
          placeholder="A short brief is enough — goals, timeline, and anything already in motion."
          className={`${fieldClass} resize-y min-h-32`}
        />
      </label>

      <button
        type="submit"
        data-cursor="cta"
        className="inline-flex min-h-12 w-full items-center justify-center bg-brand px-6 text-sm font-semibold text-cream transition-colors hover:bg-brand-deep sm:w-auto"
      >
        Send a brief
      </button>
    </form>
  );
}
