import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "completed" | "in-progress" | "upcoming" | "overdue";
  type: "milestone" | "task" | "meeting" | "deadline";
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    title: "Foundation Inspection",
    description: "Structural integrity assessment for Building A",
    date: "2024-01-15",
    status: "completed",
    type: "milestone",
  },
  {
    id: "2",
    title: "Material Delivery",
    description: "Steel beams and concrete supplies arrival",
    date: "2024-01-20",
    status: "in-progress",
    type: "task",
  },
  {
    id: "3",
    title: "Client Review Meeting",
    description: "Progress presentation and feedback session",
    date: "2024-01-25",
    status: "upcoming",
    type: "meeting",
  },
  {
    id: "4",
    title: "Phase 1 Completion",
    description: "First construction phase deadline",
    date: "2024-01-30",
    status: "upcoming",
    type: "deadline",
  },
  {
    id: "5",
    title: "Safety Audit",
    description: "Monthly safety compliance check",
    date: "2024-01-18",
    status: "overdue",
    type: "task",
  },
];

const statusConfig = {
  completed: {
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    badge: "bg-green-100 text-green-800",
  },
  "in-progress": {
    icon: Clock,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    badge: "bg-blue-100 text-blue-800",
  },
  upcoming: {
    icon: Calendar,
    color: "text-gray-500",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    badge: "bg-gray-100 text-gray-800",
  },
  overdue: {
    icon: AlertCircle,
    color: "text-red-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    badge: "bg-red-100 text-red-800",
  },
};

const typeLabels = {
  milestone: "Milestone",
  task: "Task",
  meeting: "Meeting",
  deadline: "Deadline",
};

export function ConstructionTimelineWidget() {
  const sortedEvents = timelineEvents.sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card className="engineering-panel">
      <CardHeader className="pb-4">
        <CardTitle className="font-heading flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-primary" />
          <span>Construction Timeline</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-4">
            {sortedEvents.map((event, index) => {
              const config = statusConfig[event.status];
              const Icon = config.icon;
              
              return (
                <div
                  key={event.id}
                  className={cn(
                    "relative p-4 rounded-lg border-l-4 engineering-hover",
                    config.bgColor,
                    config.borderColor
                  )}
                >
                  {/* Connection line for timeline effect */}
                  {index < sortedEvents.length - 1 && (
                    <div className="absolute left-6 top-12 w-px h-8 bg-border"></div>
                  )}
                  
                  <div className="flex items-start space-x-3">
                    {/* Status Icon */}
                    <div className={cn("mt-0.5", config.color)}>
                      <Icon className="h-4 w-4" />
                    </div>
                    
                    {/* Event Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-heading font-semibold text-sm text-foreground">
                          {event.title}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant="secondary" 
                            className={cn("text-xs", config.badge)}
                          >
                            {typeLabels[event.type]}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-xs text-muted-foreground mb-2">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center space-x-4">
                        <span className="text-xs font-medium text-muted-foreground">
                          {formatDate(event.date)}
                        </span>
                        <Badge 
                          variant="outline" 
                          className={cn("text-xs capitalize", config.badge)}
                        >
                          {event.status.replace('-', ' ')}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}