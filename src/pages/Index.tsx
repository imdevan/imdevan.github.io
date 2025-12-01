import { Github, Linkedin, Briefcase, Moon, Sun, Mic, Code } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { theme, setTheme } = useTheme();

  // Helper function to extract colors from gradient string
  const getGradientColors = (gradient: string) => {
    // Extract colors from Tailwind gradient format
    const fromMatch = gradient.match(/from-\[([^\]]+)\]/) || gradient.match(/from-(\w+(?:\/\d+)?)/);
    const toMatch = gradient.match(/to-\[([^\]]+)\]/) || gradient.match(/to-(\w+(?:\/\d+)?)/);
    
    let fromColor = fromMatch ? fromMatch[1] : '';
    let toColor = toMatch ? toMatch[1] : '';
    
    // Convert CSS variables to hsl format
    const convertToColor = (color: string) => {
      if (color.startsWith('#')) {
        return color;
      }
      // Handle opacity modifiers (e.g., primary/80)
      const [varName, opacity] = color.split('/');
      if (varName === 'primary' || varName === 'accent' || varName === 'foreground') {
        const opacityValue = opacity ? ` / ${parseInt(opacity) / 100}` : '';
        return `hsl(var(--${varName})${opacityValue})`;
      }
      // Default case for other CSS variables
      const opacityValue = opacity ? ` / ${parseInt(opacity) / 100}` : '';
      return `hsl(var(--${varName})${opacityValue})`;
    };
    
    return {
      from: convertToColor(fromColor),
      to: convertToColor(toColor),
    };
  };

  const links = [
    {
      title: "Portfolio",
      description: "View my work and projects",
      icon: Briefcase,
      url: "https://devanhuapaya.com/",
      gradient: "from-primary to-primary/80",
    },
    {
      title: "Dotfiles Presentation",
      description: "Watch my latest presentation",
      icon: Mic,
      url: "https://imdevan.github.io/dotfiles-for-web-devs-presentation/",
      gradient: "from-[#FF6B6B] to-[#FF8E53]",
    },
    {
      title: "PyPo",
      description: "Explore my contributions",
      icon: Code,
      url: "https://imdevan.github.io/pypo",
      gradient: "from-[#4ECDC4] to-[#44A08D]",
    },
    {
      title: "GitHub",
      description: "Check out my code",
      icon: Github,
      url: "http://github.com/imdevan",
      gradient: "from-foreground to-foreground/80",
    },
    {
      title: "LinkedIn",
      description: "Let's connect professionally",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/devanhuapaya",
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
            <img 
              src="/compy-guy.png" 
              alt="Profile" 
              className="absolute inset-0 w-24 h-24 rounded-full object-cover mx-auto z-10"
              style={{ filter: 'none' }}
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground tracking-tight group cursor-default">
              Dev Huap
              {/* Dev<span className="inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300">an</span> Huap<span className="inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300">aya</span> */}
            </h1>
            <p className="text-lg text-muted-foreground">
              Developer • Designer • Creator
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-3">
          {links.slice(0, 3).map((link, index) => {
            const colors = getGradientColors(link.gradient);
            const gradientStyle = `linear-gradient(90deg, ${colors.from} 0%, ${colors.to} 50%, ${colors.from} 100%)`;
            return (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              style={{
                animation: `fade-in 0.5s ease-out ${0.1 * (index + 1)}s backwards`,
                '--link-gradient': gradientStyle,
              } as React.CSSProperties}
            >
              <div 
                className="relative overflow-hidden bg-card border-2 transition-all duration-300 shadow-[4px_4px_0px_hsl(var(--foreground))] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_hsl(var(--foreground))] border-border hover:border-transparent"
                style={{
                  backgroundImage: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage = gradientStyle;
                  e.currentTarget.style.backgroundSize = '300% 300%';
                  e.currentTarget.style.backgroundPosition = '0% 0%';
                  e.currentTarget.style.animation = 'gradient-xy 45s linear infinite';
                  // Apply gradient to text
                  const title = e.currentTarget.querySelector('h3');
                  if (title) {
                    title.style.backgroundImage = gradientStyle;
                    title.style.backgroundSize = '300% 300%';
                    title.style.backgroundPosition = '0% 0%';
                    title.style.animation = 'gradient-xy 45s linear infinite';
                    title.style.webkitBackgroundClip = 'text';
                    title.style.backgroundClip = 'text';
                    title.style.color = 'transparent';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundImage = 'none';
                  e.currentTarget.style.backgroundSize = '';
                  e.currentTarget.style.animation = '';
                  // Remove gradient from text
                  const title = e.currentTarget.querySelector('h3');
                  if (title) {
                    title.style.backgroundImage = 'none';
                    title.style.backgroundSize = '';
                    title.style.animation = '';
                    title.style.webkitBackgroundClip = '';
                    title.style.backgroundClip = '';
                    title.style.color = '';
                  }
                }}
              >
                <div className="absolute inset-[2px] bg-card" />

                <div className="relative p-6 flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${link.gradient} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-foreground transition-all duration-300">
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
            );
          })}

          {/* GitHub and LinkedIn in same row */}
          <div className="grid grid-cols-2 gap-3">
            {links.slice(3, 5).map((link, index) => {
              const colors = getGradientColors(link.gradient);
              const gradientStyle = `linear-gradient(90deg, ${colors.from} 0%, ${colors.to} 50%, ${colors.from} 100%)`;
              return (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                style={{
                  animation: `fade-in 0.5s ease-out ${0.1 * (index + 4)}s backwards`,
                }}
              >
                <div 
                  className="relative overflow-hidden bg-card border-2 transition-all duration-300 shadow-[4px_4px_0px_hsl(var(--foreground))] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_hsl(var(--foreground))] border-border hover:border-transparent"
                  style={{
                    backgroundImage: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundImage = gradientStyle;
                    e.currentTarget.style.backgroundSize = '300% 300%';
                    e.currentTarget.style.backgroundPosition = '0% 0%';
                    e.currentTarget.style.animation = 'gradient-xy 45s linear infinite';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundImage = 'none';
                    e.currentTarget.style.backgroundSize = '';
                    e.currentTarget.style.animation = '';
                  }}
                >
                  <div className="absolute inset-[2px] bg-card" />

                  <div className="relative p-6 flex flex-col items-center gap-3 text-center">
                    {/* <div className={`p-3 rounded-xl bg-gradient-to-br ${link.gradient} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}> */}
                    <link.icon className="w-6 h-6" />
                    {/* </div> */}

                    {/* <div> */}
                    {/*   <h3 className="text-base font-medium text-foreground bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ff8719] group-hover:via-[#4651ff] group-hover:to-[#d4db00] group-hover:bg-[length:300%_300%] group-hover:animate-gradient-xy dark:group-hover:from-[rgb(255,121,26)] dark:group-hover:via-[rgb(230,230,0)] dark:group-hover:to-[rgb(255,219,112)] transition-all duration-300"> */}
                    {/*     {link.title} */}
                    {/*   </h3> */}
                    {/*   <p className="text-xs text-muted-foreground font-light truncate"> */}
                    {/*     {link.description} */}
                    {/*   </p> */}
                    {/* </div> */}
                  </div>
                </div>
              </a>
              );
            })}
          </div>
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
