import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { Button } from "@/components/ui/button";
import { PanelRight } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { state, toggleSidebar } = useSidebar();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <main className="flex-1 overflow-y-auto">
          {state === "collapsed" && (
            <Button
              variant="ghost"
              size="icon"
              className="fixed left-4 top-4 z-50 md:left-6"
              onClick={toggleSidebar}
            >
              <PanelRight className="h-4 w-4" />
              <span className="sr-only">Open Sidebar</span>
            </Button>
          )}
          <div className="container py-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}