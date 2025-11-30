"use client";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(SplitText);

interface UseRevealTextAnimationProps {
  /** 애니메이션이 시작될 때 호출되는 콜백 */
  onStart?: () => void;

  /** 모든 글자 애니메이션이 끝났을 때 호출되는 콜백 */
  onEnd?: () => void;

  /** 각 글자에 적용할 지연 시간 (stagger) */
  stagger?: gsap.NumberValue;

  /** 개별 글자의 애니메이션 지속 시간 */
  duration?: gsap.TweenValue;

  /** 이징 함수 (ex: "back.out(1.7)", "power3.out") */
  ease?: gsap.EaseString | gsap.EaseFunction;
}

/**
 * useRevealTextAnimation
 * -----------------------
 * 텍스트를 글자 단위로 쪼개서(fallback 포함) 하나씩 등장시키는 GSAP 기반 애니메이션 훅.
 * SplitText 플러그인을 사용하며, opacity / y / rotateX 조합으로 자연스러운 등장 효과를 만든다.
 *
 * **특징**
 * - ref로 감싼 텍스트를 자동으로 char 단위로 분해
 * - 폰트 로드 완료 후 애니메이션 실행(document.fonts.ready)
 * - 등장 타이밍 조절(stagger / duration / ease)
 * - onStart / onEnd 콜백 지원
 * - cleanup 시 split.revert()로 DOM 원복
 *
 * @param [options.onStart] - 애니메이션 시작 시 호출 (기본값: undefined)
 * @param [options.onEnd] - 애니메이션 종료 시 호출 (기본값: undefined)
 * @param [options.stagger] - 글자 등장 간격 (기본값: 0.04)
 * @param [options.duration] - 각 글자 애니메이션 지속 시간 (기본값: 1)
 * @param [options.ease] - GSAP easing (기본값: "back.out(1.7)")
 *
 * @returns
 *   텍스트가 들어갈 ref.
 *   ref 안에는 **블록 태그(p, div 등) 넣어서 줄바꿈 가능**.
 *
 * @example
 * const titleRef = useRevealTextAnimation();
 *
 * return <h1 ref={titleRef}>Hello World</h1>;
 *
 * @example
 * // 여러 줄도 가능 (ref 안에 p 같은 블록 요소 넣으면 됨)
 * const textRef = useRevealTextAnimation();
 *
 * return (
 *   <div ref={textRef}>
 *     <p>첫 번째 줄</p>
 *     <p>두 번째 줄</p>
 *   </div>
 * );
 */
export function useRevealTextAnimation<T extends HTMLElement>({
  onStart,
  onEnd,
  stagger = 0.04,
  duration = 1,
  ease = "back.out(1.7)",
}: UseRevealTextAnimationProps = {}) {
  /** 애니메이션을 적용할 DOM 요소 ref */
  const textRef = useRef<T>(null);

  useLayoutEffect(() => {
    if (!textRef.current) return;

    // 웹 폰트 로딩이 끝날 때까지 기다려야 위치 계산이 정확해짐
    document.fonts.ready.then(() => {
      // 텍스트를 문자 단위로 분리
      const split = new SplitText(textRef.current, {
        type: "chars",
      });

      // 각 문자 요소는 애니메이션을 위해 inline-block 처리가 필요함
      split.chars.forEach((char) => {
        (char as HTMLElement).style.display = "inline-block";
      });

      // GSAP 타임라인 생성
      const tl = gsap.timeline({
        onStart: () => onStart?.(),
      });

      // 문자 하나씩 등장하는 애니메이션
      tl.from(split.chars, {
        opacity: 0,
        y: 20,
        rotateX: 90,
        duration,
        stagger,
        ease,
      });

      // 모든 문자 애니메이션이 끝난 시점에 onEnd 호출
      tl.call(() => onEnd?.());

      // cleanup: SplitText가 DOM을 변형하므로 unmount시 원본 복구
      return () => split.revert();
    });
  }, []);

  return textRef;
}
