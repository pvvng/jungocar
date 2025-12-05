"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface PaginationProps {
  current: number; // 1-based index
  total: number; // total pages
}

export default function Pagination({ current, total }: PaginationProps) {
  const maxVisible = 5;

  const isFirst = current === 1;
  const isLast = current === total;

  // 1-based pagination 계산
  let start = Math.max(1, current - Math.floor(maxVisible / 2));
  let end = start + maxVisible - 1;

  if (end > total) {
    end = total;
    start = Math.max(1, end - (maxVisible - 1));
  }

  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <div className="mt-24 flex items-center justify-center gap-2">
      {/* 첫 페이지 << */}
      <Link
        href={`/vehicle?page=1`}
        className={`flex size-9 items-center justify-center rounded border border-neutral-300 hover:bg-neutral-200 ${isFirst ? "pointer-events-none opacity-40" : ""}`}
      >
        <ChevronsLeft className="size-4" />
      </Link>

      {/* 이전 페이지 < */}
      <Link
        href={`/vehicle?page=${Math.max(current - 1, 1)}`}
        className={`flex size-9 items-center justify-center rounded border border-neutral-300 hover:bg-neutral-200 ${isFirst ? "pointer-events-none opacity-40" : ""}`}
      >
        <ChevronLeft className="size-4" />
      </Link>

      {/* 페이지 번호 */}
      {pages.map((p) => (
        <Link
          key={p}
          href={`/vehicle?page=${p}`}
          className={`flex size-9 items-center justify-center rounded border border-neutral-300 text-sm transition ${
            p === current ? "bg-main border-main text-white" : "hover:bg-neutral-200"
          }`}
        >
          {p}
        </Link>
      ))}

      {/* 다음 페이지 > */}
      <Link
        href={`/vehicle?page=${Math.min(current + 1, total)}`}
        className={`flex size-9 items-center justify-center rounded border border-neutral-300 hover:bg-neutral-200 ${isLast ? "pointer-events-none opacity-40" : ""}`}
      >
        <ChevronRight className="size-4" />
      </Link>

      {/* 마지막 페이지 >> */}
      <Link
        href={`/vehicle?page=${total}`}
        className={`flex size-9 items-center justify-center rounded border border-neutral-300 hover:bg-neutral-200 ${isLast ? "pointer-events-none opacity-40" : ""}`}
      >
        <ChevronsRight className="size-4" />
      </Link>
    </div>
  );
}
