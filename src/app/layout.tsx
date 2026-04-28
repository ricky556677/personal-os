import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Personal OS — Build with AI, Express as System",
  description:
    "用结构化方式表达能力，而不是展示简历。Personal OS is a structured expression of capabilities, thinking, and workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" style={{ backgroundColor: "#07080a" }}>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
