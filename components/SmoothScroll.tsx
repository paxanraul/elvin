"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Generic reveal observer for elements tagged .reveal / .clip-reveal
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0 }
    );

    const targets = document.querySelectorAll(".reveal, .clip-reveal");
    let staggerIndex = 0;
    targets.forEach((el) => {
      const node = el as HTMLElement;
      const delay = node.dataset.delay;
      if (delay) node.style.transitionDelay = `${delay}ms`;
      else if (node.dataset.stagger) {
        // local cascade — each staggered group starts near 0 instead of
        // inheriting every earlier element's offset
        node.style.transitionDelay = `${staggerIndex * 80}ms`;
        staggerIndex++;
      }
      io.observe(el);
    });

    return () => {
      gsap.ticker.remove(raf);
      io.disconnect();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
