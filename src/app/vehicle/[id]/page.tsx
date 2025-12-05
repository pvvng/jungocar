import { ImageSpace } from "@/components/ImageSpace";

const vehicleInfo = [
  { label: "차종", value: "중형차" },
  { label: "배기량", value: "2,000cc" },
  { label: "차량번호", value: "60도8099" },
  { label: "연식", value: "2011년 11월" },
  { label: "주행거리", value: "117,357Km" },

  { label: "색상", value: "흰색" },
  { label: "변속기", value: "오토" },
  { label: "연료", value: "휘발유" },
  { label: "제시번호", value: "20251504432" },
  { label: "사고유무", value: "무사고" },

  { label: "등록번호", value: "49606423" },
  { label: "제시일", value: "2025-10-21" },
  { label: "압류 / 저당", value: "없음 / 없음" },
];

export default async function VehicleDetail() {
  return (
    <main className="mx-auto max-w-screen-xl space-y-12 p-4 py-8">
      {/* 헤더 */}
      <header className="mx-auto flex max-w-screen-xl items-end justify-between">
        <div>
          <span className="bg-main mb-1 inline-block rounded-full px-2 py-0.5 text-sm font-medium text-white">
            무사고
          </span>
          <h1 className="mb-2 flex items-center justify-center gap-2 text-2xl font-semibold">
            <p>제목을 입력해주세요.</p>
          </h1>
          <p className="text-base text-neutral-700">설명1 · 설명2 · 설명3· 설명4</p>
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
      <section>
        <h2 className="mb-5 text-2xl font-semibold">차량 요약</h2>
        <div className="grid w-full grid-cols-5 gap-5 rounded-2xl bg-gray-100 p-5">
          {vehicleInfo.map(({ label, value }) => (
            <div key={value + label} className="space-y-3 rounded-2xl p-4">
              <p className="text-neutral-500">{label}</p>
              <p className="font-medium text-neutral-900">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 렌트 정보 */}
      <section>
        <h2 className="mb-5 text-2xl font-semibold">렌트 정보</h2>

        <div className="mb-3 flex items-center text-lg font-semibold">
          <p className="w-[180px] py-3">차량 계약 시 비용</p>
          <div className="flex w-full items-center justify-between py-3">
            <p className="text-[15px] font-light text-neutral-600">승계지원금</p>
            <p className="text-main">300만원</p>
          </div>
        </div>

        <div className="mb-3 flex items-center text-lg font-semibold">
          <p className="w-[180px] py-3">차량 계약 시 비용</p>
          <div className="flex w-full items-center justify-between py-3">
            <p className="text-[15px] font-light text-neutral-600">월 렌트료 115만원 X 45개월</p>
            <p className="text-red-600">5,175만원</p>
          </div>
        </div>

        <div className="flex items-center text-lg font-semibold">
          <p className="w-[180px] py-3">차량 계약 시 비용</p>
          <div className="flex w-full items-center justify-between py-3">
            <select className="cursor-pointer border-b border-neutral-300 py-2 text-base text-[15px] focus:outline-none">
              <option selected>인수 (렌트사에게 지급)</option>
              <option>반납 (보증급 환급)</option>
            </select>
            <p className="text-red-600">300만원</p>
          </div>
        </div>

        <hr className="my-3 border-neutral-200" />
        <div className="flex items-center justify-between text-xl font-semibold">
          <p className="w-[180px] py-3">총 비용</p>
          <p className="py-3 text-red-600">8,425만원</p>
        </div>
      </section>
    </main>
  );
}
