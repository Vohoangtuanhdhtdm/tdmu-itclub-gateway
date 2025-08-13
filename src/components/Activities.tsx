import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Trophy,
  Users,
  ArrowRight,
  Clock,
  Calendar,
} from "lucide-react";
import trainingIllustration from "@/assets/training-illustration.jpg";
import competitionIllustration from "@/assets/competition-illustration.jpg";
import communityIllustration from "@/assets/community-illustration.jpg";

const Activities = () => {
  const activities = [
    {
      icon: BookOpen,
      title: "Học thuật",
      image: trainingIllustration,
      description:
        "Tổ chức các khóa training lập trình, giải thuật và các chương trình học tập chuyên sâu",
      features: [
        "Training lập trình căn bản và nâng cao",
        "Chương trình 'Mỗi ngày một giờ lập trình'",
        "Hành trình Chinh phục mùa thi",
        "Workshop về các công nghệ mới",
      ],
      gradient: "from-primary to-primary-variant",
      glowColor: "primary",
    },
    {
      icon: Trophy,
      title: "Cuộc thi & Thành tích",
      image: competitionIllustration,
      description:
        "Tham gia và tổ chức các cuộc thi lập trình uy tín như Olympic Tin học, ICPC",
      features: [
        "Olympic Tin học Sinh viên Việt Nam",
        "ICPC (International Collegiate Programming Contest)",
        "Hội thi Lập trình Sinh viên TDMU",
        "Xây dựng đội tuyển và hướng dẫn luyện tập",
      ],
      gradient: "from-accent to-accent-variant",
      glowColor: "accent",
    },
    {
      icon: Users,
      title: "Giao lưu & Kết nối",
      image: communityIllustration,
      description:
        "Tạo sân chơi giao lưu, kết nối cựu sinh viên, doanh nghiệp và giảng viên",
      features: [
        "Kết nối cựu sinh viên và doanh nghiệp",
        "Giao lưu với các câu lạc bộ IT khác",
        "Seminar và tọa đàm với chuyên gia",
        "Hoạt động team building và networking",
      ],
      gradient: "from-primary to-secondary-variant",
      glowColor: "secondary",
    },
  ];

  return (
    <section id="activities" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Các mảng hoạt động
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            TDMU IT CLUB hoạt động đa dạng qua nhiều mảng khác nhau, từ học
            thuật đến thi đấu và kết nối cộng đồng.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <div className="relative">
                {/* Image Header with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent`}
                  ></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} opacity-30`}
                  ></div>

                  {/* Floating Icon */}
                  <div
                    className={`absolute top-6 left-6 w-14 h-14 bg-gradient-to-br ${activity.gradient} rounded-2xl flex items-center justify-center shadow-glow backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <activity.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                      {activity.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {activity.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {activity.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3 group/item"
                      >
                        <div
                          className={`w-6 h-6 rounded-lg bg-gradient-to-br ${activity.gradient} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200`}
                        >
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <span className="text-sm text-foreground/80 leading-relaxed group-hover/item:text-foreground transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${activity.gradient} hover:opacity-90 text-white border-0 shadow-glow hover:shadow-glow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    <span className="font-medium leading-none">
                      Xem chi tiết tại Fanpage CLBIT
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Regular Programs */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Chương trình định kỳ
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Các hoạt động thường xuyên giúp sinh viên phát triển kỹ năng và
              chuẩn bị cho tương lai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-variant opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

              <CardContent className="p-8 relative">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-variant rounded-xl flex items-center justify-center shadow-soft">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      "Mỗi ngày một giờ lập trình"
                    </h4>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Chương trình học tập thường xuyên giúp sinh viên duy trì thói
                  quen lập trình và nâng cao kỹ năng coding mỗi ngày.
                </p>

                <div className="flex items-center justify-between p-4 bg-gradient-subtle rounded-xl border border-border/50">
                  <div className="flex items-center space-x-3 text-primary">
                    <BookOpen className="w-5 h-5" />
                    <span className="font-semibold">Hàng ngày</span>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    19:00 - 20:00
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-variant opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

              <CardContent className="p-8 relative">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-variant rounded-xl flex items-center justify-center shadow-soft">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      "Chinh phục mùa thi"
                    </h4>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Hành trình chuẩn bị cho các kỳ thi quan trọng, giúp sinh viên
                  ôn luyện và đạt kết quả tốt nhất.
                </p>

                <div className="flex items-center justify-between p-4 bg-gradient-subtle rounded-xl border border-border/50">
                  <div className="flex items-center space-x-3 text-accent">
                    <Trophy className="w-5 h-5" />
                    <span className="font-semibold">Mùa thi</span>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    Theo lịch thi
                  </div>
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
