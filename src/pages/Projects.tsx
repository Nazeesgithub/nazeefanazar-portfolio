
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Health Monitoring App",
      description: "Mobile application for tracking health metrics and activity",
      technologies: ["React Native", "Firebase", "GraphQL"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "Tool that generates content using machine learning algorithms",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="section-container">
      <AnimatedSection>
        <h1 className="section-title">Projects</h1>
        <p className="text-xl mb-12">Explore some of my recent work and personal projects.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="card-3d overflow-hidden hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Projects;
