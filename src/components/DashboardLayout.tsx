import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  console.log("DashboardLayout rendering...");
  const [dateFilter, setDateFilter] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<"day" | "week" | "month" | "year">("day");

  return (
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar />
      <main className="flex-1 flex flex-col">
        <DashboardHeader
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
        <div className="flex-1 p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
