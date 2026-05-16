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

  const sectionTitle =
    "px-3 py-2 text-[11px] tracking-[0.2em] text-white/30";

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-[#0f0f0f] border-r border-white/10">
      {/* Brand */}
      <div className="p-4 text-white font-semibold text-lg">
        What the Fortune
      </div>

      {/* Nav */}
      <nav className="flex flex-col p-4 text-sm">

        {/* 首頁 */}
        <div className="mb-6">
          <Link href="/" className={linkClass("/")}>
            首頁
          </Link>
        </div>

        {/* 占卜 */}
        <div className="mb-6">
          <div className={sectionTitle}>占卜</div>

          <div className="flex flex-col gap-1">
            <Link href="/liuren" className={linkClass("/liuren")}>
              小六壬
            </Link>

            <Link href="/yishu" className={linkClass("/yishu")}>
              易數流卦
            </Link>

            <Link href="/lenormand" className={linkClass("/lenormand")}>
              雷諾曼卡牌
            </Link>
          </div>
        </div>

        {/* 命理 */}
        <div className="mb-6">
          <div className={sectionTitle}>命理</div>

          <div className="px-3 py-2 text-white/40 text-sm">
            COMING SOON
          </div>
        </div>

        {/* 關於我 */}
        <div>
          <div className={sectionTitle}>關於我</div>

          <div className="px-3 py-2 text-white/40 text-sm leading-relaxed">
            之後將放置論命預約連結<br />
            以及 YT / IG / Threads
          </div>
        </div>

      </nav>
    </aside>
  );
}