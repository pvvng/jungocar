"use client";

import Carousel from "@/components/Carousel";
import { ChatBubble } from "@/components/ChatBubble";
import { Navbar } from "@/components/Navbar";
import Phone from "@/components/Phone";
import { SectionWrapper } from "@/components/SectionWrapper";
import Image from "next/image";

const chats = [
  `성능 점검 기록부 100% 공개!\n믿고 바로 계약했습니다.`,
  `첫 차라 막막했는데,\n매니저님이 친절하게 다 알려주셔서 좋았어요.`,
  `신용이 안 좋아서 걱정했는데,\n여기서는 대출이 가능해서 차를 구매할 수 있었어요.`,
  "시운전까지 해보고 구매하니 후회가 없네요. 강추!",
  "허위매물에 지쳤었는데... 드디어 정착합니다.",
];

export function MainClient() {
  return (
    <main className="relative">
      <Navbar />
      <SectionWrapper type="white">
        <Carousel
          data={["1", "2", "3"]}
          // autoInterval={8000}
          height={400}
          renderBlock={(item, idx) => (
            <section className="relative h-full w-full overflow-hidden rounded-md rounded-tr-3xl rounded-bl-3xl bg-transparent">
              <div className="bg-main h-full w-full"></div>
            </section>
          )}
        />
      </SectionWrapper>
      <SectionWrapper type="gray">
        <p className="text-main mb-2 text-lg font-medium">허위매물일까 걱정되시나요?</p>
        <h2 className="mb-10 text-4xl font-extrabold">
          <span className="text-main">이차탈래?</span>는 신뢰를 판매합니다.
        </h2>

        <p className="mb-0.5 text-lg text-gray-700">첫 차 구매의 설렘이 걱정으로 바뀌지 않도록</p>
        <p className="mb-0.5 text-lg text-gray-700">
          <strong>이차탈래?</strong> 는 100% 투명한 정보 공개와
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
          <span className="text-main">이차탈래?</span>를 선택하시는 이유
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
          <strong>이차탈래?</strong>는 1:1 전담 매니저가
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
          <strong>이차탈래?</strong>는 자체 케어 프로그램을 통해
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
    </main>
  );
}
