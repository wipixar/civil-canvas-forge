import { CMSLayout } from "@/components/cms/CMSLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Plus, 
  Search, 
  Calendar, 
  User, 
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  Filter
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const contentItems = [
  {
    id: "1",
    title: "Q4 2023 Safety Standards Report",
    excerpt: "Comprehensive analysis of safety protocols and compliance measures across all active construction sites...",
    author: "Sarah Chen",
    date: "2024-01-15",
    status: "published",
    type: "report",
    views: 245,
    category: "Safety",
  },
  {
    id: "2",
    title: "Sustainable Building Materials Guide",
    excerpt: "Complete guide to eco-friendly construction materials and their applications in modern engineering...",
    author: "Michael Rodriguez",
    date: "2024-01-12",
    status: "draft",
    type: "article",
    views: 0,
    category: "Sustainability",
  },
  {
    id: "3",
    title: "Bridge Inspection Methodology Update",
    excerpt: "Updated procedures for structural integrity assessments following new industry standards...",
    author: "Emily Johnson",
    date: "2024-01-10",
    status: "review",
    type: "case-study",
    views: 156,
    category: "Infrastructure",
  },
  {
    id: "4",
    title: "Team Spotlight: Innovation in Design",
    excerpt: "Featuring our design team's latest breakthrough in parametric architecture and computational design...",
    author: "David Kim",
    date: "2024-01-08",
    status: "published",
    type: "blog",
    views: 312,
    category: "Team",
  },
  {
    id: "5",
    title: "Construction Timeline Best Practices",
    excerpt: "Essential strategies for project scheduling and milestone management in large-scale construction...",
    author: "Lisa Wang",
    date: "2024-01-05",
    status: "scheduled",
    type: "article",
    views: 0,
    category: "Project Management",
  },
];

const statusConfig = {
  published: { label: "Published", color: "bg-green-100 text-green-800" },
  draft: { label: "Draft", color: "bg-gray-100 text-gray-800" },
  review: { label: "Under Review", color: "bg-yellow-100 text-yellow-800" },
  scheduled: { label: "Scheduled", color: "bg-blue-100 text-blue-800" },
  archived: { label: "Archived", color: "bg-red-100 text-red-800" },
};

const typeConfig = {
  article: { label: "Article", icon: FileText },
  blog: { label: "Blog Post", icon: FileText },
  report: { label: "Report", icon: FileText },
  "case-study": { label: "Case Study", icon: FileText },
  guide: { label: "Guide", icon: FileText },
};

const Content = () => {
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
            <h1 className="font-heading text-3xl font-bold text-foreground">Content Management</h1>
            <p className="text-muted-foreground">Create, edit, and manage your engineering content</p>
          </div>
          <Button className="engineering-hover">
            <Plus className="w-4 h-4 mr-2" />
            New Content
          </Button>
        </div>

        {/* Filters and Search */}
        <Card className="engineering-panel">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search content by title, author, or category..."
                  className="pl-10"
                />
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="engineering-hover">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="engineering-hover">
                  Sort by Date
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content List */}
        <div className="space-y-4">
          {contentItems.map((item) => (
            <Card key={item.id} className="engineering-panel engineering-hover group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-3">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant="outline" 
                            className="text-xs"
                          >
                            {typeConfig[item.type as keyof typeof typeConfig]?.label}
                          </Badge>
                          <Badge className={statusConfig[item.status as keyof typeof statusConfig]?.color}>
                            {statusConfig[item.status as keyof typeof statusConfig]?.label}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {item.category}
                          </Badge>
                        </div>
                        <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
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
                            Preview
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {item.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{item.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(item.date)}</span>
                        </div>
                        {item.status === 'published' && (
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span>{item.views} views</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs engineering-hover">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs engineering-hover">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center pt-6">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="default" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </CMSLayout>
  );
};

export default Content;