import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  reverse?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  reverse = false,
}: ProjectCardProps) => {
  return (
    <div className={cn(
      "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12",
      reverse ? "lg:grid-flow-dense" : ""
    )}>
      <div className={cn(
        "animate-slide-up",
        reverse ? "lg:col-start-2" : ""
      )}>
        <h3 className="text-2xl font-bold text-ahmed-primary mb-4 transition-all duration-300 hover:text-ahmed-accent">{title}</h3>
        <p className="text-ahmed-secondary mb-6 transition-transform duration-300 hover:translate-x-1">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-ahmed-light px-3 py-1 rounded-full text-sm font-medium text-ahmed-secondary transition-all duration-300 hover:bg-ahmed-accent hover:text-white transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4">
          {liveUrl && (
            <Button 
              className="bg-ahmed-accent hover:bg-ahmed-primary text-white transition-transform duration-300 hover:translate-y-[-3px] hover:shadow-lg"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink size={16} className="animate-pulse" />
                Live Demo
              </a>
            </Button>
          )}
          
          {githubUrl && (
            <Button 
              variant="outline" 
              className="border-ahmed-accent text-ahmed-accent hover:bg-ahmed-accent hover:text-white transition-transform duration-300 hover:translate-y-[-3px] hover:shadow-lg"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={16} className="transition-transform duration-500 hover:rotate-12" />
                Source Code
              </a>
            </Button>
          )}
        </div>
      </div>
      
      <div className={cn(
        "animate-slide-up",
        reverse ? "lg:col-start-1" : ""
      )}>
        <div className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl">
          <div className="absolute inset-0 bg-ahmed-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <img 
            src={image} 
            alt={title}
            className="w-full h-auto transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
