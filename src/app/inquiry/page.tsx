import { DimmedImageBanner } from "@/components/DimmedImageBanner";
import { SectionWrapper } from "@/components/SectionWrapper";
import Link from "next/link";

export default function Inquiry() {
  return (
    <main>
      <DimmedImageBanner
        title="상담 신청"
        descriptions={["텍스트를 입력하세요.", "(배너 배경으로 이미지 애니메이션)"]}
        imageSrc=""
      />
      <SectionWrapper type="white">
        <h1 className="text-xl font-bold">고객 정보</h1>
        여기에 폼이 들어가야함
        <Link
          href="https://xn--oy2b27nt4dhvc.com/car/inquiry.html"
          target="_blank"
          className="text-main block underline"
        >
          이거참고
        </Link>
      </SectionWrapper>
    </main>
  );
}
