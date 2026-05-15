import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

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

        <main className="md:pl-64 min-h-screen">
          <div className="p-4 md:p-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}