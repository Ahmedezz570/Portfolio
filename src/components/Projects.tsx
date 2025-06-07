
import ProjectCard from "./ProjectCard";
import React , {useState , useEffect} from "react";
const Projects = () => {
  // const projects = [
  //   {
  //     title: "Striker",
  //     description: "A fully responsive e-commerce website with product filtering, cart functionality, and secure checkout process. Built with React and integrated with a headless CMS for content management.",
  //     image: "./Striker.png",
  //     tags: ["React", "Node.js", "MongoDB", "CSS"],
  //     liveUrl: "https://project-cs-309.vercel.app/",
  //     githubUrl: "https://github.com/Ahmedezz570/Striker-",
  //   },
  //   {
  //     title: "SST-LabRent",
  //     description: " SST is a full-stack web application designed to manage and facilitate the rental process of laboratory tools for the Air Department - Faculty of Engineering.",
  //     image: "SST.png",
  //     tags: ["React", "Node.js", "MongoDB", "tailwind"],
  //     liveUrl: "notFound",
  //     githubUrl: "https://github.com/Ahmedezz570/SST-Rent",
  //   },
    // {
    //   title: "Task Management App",
    //   description: "A full-stack task management application with user authentication, task creation, editing, and categorization features. Includes drag-and-drop functionality and data visualization.",
    //   image: "/placeholder.svg",
    //   tags: ["React", "Express", "PostgreSQL", "Redux"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    // },
  //];
const [projects , setprojects] = useState([]);
useEffect(() => {
  const fetchProjects = async () => {
    try {
      const response = await fetch("https://backend-production-9111.up.railway.app/projects");
      const data = await response.json();
      // const filteredProjects = data.filter(repo => repo.topics.includes("project"));
      setprojects(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }
  fetchProjects();
}, []);
  return (
    <section id="projects" className="py-20 bg-ahmed-muted">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-ahmed-primary mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-ahmed-accent mx-auto mb-6"></div>
          <p className="text-ahmed-secondary max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems and deliver outstanding user experiences.
          </p>
        </div>

        <div className="space-y-16">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
