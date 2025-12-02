"use client";

import Carousel from "@/components/Carousel";
import { ChatBubble } from "@/components/ChatBubble";
import { Navbar } from "@/components/Navbar";
import Phone from "@/components/Phone";
import { ReviewTab } from "@/components/ReviewTab";
import { SectionWrapper } from "@/components/Section/SectionWrapper";
import Image from "next/image";
import Link from "next/link";

const banners = [
  {
    subtitle: "차 한 대 이상의 가치를 전합니다.",
    title: "승계랜드",
    desc: "빠르고, 쉽고, 확실한 중고차 거래의 새로운 기준",
    image: "/images/main0.webp",
  },
  {
    subtitle: "저신용자를 위한",
    title: "자체 할부 서비스 제공",
    desc: "부담을 더는 최선의 해결책을 제공합니다.",
    image: "/images/main1.webp",
  },
  {
    subtitle: "방문부터 계약까지,",
    title: "하루만에 신속하게.",
    desc: "불필요한 절차를 최소화하여 고객님의 소중한 시간을 지킵니다.",
    image: "/images/main2.webp",
  },
];

const chats = [
  `성능 점검 기록부 100% 공개!\n믿고 바로 계약했습니다.`,
  `첫 차라 막막했는데,\n매니저님이 친절하게 다 알려주셔서 좋았어요.`,
  `신용이 안 좋아서 걱정했는데,\n여기서는 대출이 가능해서 차를 구매할 수 있었어요.`,
  "시운전까지 해보고 구매하니 후회가 없네요. 강추!",
  "허위매물에 지쳤었는데... 드디어 정착합니다.",
];

const reviews = [
  {
    id: "1",
    title: "bmw 5 시리즈 구매후기",
    desc: "처음 타는 순간부터 조향감이 그냥 다르더라. 고속에서도 차가 길에 딱 붙어가는 느낌이 너무 안정적임. 연비는 기대 안 했는데 생각보다 괜찮아서 만족! 가속할 때 나는 직렬 6기통 사운드가 미쳤음… 방금 산 차인데도 또 타고 싶어지는 중독성 있는 드라이빙. 유지비가 조금 쎄긴 한데 솔직히 다 용서됨.",
    image: "/images/bmw.webp",
  },
  {
    id: "2",
    title: "bmw 5 시리즈 구매후기",
    desc: "처음 타는 순간부터 조향감이 그냥 다르더라. 고속에서도 차가 길에 딱 붙어가는 느낌이 너무 안정적임. 연비는 기대 안 했는데 생각보다 괜찮아서 만족! 가속할 때 나는 직렬 6기통 사운드가 미쳤음… 방금 산 차인데도 또 타고 싶어지는 중독성 있는 드라이빙. 유지비가 조금 쎄긴 한데 솔직히 다 용서됨.",
    image: "/images/bmw.webp",
  },
  {
    id: "3",
    title: "bmw 5 시리즈 구매후기",
    desc: "처음 타는 순간부터 조향감이 그냥 다르더라. 고속에서도 차가 길에 딱 붙어가는 느낌이 너무 안정적임. 연비는 기대 안 했는데 생각보다 괜찮아서 만족! 가속할 때 나는 직렬 6기통 사운드가 미쳤음… 방금 산 차인데도 또 타고 싶어지는 중독성 있는 드라이빙. 유지비가 조금 쎄긴 한데 솔직히 다 용서됨.",
    image: "/images/bmw.webp",
  },
  {
    id: "4",
    title: "bmw 5 시리즈 구매후기",
    desc: "처음 타는 순간부터 조향감이 그냥 다르더라. 고속에서도 차가 길에 딱 붙어가는 느낌이 너무 안정적임. 연비는 기대 안 했는데 생각보다 괜찮아서 만족! 가속할 때 나는 직렬 6기통 사운드가 미쳤음… 방금 산 차인데도 또 타고 싶어지는 중독성 있는 드라이빙. 유지비가 조금 쎄긴 한데 솔직히 다 용서됨.",
    image: "/images/bmw.webp",
  },
  {
    id: "5",
    title: "bmw 5 시리즈 구매후기",
    desc: "처음 타는 순간부터 조향감이 그냥 다르더라. 고속에서도 차가 길에 딱 붙어가는 느낌이 너무 안정적임. 연비는 기대 안 했는데 생각보다 괜찮아서 만족! 가속할 때 나는 직렬 6기통 사운드가 미쳤음… 방금 산 차인데도 또 타고 싶어지는 중독성 있는 드라이빙. 유지비가 조금 쎄긴 한데 솔직히 다 용서됨.",
    image: "/images/bmw.webp",
  },
  {
    id: "6",
    title: "bmw 5 시리즈 구매후기",
    desc: "처음 타는 순간부터 조향감이 그냥 다르더라. 고속에서도 차가 길에 딱 붙어가는 느낌이 너무 안정적임. 연비는 기대 안 했는데 생각보다 괜찮아서 만족! 가속할 때 나는 직렬 6기통 사운드가 미쳤음… 방금 산 차인데도 또 타고 싶어지는 중독성 있는 드라이빙. 유지비가 조금 쎄긴 한데 솔직히 다 용서됨.",
    image: "/images/bmw.webp",
  },
];

