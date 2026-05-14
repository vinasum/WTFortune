import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: "What the Fortune",
  description: "命理快速占卜（陸續增加中）",

  icons: {
    icon: "/icon-v2.png",
    apple: "/apple-touch-icon-v2.png",
  },

  openGraph: {
    title: "What the Fortune",
    description: "命理快速占卜（陸續增加中）",
    url: "/",
    siteName: "What the Fortune",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "What the Fortune",
    description: "命理快速占卜（陸續增加中）",
    images: ["/og.png"],
  },
};

function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-[#0f0f0f] border-r border-white/10">
      <div className="p-4 text-white font-semibold text-lg">
        What the Fortune
      </div>

      <nav className="flex flex-col gap-2 p-4 text-sm text-white/80">
        <a href="/" className="hover:text-white">
          首頁
        </a>
        <a href="/liuren" className="hover:text-white">
          小六壬
        </a>
        <a href="/yishu" className="hover:text-white">
          易數流卦
        </a>
        <a href="/lenormand" className="hover:text-white">
          雷諾曼（預留）
        </a>
      </nav>
    </aside>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-[#0b0b0b] text-white">
        <Sidebar />

        {/* 主內容區 */}
        <main className="md:pl-64 min-h-screen">
          <div className="p-4 md:p-8">{children}</div>
        </main>
      </body>
    </html>
  );
}