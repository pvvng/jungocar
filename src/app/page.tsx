import { ImageSpace } from "@/components/ImageSpace";
import { Check } from "lucide-react";
import { Suspense } from "react";
import {
  MainGuideSection,
  TimeLineSection,
  VehiclesPreviewSection,
  CarouselBanner,
  ExplainGrid,
  FeatureGridSection,
  StackedCardsSection,
  ImageTripleSection,
} from "@/components/MainClients";

export default function Home() {
  return (
    <main>
      <CarouselBanner />
      {/* 타이틀 */}
      <ExplainGrid
        type="white"
        leftChildren={<ImageSpace desc="상단 배너에 들어갈 이미지" className="aspect-video" />}
        rightChildren={
          <div className="w-full">
            <h2 className="mb-5 text-3xl font-semibold md:text-4xl">
              <p>
                <span className="text-main font-bold">제목</span>을
              </p>
              <p>입력하세요.</p>
            </h2>
            {Array.from({ length: 3 }).map((_, idx) => (
              <p key={idx} className="mb-0.5 flex items-center gap-1 text-base md:text-xl">
                <Check className="text-main size-5 shrink-0" /> 텍스트를 입력하세요.
              </p>
            ))}
          </div>
        }
      />

      <FeatureGridSection />

      {/* 리스가이드 이동 섹션 */}
      <MainGuideSection />

      <StackedCardsSection />

      <ImageTripleSection />

      <TimeLineSection />

      {/* 승계 리스트 */}
      <Suspense fallback={null}>
        <VehiclesPreviewSection />
      </Suspense>
    </main>
  );
}
