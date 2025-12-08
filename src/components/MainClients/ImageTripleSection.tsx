"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../SectionWrapper";
import { ImageSpace } from "../ImageSpace";

gsap.registerPlugin(ScrollTrigger);

export function ImageTripleSection() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(rootRef);
      const items = q(".triple-img");

      // 등장 애니메이션
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 30, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 50%",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        },
      );

      // Hover / touch 인터랙션
      items.forEach((el: HTMLElement) => {
        const enter = () =>
          gsap.to(el, {
            scale: 1.03,
            y: -4,
            boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
            duration: 0.25,
            ease: "power2.out",
          });

        const leave = () =>
          gsap.to(el, {
            scale: 1,
            y: 0,
            boxShadow: "0 6px 14px rgba(0,0,0,0.06)",
            duration: 0.25,
            ease: "power2.out",
          });

        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        el.addEventListener("touchstart", enter, { passive: true });
        el.addEventListener("touchend", leave, { passive: true });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper type="white" className="text-start">
      <div ref={rootRef}>
        <h2 className="mb-3 text-2xl font-bold md:text-3xl">제목을 입력하세요.</h2>
        <p className="text-neutral-70 mb-0.5 text-base md:text-lg">텍스트를 입력하세요.</p>
        <p className="text-neutral-70 mb-8 text-base md:text-lg">텍스트를 입력하세요.</p>

        <div className="grid grid-cols-3 gap-10">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="triple-img aspect-9/10 overflow-hidden rounded-xl shadow-[0_6px_14px_rgba(0,0,0,0.06)] transition"
            >
              <ImageSpace className="h-full w-full" />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
