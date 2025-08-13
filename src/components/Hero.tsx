import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Trophy } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="TDMU IT Club Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              <span className="block">TDMU</span>
              <span className="block bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
                IT CLUB
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium italic">
              "I code, therefore I am"
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Câu lạc bộ Công nghệ thông tin - Trường Đại học Thủ Dầu Một
            <br />
            Nơi kết nối đam mê công nghệ và phát triển tài năng lập trình
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Calendar className="w-8 h-8 text-accent-light mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">2014</div>
              <div className="text-white/80">Năm thành lập</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-accent-light mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-white/80">Thành viên</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Trophy className="w-8 h-8 text-accent-light mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-white/80">Giải thưởng</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Tham gia ngay
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;