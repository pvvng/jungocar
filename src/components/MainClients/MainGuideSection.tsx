"use client";

import Image from "next/image";
import { SectionWrapper } from "../SectionWrapper";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function MainGuideSection() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // gsap.context는 React에서 selector를 안전하게 사용하고 자동 정리해줌
    const ctx = gsap.context(() => {
      // .float-img들을 배열로 가져옴
      const items = gsap.utils.toArray<HTMLElement>(".float-img");

      items.forEach((el, i) => {
        // 각 이미지마다 독립 tween 생성 (처음엔 paused)
        const tween = gsap.to(el, {
          y: 20, // 이동량
          duration: 2 + i * 0.15, // 약간씩 속도 다르게
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          paused: true,
        });

        // ScrollTrigger로 in/out 감지 -> play / pause 처리
        ScrollTrigger.create({
          trigger: el,
          start: "top 80%", // 화면 하단에서 80% 지점에 닿으면 시작
          end: "bottom 20%", // 화면 상단에서 20% 지나면 끝 (필요시 조정)
          onEnter: () => tween.play(),
          onEnterBack: () => tween.play(),
          onLeave: () => tween.pause(0), // 나가면 정지(0으로 리셋)
          onLeaveBack: () => tween.pause(0), // 반대 방향으로 나가도 정지
          // markers: true, // 디버그용으로 켜서 start/end 위치 확인 가능
        });
      });
    }, rootRef);

    return () => {
      // 컴포넌트 언마운트 시 자동 정리
      ctx.revert();
      // ScrollTrigger 자체를 모두 지우고 싶으면 아래 주석 해제
      // ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <SectionWrapper type="white" ref={rootRef}>
      <h2 className="mb-5 text-2xl font-bold md:text-3xl">
        완납 승계와 위탁 승계의 차이, 알고 계신가요?
      </h2>
      <p className="text-base text-neutral-700 md:text-lg">
        리스를 넘기거나 인수할 때 선택할 수 있는 두 가지 방식입니다.
      </p>
      <p className="text-base text-neutral-700 md:text-lg">
        <strong className="text-main">완납 승계</strong>는 남은 리스금을 모두 정리하고 차량만
        인수하는 방식,
      </p>
      <p className="mb-8 text-base text-neutral-700 md:text-lg">
        <strong className="text-main">위탁 승계</strong>는 전문 업체가 승계 절차를 대신 처리해주는
        방식이에요.
      </p>
      <div className="flex items-center justify-center gap-4 md:gap-8">
        <div className="float-img relative size-25 md:size-50">
          <Image
            src="/images/installment.webp"
            alt="완납승계"
            fill
            className="object-cover"
            draggable={false}
          />
        </div>
        <p className="text-base font-extrabold text-neutral-600 md:text-3xl">vs</p>
        <div className="float-img relative size-25 md:size-50">
          <Image
            src="/images/bill.webp"
            alt="완납승계"
            fill
            className="object-cover"
            draggable={false}
          />
        </div>
      </div>
      <Link
        href="/guide"
        className="bg-main mx-auto mt-12 block max-w-fit rounded px-4 py-2 font-semibold text-white shadow transition hover:scale-95 md:px-5 md:py-3"
      >
        승계 가이드 확인하기
      </Link>
    </SectionWrapper>
  );
}
