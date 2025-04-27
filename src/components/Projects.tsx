
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Striker",
      description: "A fully responsive e-commerce website with product filtering, cart functionality, and secure checkout process. Built with React and integrated with a headless CMS for content management.",
      image: "./Striker.png",
      tags: ["React", "Node.js", "MongoDB", "CSS"],
      liveUrl: "https://project-cs-309.vercel.app/",
      githubUrl: "https://github.com/Ahmedezz570/Striker-",
    },
    {
      title: "Date",
      description: " A minimal and responsive web application that displays the current time in real-time, updating every second. Built with a focus on clean design and smooth user experience. The app demonstrates dynamic rendering and state management to keep the displayed time accurate and continuously updating  .",
      image: "./Screenshot 2025-04-17 101054.png",
      tags: ["Html", "CSS", "JavaScript"],
      liveUrl: "./Screenshot 2025-04-17 101054.png",
      githubUrl: "https://github.com/Ahmedezz570/Date",
    },
    // {
    //   title: "Task Management App",
    //   description: "A full-stack task management application with user authentication, task creation, editing, and categorization features. Includes drag-and-drop functionality and data visualization.",
    //   image: "/placeholder.svg",
    //   tags: ["React", "Express", "PostgreSQL", "Redux"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    // },
  ];

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
          {projects.map((project, index) => (
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
