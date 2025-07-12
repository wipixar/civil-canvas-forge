import { CMSLayout } from "@/components/cms/CMSLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Building2, 
  Plus, 
  Calendar, 
  DollarSign, 
  Users, 
  MapPin,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const projects = [
  {
    id: "1",
    name: "Skybridge Tower",
    description: "40-story commercial building with integrated sky gardens",
    location: "Downtown District",
    status: "in-progress",
    progress: 75,
    budget: { spent: 8500000, total: 12000000 },
    startDate: "2023-06-01",
    endDate: "2024-08-15",
    team: 12,
    image: "/placeholder-project1.jpg",
    type: "Commercial",
  },
  {
    id: "2", 
    name: "Metro Station Renovation",
    description: "Complete overhaul of central metro hub with accessibility improvements",
    location: "Central Metro Hub",
    status: "planning",
    progress: 25,
    budget: { spent: 1200000, total: 4500000 },
    startDate: "2024-02-01",
    endDate: "2024-12-30",
    team: 8,
    image: "/placeholder-project2.jpg",
    type: "Infrastructure",
  },
  {
    id: "3",
    name: "Green Building Complex",
    description: "Eco-friendly residential complex with solar panels and rainwater harvesting",
    location: "Eco District",
    status: "review",
    progress: 90,
    budget: { spent: 11000000, total: 11500000 },
    startDate: "2022-09-15",
    endDate: "2024-01-30",
    team: 15,
    image: "/placeholder-project3.jpg",
    type: "Residential",
  },
  {
    id: "4",
    name: "Highway Bridge Extension",
    description: "Extension of existing bridge to accommodate increased traffic flow",
    location: "Highway 101",
    status: "completed",
    progress: 100,
    budget: { spent: 6800000, total: 7000000 },
    startDate: "2023-01-10",
    endDate: "2023-11-20",
    team: 10,
    image: "/placeholder-project4.jpg",
    type: "Infrastructure",
  },
];

const statusConfig = {
  planning: { label: "Planning", color: "bg-blue-100 text-blue-800" },
  "in-progress": { label: "In Progress", color: "bg-green-100 text-green-800" },
  review: { label: "Under Review", color: "bg-yellow-100 text-yellow-800" },
  completed: { label: "Completed", color: "bg-purple-100 text-purple-800" },
  "on-hold": { label: "On Hold", color: "bg-red-100 text-red-800" },
};

const typeConfig = {
  Commercial: { color: "bg-blue-50 text-blue-700 border-blue-200" },
  Infrastructure: { color: "bg-green-50 text-green-700 border-green-200" },
  Residential: { color: "bg-purple-50 text-purple-700 border-purple-200" },
};

const Projects = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <CMSLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground">Projects</h1>
            <p className="text-muted-foreground">Manage your engineering projects and track progress</p>
          </div>
          <Button className="engineering-hover">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="engineering-panel engineering-hover group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant="outline" 
                        className={typeConfig[project.type as keyof typeof typeConfig]?.color}
                      >
                        {project.type}
                      </Badge>
                      <Badge className={statusConfig[project.status as keyof typeof statusConfig]?.color}>
                        {statusConfig[project.status as keyof typeof statusConfig]?.label}
                      </Badge>
                    </div>
                    <CardTitle className="font-heading text-lg leading-tight">
                      {project.name}
                    </CardTitle>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Project
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Project Image Placeholder */}
                <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg blueprint-pattern flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary/50" />
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                {/* Location */}
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-semibold text-primary">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <DollarSign className="h-3 w-3" />
                      <span>Budget</span>
                    </div>
                    <p className="text-sm font-semibold">
                      {formatCurrency(project.budget.spent)} / {formatCurrency(project.budget.total)}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>Team</span>
                    </div>
                    <p className="text-sm font-semibold">{project.team} members</p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="pt-2 border-t border-border">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(project.startDate)}</span>
                    </div>
                    <span>→</span>
                    <span>{formatDate(project.endDate)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </CMSLayout>
  );
};

export default Projects;