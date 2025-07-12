import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  FileText, 
  Calendar, 
  BarChart3, 
  Upload, 
  Users, 
  Settings, 
  Zap 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  variant: "primary" | "secondary" | "accent";
  action: () => void;
}

export function QuickActionsWidget() {
  const quickActions: QuickAction[] = [
    {
      id: "new-project",
      title: "New Project",
      description: "Start a new engineering project",
      icon: Plus,
      variant: "primary",
      action: () => console.log("New project"),
    },
    {
      id: "create-content",
      title: "Create Content",
      description: "Write article or case study",
      icon: FileText,
      variant: "secondary",
      action: () => console.log("Create content"),
    },
    {
      id: "schedule-update",
      title: "Schedule Update",
      description: "Plan content publication",
      icon: Calendar,
      variant: "accent",
      action: () => console.log("Schedule update"),
    },
    {
      id: "generate-report",
      title: "Generate Report",
      description: "Create project analytics",
      icon: BarChart3,
      variant: "secondary",
      action: () => console.log("Generate report"),
    },
    {
      id: "upload-media",
      title: "Upload Media",
      description: "Add photos and diagrams",
      icon: Upload,
      variant: "primary",
      action: () => console.log("Upload media"),
    },
    {
      id: "manage-team",
      title: "Manage Team",
      description: "Add or update team members",
      icon: Users,
      variant: "accent",
      action: () => console.log("Manage team"),
    },
  ];

  const getButtonVariant = (variant: QuickAction["variant"]) => {
    switch (variant) {
      case "primary":
        return "default";
      case "secondary":
        return "secondary";
      case "accent":
        return "outline";
      default:
        return "default";
    }
  };

  const getIconColor = (variant: QuickAction["variant"]) => {
    switch (variant) {
      case "primary":
        return "text-primary-foreground";
      case "secondary":
        return "text-secondary-foreground";
      case "accent":
        return "text-accent";
      default:
        return "text-current";
    }
  };

  return (
    <Card className="engineering-panel">
      <CardHeader className="pb-4">
        <CardTitle className="font-heading flex items-center space-x-2">
          <Zap className="h-5 w-5 text-accent" />
          <span>Quick Actions</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {quickActions.map((action) => (
            <Button
              key={action.id}
              variant={getButtonVariant(action.variant)}
              className={cn(
                "h-auto p-4 flex flex-col items-start space-y-2 text-left engineering-hover",
                "justify-start min-h-[100px]"
              )}
              onClick={action.action}
            >
              <action.icon className={cn("h-5 w-5 self-start", getIconColor(action.variant))} />
              <div className="space-y-1">
                <p className="font-semibold text-sm">{action.title}</p>
                <p className="text-xs opacity-80 line-clamp-2">{action.description}</p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}