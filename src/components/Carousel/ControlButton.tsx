"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface ControlButtonType {
  /** 버튼 방향. 'prev'면 왼쪽 화살표, 'next'면 오른쪽 화살표*/
  type: "prev" | "next";
  /** 클릭 시 실행될 콜백 함수. prevSlide / nextSlide를 연결 */
  handler: () => void;
}

/**
 * 좌/우 화살표 버튼 컴포넌트
 */
export function ControlButton({ type, handler }: ControlButtonType) {
  const isPrevType = type === "prev";

  return (
    <button
      onClick={handler}
      className={`${
        isPrevType ? "left-4" : "right-4"
      } absolute top-1/2 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-slate-100 shadow transition hover:bg-white`}
      aria-label={isPrevType ? "Prev Slide" : "Next Slide"}
    >
      {isPrevType ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
}
