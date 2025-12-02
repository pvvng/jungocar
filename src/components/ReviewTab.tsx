"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function ReviewTab({
  data,
}: {
  data: { id: number | string; image: string; title?: string; desc?: string }[];
}) {
  const [currentData, setCurrentData] = useState(0);

  return (
    <div className="w-full">
      {/* 가로로 나열되는 카드들 */}
      <div className="flex h-[360px] w-full gap-4">
        {data.map((d, idx) => {
          const selected = idx === currentData;
          return (
            <div
              key={d.id}
              onClick={() => setCurrentData(idx)}
              className={`relative cursor-pointer overflow-hidden rounded-xl border border-neutral-200 transition-all duration-500 ease-out ${selected ? "flex-1" : "flex-[0.2]"} `}
              aria-pressed={selected}
              // 버튼이니 포커스 스타일 원하면 추가
            >
              <div className="relative h-full w-full">
                <Image src={d.image} alt={d.title ?? `item-${idx}`} fill className="object-cover" />
                {/* 선택된 카드에 간단한 오버레이와 타이틀 */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end transition-opacity ${
                    selected
                      ? "bg-transparent text-black"
                      : "bg-gradient-to-t from-black/80 to-transparent opacity-100"
                  }`}
                >
                  {selected && (
                    <div className="space-y-4 bg-black/60 p-5 text-white backdrop-blur">
                      <h3 className={`text-xl font-bold text-white`}>{d.title}</h3>
                      <p className="mb-8 line-clamp-2">{d.desc}</p>
                      <Link
                        href="/"
                        className="block max-w-fit rounded bg-neutral-100 px-3 py-2 text-sm text-black transition hover:scale-95"
                      >
                        더 알아보기
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* controllers */}
      <div className="mt-6 mr-2 flex items-center justify-end gap-3">
        <button
          className="bg-main flex size-8 items-center justify-center rounded-full text-white transition hover:scale-95 disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:hover:scale-100"
          disabled={currentData === 0}
          onClick={() => setCurrentData((prev) => (prev === 0 ? 0 : prev - 1))}
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          className="bg-main flex size-8 items-center justify-center rounded-full text-white transition hover:scale-95 disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:hover:scale-100"
          disabled={currentData === 5}
          onClick={() => setCurrentData((prev) => (prev === 5 ? 5 : prev + 1))}
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
