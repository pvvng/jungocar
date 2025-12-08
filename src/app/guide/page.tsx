"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { HandCoins, ReceiptText, ArrowRightLeft, User, Clock, Check } from "lucide-react";
import { DimmedImageBanner } from "@/components/DimmedImageBanner";
import { SectionWrapper } from "@/components/SectionWrapper";
import Image from "next/image";

type Mode = "complete" | "consign" | null;

export default function LeaseGuidePage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeMatch: Mode = (SCENARIOS.find((s) => s.id === selectedId) || null)?.match ?? null;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // 카드 스테거 등장
  // replace your current card-entry useEffect with this
  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // 바로 보이도록 설정
      const cards = containerRef.current?.querySelectorAll(".scenario-card");
      cards?.forEach((c) => {
        (c as HTMLElement).style.opacity = "1";
        (c as HTMLElement).style.transform = "none";
      });
      return;
    }
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".scenario-card") as Element[];
      if (!cards.length) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(cards, {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 0.6,
        stagger: { each: 0.08, from: "start" },
        ease: "elastic.in",
        force3D: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 패널 슬라이드 인 (activeMatch 변경에 따라)
  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = panelRef.current;
    if (!el) return;

    gsap.killTweensOf(el);

    if (!activeMatch) {
      if (prefersReduced) {
        el.style.opacity = "1";
        el.style.transform = "none";
      } else {
        gsap.set(el, { autoAlpha: 1, x: 0, clearProps: "all" });
      }
      return;
    }

    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    gsap.fromTo(
      el,
      { x: 40, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.36, ease: "power3.out", overwrite: true },
    );
  }, [activeMatch]);

  return (
    <main className="min-h-screen text-neutral-800">
      <DimmedImageBanner
        title="승계 가이드"
        descriptions={["리스가 처음이라 어려우신가요?", "상황에 맞춰 빠르게 추천받아보세요"]}
        imageSrc="/images/holding.webp"
        imageClassName="object-center"
      />

      <SectionWrapper type="white" className="text-start">
        <div ref={containerRef}>
          <div className="mb-2 flex items-center gap-3">
            <ArrowRightLeft className="size-6" />
            <h2 className="text-2xl font-bold">어떤 승계가 내게 적합할까요?</h2>
          </div>
          <p className="mb-5 text-sm text-neutral-600">내 상황에 맞는 카드를 골라보세요.</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {SCENARIOS.map((s, i) => (
              <ScenarioCard
                key={s.id}
                index={i}
                id={s.id}
                title={s.title}
                subtitle={s.subtitle}
                hint={s.hint}
                icon={s.icon}
                active={selectedId === s.id}
                onClick={() => setSelectedId((cur) => (cur === s.id ? null : s.id))}
              />
            ))}
          </div>
          <div className="mt-4">
            <div
              ref={panelRef}
              className="relative h-full overflow-hidden rounded-2xl"
              style={{ opacity: 1, transform: "translateX(0px)" }}
            >
              <RecommendationPanel selectedId={selectedId} />
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-dashed border-gray-200 bg-white p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-neutral-700">
                더 상세한 절차나 비용은 상담을 통해 확인해보세요.
              </p>
              <Link href="/inquiry" className="text-main mt-2 text-sm font-medium sm:mt-0">
                상담 신청하기 →
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ / CTA */}
      <SectionWrapper type="white" className="pt-0! text-start">
        <h3 className="mb-6 text-xl font-bold">자주 묻는 질문</h3>
        <div className="space-y-4">
          <details>
            <summary className="cursor-pointer font-medium">
              완납 승계하면 차량 명의는 어떻게 되나요?
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              완납 후 리스사의 절차를 통해 명의 또는 인도권이 이전됩니다.
            </p>
          </details>

          <details>
            <summary className="cursor-pointer font-medium">
              위탁 승계 수수료는 보통 얼마인가요?
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              업체마다 다르며, 고정 또는 비율 형태의 수수료가 적용될 수 있습니다.
            </p>
          </details>

          <details>
            <summary className="cursor-pointer font-medium">
              승계 시 보험·세금은 어떻게 처리하나요?
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              보험 및 세금은 리스 조건 및 업체 도움 여부에 따라 달라질 수 있습니다.
            </p>
          </details>
        </div>
      </SectionWrapper>
    </main>
  );
}

/* ---------------------------
   시나리오 정의
   --------------------------- */