export function MainClient() {
  return (
    <main className="relative">
      <Navbar />
      <SectionWrapper type="white">
        <Carousel
          data={banners}
          autoInterval={8000}
          height={500}
          renderBlock={(item) => (
            <section className="relative h-full w-full overflow-hidden rounded-md rounded-tr-3xl rounded-bl-3xl bg-transparent">
              {/* 백그라운드 이미지 */}
              <Image src={item.image} alt={item.title} fill className="-z-20 object-cover" />
              {/* 딤드 */}
              <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-black/40" />
              {/* 콘텐츠 */}
              <div className="flex h-full w-full flex-col items-start justify-center p-8 px-24">
                <p className="mb-2 text-start text-2xl font-extrabold tracking-tight whitespace-break-spaces text-white">
                  {item.subtitle}
                </p>
                <p className="text-main mb-4 text-6xl font-extrabold">{item.title}</p>
                <p className="mb-10 text-lg font-medium text-gray-200">{item.desc}</p>
                <Link
                  href="/"
                  className="bg-main z-10 inline-block rounded px-4 py-2 text-lg font-semibold text-white transition-transform hover:scale-95"
                >
                  10초만에 상담신청
                </Link>
              </div>
            </section>
          )}
        />
      </SectionWrapper>

      {/* 소개 */}
      <SectionWrapper type="gray">
        <p className="text-main mb-2 text-lg font-medium">허위매물일까 걱정되시나요?</p>
        <h2 className="mb-10 text-4xl font-extrabold">
          <span className="text-main">승계랜드</span>는 신뢰를 판매합니다.
        </h2>

        <p className="mb-0.5 text-lg text-gray-700">첫 차 구매의 설렘이 걱정으로 바뀌지 않도록</p>
        <p className="mb-0.5 text-lg text-gray-700">
          <strong>승계랜드</strong> 는 100% 투명한 정보 공개와
        </p>
        <p className="mb-8 text-lg text-gray-700">1:1 전담 매니저 동행으로 신뢰를 약속합니다.</p>
        <Image
          src="/images/check.webp"
          alt="check"
          width={200}
          height={200}
          priority
          className="mx-auto"
          draggable={false}
        />
      </SectionWrapper>

      <SectionWrapper type="white">
        <p className="text-main mb-2 text-lg font-medium">
          고객 만족도 <strong>99%</strong> 달성
        </p>
        <h2 className="mb-10 text-4xl font-extrabold">
          <span className="text-main">승계랜드</span>를 선택하시는 이유
        </h2>
        <Phone>
          <div className="min-h-full w-full space-y-4 bg-white px-5 py-10">
            {chats.map((chat, idx) => (
              <ChatBubble key={chat} text={chat} />
            ))}
          </div>
        </Phone>
      </SectionWrapper>

      <SectionWrapper type="gray">
        <p className="text-main mb-2 text-lg font-medium">숨김 없는 투명함</p>
        <h2 className="mb-10 text-4xl font-extrabold">성능 점검 기록부 100% 공개 원칙</h2>
        <p className="mb-0.5 text-lg text-gray-700">사고 이력, 교환 부위, 차량 상태까지</p>
        <p className="mb-0.5 text-lg text-gray-700">
          고객님께서 아셔야 할 정보를 투명하게 공개합니다.
        </p>
        <Image
          src="/images/receipt.webp"
          alt="receipt"
          width={250}
          height={250}
          className="mx-auto"
          draggable={false}
        />
      </SectionWrapper>

      <SectionWrapper type="white">
        <p className="text-main mb-2 text-lg font-medium">처음부터 끝까지 함께</p>
        <h2 className="mb-10 text-4xl font-extrabold">차는 잘 모르시나요? 전문가가 도와드려요.</h2>
        <p className="mb-0.5 text-lg text-gray-700">수많은 매물 중 어떤 차가 나에게 맞을지,</p>
        <p className="mb-6 text-lg text-gray-700">
          복잡한 서류 절차는 어떻게 해야할지 막막하신가요?
        </p>

        <p className="mb-0.5 text-lg text-gray-700">
          <strong>승계랜드</strong>는 1:1 전담 매니저가
        </p>
        <p className="mb-0.5 text-lg text-gray-700">
          고객님의 예산과 라이프 스타일에 맞는 차량을 추천하고
        </p>
        <p className="mb-8 text-lg text-gray-700">모든 과정을 함께합니다.</p>
        <Image
          src="/images/handshake.webp"
          alt="handshake"
          width={300}
          height={300}
          className="mx-auto"
          draggable={false}
        />
      </SectionWrapper>

      <SectionWrapper type="gray">
        <p className="text-main mb-2 text-lg font-medium">신용이 안 좋으시다고요?</p>
        <h2 className="mb-10 text-4xl font-extrabold">저신용자를 위한 자체 할부 서비스 제공.</h2>
        <p className="mb-0.5 text-lg text-gray-700">부담을 덜고, 더 나은 선택을 할 수 있도록</p>
        <p className="mb-8 text-lg text-gray-700">
          언제나 함께 고민하고 최적의 해결책을 제안합니다.
        </p>
        <Image
          src="/images/installment.webp"
          alt="installment"
          width={250}
          height={250}
          className="mx-auto"
          draggable={false}
        />
      </SectionWrapper>

      <SectionWrapper type="white">
        <p className="text-main mb-2 text-lg font-medium">백 마디 말보다 한번</p>
        <h2 className="mb-10 text-4xl font-extrabold">
          직접 타보고, 만져보고, 꼼꼼하게 확인하세요.
        </h2>
        <p className="mb-0.5 text-lg text-gray-700">사진만으로는 알 수 없는</p>
        <p className="mb-6 text-lg text-gray-700">승차감과 실제 차량의 컨디션.</p>
        <p className="mb-0.5 text-lg text-gray-700">
          계약전 <strong>시운전</strong>은 물론,
        </p>
        <p className="mb-0.5 text-lg text-gray-700">
          전문과와 함께하는 <strong>점검 동행 서비스</strong>로
        </p>
        <p className="mb-0.5 text-lg text-gray-700">불안함을 확신으로 바꿔드립니다.</p>
        <Image
          src="/images/vehicle.webp"
          alt="vehicle"
          width={250}
          height={250}
          className="mx-auto"
          draggable={false}
        />
      </SectionWrapper>

      <SectionWrapper type="gray">
        <p className="text-main mb-2 text-lg font-medium">구매 후에도 든든하게</p>
        <h2 className="mb-10 text-4xl font-extrabold">
          끝까지 책임지는 서비스, 케어 프로그램 제공
        </h2>
        <p className="mb-6 text-lg text-gray-700">
          구매 후, 예기치 못한 문제가 생겨도 걱정하지 마세요!
        </p>
        <p className="mb-0.5 text-lg text-gray-700">
          <strong>승계랜드</strong>는 자체 케어 프로그램을 통해
        </p>
        <p className="mb-8 text-lg text-gray-700">
          구매 후에도 고객님의 차량을 꼼꼼히 관리해드립니다.
        </p>
        <Image
          src="/images/care.webp"
          alt="care"
          width={220}
          height={220}
          className="mx-auto"
          draggable={false}
        />
      </SectionWrapper>

      {/* 고객 약속 */}
      <SectionWrapper type="main" className="text-start">
        <h2 className="mb-12 text-3xl font-extrabold">
          <span className="max-w-fit rounded-full px-4 py-2 ring-2 ring-white">고객 약속</span>
        </h2>

        <p className="mb-0.5 text-xl font-medium underline underline-offset-4">
          "차 한 대 이상의 가치를 전합니다."
        </p>
        <p className="mb-6 text-xl font-medium">
          믿을 수 있는 중고차. <strong>승계랜드</strong> 입니다.
        </p>

        <p className="mb-0.5 text-xl font-medium">중고차 시장은 여전히 불신과 불안이 가득합니다.</p>
        <p className="mb-0.5 text-xl font-medium">
          가격은 저렴해 보여도, 숨겨진 문제와 허위매물로 인한 피해가 매년 늘고 있습니다.
        </p>
        <p className="mb-6 text-xl font-medium">
          저도 과거 이런 시장 속에서 소비자로서 좌절했던 경험이 있습니다.
        </p>

        <p className="mb-0.5 text-xl font-medium">그래서 저희는 다짐했습니다.</p>
        <p className="mb-0.5 text-xl font-medium">차를 파는 것이 아니라 고객의 삶을 바꾸자.</p>
        <p className="mb-6 text-xl font-medium">차를 파는 것이 아니라 신뢰를 팔자.</p>

        <p className="mb-14 text-xl font-medium">
          저희는 단순 판매가 아닌, 투명한 공개를 원칙으로 합니다.
        </p>

        <Link
          href="/"
          className="group z-10 inline-block rounded bg-white px-8 py-2 text-lg font-semibold text-black transition-transform hover:scale-95"
        >
          상담 신청 →
        </Link>
      </SectionWrapper>

      <SectionWrapper type="white" className="text-start">
        <p className="text-main mb-2 text-lg font-medium">믿을 수 있는 실제 후기</p>
        <h2 className="mb-8 text-4xl font-extrabold">고객님들의 실제 후기를 확인해보세요.</h2>
        <Link
          href="/"
          className="group z-10 mb-12 inline-block rounded bg-neutral-200 px-8 py-2 text-lg font-semibold text-black transition-transform hover:scale-95"
        >
          모든 후기 →
        </Link>
        <ReviewTab data={reviews} />
      </SectionWrapper>

      <footer className="bg-dark-bg-gray text-white">
        <div className="relative mx-auto max-w-screen-lg px-4 py-16">
          <p>"차 한대 이상의 가치를 전합니다."</p>
          <p className="mb-8 text-2xl font-extrabold">
            믿을 수 있는 중고차, <span className="text-main text-3xl">승계랜드</span>
          </p>
          <p className="mb-0.5 text-sm">상호명: 주식회사 요한 | 대표자명: 박문주</p>
          <p className="mb-0.5 text-sm">사업자등록번호: 480-81-03731</p>
          <p className="mb-0.5 text-sm">주소: 경기도 수원시 팔달구 동말로 66, 1층(화서동)</p>
          <p className="mt-6 text-sm text-neutral-300">
            본 광고 상품은 차량 특성상 시세 변동이 있을 수 있으며, 이율이 적용되지 않은 금액으로
            신용 등급에 따라 월 납입금이 달라질 수 있습니다.
          </p>
        </div>
      </footer>
    </main>
  );
}
