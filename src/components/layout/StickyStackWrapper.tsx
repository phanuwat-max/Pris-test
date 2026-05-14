"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StickyStackWrapperProps {
  children: React.ReactNode;
}

export default function StickyStackWrapper({
  children,
}: StickyStackWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!wrapperRef.current || !innerRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1280px)", () => {
        // Use GSAP pin to hold the section in place while the next section slides over
        const tl = gsap.to(innerRef.current, {
          scale: 0.85,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=100%", // Pin for a full viewport height
            pin: true,
            pinSpacing: false, // Prevents pushing down the next section, allowing it to slide over
            scrub: true,
          },
        });
        return () => tl.kill();
      });

      mm.add("(max-width: 1024px)", () => {
         // Mobile: natural scroll, no pinning or scaling down
         gsap.set(innerRef.current, { scale: 1, opacity: 1 });
      });
    },
    { scope: wrapperRef }
  );

  return (
    <div ref={wrapperRef} className="relative w-full min-h-[100svh] min-[1280px]:h-screen" style={{ zIndex: 1, backgroundColor: "black" }}>
      <div
        ref={innerRef}
        className="h-full min-h-[100svh] w-full will-change-transform min-[1280px]:min-h-0"
        style={{ transformOrigin: "center center" }}
      >
        {children}
      </div>
    </div>
  );
}
