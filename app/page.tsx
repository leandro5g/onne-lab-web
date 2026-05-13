import Background from "@/components/Background";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Technologies from "@/components/Technologies";
import Differentials from "@/components/Differentials";
import Founder from "@/components/Founder";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Process />
        <Technologies />
        <Differentials />
        <Founder />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
