import { DimmedImageBanner } from "@/components/DimmedImageBanner";
import { ExplainGrid } from "@/components/ExplainGrid";
import { ImageSpace } from "@/components/ImageSpace";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Timeline } from "@/components/Timeline";

export default function Introduce() {
  return (
    <main>
      <DimmedImageBanner
        title="소개"
        descriptions={["텍스트를 입력하세요.", "(배너 배경으로 이미지 애니메이션)"]}
      />

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
            <p className="text-xl md:text-2xl">텍스트를 입력하세요.</p>
            <p className="text-xl md:text-2xl">텍스트를 입력하세요.</p>
          </div>
        }
      />

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

      <SectionWrapper type="gray">
        <h2 className="mb-3 text-2xl font-bold md:text-3xl">제목을 입력하세요.</h2>
        <p className="text-neutral-70 mb-0.5 text-base md:text-lg">텍스트를 입력하세요.</p>
        <p className="text-neutral-70 mb-8 text-base md:text-lg">텍스트를 입력하세요.</p>
        <div className="flex items-center justify-center gap-4 md:gap-8">
          <ImageSpace width={150} height={150} />
          <p className="text-base font-extrabold text-neutral-600 md:text-3xl">vs.</p>
          <ImageSpace width={300} height={300} />
        </div>
      </SectionWrapper>

      <SectionWrapper type="white" className="text-start">
        <h2 className="mb-3 text-2xl font-bold md:text-3xl">제목을 입력하세요.</h2>
        <p className="text-neutral-70 mb-8 text-base md:text-lg">텍스트를 입력하세요.</p>
        <Timeline />
      </SectionWrapper>
    </main>
  );
}
