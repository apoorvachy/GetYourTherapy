"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __motion?: boolean;
  }
}

// Scroll motion:
//  [data-reveal]  rises 100px and fades in when it enters the viewport
//  [data-split]   words blur/rise in one after another
//  [data-zoom]    images grow from 60% to full size as they scroll into view (scroll-linked)
export default function Motion() {
  useEffect(() => {
    window.__motion = true;
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal], [data-split]");

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    // Hero content animates on load; everything else on scroll.
    targets.forEach((el) => (el.closest(".hero") ? el.classList.add("is-visible") : io.observe(el)));

    const zooms = Array.from(document.querySelectorAll<HTMLElement>("[data-zoom]"));
    // Layout position (offsetTop ignores transforms), so the zoom can't feed back into its own measurement.
    const pageTop = (el: HTMLElement) => {
      let y = 0;
      for (let n: HTMLElement | null = el; n; n = n.offsetParent as HTMLElement | null) y += n.offsetTop;
      return y;
    };
    let tops = zooms.map(pageTop);
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      zooms.forEach((el, i) => {
        const top = tops[i] - window.scrollY;
        const raw = Math.min(Math.max((vh - top) / (vh * 0.65), 0), 1);
        el.style.setProperty("--p", (1 - Math.pow(1 - raw, 3)).toFixed(3));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      tops = zooms.map(pageTop);
      onScroll();
    };
    update();
    root.classList.add("zoom-ready");
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    // Fonts, images and FAQ toggles shift layout after first paint.
    window.addEventListener("load", onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(document.body);

    return () => {
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
