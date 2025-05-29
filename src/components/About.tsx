
import { 
  Code2, Monitor, Palette, CheckCircle 
} from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript/TypeScript", 
    "React.js", 
    "Node.js", 
    "UI/UX Design", 
    "HTML/CSS", 
    "Tailwind CSS",
    "Git/GitHub",
    "Responsive Design"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-ahmed-primary mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-ahmed-accent mx-auto mb-6"></div>
          <p className="text-ahmed-secondary max-w-2xl mx-auto">
            I'm a passionate developer with a strong eye for design and a commitment to creating elegant, efficient solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-ahmed-muted p-8 rounded-lg shadow-sm animate-slide-up">
            <div className="w-14 h-14 bg-ahmed-accent bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <Code2 className="text-ahmed-accent" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-ahmed-primary mb-4">
              Web Development
            </h3>
            <p className="text-ahmed-secondary">
              I craft clean, maintainable code that brings designs to life with smooth interactions and optimal performance.
            </p>
          </div>

          <div className="bg-ahmed-muted p-8 rounded-lg shadow-sm animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-14 h-14 bg-ahmed-accent bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <Palette className="text-ahmed-accent" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-ahmed-primary mb-4">
              UI/UX Design
            </h3>
            <p className="text-ahmed-secondary">
              I design intuitive interfaces that balance aesthetic appeal with functional user experiences.
            </p>
          </div>

          <div className="bg-ahmed-muted p-8 rounded-lg shadow-sm animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="w-14 h-14 bg-ahmed-accent bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <Monitor className="text-ahmed-accent" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-ahmed-primary mb-4">
              Responsive Design
            </h3>
            <p className="text-ahmed-secondary">
              I ensure websites look and function perfectly across all devices and screen sizes.
            </p>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-ahmed-primary mb-6">
              My Journey
            </h3>
            <p className="text-ahmed-secondary mb-4">
              With over 5 years of experience in web development, I've honed my skills working on diverse projects from e-commerce platforms to complex web applications.
            </p>
            <p className="text-ahmed-secondary mb-6">
              I believe in continuous learning and staying updated with the latest technologies and best practices in the industry to deliver cutting-edge solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 bg-ahmed-muted px-4 py-2 rounded-full"
                >
                  <CheckCircle className="text-ahmed-accent" size={16} />
                  <span className="text-sm font-medium text-ahmed-secondary">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-up lg:pl-12">
            <div className="relative">
              <div className="absolute inset-0 bg-ahmed-accent opacity-10 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-ahmed-primary opacity-10 rounded-lg transform -rotate-3"></div>
              <img 
                src="/placeholder.svg" 
                alt="About Ahmed" 
                className="relative z-10 rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
