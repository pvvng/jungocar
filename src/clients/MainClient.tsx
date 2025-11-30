"use client";

import Carousel from "@/components/Carousel";
import { ChatBubble } from "@/components/ChatBubble";
import { Navbar } from "@/components/Navbar";
import Phone from "@/components/Phone";
import { SectionWrapper } from "@/components/SectionWrapper";
import Image from "next/image";

const chats = [
  `첫 차라 막막했는데,\n매니저님이 친절하게 다 알려주셔서 좋았어요.`,
  `성능 점검 기록부 100% 공개!\n믿고 바로 계약했습니다.`,
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
          autoInterval={8000}
          height={400}
          renderBlock={(item) => (
            <div className="bg-main h-full w-full rounded-md rounded-tr-3xl rounded-bl-3xl"></div>
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
            {chats.map((chat) => (
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
      </SectionWrapper>
    </main>
  );
}
