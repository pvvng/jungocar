import { Headset } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky inset-0 z-50 w-full border-b border-b-neutral-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-screen-lg items-center justify-between p-4">
        <Link href="/" className="text-3xl font-extrabold">
          LOGO
        </Link>
        <ul className="flex items-center gap-10 *:font-semibold">
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
      </div>
    </nav>
  );
}
