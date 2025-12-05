"use client";

interface IndicatorType {
  /** 총 슬라이드 개수. Indicator dot 수를 결정 */
  dataLength: number;
  /** 현재 슬라이드 인덱스. 해당 인덱스 dot는 길게 표시됨 */
  currentIndex: number;
  /** dot 클릭 시 실행될 콜백 */
  onDotClick?: (idx: number) => void;
}

/**
 * 하단 슬라이드 인디케이터(dot) 컴포넌트
 */
export function Indicator({ dataLength, currentIndex, onDotClick }: IndicatorType) {
  return (
    <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2">
      {Array.from({ length: dataLength }).map((_, idx) => (
        <div
          key={idx}
          onClick={() => onDotClick?.(idx)} // 클릭 시 인덱스 변경
          className={`h-3 cursor-pointer rounded-full bg-gray-200 shadow transition-all duration-300 ${
            currentIndex === idx ? "w-10" : "w-3"
          }`}
        ></div>
      ))}
    </div>
  );
}
