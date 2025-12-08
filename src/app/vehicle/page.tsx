import CarTypeSlider from "@/components/CarTypeSlider";
import { DimmedImageBanner } from "@/components/DimmedImageBanner";
import Pagination from "@/components/Pagination";
import { SectionWrapper } from "@/components/SectionWrapper";
import { VehicleCard } from "@/components/VehicleCard";
import { Search } from "lucide-react";

interface Iparms {
  searchParams: Promise<{ page: string }>;
}

export default async function Cars({ searchParams }: Iparms) {
  let page = Number((await searchParams).page);

  if (isNaN(page)) {
    page = 1;
  }

  // mock data
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
    <main>
      <DimmedImageBanner
        title="리스 차량 소개"
        descriptions={["텍스트를 입력하세요.", "(배너 배경으로 이미지 애니메이션)"]}
        imageSrc="/images/main0.webp"
      />

      <SectionWrapper type="white" className="space-y-8">
        {/* <CarTypeSlider /> */}
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <p className="text-neutral-700">
            총 <span className="font-semibold text-neutral-950">2000</span>대의 차량이 있습니다.
          </p>
          <CarSearchInput />
        </div>
        <div className="grid grid-cols-1 gap-6 text-start sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>

        <Pagination current={page} total={10} />
      </SectionWrapper>
    </main>
  );
}

function CarSearchInput() {
  return (
    <div className="relative w-60">
      <input
        className="focus:ring-main h-10 w-full rounded-full px-4 pr-12 ring ring-neutral-300 focus:ring-2 focus:outline-none"
        placeholder="챠량 검색"
      />
      <button className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full px-4 py-1 text-black">
        <Search className="size-5" />
      </button>
    </div>
  );
}
