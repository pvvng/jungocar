"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

export function StackedCardsSection() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(rootRef);
      const items = q(".stack-card");

      // 등장 애니메이션: 아래에서 올라오며 페이드인 + 약간 스케일
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 50, scale: 0.995 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 55%",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        },
      );

      // hover / touch interaction: subtle lift + shadow
      items.forEach((el: HTMLElement) => {
        const enter = () =>
          gsap.to(el, {
            y: -6,
            scale: 1.01,
            boxShadow: "0 14px 40px rgba(15,23,42,0.12)",
            duration: 0.28,
            ease: "power2.out",
          });
        const leave = () =>
          gsap.to(el, {
            y: 0,
            scale: 1,
            boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
            duration: 0.28,
            ease: "power2.out",
          });

        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        el.addEventListener("touchstart", enter, { passive: true });
        el.addEventListener("touchend", leave, { passive: true });
      });
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <SectionWrapper type="gray" className="text-center" ref={rootRef}>
      <h2 className="mb-3 text-2xl font-bold md:text-3xl">제목을 입력하세요.</h2>
      <p className="text-neutral-70 mb-0.5 text-base md:text-lg">텍스트를 입력하세요.</p>
      <p className="text-neutral-70 mb-8 text-base md:text-lg">텍스트를 입력하세요.</p>

      <div className="space-y-5">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="stack-card mx-auto w-full max-w-[800px] rounded-2xl bg-white p-5 shadow-[0_6px_18px_rgba(15,23,42,0.06)]"
          >
            텍스트를 입력하세요.
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
