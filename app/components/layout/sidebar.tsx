"use client";

import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col p-4 space-y-6 overflow-y-auto">
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
    </aside>
  );
}
