import { ImageSpace } from "./ImageSpace";

export function Timeline() {
  return (
    <div className="space-y-10">
      {Array.from({ length: 5 }).map((_, idx) => (
        <div key={idx} className="relative flex items-center gap-8">
          {/* --- 이미지 + 타임라인 라인 --- */}
          <div className="relative flex flex-col items-center">
            {/* 이미지 */}
            <ImageSpace className="z-10 rounded-full" width={150} height={150} />

            {/* 세로 라인 (마지막 요소는 숨김) */}
            {idx !== 4 && (
              <div className="absolute top-full left-1/2 h-[60px] w-[3px] -translate-x-1/2 bg-neutral-300"></div>
            )}
          </div>

          {/* 내용 */}
          <div className="text-start font-bold">
            <p className="text-lg text-neutral-700">STEP {idx + 1}</p>
            <p className="text-main mb-3 text-2xl">제목을 입력하세요.</p>
            <p className="font-medium text-neutral-600">텍스트를 입력하세요.</p>
          </div>
        </div>
      ))}
    </div>
  );
}
