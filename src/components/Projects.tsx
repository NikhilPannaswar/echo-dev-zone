import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with React, Node.js, and MongoDB.",
    image: "/placeholder.svg",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/user/ecommerce",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced filtering options.",
    image: "/placeholder.svg",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/user/taskmanager"
  },
  {
    title: "AI Chat Assistant",
    description: "An intelligent chatbot with natural language processing, context awareness, and integration with multiple AI models.",
    image: "/placeholder.svg",
    techStack: ["React", "Python", "FastAPI", "OpenAI", "Redis"],
    liveUrl: "https://ai-chat-demo.com",
    githubUrl: "https://github.com/user/ai-chat"
  },
  {
    title: "Analytics Dashboard",
    description: "A comprehensive analytics platform with real-time data visualization, custom reports, and performance metrics.",
    image: "/placeholder.svg",
    techStack: ["Vue.js", "D3.js", "Node.js", "InfluxDB", "Chart.js"],
    liveUrl: "https://analytics-demo.com",
    githubUrl: "https://github.com/user/analytics"
  },
  {
    title: "Social Media API",
    description: "A RESTful API for social media applications with authentication, file uploads, and real-time notifications.",
    image: "/placeholder.svg",
    techStack: ["Express.js", "MongoDB", "JWT", "Cloudinary", "WebSockets"],
    githubUrl: "https://github.com/user/social-api"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.",
    image: "/placeholder.svg",
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    liveUrl: "https://portfolio-demo.com",
    githubUrl: "https://github.com/user/portfolio"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects, demonstrating various technologies and problem-solving approaches
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group hover-lift glass ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button size="sm" variant="gradient">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="bg-background/80">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  {project.featured && (
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="gradient-outline" size="lg">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;