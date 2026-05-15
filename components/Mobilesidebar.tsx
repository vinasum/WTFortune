"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-3 py-2 rounded-md text-sm transition ${
      pathname === path
        ? "bg-white/10 text-white"
        : "text-white/70 hover:text-white hover:bg-white/5"
    }`;

  return (
    <>
      {/* Top Bar */}
      <div className="md:hidden sticky top-0 z-40 flex items-center justify-between border-b border-white/10 bg-[#0b0b0b]/90 backdrop-blur px-4 py-3">
        <button
          onClick={() => setOpen(true)}
          className="text-white text-xl"
        >
          ☰
        </button>

        <div className="text-sm tracking-[0.2em] text-white/80">
          WHAT THE FORTUNE
        </div>

        <div className="w-6" />
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0f0f0f] border-r border-white/10 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="text-white font-semibold">
            What the Fortune
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-white/70"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          <Link
            href="/"
            className={linkClass("/")}
            onClick={() => setOpen(false)}
          >
            首頁
          </Link>

          <Link
            href="/liuren"
            className={linkClass("/liuren")}
            onClick={() => setOpen(false)}
          >
            小六壬
          </Link>

          <Link
            href="/yishu"
            className={linkClass("/yishu")}
            onClick={() => setOpen(false)}
          >
            易數流卦
          </Link>

          <Link
            href="/lenormand"
            className={linkClass("/lenormand")}
            onClick={() => setOpen(false)}
          >
            雷諾曼（預留）
          </Link>
        </nav>
      </aside>
    </>
  );
}