"use client";

import { useEffect, useRef, useState } from "react";
import { Logo, Sparkle } from "./Decor";
import { hero, practice } from "@/content/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#office", label: "Office" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    html.classList.add("menu-open");
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    // Close if the viewport grows past the mobile breakpoint while open.
    const mq = window.matchMedia("(min-width: 961px)");
    const onMq = () => mq.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      html.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      toggleRef.current?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-menu-open" : ""}`}>
        <div className="container site-header__inner">
          <Logo />
          <nav className="nav" aria-label="Primary">
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#book" className="btn btn--outline header__cta">
            {hero.cta} <span aria-hidden="true">→</span>
          </a>
          <button
            ref={toggleRef}
            className={`menu-toggle ${open ? "is-open" : ""}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Mobile" className="mobile-menu__nav">
          <ul>
            {links.map((l, i) => (
              <li key={l.href} style={{ transitionDelay: open ? `${0.08 + i * 0.05}s` : "0s" }}>
                <a href={l.href} onClick={close}>
                  <span className="mobile-menu__num">0{i + 1}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__foot" style={{ transitionDelay: open ? "0.35s" : "0s" }}>
          <a href="#book" className="btn btn--coral btn--block" onClick={close}>
            {hero.cta} <span aria-hidden="true">→</span>
          </a>
          <p>
            {practice.city}, {practice.region} · Telehealth across California
          </p>
        </div>
        <Sparkle className="mobile-menu__sparkle" size={120} tone="butter" />
      </div>
    </>
  );
}
