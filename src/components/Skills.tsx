import { useState } from "react";
import { Card } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch,
  Palette,
  Zap,
  Cloud,
  Shield
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  category: "frontend" | "backend" | "tools" | "other";
}

const skills: Skill[] = [
  {
    name: "JavaScript",
    icon: Code,
    description: "Modern ES6+ features, async programming, and advanced patterns",
    category: "frontend"
  },
  {
    name: "React",
    icon: Globe,
    description: "Hooks, Context API, state management, and component architecture",
    category: "frontend"
  },
  {
    name: "Next.js",
    icon: Zap,
    description: "SSR/SSG, API routes, performance optimization, and deployment",
    category: "frontend"
  },
  {
    name: "TypeScript",
    icon: Code,
    description: "Type safety, interfaces, generics, and advanced type patterns",
    category: "frontend"
  },
  {
    name: "Node.js",
    icon: Server,
    description: "RESTful APIs, Express.js, middleware, and server-side logic",
    category: "backend"
  },
  {
    name: "MongoDB",
    icon: Database,
    description: "NoSQL database design, aggregation pipelines, and optimization",
    category: "backend"
  },
  {
    name: "Tailwind CSS",
    icon: Palette,
    description: "Utility-first styling, responsive design, and component systems",
    category: "frontend"
  },
  {
    name: "Git",
    icon: GitBranch,
    description: "Version control, branching strategies, and collaborative workflows",
    category: "tools"
  },
  {
    name: "AWS",
    icon: Cloud,
    description: "Cloud deployment, serverless functions, and infrastructure",
    category: "other"
  },
  {
    name: "Security",
    icon: Shield,
    description: "Authentication, authorization, data protection, and best practices",
    category: "other"
  }
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <Card
                key={skill.name}
                className="relative p-6 glass hover-lift cursor-pointer group"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-sm">{skill.name}</h3>
                </div>
                
                {/* Tooltip */}
                {hoveredSkill === skill.name && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 bg-card border border-border rounded-lg shadow-lg w-64 z-10 animate-scale-in">
                    <p className="text-sm text-card-foreground">{skill.description}</p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;