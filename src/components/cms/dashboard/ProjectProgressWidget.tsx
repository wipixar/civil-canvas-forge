import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Clock, DollarSign, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectProgressProps {
  projects: {
    id: string;
    name: string;
    progress: number;
    budget: {
      spent: number;
      total: number;
    };
    timeline: {
      current: number;
      total: number;
    };
    team: number;
    status: "planning" | "in-progress" | "review" | "completed" | "on-hold";
  }[];
}

const statusColors = {
  planning: "bg-blue-500",
  "in-progress": "bg-green-500",
  review: "bg-yellow-500",
  completed: "bg-purple-500",
  "on-hold": "bg-red-500",
};

const statusLabels = {
  planning: "Planning",
  "in-progress": "In Progress",
  review: "Under Review",
  completed: "Completed",
  "on-hold": "On Hold",
};

export function ProjectProgressWidget({ projects }: ProjectProgressProps) {
  return (
    <Card className="engineering-panel">
      <CardHeader className="pb-4">
        <CardTitle className="font-heading flex items-center space-x-2">
          <Building2 className="h-5 w-5 text-primary" />
          <span>Project Progress Snapshot</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="space-y-3 p-4 rounded-lg bg-muted/30 engineering-hover">
            {/* Project Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <h4 className="font-heading font-semibold text-sm">{project.name}</h4>
                <div className="flex items-center space-x-1">
                  <div className={cn("w-2 h-2 rounded-full", statusColors[project.status])}></div>
                  <span className="text-xs text-muted-foreground">{statusLabels[project.status]}</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-primary">{project.progress}%</span>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <Progress 
                value={project.progress} 
                className="h-2 blueprint-draw"
              />
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {/* Budget */}
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-green-500" />
                <div className="text-xs">
                  <p className="text-muted-foreground">Budget</p>
                  <p className="font-semibold">
                    ${project.budget.spent}k / ${project.budget.total}k
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <div className="text-xs">
                  <p className="text-muted-foreground">Timeline</p>
                  <p className="font-semibold">
                    {project.timeline.current} / {project.timeline.total} days
                  </p>
                </div>
              </div>

              {/* Team */}
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-purple-500" />
                <div className="text-xs">
                  <p className="text-muted-foreground">Team</p>
                  <p className="font-semibold">{project.team} members</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}