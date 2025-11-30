"use client";

import { useEffect, useState } from "react";
import { ControlButton } from "./ControlButton";
import { Indicator } from "./Indicator";
import { useCarousel } from "./useCarousel";

interface CarouselType<T> {
  data?: T[];
  initialIndex?: number;
  renderBlock?: (item: T, index: number) => React.ReactNode;
  indicator?: boolean;
  autoInterval?: number;
  width?: string | number;
  height?: string | number;
}

/**
 * Carousel 컴포넌트
 * -----------------------
 * 제네릭 타입 T를 받아서 데이터 기반으로 슬라이드를 렌더링
 *
 * @template T - 캐러셀에서 렌더링할 데이터 아이템 타입
 * @param [data] - 캐러셀에 렌더링할 데이터 배열, 각 슬라이드별 아이템 (기본값: [])
 * @param [initialIndex] - 캐러셀 초기 슬라이드 인덱스 (0-based) (기본값: 0)
 * @param [renderBlock] - 각 슬라이드에서 렌더링할 JSX/ReactNode를 반환하는 함수
 * @param [indicator] - 인디케이터 렌더 여부 (기본값: true)
 * @param [autoInterval] - 자동 슬라이드 간격(ms) 지정하지 않으면 자동 슬라이드 없음
 * @param [width] - 캐러셀 전체 너비, Tailwind 클래스 외에 커스텀 width 적용 가능 (기본값: "100%")
 * @param [height] - 캐러셀 전체 높이, Tailwind 클래스 외에 커스텀 height 적용 가능 (기본값: "100%")
 */
export default function Carousel<T>({
  data = [],
  initialIndex = 0,
  renderBlock,
  indicator = true,
  autoInterval,
  width = "100%",
  height = "100%",
}: CarouselType<T>) {
  const { currentIndex, controllers } = useCarousel({ data, initialIndex, autoInterval });

  return (
    <div className="relative h-full w-full overflow-hidden" style={{ width, height }}>
      {/* 슬라이드 트랙 */}
      <div className="relative h-full w-full overflow-hidden">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="absolute top-0 left-0 h-full w-full transition-opacity duration-500"
            style={{ opacity: idx === currentIndex ? 1 : 0 }}
          >
            {renderBlock?.(item, idx)}
          </div>
        ))}

        <ControlButton type="prev" handler={controllers.goPrev} />
        <ControlButton type="next" handler={controllers.goNext} />
        {indicator && (
          <Indicator
            dataLength={data.length}
            currentIndex={currentIndex}
            onDotClick={controllers.goTo}
          />
        )}
      </div>
    </div>
  );
}
