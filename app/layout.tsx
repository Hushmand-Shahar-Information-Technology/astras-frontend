"use client";

import React, { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import type { Metadata } from "next";

// Import fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "برنامه من",
//   description: "برنامه مدیریت داشبورد",
// };

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="description" content="یک رابط کاربری زیبا با نوار کناری" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen overflow-hidden bg-gray-100">
          {/* Sidebar - Fixed height */}
          <aside className="w-64 bg-gray-800 text-white flex flex-col p-4 space-y-6 h-full">
            <h1 className="text-xl font-semibold">استراس</h1>
            <nav className="space-y-4">
              <a
                href="/"
                className={`block p-2 rounded-lg ${
                  typeof window !== "undefined" &&
                  window.location.pathname === "/"
                    ? "bg-blue-500"
                    : "hover:bg-blue-500"
                }`}
              >
                <i className="ki-solid ki-home fs-2 me-2"></i>
                آمریت خط استیشن
              </a>
              <a href="/" className="block p-2 rounded-lg">
                <i className="ki-solid ki-home fs-2 me-2"></i>
                آمریت پورت نمبر یک
              </a>
              <a href="/" className="block p-2 rounded-lg">
                <i className="ki-solid ki-home fs-2 me-2"></i>
                آمریت پورت نمبر دو
              </a>
              <a href="/" className="block p-2 rounded-lg">
                <i className="ki-solid ki-home fs-2 me-2"></i>
                آمریت پورت نمبر سه
              </a>
              <a href="/" className="block p-2 rounded-lg">
                <i className="ki-solid ki-home fs-2 me-2"></i>
                آمریت پورت نمبر چهار
              </a>

              <a
                href="/contact"
                className={`block p-2 rounded-lg ${
                  typeof window !== "undefined" &&
                  window.location.pathname === "/contact"
                    ? "bg-blue-500"
                    : "hover:bg-blue-500"
                }`}
              >
                <i className="ki-solid ki-call fs-2 me-2"></i>
                تماس با ما
              </a>
            </nav>
          </aside>

          {/* Main Content - Scrollable */}
          <main className="flex-1 flex flex-col h-full">
            <header className="p-8 bg-white">
              {typeof window !== "undefined" &&
                window.location.pathname.split("/").pop()}
            </header>
            <div className="flex-1 p-8 overflow-y-auto bg-white">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
