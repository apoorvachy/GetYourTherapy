"use client";

import { useState } from "react";
import { hero } from "@/content/site";

// Front-end only: no data leaves the browser. Connect to a HIPAA-compliant
// scheduler (e.g. SimplePractice, Jane) before using with real clients.
export default function ConsultForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="consult-form consult-form--done" role="status">
        <h3>Thank you for reaching out.</h3>
        <p>That first step takes courage. Dr. Reynolds will be in touch to find a time for your free 15-minute call.</p>
      </div>
    );
  }

  return (
    <form
      className="consult-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="field">
        <label htmlFor="name">First name</label>
        <input id="name" name="name" autoComplete="given-name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <fieldset className="field field--choice">
        <legend>I’d prefer</legend>
        <label>
          <input type="radio" name="format" value="in-person" defaultChecked /> In person, Santa Monica
        </label>
        <label>
          <input type="radio" name="format" value="telehealth" /> Telehealth (California)
        </label>
      </fieldset>
      <div className="field">
        <label htmlFor="note">
          Anything you’d like to share? <span className="muted">(optional)</span>
        </label>
        <textarea id="note" name="note" rows={3} placeholder="A sentence or two is plenty. Please don’t include sensitive details." />
      </div>
      <button type="submit" className="btn btn--coral btn--block">
        {hero.cta}
      </button>
      <p className="fine-print">No obligation. Your information stays private.</p>
    </form>
  );
}
