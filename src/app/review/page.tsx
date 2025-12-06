import { DimmedImageBanner } from "@/components/DimmedImageBanner";

export default function Review() {
  return (
    <main>
      <DimmedImageBanner
        title="고객 후기"
        descriptions={["텍스트를 입력하세요.", "(배너 배경으로 이미지 애니메이션)"]}
        imageSrc="/images/review.webp"
        imageClassName="object-center"
      />
    </main>
  );
}
