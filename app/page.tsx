"use client";
import Image from "next/image";
import PageContainer from "./components/PageContainer";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import $ from "jquery";

// Import Chart.js dynamically to avoid SSR issues
const Chart = dynamic(() => import("chart.js/auto"), { ssr: false });

export default function Home() {
  useEffect(() => {
    // Initialize charts after component mounts
    initRevenueChart();
    initTrafficSourcesChart();
  }, []);

  // Revenue overview chart initialization
  const initRevenueChart = () => {
    const ctx = document.getElementById("revenueChart");
    if (!ctx) return;
    
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
        datasets: [{
          label: "درآمد",
          data: [12500, 19200, 15700, 24500, 21300, 24345],
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          tension: 0.3,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            align: "end"
          }
        }
      }
    });
    
    // Use jQuery to handle resize
    $(window).on("resize", function() {
      chart.resize();
    });
  };

  // Traffic sources chart initialization
  const initTrafficSourcesChart = () => {
    const ctx = document.getElementById("trafficChart");
    if (!ctx) return;
    
    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["جستجوی ارگانیک", "شبکه‌های اجتماعی", "ارجاع", "مستقیم", "سایر"],
        datasets: [{
          data: [35, 25, 20, 15, 5],
          backgroundColor: [
            "#3b82f6", // آبی
            "#10b981", // سبز
            "#8b5cf6", // بنفش
            "#f59e0b", // نارنجی
            "#6b7280"  // خاکستری
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom"
          }
        }
      }
    });
    
    // Use jQuery to handle resize
    $(window).on("resize", function() {
      chart.resize();
    });
  };

  return (
    <PageContainer pageTitle="داشبورد">
      <div className="min-h-screen">
        {/* کارت‌های آماری */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">درآمد کل</p>
                <h3 className="text-2xl font-bold mt-1">$24,345</h3>
                <p className="text-green-500 text-sm mt-2">+8.4% <span className="text-gray-500 dark:text-gray-400">نسبت به ماه قبل</span></p>
              </div>
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <i className="ki-solid ki-dollar text-blue-600 dark:text-blue-400 text-xl"></i>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">کاربران جدید</p>
                <h3 className="text-2xl font-bold mt-1">2,345</h3>
                <p className="text-green-500 text-sm mt-2">+12.7% <span className="text-gray-500 dark:text-gray-400">نسبت به ماه قبل</span></p>
              </div>
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <i className="ki-solid ki-user-square text-green-600 dark:text-green-400 text-xl"></i>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">جلسات فعال</p>
                <h3 className="text-2xl font-bold mt-1">1,247</h3>
                <p className="text-red-500 text-sm mt-2">-3.2% <span className="text-gray-500 dark:text-gray-400">نسبت به ماه قبل</span></p>
              </div>
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <i className="ki-solid ki-wifi text-purple-600 dark:text-purple-400 text-xl"></i>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">نرخ تبدیل</p>
                <h3 className="text-2xl font-bold mt-1">3.42%</h3>
                <p className="text-green-500 text-sm mt-2">+2.1% <span className="text-gray-500 dark:text-gray-400">نسبت به ماه قبل</span></p>
              </div>
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                <i className="ki-solid ki-chart-line text-orange-600 dark:text-orange-400 text-xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* بخش نمودارها */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">نمای کلی درآمد</h3>
            <div className="h-80">
              <canvas id="revenueChart"></canvas>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">منابع ترافیک</h3>
            <div className="h-80">
              <canvas id="trafficChart"></canvas>
            </div>
          </div>
        </div>

        {/* فعالیت‌های اخیر */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">تراکنش‌های اخیر</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">تراکنش</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">تاریخ</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">مبلغ</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">وضعیت</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap">پرداخت از جان دو</td>
                    <td className="px-4 py-3 whitespace-nowrap">15 مه، 2023</td>
                    <td className="px-4 py-3 whitespace-nowrap">$120.00</td>
                    <td className="px-4 py-3 whitespace-nowrap"><span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">تکمیل شده</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap">پرداخت از جین اسمیت</td>
                    <td className="px-4 py-3 whitespace-nowrap">14 مه، 2023</td>
                    <td className="px-4 py-3 whitespace-nowrap">$250.00</td>
                    <td className="px-4 py-3 whitespace-nowrap"><span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">تکمیل شده</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap">پرداخت به تأمین‌کننده XYZ</td>
                    <td className="px-4 py-3 whitespace-nowrap">13 مه، 2023</td>
                    <td className="px-4 py-3 whitespace-nowrap">$1,500.00</td>
                    <td className="px-4 py-3 whitespace-nowrap"><span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">در انتظار</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap">بازپرداخت به مشتری #1242</td>
                    <td className="px-4 py-3 whitespace-nowrap">12 مه، 2023</td>
                    <td className="px-4 py-3 whitespace-nowrap">$75.00</td>
                    <td className="px-4 py-3 whitespace-nowrap"><span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">برگشت خورده</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">فعالیت‌های اخیر</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <i className="ki-solid ki-user text-blue-600 dark:text-blue-400"></i>
                </div>
                <div>
                  <p className="text-sm font-medium">کاربر جدید ثبت‌نام کرد</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">2 ساعت پیش</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <i className="ki-solid ki-check text-green-600 dark:text-green-400"></i>
                </div>
                <div>
                  <p className="text-sm font-medium">وظیفه تکمیل شد: به‌روزرسانی سیستم</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">4 ساعت پیش</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                  <i className="ki-solid ki-notification text-yellow-600 dark:text-yellow-400"></i>
                </div>
                <div>
                  <p className="text-sm font-medium">هشدار: بار سرور بالاست</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">6 ساعت پیش</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <i className="ki-solid ki-document text-purple-600 dark:text-purple-400"></i>
                </div>
                <div>
                  <p className="text-sm font-medium">گزارش جدید در دسترس است</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">8 ساعت پیش</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
