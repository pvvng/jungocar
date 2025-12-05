import { Card } from "@/components/Card";
import { CarouselBanner } from "@/components/CarouselBanner";
import { ExplainGrid } from "@/components/ExplainGrid";
import { ImageSpace } from "@/components/ImageSpace";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Check } from "lucide-react";
import Link from "next/link";

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
            <p className="mb-0.5 flex items-center gap-1 text-base md:text-xl">
              <Check className="text-main size-5 shrink-0" /> 텍스트를 입력하세요.
            </p>
            <p className="mb-0.5 flex items-center gap-1 text-base md:text-xl">
              <Check className="text-main size-5 shrink-0" /> 텍스트를 입력하세요.
            </p>
            <p className="mb-0.5 flex items-center gap-1 text-base md:text-xl">
              <Check className="text-main size-5 shrink-0" /> 텍스트를 입력하세요.
            </p>
          </div>
        }
      />

      {/* 소개? */}
      <SectionWrapper type="gray">
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">제목을 입력하세요.</h2>
        <p className="text-neutral-70 mb-0.5 text-base md:text-lg">텍스트를 입력하세요.</p>
        <p className="text-neutral-70 mb-8 text-base md:text-lg">텍스트를 입력하세요.</p>
        <div className="grid grid-cols-4 gap-5 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="aspect-square w-full">
              <ImageSpace desc={`이미지에 관한 내용 ${idx + 1}`} />
            </div>
          ))}
        </div>
        <Link
          href="/"
          className="bg-main mx-auto mt-12 block max-w-fit rounded px-4 py-2 text-lg font-semibold text-white transition hover:scale-95 md:px-5 md:py-3"
        >
          다른 페이지로 이동
        </Link>
      </SectionWrapper>

      {/* 승계 리스트 */}
      <SectionWrapper type="white" className="text-start">
        <h2 className="mb-2 text-2xl font-bold md:text-3xl">제목을 입력하세요.</h2>
        <p className="mb-8 text-base text-neutral-700 md:text-lg">텍스트를 입력하세요.</p>

        {/* md 이상: grid / md 이하: 가로 스크롤 */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [-webkit-overflow-scrolling:touch] lg:grid lg:grid-cols-4 lg:gap-6">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="w-64 flex-shrink-0 snap-start md:w-auto">
              <Card />
            </div>
          ))}
        </div>

        <Link
          href="/cars"
          className="mt-12 block max-w-fit rounded bg-gray-200 px-4 py-2 text-lg font-semibold transition hover:scale-95 md:mx-auto md:px-5 md:py-3"
        >
          승계차량 더보기
        </Link>
      </SectionWrapper>
    </main>
  );
}
