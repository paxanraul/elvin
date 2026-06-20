"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { asset } from "@/lib/asset";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tween = gsap.fromTo(
      el,
      { scale: 1.08 },
      { scale: 1, duration: 2.2, ease: "power2.out" }
    );
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      {/* Photo as a tall right-anchored column — never centered */}
      <div
        ref={imgRef}
        className="absolute inset-y-0 right-0 w-full md:w-[48%]"
      >
        <Image
          src={asset("/img/live-bw.jpg")}
          alt="DJ ELVIN за пультом"
          fill
          priority
          sizes="(max-width:768px) 100vw, 48vw"
          className="object-cover object-[46%_center] brightness-110 contrast-[1.05]"
        />
        {/* blend the column into the dark on the left edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-paper-900 via-paper-900/10 to-transparent md:from-paper-900 md:via-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-paper-900 via-transparent to-paper-900/40 md:via-transparent" />
      </div>

      {/* Headline anchored bottom-left */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-12 md:px-12 md:pb-16">
        <p className="reveal mb-5 font-mono text-[11px] uppercase tracking-[0.32em] text-bone-muted">
          Wedding &amp; Private Events · DJ
        </p>

        <h1 className="display text-bone">
          <span className="reveal block text-[20vw] leading-[0.82] md:text-[15vw] lg:text-[12.5rem]">
            DJ
          </span>
          <span
            className="reveal block text-[20vw] leading-[0.82] md:text-[15vw] lg:text-[12.5rem]"
            data-delay="90"
          >
            ELVIN
          </span>
        </h1>

        <div className="reveal mt-7 flex max-w-3xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg leading-snug text-bone/90 md:text-xl">
            Музыка, которая собирает людей вместе — от первого танца
            до последнего трека.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("reserve")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-signal transition-colors hover:text-bone"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-signal text-xl leading-none text-signal transition-all duration-500 group-hover:bg-signal group-hover:text-paper-900">
              ↓
            </span>
забронировать
          </button>
        </div>
      </div>
    </section>
  );
}
