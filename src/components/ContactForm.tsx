"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";

function encodeMailto(value: string) {
  return encodeURIComponent(value);
}

export default function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  // Change these to your real business contact email
  const BUSINESS_EMAIL = "hello@yourdomain.com";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const finalSubject = subject.trim() || "Website Contact Message";
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailto = `mailto:${BUSINESS_EMAIL}?subject=${encodeMailto(
      finalSubject
    )}&body=${encodeMailto(body)}`;

    window.location.href = mailto;
  }

  const baseInput =
    "w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-400 caret-primary-500 focus:border-primary-300 focus:ring-2 focus:ring-primary-300 focus:outline-none transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Name</label>
          <input
            className={baseInput}
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Email</label>
          <input
            className={baseInput}
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-neutral-700">Subject</label>
        <input
          className={baseInput}
          placeholder="How can we help?"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-neutral-700">Message</label>
        <textarea
          className={`${baseInput} min-h-35 resize-y`}
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 transition-colors flex items-center justify-center gap-2"
      >
        Send Message
        <ArrowRight className="h-4 w-4" />
      </button>

      <p className="text-xs text-neutral-500">
        This will open your email app to send the message. If you want sending
        directly on the site, we’ll add an API route next.
      </p>
    </form>
  );
}