const SCENARIOS: {
  id: string;
  title: string;
  subtitle: string;
  hint: string;
  match: Mode; // 추천 방식 (complete / consign / null)
  icon: React.ReactNode;
}[] = [
  {
    id: "immediate",
    title: "바로 차량을 인수하고 싶어요",
    subtitle: "중고차 구매처럼 즉시 인수",
    hint: "잔여금 완납으로 소유권을 바로 이전",
    match: "complete",
    icon: <HandCoins className="size-5" />,
  },
  {
    id: "no-paperwork",
    title: "서류·심사 처리가 귀찮아요",
    subtitle: "업체가 다 해주면 편하겠어요",
    hint: "플랫폼이 매칭·서류·심사 전부 대행",
    match: "consign",
    icon: <ReceiptText className="size-5" />,
  },
  {
    id: "fast-close",
    title: "절차는 빠르게 끝내고 싶어요",
    subtitle: "시간을 아끼고 싶을 때",
    hint: "완납 승계가 절차는 단순한 편",
    match: "complete",
    icon: <Clock className="size-5" />,
  },
  {
    id: "safety",
    title: "안전하게 맡기고 싶어요",
    subtitle: "직거래 부담이 커요",
    hint: "위탁 승계로 심사·안전성 확보",
    match: "consign",
    icon: <User className="size-5" />,
  },
];

interface ScenarioCardProps {
  index: number;
  id: string;
  title: string;
  subtitle: string;
  hint: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

function ScenarioCard({
  index,
  id,
  title,
  subtitle,
  hint,
  icon,
  active,
  onClick,
}: ScenarioCardProps) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      className={`scenario-card relative w-full transform-gpu cursor-pointer overflow-hidden rounded-2xl border border-neutral-100 p-4 shadow transition-all ${
        active ? "bg-main/20 border-main/20" : "hover:bg-neutral-100"
      }`}
      style={{
        opacity: 0,
        transform: "translateY(18px) scale(0.96)",
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transformOrigin: "center",
      }}
      aria-pressed={active}
      data-index={index}
      data-id={id}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-full">{icon}</div>
        <div className="flex-1 text-start">
          <h4 className="text-md font-semibold">{title}</h4>
          <p className="mt-0.5 text-xs text-neutral-600">{subtitle}</p>
        </div>
      </div>
      <p className="mt-3 text-start text-sm text-neutral-700">{hint}</p>
    </article>
  );
}

function RecommendationPanel({ selectedId }: { selectedId: string | null }) {
  const scenario = SCENARIOS.find((s) => s.id === selectedId) ?? null;
  const active: Mode = scenario ? scenario.match : null;

  const map = {
    complete: {
      title: "완납 승계 추천",
      desc: "바로 차량을 인수하고 싶을 때 적합해요.",
      bullets: [
        "리스료 부담 없이 차량만 인수 가능",
        "절차 단순하고 매우 빠른 인수",
        "기존 계약자 잔여금 명세 확인 필요",
      ],
      img: "/images/installment.webp",
      cta: { href: "/vehicle", label: "승계 차량 보기" },
      icon: HandCoins,
      color: "from-main/20 to-main/5",
    },
    consign: {
      title: "위탁 승계 추천",
      desc: "절차를 업체가 대행해주길 원한다면 적합해요.",
      bullets: ["매칭·서류·심사 전체 대행", "가장 간편하고 안전한 방식", "일부 수수료 발생 가능"],
      img: "/images/receipt.webp",
      cta: { href: "/vehicle", label: "승계 차량 보기" },
      icon: ReceiptText,
      color: "from-indigo-200/30 to-indigo-50/40",
    },
  } as const;

  if (!active) {
    return (
      <div className="flex h-full w-full items-center justify-start rounded-2xl border-2 border-dashed border-gray-200 bg-gray-100 p-7 text-start shadow backdrop-blur">
        <div className="">
          <h4 className="mb-2 text-xl font-bold">상황에 맞는 방식을 골라보세요</h4>
          <p className="text-sm leading-relaxed text-neutral-700">
            왼쪽 카드 중 본인 상황과 가까운 항목을 선택하면
            <br />
            가장 적합한 승계 방식을 추천해드려요.
          </p>

          <div className="mt-5 flex items-center gap-2">
            <Link
              href="/vehicle"
              className="bg-main rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:scale-95"
            >
              승계 차량 둘러보기
            </Link>
            <Link
              href="/inquiry"
              className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold transition hover:scale-95"
            >
              상담 신청
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const cfg = map[active];

  const Icon = cfg.icon;

  return (
    <div
      className={`relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br ${cfg.color} shadow`}
    >
      {/* 상단 콘텐츠 */}
      <div className="relative z-10 p-6">
        {/* 아이콘 강조 */}
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-xl bg-white/60 p-3 shadow backdrop-blur">
            <Icon className="text-main size-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold">{cfg.title}</h4>
            <p className="text-sm text-neutral-700">{cfg.desc}</p>
          </div>
        </div>

        {/* 리스트 */}
        <ul className="mt-4 space-y-2">
          {cfg.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-base text-neutral-800">
              <Check className="text-main size-4" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {/* CTA 영역 */}
        <div className="mt-4 flex items-center justify-start gap-2">
          <Link
            href={cfg.cta.href}
            className="bg-main max-w-fit rounded-lg px-4 py-2 text-center text-sm font-semibold text-white shadow transition hover:scale-95"
          >
            {cfg.cta.label}
          </Link>
        </div>
      </div>

      {/* 배경 이미지 (연한 overlay) */}
      <Image
        src={cfg.img}
        alt={cfg.title}
        fill
        className="pointer-events-none object-cover opacity-20"
      />
    </div>
  );
}
