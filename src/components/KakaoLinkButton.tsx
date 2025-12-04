import Image from "next/image";
import Link from "next/link";

export function KakaoLinkButton() {
  return (
    <Link href="/" className="group">
      <div className="absolute right-5 bottom-5 size-14 overflow-hidden rounded-full bg-[#FEE500] shadow transition group-hover:scale-90">
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
  );
}
