"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface UseCarouselType<T> {
  data?: T[];
  initialIndex?: number;
  autoInterval?: number;
}

/**
 * useCarousel 훅
 * -----------------------
 * 캐러셀 슬라이드를 위한 상태 및 컨트롤러 제공
 *
 * @template T - 캐러셀에서 렌더링할 데이터 아이템 타입
 * @param [data] - 캐러셀에 렌더링할 데이터 배열, 각 슬라이드별 아이템 (기본값: [])
 * @param [initialIndex] - 캐러셀 초기 슬라이드 인덱스 (0-based) (기본값: 0)
 * @param [autoInterval] - 자동 슬라이드 간격(ms) 지정하지 않으면 자동 슬라이드 없음
 *
 * @returns 훅이 반환하는 객체
 * @returns `return.currentIndex` - 현재 슬라이드 인덱스
 * @returns `return.controllers` - 슬라이드 이동 컨트롤러
 * @returns `return.controllers.goPrev` - 이전 슬라이드로 이동
 * @returns `return.controllers.goNext` - 다음 슬라이드로 이동
 * @returns `return.controllers.goTo` - 특정 인덱스로 이동
 */
export function useCarousel<T>({ data = [], initialIndex = 0, autoInterval }: UseCarouselType<T>) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // 기존 인터발 삭제
  const clearExistingInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // 인터팔 초기화
  const startInterval = useCallback(() => {
    if (!autoInterval || data.length <= 1) return;
    clearExistingInterval();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, autoInterval + 500);
  }, [autoInterval, data.length, 500]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    startInterval(); // 수동 조작 시 interval 리셋
  }, [data]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
    startInterval(); // 수동 조작 시 interval 리셋
  }, [data]);

  const goTo = useCallback(
    (idx: number) => {
      setCurrentIndex(idx % data.length);
      startInterval(); // 수동 조작 시 interval 리셋
    },
    [data],
  );

  useEffect(() => {
    startInterval();
    return () => clearExistingInterval();
  }, [startInterval]);

  const api = useMemo(
    () => ({
      currentIndex,
      controllers: { goPrev, goNext, goTo },
    }),
    [currentIndex, goPrev, goNext, goTo],
  );

  return api;
}
