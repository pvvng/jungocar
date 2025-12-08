"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface DimmedImageBannerProps {
  title: string;
  descriptions?: string[];
  imageSrc: string;
  imageClassName?: string;
}

export function DimmedImageBanner({
  title,
  descriptions = [],
  imageSrc,
  imageClassName = "",
}: DimmedImageBannerProps) {
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const img = containerRef.current?.querySelector("img");
    if (!img) return;

    gsap.fromTo(
      img,
      {
        scale: 1.4,
        y: 40,
        opacity: 0,
        transformOrigin: "center center",
      },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out",
      },
    );
  }, [loading]);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[300px] items-center justify-center overflow-hidden text-center"
    >
      {/* content */}
      <div className="relative z-20">
        <h1 className="mb-3 text-4xl font-extrabold text-white">{title}</h1>
        {descriptions.map((desc) => (
          <p key={desc} className="mb-0.5 text-base font-semibold text-neutral-100 last:mb-0">
            {desc}
          </p>
        ))}
      </div>

      {/* dim */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/30" />

      {/* image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className={`z-0 object-cover ${imageClassName}`}
        priority
        draggable={false}
        onLoadingComplete={() => setLoading(true)}
      />
    </div>
  );
}
