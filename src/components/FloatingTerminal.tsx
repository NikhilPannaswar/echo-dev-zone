import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Terminal, X, Minimize2 } from "lucide-react";

const FloatingTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  
  const quotes = [
    "// Code is poetry written in logic",
    "console.log('Building the future...');",
    "if (coffee === null) { productivity = 0; }",
    "// First, solve the problem. Then, write the code.",
    "git commit -m 'Another day, another bug fix'",
    "const success = hardWork + persistence;",
    "// Clean code always looks like it was written by someone who cares",
    "npm install happiness@latest",
    "// The best error message is the one that never shows up",
    "while (alive) { learn(); code(); sleep(); repeat(); }"
  ];

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isOpen, quotes.length]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80 glass border-primary/20 animate-scale-in">
          {/* Terminal Header */}
          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-t-lg border-b border-border">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono">~/dev/inspiration</span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                size="sm"
                variant="ghost"
                className="w-6 h-6 p-0"
                onClick={() => setIsOpen(false)}
              >
                <Minimize2 className="w-3 h-3" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="w-6 h-6 p-0"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-4 bg-background/50 rounded-b-lg">
            <div className="font-mono text-sm space-y-2">
              <div className="text-primary">$ cat inspiration.js</div>
              <div className="text-muted-foreground animate-fade-in-up">
                {quotes[currentQuoteIndex]}
              </div>
              <div className="flex items-center gap-1 mt-3">
                <span className="text-primary">$</span>
                <span className="w-2 h-4 bg-primary animate-pulse ml-1"></span>
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 rounded-full bg-gradient-primary hover:glow-primary p-0 animate-float"
          aria-label="Open terminal"
        >
          <Terminal className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};

export default FloatingTerminal;