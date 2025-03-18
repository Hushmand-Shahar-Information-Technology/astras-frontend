import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  pageTitle: string;
}

export default function PageContainer({ children, pageTitle }: PageContainerProps) {
  return (
    <>
      <header className="p-8 bg-white dark:bg-gray-800 shadow-sm">
        <h1 className="text-xl font-semibold">{pageTitle}</h1>
      </header>
      <div className="flex-1 p-8 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        {children}
      </div>
    </>
  );
} 