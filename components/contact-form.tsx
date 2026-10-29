"use client";

import { FormEvent, useState } from "react";
import { org } from "@/content/catalog";
import type { Locale } from "@/lib/locale";
import { buttonClass } from "@/components/ui";

const topics = [
  { id: "general", email: org.email, fi: "Yleinen asia", en: "General" },
  { id: "school", email: org.schoolEmail, fi: "Skeittikoulu tai leiri", en: "Skate school or camp" },
  { id: "membership", email: org.email, fi: "Jäsenyys", en: "Membership" },
  { id: "billing", email: org.billingEmail, fi: "Laskutus", en: "Billing" },
  { id: "harassment", email: org.email, fi: "Häirintä tai turvallisuus", en: "Harassment or safety" },
  { id: "partner", email: org.email, fi: "Yhteistyö", en: "Partnership" },
];

const text = {
  fi: {
    topic: "Aihe",
    name: "Nimi",
    nameHint: "Valinnainen. Häirintäasiassa nimen voi jättää tyhjäksi.",
    email: "Sähköposti",
    emailHint: "Valinnainen, jos haluat vastauksen.",
    message: "Viesti",
    send: "Avaa sähköpostissa",
    note: "Lomake ei tallenna viestiä palvelimelle. Se avaa sähköpostiohjelmasi, josta lähetät viestin itse.",
    harassment:
      "Häirintäyhteyshenkilö on Siv Knudsen. Tämä reitti ei ole täysin anonyymi, koska sähköpostiosoitteesi voi näkyä vastaanottajalle. Jätä tunnistetiedot pois, jos se on mahdollista.",
    error: "Kirjoita viesti, vähintään muutama sana.",
    emailError: "Tarkista sähköpostiosoite.",
  },
  en: {
    topic: "Topic",
    name: "Name",
    nameHint: "Optional. For a harassment report you can leave this empty.",
    email: "Email",
    emailHint: "Optional, if you want a reply.",
    message: "Message",
    send: "Open in email",
    note: "The form does not store the message on a server. It opens your email app, and you send the message yourself.",
    harassment:
      "The harassment contact is Siv Knudsen. This route is not fully anonymous, because your email address can be visible to the recipient. Leave out identifying details if you can.",
    error: "Write a message, at least a few words.",
    emailError: "Check the email address.",
  },
};

export function ContactForm({ locale }: { locale: Locale }) {
  const copy = text[locale];
  const [topic, setTopic] = useState(topics[0].id);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = String(form.get("message") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const name = String(form.get("name") ?? "").trim();
    const chosen = topics.find((item) => item.id === topic) ?? topics[0];

    if (message.length < 5) {
      setError(copy.error);
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(copy.emailError);
      return;
    }

    setError("");
    const subject = encodeURIComponent(`${chosen[locale]} — HELride`);
    const lines = [
      name ? `${copy.name}: ${name}` : null,
      email ? `${copy.email}: ${email}` : null,
      "",
      message,
    ].filter((line) => line !== null);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${chosen.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-4" noValidate>
      <div>
        <label htmlFor="topic" className="block font-semibold">
          {copy.topic}
        </label>
        <select
          id="topic"
          name="topic"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          className="mt-2 min-h-12 w-full border border-white/20 bg-ink px-3 text-paper"
        >
          {topics.map((item) => (
            <option key={item.id} value={item.id}>
              {item[locale]}
            </option>
          ))}
        </select>
      </div>
      {topic === "harassment" ? <p className="border border-signal p-3 text-sm">{copy.harassment}</p> : null}
      <div>
        <label htmlFor="name" className="block font-semibold">
          {copy.name}
        </label>
        <p id="name-hint" className="text-sm text-mist">
          {copy.nameHint}
        </p>
        <input
          id="name"
          name="name"
          autoComplete="name"
          aria-describedby="name-hint"
          className="mt-2 min-h-12 w-full border border-white/20 bg-ink px-3"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold">
          {copy.email}
        </label>
        <p id="email-hint" className="text-sm text-mist">
          {copy.emailHint}
        </p>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-describedby="email-hint"
          className="mt-2 min-h-12 w-full border border-white/20 bg-ink px-3"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-semibold">
          {copy.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full border border-white/20 bg-ink px-3 py-3"
        />
      </div>
      {error ? (
        <p role="alert" className="text-heat">
          {error}
        </p>
      ) : null}
      <button type="submit" className={buttonClass("signal")}>
        {copy.send}
      </button>
      <p className="text-sm text-mist">{copy.note}</p>
    </form>
  );
}
