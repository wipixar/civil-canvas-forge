import { SidebarProvider } from "@/components/ui/sidebar";
import { CMSSidebar } from "./CMSSidebar";
import { CMSHeader } from "./CMSHeader";
import { cn } from "@/lib/utils";

interface CMSLayoutProps {
  children: React.ReactNode;
}

export function CMSLayout({ children }: CMSLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <CMSSidebar />
        
        <div className="flex-1 flex flex-col">
          <CMSHeader />
          
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}