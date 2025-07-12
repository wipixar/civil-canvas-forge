import { useState } from "react";
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Settings, 
  BarChart3, 
  FolderOpen, 
  Shield, 
  Wrench,
  HardHat,
  Building2,
  Calendar,
  Camera
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
    category: "overview"
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Building2,
    category: "content"
  },
  {
    title: "Content",
    url: "/content",
    icon: FileText,
    category: "content"
  },
  {
    title: "Media Library",
    url: "/media",
    icon: Camera,
    category: "content"
  },
  {
    title: "Timeline",
    url: "/timeline",
    icon: Calendar,
    category: "content"
  },
  {
    title: "Team",
    url: "/team",
    icon: Users,
    category: "management"
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
    category: "management"
  },
  {
    title: "File Manager",
    url: "/files",
    icon: FolderOpen,
    category: "management"
  },
  {
    title: "Security",
    url: "/security",
    icon: Shield,
    category: "system"
  },
  {
    title: "Tools",
    url: "/tools",
    icon: Wrench,
    category: "system"
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    category: "system"
  }
];

const groupedItems = {
  overview: navigationItems.filter(item => item.category === "overview"),
  content: navigationItems.filter(item => item.category === "content"),
  management: navigationItems.filter(item => item.category === "management"),
  system: navigationItems.filter(item => item.category === "system")
};

export function CMSSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  
  const getNavClassName = (path: string) => {
    const baseClasses = "engineering-hover group relative flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200";
    
    if (isActive(path)) {
      return cn(baseClasses, "bg-primary text-primary-foreground shadow-lg");
    }
    
    return cn(baseClasses, "text-muted-foreground hover:text-foreground hover:bg-muted/50");
  };

  return (
    <Sidebar 
      className={cn(
        "border-r border-border bg-background engineering-shadow transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo Area */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center engineering-icon">
            <HardHat className="w-5 h-5 text-primary-foreground" />
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="font-heading font-bold text-lg">CMS Pro</h2>
              <p className="text-xs text-muted-foreground">Engineering Edition</p>
            </div>
          )}
        </div>
      </div>

      <SidebarContent className="p-4 space-y-6">
        {/* Overview */}
        <SidebarGroup>
          {!isCollapsed && (
            <SidebarGroupLabel className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Overview
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {groupedItems.overview.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClassName(item.url)}>
                      <item.icon className={cn(
                        "w-5 h-5 engineering-icon",
                        isActive(item.url) ? "text-primary-foreground" : "text-current"
                      )} />
                      {!isCollapsed && (
                        <span className="font-medium">{item.title}</span>
                      )}
                      {isActive(item.url) && (
                        <div className="absolute left-0 w-1 h-8 bg-accent rounded-r-lg"></div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Content Management */}
        <SidebarGroup>
          {!isCollapsed && (
            <SidebarGroupLabel className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Content
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {groupedItems.content.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClassName(item.url)}>
                      <item.icon className={cn(
                        "w-5 h-5 engineering-icon",
                        isActive(item.url) ? "text-primary-foreground" : "text-current"
                      )} />
                      {!isCollapsed && (
                        <span className="font-medium">{item.title}</span>
                      )}
                      {isActive(item.url) && (
                        <div className="absolute left-0 w-1 h-8 bg-accent rounded-r-lg"></div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Management */}
        <SidebarGroup>
          {!isCollapsed && (
            <SidebarGroupLabel className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Management
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {groupedItems.management.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClassName(item.url)}>
                      <item.icon className={cn(
                        "w-5 h-5 engineering-icon",
                        isActive(item.url) ? "text-primary-foreground" : "text-current"
                      )} />
                      {!isCollapsed && (
                        <span className="font-medium">{item.title}</span>
                      )}
                      {isActive(item.url) && (
                        <div className="absolute left-0 w-1 h-8 bg-accent rounded-r-lg"></div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* System */}
        <SidebarGroup>
          {!isCollapsed && (
            <SidebarGroupLabel className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3">
              System
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {groupedItems.system.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClassName(item.url)}>
                      <item.icon className={cn(
                        "w-5 h-5 engineering-icon",
                        isActive(item.url) ? "text-primary-foreground" : "text-current"
                      )} />
                      {!isCollapsed && (
                        <span className="font-medium">{item.title}</span>
                      )}
                      {isActive(item.url) && (
                        <div className="absolute left-0 w-1 h-8 bg-accent rounded-r-lg"></div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}