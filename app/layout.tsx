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
  title: "Fortune",
  description: "命理快速占卜（陸續增加中）",
  // 記得加入這行，連結 manifest.json
  manifest: "/manifest.json", 

  // 🌐 favicon + app icon
  icons: {
    icon: "/icon-v2.png",
    apple: "/apple-touch-icon-v2.png",
  },

  // 📱 iOS 專用，控制加到主畫面的名稱
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Fortune",
  },

  // 📱 Open Graph
  openGraph: {
    title: "Fortune",
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