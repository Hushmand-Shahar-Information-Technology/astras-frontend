"use client";

import React, { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./components/layout/AppProvider";
import DashboardLayout from "./components/layout/DashboardLayout";

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
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="description" content="سیستم مدیریت استراس" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppProvider>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </AppProvider>
      </body>
    </html>
  );
}
