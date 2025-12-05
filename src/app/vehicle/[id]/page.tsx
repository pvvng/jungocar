import { ImageSpace } from "@/components/ImageSpace";

export default async function VehicleDetail() {
  return (
    <main className="mx-auto max-w-screen-xl space-y-8 p-4 py-8">
      {/* 헤더 */}
      <header className="mx-auto flex max-w-screen-xl items-end justify-between">
        <div>
          <span className="bg-main mb-1 inline-block rounded-full px-2 py-0.5 text-xs font-medium text-white">
            무사고
          </span>
          <h1 className="mb-3 text-2xl font-semibold">기아 신형K5 하이브리드 2.0 HEV 프레스티지</h1>
          <p className="text-base text-neutral-600">
            23년11월식 (2023년형) · 33,000km · 휘발유 · 검정 · 오토
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="border-r border-neutral-300 px-5 text-center">
            <p className="text-neutral-500">차량 가격</p>
            <p className="text-lg font-bold">4,875만원</p>
          </div>
          <div className="border-r border-neutral-300 px-5 text-center">
            <p className="text-neutral-500">승계지원금</p>
            <p className="text-main text-lg font-bold">300만원</p>
          </div>
          <div className="px-5 text-center">
            <p className="text-neutral-500">월 렌트료(45개월)</p>
            <p className="text-lg font-bold text-red-600">115만원</p>
          </div>
        </div>
      </header>

      {/* images */}
      <section className="mt-8 grid grid-cols-2 gap-0.5">
        <ImageSpace className="aspect-square rounded-none" />
        <div className="grid w-full grid-cols-4 gap-0.5">
          {Array.from({ length: 16 }).map((_, idx) => (
            <ImageSpace key={idx} className="aspect-square rounded-none" />
          ))}
        </div>
      </section>

      {/* 요약 */}
      {/* <section>
        <h2 className="mb-5 text-2xl font-semibold">차량 요약</h2>
        <div className="grid w-full grid-cols-5 gap-5 rounded-2xl bg-gray-100 p-5">
          {vehicleInfo.map(({ label, value }) => (
            <div key={value + label} className="space-y-3 rounded-2xl p-4">
              <p className="text-neutral-500">{label}</p>
              <p className="font-medium text-neutral-900">{value}</p>
            </div>
          ))}
        </div>
      </section> */}

      <hr className="border-neutral-200" />

      <section>
        <h2 className="mb-5 text-2xl font-semibold">차량 옵션</h2>
        <div className="grid grid-cols-6 gap-5">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div key={idx} className="w-full">
              <ImageSpace className="aspect-square" desc={`옵션 ${idx + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <hr className="border-neutral-200" />

      {/* 렌트 정보 */}
      {/* 뭐하는건지 몰겠음... */}
      <section>
        <h2 className="mb-5 text-2xl font-semibold">렌트 정보</h2>

        <div className="mb-3 flex items-center text-lg font-semibold">
          <p className="w-[180px] py-3">차량 계약 시 비용</p>
          <div className="flex w-full items-center justify-between py-3">
            <p className="font-light text-neutral-600">승계지원금</p>
            <p className="text-main">300만원</p>
          </div>
        </div>

        <div className="mb-3 flex items-center text-lg font-semibold">
          <p className="w-[180px] py-3">차량 계약 시 비용</p>
          <div className="flex w-full items-center justify-between py-3">
            <p className="font-light text-neutral-600">월 렌트료 115만원 X 45개월</p>
            <p className="text-red-600">5,175만원</p>
          </div>
        </div>

        <div className="flex items-center text-lg font-semibold">
          <p className="w-[180px] py-3">차량 계약 시 비용</p>
          <div className="flex w-full items-center justify-between py-3">
            <select className="cursor-pointer border-b border-neutral-300 py-2 text-base focus:outline-none">
              <option>인수 (렌트사에게 지급)</option>
              <option>반납 (보증급 환급)</option>
            </select>
            <p className="text-red-600">300만원</p>
          </div>
        </div>

        <div className="bg-main mt-8 flex items-center justify-between rounded-2xl p-4 text-2xl font-semibold text-white">
          <p className="w-[180px] py-3">총 비용</p>
          <p className="py-3 text-white">4,575만원</p>
        </div>
      </section>
    </main>
  );
}
