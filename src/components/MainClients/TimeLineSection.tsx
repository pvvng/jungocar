"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageSpace } from "../ImageSpace";
import { SectionWrapper } from "../SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

export function TimeLineSection() {
  return (
    <SectionWrapper type="gray" className="text-start">
      <h2 className="mb-3 text-2xl font-bold md:text-3xl">제목을 입력하세요.</h2>
      <p className="mb-8 text-base text-neutral-700 md:text-lg">텍스트를 입력하세요.</p>
      <Timeline />
    </SectionWrapper>
  );
}

export function Timeline() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");

      items.forEach((el, i) => {
        // 이미지(원) 요소
        const circle = el.querySelector<HTMLElement>(".timeline-circle");
        // 윗선 요소 (첫 항목은 없음)
        const topLine = el.querySelector<HTMLElement>(".timeline-line-top");
        // 메인 컨텐츠 (텍스트)
        const content = el.querySelector<HTMLElement>(".timeline-content");

        // 이미지 등장 애니메이션: scale + fade
        if (circle) {
          gsap.set(circle, { scale: 0.88, autoAlpha: 0 });
          gsap.to(circle, {
            scale: 1,
            autoAlpha: 1,
            duration: 0.7,
            ease: "back.out(1.3)",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            // 약간 딜레이 주면 라인과 자연스럽게 연결 가능
            delay: 0,
          });
        }

        // 윗선 애니메이션: scaleY from 0 -> 1 (origin: bottom)
        if (topLine) {
          topLine.style.transformOrigin = "bottom center";
          gsap.set(topLine, { scaleY: 0 });
          ScrollTrigger.create({
            trigger: el,
            start: "top 92%",
            end: "bottom 20%",
            onEnter: () => gsap.to(topLine, { scaleY: 1, duration: 0.5, ease: "power2.out" }),
            onEnterBack: () => gsap.to(topLine, { scaleY: 1, duration: 0.5, ease: "power2.out" }),
            onLeave: () => gsap.to(topLine, { scaleY: 0, duration: 0.3, ease: "power1.in" }),
            onLeaveBack: () => gsap.to(topLine, { scaleY: 0, duration: 0.3, ease: "power1.in" }),
          });
        }

        // 텍스트 내용 애니메이션: fade + slide
        if (content) {
          gsap.set(content, { autoAlpha: 0, y: 20 });
          gsap.to(content, {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            delay: 0.08, // 텍스트가 이미지/라인 뒤에 살짝 따라오게
          });
        }
      });
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="space-y-10">
      {Array.from({ length: 5 }).map((_, idx) => (
        <div key={idx} className="timeline-item relative flex items-center gap-8">
          {/* --- 이미지 + 위쪽 타임라인 라인 --- */}
          <div className="relative flex flex-col items-center">
            {/* 윗선: 첫 항목이면 렌더링하지 않음 */}
            {idx !== 0 && (
              <div
                className="timeline-line-top absolute -top-[60px] left-1/2 h-[60px] w-[3px] -translate-x-1/2 bg-neutral-300"
                aria-hidden
              />
            )}

            {/* 이미지(원) - 애니 대상 */}
            <div className="timeline-circle z-10 overflow-hidden rounded-full">
              <ImageSpace className="rounded-full" width={150} height={150} />
            </div>
          </div>

          {/* 내용 */}
          <div className="timeline-content text-start font-bold">
            <p className="text-lg text-neutral-700">STEP {idx + 1}</p>
            <p className="text-main mb-3 text-2xl">제목을 입력하세요.</p>
            <p className="font-medium text-neutral-600">텍스트를 입력하세요.</p>
          </div>
        </div>
      ))}
    </div>
  );
}
