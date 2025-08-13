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
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* 2014 */}
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-primary">2014</div>
                  <div className="text-sm text-muted-foreground">07/11</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-soft"></div>
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-border"></div>
                </div>
                <Card className="flex-1 bg-gradient-card border-border shadow-soft hover:shadow-accent transition-smooth">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Thành lập CLB</h4>
                    <p className="text-muted-foreground">
                      Ngày ra đời của TDMU IT CLUB - khởi đầu cho hành trình kết nối đam mê công nghệ của sinh viên TDMU
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* 2018 */}
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-accent">2018</div>
                  <div className="text-sm text-muted-foreground">Phát triển</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-soft"></div>
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-border"></div>
                </div>
                <Card className="flex-1 bg-gradient-card border-border shadow-soft hover:shadow-accent transition-smooth">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Mở rộng hoạt động</h4>
                    <p className="text-muted-foreground">
                      Phát triển các chương trình đào tạo chuyên sâu và tham gia nhiều cuộc thi lập trình
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* 2022 */}
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-primary">2022</div>
                  <div className="text-sm text-muted-foreground">Thành tích</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-soft"></div>
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-border"></div>
                </div>
                <Card className="flex-1 bg-gradient-card border-border shadow-soft hover:shadow-accent transition-smooth">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Giải nhất TDMU</h4>
                    <p className="text-muted-foreground">
                      Đạt giải nhất Hội thi Lập trình Sinh viên TDMU - khẳng định vị thế dẫn đầu
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* 2023 */}
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-accent">2023</div>
                  <div className="text-sm text-muted-foreground">Vươn xa</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-soft"></div>
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-border"></div>
                </div>
                <Card className="flex-1 bg-gradient-card border-border shadow-soft hover:shadow-accent transition-smooth">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Olympic & ICPC</h4>
                    <p className="text-muted-foreground">
                      Thành tích cao tại Olympic Tin học SV Việt Nam và tham gia ICPC Asia Regional
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* 2024 */}
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-primary">2024</div>
                  <div className="text-sm text-muted-foreground">Hiện tại</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-gradient-primary rounded-full border-4 border-background shadow-glow animate-pulse"></div>
                </div>
                <Card className="flex-1 bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-xl transition-smooth">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">Phát triển mạnh mẽ</h4>
                    <p className="opacity-90">
                      Mở rộng hoạt động, tăng cường kết nối cộng đồng và đạt nhiều thành tích nổi bật
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;