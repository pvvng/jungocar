import { VehiclePreviewCard } from "@/components/VehiclePreviewCard";
import { CarouselBanner } from "@/components/CarouselBanner";
import { ExplainGrid } from "@/components/ExplainGrid";
import { ImageSpace } from "@/components/ImageSpace";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Timeline } from "@/components/Timeline";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

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

      {/* 리스가이드 이동 섹션 */}
      <SectionWrapper type="gray">
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
          <div className="relative size-25 md:size-50">
            <Image
              src="/images/installment.webp"
              alt="완납승계"
              fill
              className="object-cover"
              draggable={false}
            />
          </div>
          <p className="text-base font-extrabold text-neutral-600 md:text-3xl">vs</p>
          <div className="relative size-25 md:size-50">
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

      <SectionWrapper type="white">
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">제목을 입력하세요.</h2>
        <p className="mb-0.5 text-base text-neutral-700 md:text-lg">텍스트를 입력하세요.</p>
        <p className="mb-8 text-base text-neutral-700 md:text-lg">텍스트를 입력하세요.</p>
        <div className="grid grid-cols-4 gap-5 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="aspect-square w-full">
              <ImageSpace desc={`이미지에 관한 내용 ${idx + 1}`} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper type="gray">
        <h2 className="mb-3 text-2xl font-bold md:text-3xl">제목을 입력하세요.</h2>
        <p className="text-neutral-70 mb-0.5 text-base md:text-lg">텍스트를 입력하세요.</p>
        <p className="text-neutral-70 mb-8 text-base md:text-lg">텍스트를 입력하세요.</p>
        <div className="space-y-5">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="mx-auto w-full max-w-[800px] rounded-2xl bg-white p-5 shadow">
              텍스트를 입력하세요.
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper type="white" className="text-start">
        <h2 className="mb-3 text-2xl font-bold md:text-3xl">제목을 입력하세요.</h2>
        <p className="text-neutral-70 mb-0.5 text-base md:text-lg">텍스트를 입력하세요.</p>
        <p className="text-neutral-70 mb-8 text-base md:text-lg">텍스트를 입력하세요.</p>
        <div className="grid grid-cols-3 gap-10">
          {Array.from({ length: 3 }).map((_, idx) => (
            <ImageSpace key={idx} className="aspect-9/10" />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper type="gray" className="text-start">
        <h2 className="mb-3 text-2xl font-bold md:text-3xl">제목을 입력하세요.</h2>
        <p className="mb-8 text-base text-neutral-700 md:text-lg">텍스트를 입력하세요.</p>
        <Timeline />
      </SectionWrapper>

      {/* 승계 리스트 */}
      <Suspense fallback={null}>
        <VehiclesPreview />
      </Suspense>
    </main>
  );
}

// 메인페이지에서 렌더링할 승계 리스트 프리뷰.
// 1페이지 불러오고 8개 슬라이스해서 렌더링
async function VehiclesPreview() {
  // vehicle 데이터 1페이지 불러와서 캐싱한 후 8개만 렌더링
  const vehicles = await (async () => {
    // await new Promise((r) => setTimeout(r, 3000));
    return Array.from({ length: 12 }).map((_, id) => ({
      id,
      title: "소나타 뉴라이즈",
      thumbnail: null,
      year: "2019",
      price: 1500,
      mileage: 45000,
      fuelType: "가솔린",
      gearType: "오토",
      color: "흰색",
    }));
  })();

  return (
    <SectionWrapper type="white" className="text-start">
      <h2 className="mb-2 text-2xl font-bold md:text-3xl">승계 차량 소개</h2>
      <p className="mb-8 text-base text-neutral-700 md:text-lg">
        부담은 줄이고 만족은 높이는 리스 차량을 만나보세요.
      </p>

      {/* md 이상: grid / md 이하: 가로 스크롤 */}
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [-webkit-overflow-scrolling:touch] lg:grid lg:grid-cols-4 lg:gap-6">
        {vehicles.slice(0, 8).map((vehicle) => (
          <div key={vehicle.id} className="w-64 shrink-0 snap-start md:w-auto">
            <VehiclePreviewCard {...vehicle} />
          </div>
        ))}
      </div>

      <Link
        href="/vehicle"
        className="mt-12 block max-w-fit rounded bg-gray-200 px-4 py-2 text-lg font-semibold transition hover:scale-95 md:mx-auto md:px-5 md:py-3"
      >
        승계차량 더보기
      </Link>
    </SectionWrapper>
  );
}
