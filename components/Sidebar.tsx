"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-3 py-2 rounded-md text-sm transition ${
      pathname === path
        ? "bg-white/10 text-white"
        : "text-white/70 hover:text-white hover:bg-white/5"
    }`;

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-[#0f0f0f] border-r border-white/10">
      {/* Brand */}
      <div className="p-4 text-white font-semibold text-lg">
        What the Fortune
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 p-4">
        <Link href="/" className={linkClass("/")}>
          首頁
        </Link>

        <Link href="/liuren" className={linkClass("/liuren")}>
          小六壬
        </Link>

        <Link href="/yishu" className={linkClass("/yishu")}>
          易數流卦
        </Link>

        <Link href="/lenormand" className={linkClass("/lenormand")}>
          雷諾曼（預留）
        </Link>
      </nav>
    </aside>
  );
}