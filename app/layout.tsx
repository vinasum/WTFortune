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
  title: "What the Fortune",
  description: "命理快速占卜（陸續增加中）",

  // 1. 必須加入 manifest 連結
  manifest: "/manifest.json",

  // 2. 修正圖示路徑與 PWA 設定
  icons: {
    icon: "/icon.png",
    // 建議直接用 icon.png 或確保 apple-touch-icon.png 檔案存在且「不透明」
    apple: "/icon.png", 
  },

  // 3. iOS 專用進階設定，確保顯示效果
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Fortune",
  },

  // 📱 Open Graph
  openGraph: {
    title: "What the Fortune",
    description: "命理快速占卜（陸續增加中）",
    images: [
      {
        url: "/og.png",
        width: 512,
        height: 512,
      },
    ],
  },

  // 🐦 Twitter / X
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

  // 🌐 favicon + app icon（桌面/瀏覽器）
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },

  // 📱 Open Graph（LINE / FB / iMessage）
  openGraph: {
    title: "What the Fortune",
    description: "命理快速占卜（陸續增加中）",
    images: [
      {
        url: "/og.png",
        width: 512,
        height: 512,
      },
    ],
  },

  // 🐦 Twitter / X 分享
  twitter: {
    card: "summary_large_image",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}