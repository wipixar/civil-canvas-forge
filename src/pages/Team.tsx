import { CMSLayout } from "@/components/cms/CMSLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Plus, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Award,
  Building2,
  HardHat,
  Briefcase
} from "lucide-react";

const teamMembers = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Senior Structural Engineer",
    department: "Engineering",
    email: "sarah.chen@engineering.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    joinDate: "2019-03-15",
    avatar: "/placeholder-avatar-1.jpg",
    status: "active",
    projects: ["Skybridge Tower", "Metro Station"],
    specializations: ["Structural Analysis", "Steel Construction", "Seismic Design"],
    certifications: ["PE License", "LEED AP"],
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "Project Manager",
    department: "Project Management",
    email: "michael.rodriguez@engineering.com",
    phone: "+1 (555) 234-5678",
    location: "Los Angeles, CA",
    joinDate: "2020-07-22",
    avatar: "/placeholder-avatar-2.jpg",
    status: "active",
    projects: ["Green Building Complex", "Highway Bridge"],
    specializations: ["Project Planning", "Risk Management", "Team Leadership"],
    certifications: ["PMP", "PRINCE2"],
  },
  {
    id: "3",
    name: "Emily Johnson",
    role: "Environmental Engineer",
    department: "Environmental",
    email: "emily.johnson@engineering.com",
    phone: "+1 (555) 345-6789",
    location: "Seattle, WA",
    joinDate: "2018-11-08",
    avatar: "/placeholder-avatar-3.jpg",
    status: "active",
    projects: ["Green Building Complex"],
    specializations: ["Sustainability", "LEED Consulting", "Environmental Impact"],
    certifications: ["LEED AP BD+C", "BREEAM Assessor"],
  },
  {
    id: "4",
    name: "David Kim",
    role: "Design Engineer",
    department: "Design",
    email: "david.kim@engineering.com",
    phone: "+1 (555) 456-7890",
    location: "San Francisco, CA",
    joinDate: "2021-02-14",
    avatar: "/placeholder-avatar-4.jpg",
    status: "active",
    projects: ["Skybridge Tower", "Metro Station"],
    specializations: ["CAD Design", "3D Modeling", "Parametric Design"],
    certifications: ["AutoCAD Professional", "Revit Architecture"],
  },
  {
    id: "5",
    name: "Lisa Wang",
    role: "Safety Coordinator",
    department: "Safety",
    email: "lisa.wang@engineering.com",
    phone: "+1 (555) 567-8901",
    location: "Chicago, IL",
    joinDate: "2020-09-30",
    avatar: "/placeholder-avatar-5.jpg",
    status: "active",
    projects: ["All Active Projects"],
    specializations: ["OSHA Compliance", "Risk Assessment", "Safety Training"],
    certifications: ["CSP", "OHST", "CHST"],
  },
];

const departmentColors = {
  Engineering: "bg-blue-100 text-blue-800",
  "Project Management": "bg-green-100 text-green-800",
  Environmental: "bg-emerald-100 text-emerald-800",
  Design: "bg-purple-100 text-purple-800",
  Safety: "bg-orange-100 text-orange-800",
};

const Team = () => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  };

  const getYearsOfService = (joinDate: string) => {
    const years = new Date().getFullYear() - new Date(joinDate).getFullYear();
    return years;
  };

  return (
    <CMSLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground">Team Management</h1>
            <p className="text-muted-foreground">Manage team members, roles, and project assignments</p>
          </div>
          <Button className="engineering-hover">
            <Plus className="w-4 h-4 mr-2" />
            Add Team Member
          </Button>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="engineering-panel">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold">{teamMembers.length}</p>
                  <p className="text-sm text-muted-foreground">Total Members</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="engineering-panel">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Building2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Departments</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="engineering-panel">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Active Projects</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="engineering-panel">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <HardHat className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold">18</p>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="engineering-panel engineering-hover group">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-2">
                    <div>
                      <h3 className="font-heading font-semibold text-lg">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                    
                    <Badge 
                      className={departmentColors[member.department as keyof typeof departmentColors]}
                    >
                      {member.department}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Contact Information */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {formatDate(member.joinDate)} • {getYearsOfService(member.joinDate)} years</span>
                  </div>
                </div>

                {/* Current Projects */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Current Projects</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.projects.map((project, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {project}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Specializations */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Specializations</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.specializations.map((spec, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground flex items-center space-x-1">
                    <Award className="h-4 w-4" />
                    <span>Certifications</span>
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {member.certifications.map((cert, index) => (
                      <Badge key={index} className="text-xs bg-accent/10 text-accent hover:bg-accent/20">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 engineering-hover">
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 engineering-hover">
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </CMSLayout>
  );
};

export default Team;