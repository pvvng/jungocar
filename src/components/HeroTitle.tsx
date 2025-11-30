import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(SplitText);

export function HeroTitle() {
  const line1Ref = useRef<HTMLParagraphElement | null>(null);
  const line2Ref = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    const node1 = line1Ref.current;
    const node2 = line2Ref.current;
    if (!node1 || !node2) return;

    let split1: SplitText | null = null;
    let split2: SplitText | null = null;
    const tl = gsap.timeline();
    let mounted = true;

    (async () => {
      try {
        await (document as any).fonts?.ready;
      } catch {
        /* ignore */
      }
      if (!mounted) return;

      // 1) 첫 줄 SplitText
      split1 = new SplitText(node1 as HTMLElement, { type: "chars" });
      split1.chars.forEach((c) => ((c as HTMLElement).style.display = "inline-block"));
      gsap.set(split1.chars, { opacity: 0, y: 20, filter: "blur(4px)" });

      // 2) 두번째 줄도 chars로 분해 (앞글자 고정, 나머지만 애니)
      split2 = new SplitText(node2 as HTMLElement, { type: "chars" });
      split2.chars.forEach((c) => ((c as HTMLElement).style.display = "inline-block"));
      // 초기: 전체는 약간 오른쪽 바깥, 약간 블러, 낮은 불투명도
      gsap.set(split2.chars, {
        opacity: 0,
        x: "120%",
        filter: "blur(2px)",
        transformOrigin: "50% 50%",
        willChange: "transform, opacity, filter",
      });

      // 3) 첫 줄 문자 스태거 리빌
      tl.to(split1.chars, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.45,
        ease: "power2.out",
        stagger: 0.04,
      });

      // 4) 두번째: 오른쪽에서 왼쪽으로 부드럽게 달려옴 (전체)
      tl.fromTo(
        split2.chars, // 전체 글자들을 함께 이동시켜 들어오게 함
        { x: "120%", opacity: 0, filter: "blur(2px)" },
        { x: "0%", opacity: 1, filter: "blur(0px)", duration: 0.9, ease: "power4.out" },
        "+=0.08",
      );

      // 5) 글자 살짝 뜸 -> 내려앉음

      // lift: 뒷부분을 살짝 위로 띄움 (작고 빠르게)
      tl.to(
        split2.chars,
        {
          y: -10, // 위로 10px 만큼 띄움
          duration: 0.14,
          ease: "power2.out",
          stagger: 0.02,
        },
        ">-0.18", // 바로 직후, 앞의 이동과 약간 겹치게 재생
      );

      // settle: 부드럽게 내려오면서 아주 약한 탄성으로 마무리
      tl.to(
        split2.chars,
        {
          y: 0,
          duration: 0.42,
          ease: "elastic.out(0.8, 0.45)", // 강하지 않은 탄성값
          stagger: 0.02,
        },
        ">",
      );
    })();

    return () => {
      mounted = false;
      try {
        tl.kill();
      } catch {}
      if (split1) {
        try {
          split1.revert();
        } catch {}
      }
      if (split2) {
        try {
          split2.revert();
        } catch {}
      }
    };
  }, []);

  return (
    <h1 className="space-y-5 font-extrabold">
      <p ref={line1Ref} className="text-4xl">
        중고차를 구매하는 가장 현명한 선택
      </p>
      <p ref={line2Ref} className="text-main text-8xl">
        이차탈래?
      </p>
    </h1>
  );
}
