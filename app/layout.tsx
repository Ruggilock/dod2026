import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevOpsDays Lima 2026",
  description:
    "DevOpsDays Lima reúne a profesionales de tecnología para compartir experiencias sobre cultura DevOps, automatización, observabilidad y despliegues. Agosto 25-26, 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-white via-[#f5f5f5] to-white`}
      >
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-white via-[#f5f5f5] to-white">
          {children}

        </div>
      </body>
    </html>
  );
}
