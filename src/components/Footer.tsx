import { Facebook, Youtube, Mail, Code2, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Trang chủ", href: "#home" },
    { name: "Giới thiệu", href: "#about" },
    { name: "Hoạt động", href: "#activities" },
    { name: "Thành tích", href: "#achievements" },
    { name: "Cơ cấu tổ chức", href: "#organization" },
    { name: "Liên hệ", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/tdmuitclub",
      label: "Facebook",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@tdmuitclub",
      label: "YouTube",
    },
    { icon: Mail, href: "mailto:clbit@tdmu.edu.vn", label: "Email" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center">
                <img
                  src="/clbITLogo.jpg"
                  alt=""
                  className="w-8 h-8 rounded-xl text-accent-foreground"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">TDMU IT CLUB</h3>
                <p className="text-primary-foreground/80 italic">
                  I code, therefore I am
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Câu lạc bộ Công nghệ thông tin - Trường Đại học Thủ Dầu Một. Nơi
              kết nối đam mê công nghệ và phát triển tài năng lập trình từ năm
              2014.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-smooth hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liên kết nhanh</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liên hệ</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div>
                <div className="font-medium">Email</div>
                <a
                  href="mailto:clbit@tdmu.edu.vn"
                  className="hover:text-accent transition-smooth"
                >
                  clbit@tdmu.edu.vn
                </a>
              </div>
              <div>
                <div className="font-medium">Địa chỉ</div>
                <div className="text-sm">
                  Trường Đại học Thủ Dầu Một
                  <br />
                  Số 6, Trần Văn Ơn <br />
                  Thủ Dầu Một, Bình Dương
                </div>
              </div>
              <div>
                <div className="font-medium">Thành lập</div>
                <div className="text-sm">07/11/2014</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} TDMU IT CLUB. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-primary-foreground/80 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent fill-current" />
              <span>by TDMU IT CLUB</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
