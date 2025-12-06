"use client";

import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { ImageSpace } from "./ImageSpace";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type GalleryProps = {
  images: string[];
};

/* --------------------------- Parent: GalleryCarousel --------------------------- */
export const GalleryCarousel = memo(({ images }: GalleryProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [openZoom, setOpenZoom] = useState(false);

  const goPrev = useCallback(
    () => setCurrentIdx((prev) => (prev - 1 + images.length) % images.length),
    [],
  );
  const goNext = useCallback(() => setCurrentIdx((prev) => (prev + 1) % images.length), []);
  const goTo = useCallback((num: number) => setCurrentIdx(num), []);

  const toggleOpenZoom = useCallback(() => setOpenZoom((prev) => !prev), []);

  const thumbContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = thumbContainerRef.current;
    if (!container) return;

    const thumbEl = container.querySelector(
      `[data-thumb-idx="${currentIdx}"]`,
    ) as HTMLElement | null;
    if (!thumbEl) return;

    // 기본은 부드럽게 스크롤
    thumbEl.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [currentIdx, images]);

  return (
    <section className="mt-8">
      <DesktopGallery
        images={images}
        currentIdx={currentIdx}
        goPrev={goPrev}
        goNext={goNext}
        goTo={goTo}
        toggleOpenZoom={toggleOpenZoom}
      />

      <MobileGallery
        images={images}
        currentIdx={currentIdx}
        thumbContainerRef={thumbContainerRef}
        goPrev={goPrev}
        goNext={goNext}
        goTo={goTo}
        toggleOpenZoom={toggleOpenZoom}
      />
    </section>
  );
});

interface Props {
  images: string[];
  currentIdx: number;
  goPrev: () => void;
  goNext: () => void;
  goTo: (num: number) => void;
  toggleOpenZoom: () => void;
}

/* --------------------------- DesktopGallery --------------------------- */
function DesktopGallery({ images, currentIdx, goPrev, goNext, goTo, toggleOpenZoom }: Props) {
  return (
    <div className="hidden gap-0.5 md:grid md:grid-cols-10">
      {/* 메인 이미지 */}
      <div className="relative col-span-8 h-full bg-neutral-900 lg:col-span-9">
        <Image
          src={images[currentIdx]}
          alt={`car-${currentIdx}-image`}
          fill
          priority
          className="object-cover"
          draggable={false}
        />

        {/* 하단 네비 */}
        <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between">
          {/* 확대 버튼 */}
          <button
            onClick={toggleOpenZoom}
            className="flex size-10 items-center justify-center rounded-full bg-white/80 shadow backdrop-blur-md transition hover:scale-105 active:scale-95"
            aria-label="확대"
          >
            <ZoomIn className="size-5 text-neutral-800" />
          </button>

          {/* Prev / Index / Next */}
          <div className="flex h-10 items-center gap-3 rounded-full bg-white/80 px-2 shadow backdrop-blur-md">
            <button
              onClick={goPrev}
              className="flex size-8 items-center justify-center rounded-full bg-white shadow transition hover:scale-105 active:scale-95"
              aria-label="이전"
            >
              <ChevronLeft className="size-5 text-neutral-800" />
            </button>

            <span className="min-w-[50px] text-center text-sm font-medium text-neutral-800">
              {currentIdx + 1} / {images.length}
            </span>

            <button
              onClick={goNext}
              className="flex size-8 items-center justify-center rounded-full bg-white shadow transition hover:scale-105 active:scale-95"
              aria-label="다음"
            >
              <ChevronRight className="size-5 text-neutral-800" />
            </button>
          </div>
        </div>
      </div>

      {/* 오른쪽 썸네일 (flex-wrap 사용) */}
      <div className="col-span-2 h-full overflow-y-auto p-0.5 lg:col-span-1">
        <div className="flex flex-wrap gap-0.5">
          {Array.from({ length: 20 }).map((_, idx) => {
            const src = images[idx];

            return (
              <div
                key={idx}
                className="relative aspect-[5/4] w-[calc(50%-2px)] cursor-pointer overflow-hidden bg-neutral-900"
                onClick={() => src && goTo(idx)}
              >
                {src ? (
                  <Image
                    src={src}
                    alt={`썸네일-${idx}`}
                    fill
                    className={`${idx === currentIdx ? "opacity-30" : ""} object-cover transition`}
                    draggable={false}
                  />
                ) : (
                  <ImageSpace className="h-full w-full bg-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* --------------------------- MobileGallery --------------------------- */
function MobileGallery({
  images,
  currentIdx,
  thumbContainerRef,
  goPrev,
  goNext,
  goTo,
  toggleOpenZoom,
}: Props & { thumbContainerRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div className="block md:hidden">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-900">
        {images && images.length > 0 ? (
          <Image
            src={images[currentIdx]}
            alt={`썸네일-${currentIdx}`}
            fill
            priority
            className="object-cover"
            draggable={false}
          />
        ) : (
          <ImageSpace className="h-full w-full rounded-2xl" />
        )}

        {/* 하단 네비게이션 바 */}
        <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between">
          {/* 확대 버튼 */}
          <button
            onClick={toggleOpenZoom}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow backdrop-blur-md transition hover:scale-105 active:scale-95"
            aria-label="확대"
          >
            <ZoomIn className="h-5 w-5 text-neutral-800" />
          </button>

          {/* Prev / Index / Next (오른쪽 그룹) */}
          <div className="flex h-10 items-center gap-3 rounded-full bg-white/80 px-3 shadow backdrop-blur-md">
            <button
              onClick={goPrev}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow transition hover:scale-105 active:scale-95"
              aria-label="이전"
            >
              <ChevronLeft className="h-4 w-4 text-neutral-800" />
            </button>

            <span className="min-w-[40px] text-center text-sm font-medium text-neutral-800">
              {images.length > 0 ? `${currentIdx + 1} / ${images.length}` : `0 / 0`}
            </span>

            <button
              onClick={goNext}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow transition hover:scale-105 active:scale-95"
              aria-label="다음"
            >
              <ChevronRight className="h-4 w-4 text-neutral-800" />
            </button>
          </div>
        </div>
      </div>

      {/* 가로 스크롤 썸네일 바 */}
      <div
        className="mt-3 overflow-x-auto pb-2"
        ref={thumbContainerRef}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex gap-3 px-3">
          {images.map((_, idx) => {
            const src = images[idx];
            return (
              <button
                key={idx}
                data-thumb-idx={idx}
                onClick={() => goTo(idx)}
                className={`w-30 flex-none overflow-hidden rounded-2xl bg-neutral-900 transition-transform duration-150 focus:outline-none ${
                  currentIdx === idx ? "" : "opacity-80"
                }`}
                aria-label={`썸네일 ${idx + 1}`}
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={src}
                    alt={`thumb-${idx}`}
                    fill
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
