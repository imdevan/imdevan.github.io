import { Github, Linkedin, Briefcase, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const links = [
    {
      title: "Portfolio",
      description: "View my work and projects",
      icon: Briefcase,
      url: "#",
      gradient: "from-primary to-primary/80",
    },
    {
      title: "GitHub",
      description: "Check out my code",
      icon: Github,
      url: "#",
      gradient: "from-foreground to-foreground/80",
    },
    {
      title: "LinkedIn",
      description: "Let's connect professionally",
      icon: Linkedin,
      url: "#",
      gradient: "from-[#0077B5] to-[#00A0DC]",
    },
  ];

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6 relative">
      {/* Dark Mode Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="absolute top-6 right-6"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>

      <div className="w-full max-w-lg space-y-8 animate-fade-in">
        {/* Profile Section */}
        <div className="text-center space-y-4">
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto animate-scale-in" />
            <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent blur-lg opacity-50 mx-auto" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground tracking-tight">
              Your Name
            </h1>
            <p className="text-lg text-muted-foreground">
              Developer • Designer • Creator
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-3">
          {links.map((link, index) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              style={{
                animation: `fade-in 0.5s ease-out ${0.1 * (index + 1)}s backwards`,
              }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border-2 transition-all duration-300 shadow-[4px_4px_0px_hsl(var(--foreground))] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_hsl(var(--foreground))] border-border hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-[#ff8719] group-hover:via-[#4651ff] group-hover:to-[#d4db00] group-hover:bg-[length:300%_300%] group-hover:animate-gradient-xy dark:group-hover:from-[rgb(255,121,26)] dark:group-hover:via-[rgb(230,230,0)] dark:group-hover:to-[rgb(255,219,112)]">
                <div className="absolute inset-[2px] bg-card rounded-xl" />
                
                <div className="relative p-6 flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${link.gradient} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-foreground bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ff8719] group-hover:via-[#4651ff] group-hover:to-[#d4db00] group-hover:bg-[length:300%_300%] group-hover:animate-gradient-xy dark:group-hover:from-[rgb(255,121,26)] dark:group-hover:via-[rgb(230,230,0)] dark:group-hover:to-[rgb(255,219,112)] transition-all duration-300">
                      {link.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light">
                      {link.description}
                    </p>
                  </div>
                  
                  <svg
                    className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-8">
          <p className="text-sm text-muted-foreground">
            © 2025 • Made with ❤️
          </p>
        </div>
      </div>
    </main>
  );
};

export default Index;
