"use client";

import { useState } from "react";
import Image from "next/image";
import { RectangleEllipsis } from "lucide-react";

export function VehicleOptions({ options }: { options: string[] }) {
  const [showAll, setShowAll] = useState(false);

  // 모바일에서 2개만 보여주도록 처리
  const mobileLimit = 2;

  return (
    <section className="mt-8 bg-white">
      <div className="container mx-auto px-4 py-12">
        <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold">
          <RectangleEllipsis className="size-6 shrink-0" />
          <span>차량 옵션</span>
        </h3>

        {/* grid: md 이상은 6, md 이하는 2 */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-8">
          {options.slice(0, showAll ? options.length : mobileLimit).map((option, idx) => (
            <div
              key={option + idx}
              className="w-full rounded-2xl border-2 border-dashed border-neutral-300 p-4"
            >
              <Image
                src={`/images/options/${option}.webp`}
                alt={`${option}`}
                width={60}
                height={60}
                draggable={false}
                className="mx-auto"
              />
              <p className="mt-3 text-center text-sm">{option}</p>
            </div>
          ))}
        </div>

        {/* '더보기' 버튼: md 이하에서만 보이게 */}
        <div className="mt-6 flex justify-center md:hidden">
          {!showAll && options.length > mobileLimit && (
            <button
              onClick={() => setShowAll(true)}
              className="rounded-2xl bg-black px-4 py-2 text-sm text-white shadow hover:scale-95"
            >
              + 옵션 더보기
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
