import { Github, Linkedin, Twitter, Mail, Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/alexthompson", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/alexthompson", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/alexdev", label: "Twitter" },
    { icon: Mail, href: "mailto:alex@example.com", label: "Email" }
  ];

  return (
    <footer className="bg-gradient-to-t from-muted/30 to-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="p-2 rounded-full bg-gradient-primary">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl gradient-text">Alex Thompson</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Fullstack Developer crafting digital experiences
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted/50 hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:glow-primary group"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> and code
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              © {currentYear} Alex Thompson. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Bottom border */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;