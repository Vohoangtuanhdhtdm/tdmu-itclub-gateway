import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Youtube, Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "clbit@tdmu.edu.vn",
      href: "mailto:clbit@tdmu.edu.vn"
    },
    {
      icon: MapPin,
      title: "Địa chỉ",
      value: "Trường Đại học Thủ Dầu Một, Bình Dương",
      href: "#"
    },
    {
      icon: Phone,
      title: "Điện thoại",
      value: "0274 3721 875",
      href: "tel:027437211875"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      handle: "TDMU IT CLUB",
      url: "https://facebook.com/tdmuitclub",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "Câu Lạc Bộ IT TDMU",
      url: "https://youtube.com/@tdmuitclub",
      color: "bg-red-600 hover:bg-red-700"
    },
    {
      icon: Mail,
      name: "Email",
      handle: "clbit@tdmu.edu.vn",
      url: "mailto:clbit@tdmu.edu.vn",
      color: "bg-gray-600 hover:bg-gray-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hãy kết nối với TDMU IT CLUB để tham gia cộng đồng lập trình viên năng động 
            và cùng nhau phát triển đam mê công nghệ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Gửi tin nhắn cho chúng tôi
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Họ và tên
                    </label>
                    <Input placeholder="Nhập họ và tên của bạn" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tiêu đề
                  </label>
                  <Input placeholder="Tiêu đề tin nhắn" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nội dung
                  </label>
                  <Textarea 
                    placeholder="Nội dung tin nhắn của bạn..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button variant="hero" className="w-full group">
                  <Send className="w-4 h-4 mr-2" />
                  Gửi tin nhắn
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-card border-border shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Thông tin liên hệ
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{info.title}</h4>
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-card border-border shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Kênh thông tin
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-smooth group"
                    >
                      <div className={`w-12 h-12 ${link.color} rounded-full flex items-center justify-center transition-smooth`}>
                        <link.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-smooth">
                          {link.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{link.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-glow">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">
                  Tham gia cộng đồng của chúng tôi!
                </h3>
                <p className="mb-6 opacity-90">
                  Hơn 500 thành viên đang cùng nhau học hỏi và phát triển
                </p>
                <Button variant="accent" className="group">
                  Tham gia ngay
                  <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="bg-card border-border shadow-soft overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-muted h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Trường Đại học Thủ Dầu Một
                  </h4>
                  <p className="text-muted-foreground">
                    6 Đại lộ Bình Dương, Hiệp Hòa, Thủ Dầu Một, Bình Dương
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;