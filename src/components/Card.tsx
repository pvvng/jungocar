import Link from "next/link";
import { ImageSpace } from "./ImageSpace";

export function Card() {
  return (
    <Link href="/vehicle/1" className="block">
      <div className="aspect-video lg:aspect-5/4">
        <ImageSpace />
      </div>
      <div className="px-2 pt-4">
        <p className="text-lg font-semibold">차 이름</p>
        <p className="text-neutral-600">설명1 · 설명2 · 설명3· 설명4</p>
        <p className="mt-3 flex items-center justify-start gap-2">
          <span className="text-xl font-bold">렌트 월 xx만원</span>
          <span className="text-main text-base font-bold">YY개월</span>
        </p>
      </div>
    </Link>
  );
}
