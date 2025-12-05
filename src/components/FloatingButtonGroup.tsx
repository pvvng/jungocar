"use client";

import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FloatingButtonGroup() {
  return (
    <div className="fixed right-5 bottom-5 z-50 space-y-3">
      <Link href="/" className="group block">
        <div className="size-14 overflow-hidden rounded-full bg-[#FEE500] shadow transition group-hover:scale-90">
          <div className="relative flex size-full items-center justify-center">
            <Image
              src="/images/kakao.webp"
              alt="카카오톡"
              className="object-cover"
              width={30}
              height={30}
              priority
            />
          </div>
        </div>
      </Link>
      <button
        className="flex size-14 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 shadow transition hover:scale-90"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ArrowUp />
      </button>
    </div>
  );
}
