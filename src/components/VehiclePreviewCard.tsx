import Link from "next/link";
import { ImageSpace } from "./ImageSpace";
import { Vehicle } from "@/types/vehicle";
import { formatNumber } from "@/utils/formatNumber";

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
