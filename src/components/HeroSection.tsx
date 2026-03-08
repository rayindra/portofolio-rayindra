import { Github, Linkedin, Mail } from "lucide-react";
import TerminalBlock from "./TerminalBlock";
import FloatingIcons from "./FloatingIcons";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Glow orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-32 left-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Floating tech icons */}
      <FloatingIcons />

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <p className="text-primary font-body text-base mb-4 animate-fade-up">
            Halo, nama saya
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Rayindra Satrya F.
          </h1>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Saya membangun solusi digital.
          </h2>
          <p className="text-muted-foreground max-w-lg text-lg leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Seorang IT Enthusiast yang berpengalaman dalam front-end, back-end,
            hardware, dan jaringan. Membangun solusi teknologi yang modern dan andal.
          </p>
          <div className="flex items-center gap-5 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: Github, href: "https://github.com/rayindra" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/rayindraraia" },
              { icon: Mail, href: "mailto:rayindrasatrya@gmail.com" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        {/* Terminal block */}
        <div className="hidden md:block animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <TerminalBlock />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
