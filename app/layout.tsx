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

/**
 * ✔ 重點修正：
 * - 加 metadataBase（修 warning + OG URL resolve）
 * - 統一 image path 行為
 */
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: "What the Fortune",
  description: "命理快速占卜（陸續增加中）",

  // 🌐 icons
  icons: {
    icon: "/icon-v2.png",
    apple: "/apple-touch-icon-v2.png",
  },

  // 📱 Open Graph
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

  // 🐦 Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "What the Fortune",
    description: "命理快速占卜（陸續增加中）",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}