import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-3xl">
        <p className="text-primary font-body text-base mb-4 animate-fade-up">
          Halo, nama saya
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          John Doe.
        </h1>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Saya membangun solusi digital.
        </h2>
        <p className="text-muted-foreground max-w-lg text-lg leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Seorang Software Engineer yang berfokus pada pengembangan aplikasi web modern, 
          scalable, dan user-friendly. Berpengalaman dalam React, Node.js, dan cloud technologies.
        </p>
        <div className="flex items-center gap-5 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Mail, href: "#kontak" },
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
    </section>
  );
};

export default HeroSection;
