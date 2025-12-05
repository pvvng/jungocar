"use client";

import Carousel from "./Carousel";
import { ImageSpace } from "./ImageSpace";

export function CarouselBanner() {
  return (
    <Carousel
      data={Array.from({ length: 3 })}
      indicator
      height={500}
      autoInterval={8000}
      renderBlock={(_, idx) => (
        <div className="relative h-full w-full">
          <ImageSpace className="rounded-none" desc={`매인 배너 이미지 ${idx + 1}`} />
        </div>
      )}
    />
  );
}
