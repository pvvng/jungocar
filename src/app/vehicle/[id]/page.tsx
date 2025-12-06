import { GalleryCarousel } from "@/components/GalleryCarousel";
import { ImageSpace } from "@/components/ImageSpace";
import { formatNumber } from "@/utils/formatNumber";

export default async function VehicleDetail() {
  // mock
  const vehicle = {
    id: 4,
    title: "소나타 뉴라이즈",
    model: "LF ",
    year: "2019",
    mileage: 45000,
    price: 1500,
    monthFee: 52,
    supportFee: 0,
    color: "흰색",
    fuelType: "가솔린",
    gearType: "오토",
    accidentHistory: 0,
    images: Array.from({ length: 13 }).map(() => "/images/bmw.webp"),
    options: ["후방카메라", "스마트키"],
  };

  return (
    <main className="mx-auto max-w-screen-xl space-y-8 p-4 py-8">
      {/* 헤더 */}
      <header className="mx-auto flex max-w-screen-xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          {vehicle.accidentHistory === 0 && (
            <span className="bg-main mb-3 inline-block rounded-full px-2 py-0.5 text-xs font-medium text-white">
              무사고
            </span>
          )}
          <h1 className="mb-2 text-2xl font-semibold">
            {vehicle.title} · {vehicle.model}
          </h1>
          <p className="text-base font-semibold text-neutral-600">
            {vehicle.year}년 · {formatNumber(vehicle.mileage)}km · {vehicle.fuelType} ·{" "}
            {vehicle.gearType} · {vehicle.color}
          </p>
        </div>
        {/* price field */}
        <div className="w-full rounded-2xl bg-gray-100 p-4 shadow md:max-w-[360px]">
          <div className="grid grid-cols-3 gap-5">
            {/* 차량 가격 */}
            <div className="text-center">
              <p className="text-sm leading-tight text-neutral-500">차량 가격</p>
              <p className="mt-1.5 text-lg leading-none font-semibold">
                {formatNumber(vehicle.price)}만원
              </p>
            </div>

            {/* 승계지원금 */}
            <div className="text-center">
              <p className="text-sm leading-tight text-neutral-500">승계지원금</p>
              <p className="text-main mt-1.5 text-lg leading-none font-semibold">
                {formatNumber(vehicle.supportFee)}만원
              </p>
            </div>

            {/* 월 렌트료 */}
            <div className="text-center">
              <p className="text-sm leading-tight text-neutral-500">월 렌트료</p>
              <p className="text-main mt-1.5 text-lg leading-none font-semibold">
                {formatNumber(vehicle.monthFee)}만원
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* images */}
      <GalleryCarousel key={vehicle.id} images={vehicle.images} />

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
