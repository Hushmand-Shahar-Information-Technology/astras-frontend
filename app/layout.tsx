"use client";

import React, { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "./components/layout/sidebar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
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
          <Sidebar />
          {/* Main Content - Scrollable */}
          <main className="flex-1 overflow-hidden flex flex-col">
            <header className="p-8 bg-white shadow-sm z-10">
              {/* {pathname.split("/").pop()} */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                  justifyContent: "end",
                  direction: "ltr",
                  "& > *": {
                    m: 0,
                  },
                }}
              >
                <ButtonGroup
                  variant="contained"
                  aria-label="Basic button group"
                >
                  <Button>آمریت خط استیشن</Button>
                  <Button>آمریت پورت نمبر یک</Button>
                  <Button>آمریت پورت نمبر دو</Button>
                  <Button>آمریت پورت نمبر سه</Button>
                  <Button>آمریت مالی</Button>
                  <Button>آمریت کنترول</Button>
                  <Button>آمریت خدمات</Button>
                  <Button>آمریت پلان</Button>
                  <Button>آمریت منابع بشری</Button>
                  <Button>آمریت اسناد و ارتباط</Button>
                  <Button>آمریت تجارتی</Button>
                  <Button>آمریت تخنیک و ترانسپورت</Button>
                </ButtonGroup>
              </Box>
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
