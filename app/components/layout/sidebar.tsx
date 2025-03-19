"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col p-4 h-full">
      {/* Logo and Navigation - using flex-1 to push profile to bottom */}
      <div className="flex-1 space-y-6">
        <h1 className="text-xl font-semibold">استراس</h1>
        <nav className="space-y-4">
          <a
            href="/"
            className={`flex items-center p-2 rounded-lg ${
              pathname === "/" ? "bg-blue-500" : "hover:bg-blue-500"
            }`}
          >
            <i className="ki-solid ki-home me-2"></i>
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
      </div>

      {/* Profile Section - Fixed at bottom */}
      <div className="relative border-t border-gray-700 pt-4 mt-4">
        {/* Profile Dropdown Menu */}
        {isProfileMenuOpen && (
          <div className="absolute bottom-full mb-2 w-full bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div className="py-1">
              <a href="/profile" className="flex items-center px-4 py-2 hover:bg-gray-600">
                <i className="ki-solid ki-user me-2"></i>
                پروفایل
              </a>
              <a href="/settings" className="flex items-center px-4 py-2 hover:bg-gray-600">
                <i className="ki-solid ki-setting-2 me-2"></i>
                تنظیمات
              </a>
              <div className="border-t border-gray-600"></div>
              <button className="flex items-center w-full px-4 py-2 hover:bg-gray-600 text-red-400">
                <i className="ki-solid ki-logout me-2"></i>
                خروج
              </button>
            </div>
          </div>
        )}

        {/* Profile Button */}
        <button 
          onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          className="flex items-center w-full space-x-3 hover:bg-gray-700 rounded-lg p-2 transition-colors"
        >
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
              <i className="ki-solid ki-user text-xl"></i>
            </div>
          </div>
          <div className="flex-1 text-right">
            <div className="font-medium">احمد محمدی</div>
            <div className="text-sm text-gray-400">مدیر سیستم</div>
          </div>
          <i className={`ki-solid ki-arrow-up transform transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`}></i>
        </button>
      </div>
    </aside>
  );
}
