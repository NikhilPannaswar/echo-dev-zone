import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingTerminal from "@/components/FloatingTerminal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      <FloatingTerminal />
    </div>
  );
};

export default Index;
