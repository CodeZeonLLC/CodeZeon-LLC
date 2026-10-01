"use client";

import { useState } from "react";
import { services } from "../data/services";
import { contact } from "../data/contact";

const fieldClass =
  "mt-2 w-full border border-line bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand";

export default function ContactForm({ defaultService = "" }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      company: String(data.get("company") || "").trim(),
      service: String(data.get("service") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Could not send your message.");
      }

      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("idle");
      setError(
        err instanceof Error
          ? err.message
          : "Could not send your message. Please try again.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-cream-dim px-6 py-10 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          Brief received
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
          Thanks — we got your message.
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          We reply within one business day at{" "}
          <a
            href={`mailto:${contact.email}`}
            className="font-semibold text-brand hover:text-brand-soft"
          >
            {contact.email}
          </a>
          .
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
            disabled={status === "sending"}
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
            disabled={status === "sending"}
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
            disabled={status === "sending"}
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Interest
          <select
            name="service"
            defaultValue={defaultService}
            className={`${fieldClass} appearance-none`}
            disabled={status === "sending"}
          >
            <option value="">Tell us in the note</option>
            {services.map((category) => (
              <optgroup key={category.slug} label={category.title}>
                <option value={category.title}>{category.title}</option>
                {category.offerings.map((offering) => (
                  <option key={offering.title} value={offering.title}>
                    {offering.title}
                  </option>
                ))}
              </optgroup>
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
          disabled={status === "sending"}
        />
      </label>

      {error ? (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 w-full items-center justify-center bg-brand px-6 text-sm font-semibold text-cream transition-colors hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send a brief"}
      </button>
    </form>
  );
}
