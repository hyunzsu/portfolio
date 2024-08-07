import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "hyunzsu portfolio",
  description: "프론트엔드 개발자 현지수 포트폴리오",
  keywords: ["포트폴리오", "넥스트", "portfolio", "next.js"],
  icons: {
    icon: "/about-photo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="container">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
