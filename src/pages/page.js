import Navbar from "./component/Navbar";
import About from "./component/About";
import Projects from "./component/Projects";
import HeroSection from './component/HeroSection';
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212] ">
      <Navbar />
      <section className="container py-4 px-12">
        <HeroSection />
        <About />
        <Projects />
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
