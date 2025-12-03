"use client";

import { useState, useRef, useEffect } from "react";
import { Headset, Menu, X } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (menuOpen) {
      // 메뉴가 열릴 때 stagger 애니메이션
      gsap.fromTo(
        menuRef.current.children,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.3, ease: "back.out(1.7)" },
      );
    }
  }, [menuOpen]);

  return (
    <nav className="sticky inset-0 z-50 w-full border-b border-b-neutral-200 bg-white/80 backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-screen-lg items-center justify-between p-3 md:p-4">
        <Link href="/" className="text-main text-2xl font-extrabold md:text-3xl">
          승계랜드
        </Link>
        {/* 메뉴 버튼 */}
        <button
          className="data-[open=true]:bg-main block rounded p-1 transition hover:bg-neutral-200 data-[open=true]:text-white md:hidden"
          data-open={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden items-center gap-10 *:font-medium md:flex">
          <li>홈</li>
          <li>소개</li>
          <li>고객약속</li>
          <li>구매후기</li>
          <li>
            <Link
              href="/"
              className="group bg-main flex items-center gap-1 rounded-2xl px-3 py-1 text-white shadow"
            >
              <Headset className="size-4" />
              상담신청
            </Link>
          </li>
        </ul>

        {/* 모바일 메뉴 */}
        {menuOpen && (
          <ul
            ref={menuRef}
            className="absolute top-[110%] right-3 flex w-40 flex-col gap-2 rounded-md border border-neutral-200 bg-white p-3 shadow md:hidden"
          >
            <li className="rounded p-2 hover:bg-neutral-200">홈</li>
            <li className="rounded p-2 hover:bg-neutral-200">소개</li>
            <li className="rounded p-2 hover:bg-neutral-200">고객약속</li>
            <li className="rounded p-2 hover:bg-neutral-200">구매후기</li>
            <li>
              <Link
                href="/"
                className="bg-main flex items-center justify-center gap-1 rounded px-3 py-1 text-center text-white shadow transition hover:scale-95"
              >
                <Headset className="size-4" />
                상담신청
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
