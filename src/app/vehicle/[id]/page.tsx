import { GalleryCarousel } from "@/components/GalleryCarousel";
import { ImageSpace } from "@/components/ImageSpace";
import { SectionWrapper } from "@/components/SectionWrapper";
import { VehicleOptions } from "@/components/VehicleOptions";
import { formatNumber } from "@/utils/formatNumber";
import { Car, RectangleEllipsis } from "lucide-react";
import Image from "next/image";

interface Vehicle {
  id: number;
  title: string;
  model: string;
  year: string;
  mileage: number;
  price: number;
  monthFee: number;
  supportFee: number;
  color: string;
  fuelType: string;
  gearType: string;
  accidentHistory: number;
  images: string[];
  options: string[];
}

export default async function VehicleDetail() {
  // mock
  const vehicle: Vehicle = {
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
    options: ["후방카메라", "스마트키", "알류미늄휠", "하이패스 내장"],
  };

  return (
    <main key={vehicle.id} className="bg-page-blue">
      {/* 헤더 */}
      <VehicleDetailHeader {...vehicle} />
      {/* 갤러리 */}
      <GalleryCarousel images={vehicle.images} />
      {/* 차량 옵션 */}
      <VehicleOptions options={vehicle.options} />

      {/* 렌트 정보 */}
      <section className="mt-8 bg-white">
        <div className="container mx-auto px-4 py-12">
          <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold">
            <Car className="size-6 shrink-0" />
            <span>렌트 정보</span>
          </h3>

          {/* 항목 */}
          <div className="space-y-6">
            {/* 차량 계약 시 비용 */}
            <p className="mb-2 text-base font-semibold text-neutral-900">차량 계약 시 비용</p>
            <div className="flex items-center justify-between">
              <span className="text-base text-neutral-600">인수금 (판매자에게 지급)</span>
              <span className="text-lg font-medium">{vehicle.supportFee}만원</span>
            </div>

            {/* 운행기간 동안 비용 */}
            <p className="mb-2 text-base font-semibold text-neutral-900">운행기간 동안 비용</p>
            <div className="flex items-center justify-between">
              <span className="text-base text-neutral-600">
                월 렌트료 {vehicle.monthFee}만원 X 12개월
              </span>
              <span className="text-main text-lg font-medium">
                {formatNumber(vehicle.monthFee * 12)}만원
              </span>
            </div>

            {/* 렌트 만기 후 비용 */}
            <p className="mb-2 text-base font-semibold text-neutral-900">렌트 만기 후 비용</p>
            <div className="flex items-center justify-between">
              <select className="cursor-pointer border-b border-neutral-600 py-2 text-base text-neutral-600 focus:outline-none">
                <option>인수 (렌트사에게 지급)</option>
                <option>반납 (보증급 환급)</option>
              </select>
              <span className="text-main text-lg font-medium">
                {formatNumber(vehicle.price)}만원
              </span>
            </div>

            {/* 총비용 */}
            <div className="mt-12">
              <div className="bg-main flex items-center justify-between rounded-xl p-4 text-xl font-bold text-white">
                <span>총비용</span>
                <span>{formatNumber(vehicle.monthFee * 12 + vehicle.price)}만원</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 판매자 정보 */}
      {/* <section className="mt-8 bg-white">
        <div className="container mx-auto px-4 py-12">
          <h3 className="mb-5 text-xl font-semibold">판매자 설명</h3>
          <div className="flex items-center gap-3">
            <div className="relative size-13 shrink-0 overflow-hidden rounded-full bg-neutral-200">
              <Image
                src="/images/seller.webp"
                alt="승계랜드"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <p className="text-lg font-medium">승계랜드</p>
          </div>
        </div>
      </section> */}
    </main>
  );
}

function VehicleDetailHeader(props: Vehicle) {
  const {
    title,
    model,
    year,
    mileage,
    price,
    monthFee,
    supportFee,
    color,
    fuelType,
    gearType,
    accidentHistory,
  } = props;

  return (
    <header className="bg-white">
      <div className="container mx-auto flex flex-col gap-5 px-4 pt-12 pb-4 md:flex-row md:items-end md:justify-between">
        <div>
          {accidentHistory === 0 && (
            <span className="bg-main mb-3 inline-block rounded-full px-2 py-0.5 text-xs font-medium text-white">
              무사고
            </span>
          )}
          <h1 className="mb-2 text-2xl font-semibold">
            {title} · {model}
          </h1>
          <p className="text-base font-semibold text-neutral-600">
            {year}년 · {formatNumber(mileage)}km · {fuelType} · {gearType} · {color}
          </p>
        </div>
        {/* price field */}
        <div className="w-full rounded-2xl bg-gray-100 p-4 shadow md:max-w-[360px]">
          <div className="grid grid-cols-3 gap-5">
            {/* 차량 가격 */}
            <div className="text-center">
              <p className="text-sm leading-tight text-neutral-500">차량 가격</p>
              <p className="mt-1.5 text-lg leading-none font-semibold">{formatNumber(price)}만원</p>
            </div>

            {/* 승계지원금 */}
            <div className="text-center">
              <p className="text-sm leading-tight text-neutral-500">승계지원금</p>
              <p className="text-main mt-1.5 text-lg leading-none font-semibold">
                {formatNumber(supportFee)}만원
              </p>
            </div>

            {/* 월 렌트료 */}
            <div className="text-center">
              <p className="text-sm leading-tight text-neutral-500">월 렌트료</p>
              <p className="text-main mt-1.5 text-lg leading-none font-semibold">
                {formatNumber(monthFee)}만원
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
