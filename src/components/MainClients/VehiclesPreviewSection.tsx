import Link from "next/link";
import { SectionWrapper } from "../SectionWrapper";
import { Vehicle } from "@/types/vehicle";
import { formatNumber } from "@/utils/formatNumber";
import { ImageSpace } from "../ImageSpace";

// 메인페이지에서 렌더링할 승계 리스트 프리뷰.
// 1페이지 불러오고 8개 슬라이스해서 렌더링
export async function VehiclesPreviewSection() {
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

export function VehiclePreviewCard(props: Vehicle) {
  const { id, title, year, price, mileage, fuelType, gearType, color } = props;

  return (
    <Link href="/vehicle/1" className="block transition hover:scale-95">
      <div className="aspect-video lg:aspect-5/4">
        <ImageSpace />
      </div>
      <div className="px-2 pt-4">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-neutral-600 sm:text-base">
          {year}년 · {formatNumber(mileage)}km · {fuelType} · {gearType} · {color}
        </p>
        <p className="mt-3 text-xl font-bold">{formatNumber(price)}만원</p>
      </div>
    </Link>
  );
}
