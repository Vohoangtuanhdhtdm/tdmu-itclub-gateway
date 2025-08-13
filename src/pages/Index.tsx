import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Achievements from "@/components/Achievements";
import Organization from "@/components/Organization";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Achievements />
        <Organization />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
