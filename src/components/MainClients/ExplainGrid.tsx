"use client";

import { useEffect, useRef } from "react";
import { SectionWrapper } from "../SectionWrapper";
import gsap from "gsap";

interface ExplainGridProps {
  type: "white" | "main" | "gray";
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
}

export function ExplainGrid({ type, leftChildren, rightChildren }: ExplainGridProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(rootRef); // scoped selector
      const left = q(".ex-left");
      const right = q(".ex-right");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 50%",
          // once: true, // 한 번만 실행하려면 주석 해제
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });

      tl.from(left, { opacity: 0, x: -40, duration: 0.7, ease: "power2.out" }).from(
        right,
        { opacity: 0, x: 40, duration: 0.7, ease: "power2.out" },
        "-=0.58",
      );
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <SectionWrapper
      type={type}
      className="ref={rootRef} grid grid-cols-1 gap-4 text-start md:grid-cols-2 md:gap-10"
      ref={rootRef}
    >
      <div className="ex-left w-full">{leftChildren}</div>
      <div className="ex-right w-full">{rightChildren}</div>
    </SectionWrapper>
  );
}
