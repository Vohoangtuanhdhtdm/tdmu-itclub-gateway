import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Trophy, Users, ArrowRight } from "lucide-react";
import trainingIllustration from "@/assets/training-illustration.jpg";
import competitionIllustration from "@/assets/competition-illustration.jpg";
import communityIllustration from "@/assets/community-illustration.jpg";

const Activities = () => {
  const activities = [
    {
      icon: BookOpen,
      title: "Học thuật",
      image: trainingIllustration,
      description: "Tổ chức các khóa training lập trình, giải thuật và các chương trình học tập chuyên sâu",
      features: [
        "Training lập trình căn bản và nâng cao",
        "Chương trình 'Mỗi ngày một giờ lập trình'",
        "Hành trình Chinh phục mùa thi",
        "Workshop về các công nghệ mới"
      ],
      color: "primary"
    },
    {
      icon: Trophy,
      title: "Cuộc thi & Thành tích",
      image: competitionIllustration,
      description: "Tham gia và tổ chức các cuộc thi lập trình uy tín như Olympic Tin học, ICPC",
      features: [
        "Olympic Tin học Sinh viên Việt Nam",
        "ICPC (International Collegiate Programming Contest)",
        "Hội thi Lập trình Sinh viên TDMU",
        "Xây dựng đội tuyển và hướng dẫn luyện tập"
      ],
      color: "accent"
    },
    {
      icon: Users,
      title: "Giao lưu & Kết nối",
      image: communityIllustration,
      description: "Tạo sân chơi giao lưu, kết nối cựu sinh viên, doanh nghiệp và giảng viên",
      features: [
        "Kết nối cựu sinh viên và doanh nghiệp",
        "Giao lưu với các câu lạc bộ IT khác",
        "Seminar và tọa đàm với chuyên gia",
        "Hoạt động team building và networking"
      ],
      color: "primary"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Các mảng hoạt động
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            TDMU IT CLUB hoạt động đa dạng qua nhiều mảng khác nhau, 
            từ học thuật đến thi đấu và kết nối cộng đồng.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card 
              key={index} 
              className="bg-card border-border shadow-soft hover:shadow-accent transition-smooth group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-${activity.color}/80 to-transparent`}></div>
                <div className={`absolute top-4 left-4 w-12 h-12 bg-${activity.color === 'primary' ? 'gradient-primary' : 'gradient-accent'} rounded-full flex items-center justify-center`}>
                  <activity.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {activity.title}
                </CardTitle>
                <p className="text-muted-foreground">
                  {activity.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 mb-6">
                  {activity.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-${activity.color} mt-2 flex-shrink-0`}></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={activity.color === 'primary' ? 'default' : 'accent'} 
                  className="w-full group"
                >
                  Tìm hiểu thêm
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regular Programs */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Chương trình định kỳ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-border shadow-soft">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  "Mỗi ngày một giờ lập trình"
                </h4>
                <p className="text-muted-foreground mb-4">
                  Chương trình học tập thường xuyên giúp sinh viên duy trì thói quen 
                  lập trình và nâng cao kỹ năng coding mỗi ngày.
                </p>
                <div className="flex items-center space-x-2 text-primary">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-medium">Hàng ngày | 19:00 - 20:00</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-soft">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  "Chinh phục mùa thi"
                </h4>
                <p className="text-muted-foreground mb-4">
                  Hành trình chuẩn bị cho các kỳ thi quan trọng, giúp sinh viên 
                  ôn luyện và đạt kết quả tốt nhất.
                </p>
                <div className="flex items-center space-x-2 text-accent">
                  <Trophy className="w-5 h-5" />
                  <span className="font-medium">Mùa thi | Theo lịch thi</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;