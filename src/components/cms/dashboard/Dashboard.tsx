import { ProjectProgressWidget } from "./ProjectProgressWidget";
import { QuickActionsWidget } from "./QuickActionsWidget";
import { ConstructionTimelineWidget } from "./ConstructionTimelineWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, FileText, Clock, Building2 } from "lucide-react";

// Mock data for demonstration
const mockProjects = [
  {
    id: "1",
    name: "Skybridge Tower",
    progress: 75,
    budget: { spent: 850, total: 1200 },
    timeline: { current: 180, total: 240 },
    team: 12,
    status: "in-progress" as const,
  },
  {
    id: "2",
    name: "Metro Station Renovation",
    progress: 45,
    budget: { spent: 320, total: 600 },
    timeline: { current: 90, total: 200 },
    team: 8,
    status: "in-progress" as const,
  },
  {
    id: "3",
    name: "Green Building Complex",
    progress: 90,
    budget: { spent: 1100, total: 1150 },
    timeline: { current: 280, total: 300 },
    team: 15,
    status: "review" as const,
  },
];

const statsCards = [
  {
    title: "Active Projects",
    value: "12",
    change: "+2 from last month",
    icon: Building2,
    color: "text-blue-500",
  },
  {
    title: "Content Published",
    value: "48",
    change: "+12% this month",
    icon: FileText,
    color: "text-green-500",
  },
  {
    title: "Team Members",
    value: "24",
    change: "+3 new hires",
    icon: Users,
    color: "text-purple-500",
  },
  {
    title: "Avg. Project Time",
    value: "186d",
    change: "-8% improvement",
    icon: Clock,
    color: "text-orange-500",
  },
];

export function Dashboard() {
  return (
    <div className="p-6 space-y-6 min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="font-heading text-3xl font-bold text-foreground">
          Engineering Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your projects today.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <Card key={index} className="engineering-panel engineering-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-heading font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-muted/50 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Project Progress */}
        <div className="lg:col-span-2">
          <ProjectProgressWidget projects={mockProjects} />
        </div>

        {/* Right Column - Timeline */}
        <div className="lg:col-span-1">
          <ConstructionTimelineWidget />
        </div>
      </div>

      {/* Bottom Section - Quick Actions */}
      <div className="grid grid-cols-1 gap-6">
        <QuickActionsWidget />
      </div>

      {/* Additional Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="engineering-panel">
          <CardHeader>
            <CardTitle className="font-heading flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>Project Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              <div className="text-center space-y-2">
                <TrendingUp className="h-12 w-12 mx-auto opacity-50" />
                <p>Interactive charts would be implemented here</p>
                <p className="text-sm">Integration with chart libraries like Chart.js or D3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="engineering-panel">
          <CardHeader>
            <CardTitle className="font-heading flex items-center space-x-2">
              <FileText className="h-5 w-5 text-accent" />
              <span>Recent Content</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Q4 Safety Report", type: "Report", date: "2 hours ago" },
                { title: "Bridge Inspection Update", type: "Article", date: "1 day ago" },
                { title: "Team Photo Gallery", type: "Media", date: "3 days ago" },
                { title: "Project Milestone Blog", type: "Blog Post", date: "1 week ago" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 engineering-hover">
                  <div>
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.type}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}