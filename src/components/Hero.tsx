
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-ahmed-muted to-white"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ahmed-primary mb-6">
              Hello, I'm <span className="text-ahmed-accent">Ahmed Ezz Aldin</span>
            </h1>
            <p className="text-lg md:text-xl text-ahmed-secondary mb-8 max-w-lg">
              Creative developer and designer passionate about building beautiful, functional digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-ahmed-accent hover:bg-ahmed-primary text-white"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button 
                variant="outline" 
                className="border-ahmed-accent text-ahmed-accent hover:bg-ahmed-accent hover:text-white"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              {/* <div className="w-64 h-64 md:w-80 md:h-80 bg-ahmed-accent rounded-full absolute -top-6 -right-6 opacity-20" /> */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-ahmed-primary rounded-full absolute -bottom-6 -left-6 opacity-10" />
              <img 
                src="./photo.jpg"  
                alt="not found" 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover relative z-10 border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center animate-bounce">
          <a 
            href="#about" 
            className="text-ahmed-secondary hover:text-ahmed-accent transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
