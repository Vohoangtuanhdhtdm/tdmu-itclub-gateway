import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Medal } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Giải nhất Hội thi Lập trình Sinh viên TDMU",
      year: "2022 & 2023",
      description: "Đạt thành tích cao nhất trong cuộc thi lập trình cấp trường liên tiếp 2 năm",
      type: "Cuộc thi cấp trường",
      color: "primary"
    },
    {
      icon: Award,
      title: "Olympic Tin học SV Việt Nam",
      year: "2023",
      description: "Thành tích xuất sắc trong cuộc thi lập trình lớn nhất dành cho sinh viên Việt Nam",
      type: "Cuộc thi cấp quốc gia",
      color: "accent"
    },
    {
      icon: Medal,
      title: "ICPC Asia Regional",
      year: "2023",
      description: "Tham gia thành công cuộc thi lập trình quốc tế uy tín nhất thế giới",
      type: "Cuộc thi quốc tế",
      color: "primary"
    },
    {
      icon: Star,
      title: "Thành tích xuất sắc công tác Đoàn",
      year: "2023-2024",
      description: "Đạt thành tích xuất sắc trong công tác Đoàn, phong trào Thanh niên",
      type: "Hoạt động xã hội",
      color: "accent"
    }
  ];

  const stats = [
    { number: "10+", label: "Giải thưởng lớn", icon: Trophy },
    { number: "500+", label: "Thành viên", icon: Star },
    { number: "50+", label: "Sự kiện tổ chức", icon: Award },
    { number: "15+", label: "Đối tác", icon: Medal }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Thành tích nổi bật
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Những thành tích đáng tự hào mà TDMU IT CLUB đã đạt được qua các năm hoạt động,
            khẳng định vị thế và chất lượng của câu lạc bộ.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border shadow-soft hover:shadow-accent transition-smooth group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-card border-border shadow-soft hover:shadow-accent transition-smooth group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-bounce ${achievement.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-accent'}`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant={achievement.color === 'primary' ? 'default' : 'secondary'} className="text-xs">
                        {achievement.type}
                      </Badge>
                      <span className="text-sm font-medium text-primary">{achievement.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notable Events */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Sự kiện tiêu biểu
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border shadow-soft hover:shadow-accent transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Hội thi Lập trình Sinh viên TDMU
                </h4>
                <p className="text-muted-foreground text-sm">
                  Sự kiện lập trình lớn nhất của trường, thu hút hàng trăm sinh viên tham gia
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-soft hover:shadow-accent transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Mỗi ngày một giờ lập trình
                </h4>
                <p className="text-muted-foreground text-sm">
                  Chương trình đào tạo thường xuyên giúp sinh viên rèn luyện kỹ năng
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-soft hover:shadow-accent transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Hành trình Chinh phục mùa thi
                </h4>
                <p className="text-muted-foreground text-sm">
                  Chương trình ôn luyện chuyên sâu cho các kỳ thi quan trọng
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;