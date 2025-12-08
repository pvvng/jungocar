"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../SectionWrapper";
import { ImageSpace } from "../ImageSpace";

gsap.registerPlugin(ScrollTrigger);

export function FeatureGridSection() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(rootRef);
      const items = q(".feature-item");

      // 기본 등장 애니메이션 (stagger)
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: -30, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 40%",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        },
      );

      // hover interaction: subtle lift and shadow intensify
      items.forEach((el: HTMLElement) => {
        const enter = () =>
          gsap.to(el, {
            y: -6,
            scale: 1.01,
            boxShadow: "0 12px 30px rgba(15,23,42,0.12)",
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

        // 모바일 터치 최적화: 터치 시 잠깐 lift
        el.addEventListener("touchstart", enter, { passive: true });
        el.addEventListener("touchend", leave, { passive: true });
      });

      // Optional: focus styles for keyboard users
      const firstFocusable = q(".feature-item [tabindex]")?.[0];
      if (firstFocusable) {
        // no-op, but keep for extensibility
      }
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <SectionWrapper type="gray" className="text-start">
      <div ref={rootRef}>
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">제목을 입력하세요.</h2>
        <p className="mb-0.5 text-base text-neutral-700 md:text-lg">텍스트를 입력하세요.</p>
        <p className="mb-8 text-base text-neutral-700 md:text-lg">텍스트를 입력하세요.</p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="feature-item aspect-square w-full rounded-2xl bg-white p-3 shadow-[0_6px_18px_rgba(15,23,42,0.06)] transition"
            >
              <div className="flex h-full flex-col items-center justify-center gap-4">
                <div className="overflow-hidden rounded-full">
                  <ImageSpace
                    desc={`소제목 ${idx + 1}`}
                    className="max-w-fit rounded-full px-3 py-1"
                  />
                </div>
                <p className="mt-1 text-center text-sm text-neutral-600">
                  이미지에 맞는 간단한 설명 문구를 입력하세요.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
