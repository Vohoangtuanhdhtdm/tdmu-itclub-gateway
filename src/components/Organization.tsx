import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Crown, Users, PenTool, FileText, Megaphone } from "lucide-react";

const Organization = () => {
  const leadership = {
    chairman: {
      name: "ThS. Trần Văn Hữu",
      role: "Chủ nhiệm",
      icon: Crown,
      color: "primary"
    },
    viceChairmen: [
      {
        name: "Nguyễn Minh Thắng",
        role: "Phó chủ nhiệm",
        icon: Users,
        color: "accent"
      },
      {
        name: "Lê Tuấn Kiệt",
        role: "Phó chủ nhiệm",
        icon: Users,
        color: "accent"
      }
    ]
  };

  const departments = [
    {
      name: "Ban Thiết kế",
      icon: PenTool,
      color: "primary",
      members: [
        { name: "Võ Gia Huy", role: "Trưởng ban" }
      ],
      description: "Chịu trách nhiệm thiết kế poster, logo, tài liệu và các sản phẩm truyền thông của CLB"
    },
    {
      name: "Ban Văn bản - Kế hoạch",
      icon: FileText,
      color: "accent",
      members: [
        { name: "Hồ Tuấn Phước", role: "Trưởng ban" },
        { name: "Nguyễn Thị Thu Huyền", role: "Thành viên" },
        { name: "Nguyễn Văn Minh", role: "Thành viên" }
      ],
      description: "Lập kế hoạch hoạt động, soạn thảo văn bản và quản lý tài liệu của CLB"
    },
    {
      name: "Ban Truyền thông",
      icon: Megaphone,
      color: "primary",
      members: [
        { name: "Võ Hoàng Tuấn", role: "Trưởng ban" },
        { name: "Trần Phước Yên", role: "Thành viên" }
      ],
      description: "Quản lý fanpage, website và các kênh truyền thông của CLB"
    }
  ];

  return (
    <section id="organization" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cơ cấu tổ chức
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Đội ngũ lãnh đạo và các ban chuyên môn của TDMU IT CLUB, 
            cùng nhau xây dựng và phát triển câu lạc bộ.
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Ban lãnh đạo
          </h3>
          
          {/* Chairman */}
          <div className="flex justify-center mb-8">
            <Card className="bg-gradient-card border-border shadow-soft hover:shadow-accent transition-smooth max-w-md">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-10 h-10 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {leadership.chairman.name}
                </h4>
                <Badge variant="default" className="mb-4">
                  {leadership.chairman.role}
                </Badge>
                <p className="text-muted-foreground text-sm">
                  Giảng viên hướng dẫn và lãnh đạo tổng thể các hoạt động của câu lạc bộ
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Vice Chairmen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.viceChairmen.map((member, index) => (
              <Card key={index} className="bg-card border-border shadow-soft hover:shadow-accent transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {member.name}
                  </h4>
                  <Badge variant="secondary">
                    {member.role}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Các ban chuyên môn
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {departments.map((department, index) => (
              <Card key={index} className="bg-card border-border shadow-soft hover:shadow-accent transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${department.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-accent'}`}>
                      <department.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {department.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-6">
                    {department.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h5 className="font-medium text-foreground">Thành viên:</h5>
                    {department.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`} />
                          <AvatarFallback className="text-xs">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-medium text-foreground">{member.name}</div>
                          <div className="text-xs text-muted-foreground">{member.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Organization Structure Diagram */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Sơ đồ tổ chức
          </h3>
          <div className="bg-gradient-card rounded-xl p-8 border border-border">
            <div className="text-center">
              {/* Chairman */}
              <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold mb-8">
                Chủ nhiệm
              </div>
              
              {/* Vice Chairmen */}
              <div className="flex justify-center space-x-8 mb-8">
                <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg">
                  Phó chủ nhiệm
                </div>
                <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg">
                  Phó chủ nhiệm
                </div>
              </div>
              
              {/* Departments */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted text-muted-foreground px-4 py-2 rounded-lg">
                  Ban Thiết kế
                </div>
                <div className="bg-muted text-muted-foreground px-4 py-2 rounded-lg">
                  Ban Văn bản - Kế hoạch
                </div>
                <div className="bg-muted text-muted-foreground px-4 py-2 rounded-lg">
                  Ban Truyền thông
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;