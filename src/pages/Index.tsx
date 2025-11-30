import { Github, Linkedin, Briefcase } from "lucide-react";

const Index = () => {
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
    <main className="min-h-screen bg-background flex items-center justify-center p-6">
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
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative p-6 flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${link.gradient} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {link.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                  
                  <svg
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
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
