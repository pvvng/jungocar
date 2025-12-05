"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { label: "홈", link: "" },
  { label: "소개", link: "introduce" },
  { label: "리스차량소개", link: "vehicle" },
  { label: "구매후기", link: "review" },
  { label: "상담신청", link: "inquiry" },
];

export function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const isActive = (link: string) => {
    const fullPath = "/" + link; // ''이면 '/'
    return pathname === fullPath;
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky inset-0 z-50 w-full border-b border-b-neutral-200 bg-white/80 backdrop-blur">
      <div className="relative mx-auto flex max-w-screen-xl items-center justify-between p-4">
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
        <ul className="hidden items-center gap-8 *:font-medium md:flex">
          {menus.map(({ label, link }) => (
            <li key={label + link}>
              <Link
                href={`/${link}`}
                className={
                  "block transition " +
                  (isActive(link)
                    ? "font-bold underline underline-offset-5"
                    : "text-black hover:text-neutral-600")
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* 모바일 메뉴 */}
        {menuOpen && (
          <ul
            ref={menuRef}
            className="absolute top-[110%] right-3 flex w-40 flex-col gap-2 rounded-md border border-neutral-200 bg-white p-3 shadow md:hidden"
          >
            {menus.map(({ label, link }) => (
              <li
                key={label + link}
                className={
                  "rounded p-2 transition " +
                  (isActive(link) ? "text-main font-bold" : "text-black hover:text-neutral-600")
                }
              >
                <Link href={`/${link}`} className="block">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
