import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Về chúng tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            TDMU IT CLUB được thành lập từ ngày 07/11/2014, là nơi hội tụ những sinh viên 
            đam mê công nghệ thông tin và lập trình tại Trường Đại học Thủ Dầu Một.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mission */}
          <Card className="bg-card border-border shadow-soft hover:shadow-accent transition-smooth group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-bounce">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Sứ mệnh</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tạo môi trường kết nối, giao lưu, học hỏi giữa các sinh viên yêu thích 
                lập trình và công nghệ thông tin, góp phần xây dựng cộng đồng IT mạnh mẽ.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="bg-card border-border shadow-soft hover:shadow-accent transition-smooth group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-bounce">
                <Lightbulb className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Tầm nhìn</h3>
              <p className="text-muted-foreground leading-relaxed">
                Trở thành câu lạc bộ công nghệ hàng đầu trong khu vực, nuôi dưỡng 
                thế hệ lập trình viên tài năng và đóng góp tích cực cho sự phát triển của ngành IT.
              </p>
            </CardContent>
          </Card>

          {/* Goals */}
          <Card className="bg-card border-border shadow-soft hover:shadow-accent transition-smooth group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-bounce">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Mục tiêu</h3>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>• Chia sẻ kiến thức lập trình và tổ chức các hoạt động hỗ trợ sinh viên</p>
                <p>• Tăng cường kiến thức chuyên ngành qua training và workshop</p>
                <p>• Hỗ trợ sinh viên tham gia các cuộc thi lập trình cấp trường và quốc gia</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Hành trình phát triển
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary"></div>
            <div className="space-y-12">
              <div className="flex items-center justify-center">
                <div className="bg-card rounded-lg p-6 shadow-soft max-w-md border border-border">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">2014</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Thành lập CLB</h4>
                      <p className="text-muted-foreground text-sm">07/11/2014 - Ngày ra đời của TDMU IT CLUB</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-card rounded-lg p-6 shadow-soft max-w-md border border-border">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-accent-foreground font-bold">2022</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Giải nhất TDMU</h4>
                      <p className="text-muted-foreground text-sm">Đạt giải nhất Hội thi Lập trình Sinh viên TDMU</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-card rounded-lg p-6 shadow-soft max-w-md border border-border">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">2024</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phát triển mạnh mẽ</h4>
                      <p className="text-muted-foreground text-sm">Mở rộng hoạt động và đạt nhiều thành tích nổi bật</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;