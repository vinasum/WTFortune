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

  // 🌐 favicon + app icon（桌面/瀏覽器）
  icons: {
    icon: "/icon-v2.png",
    apple: "/apple-touch-icon-v2.png",
  },

  // 📱 Open Graph（LINE / FB / iMessage）
  openGraph: {
    title: "What the Fortune",
    description: "命理快速占卜（陸續增加中）",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  // 🐦 Twitter / X 分享
  twitter: {
    card: "summary_large_image",
    images: ["/og-v2.png"],
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