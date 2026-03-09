import { ExternalLink, Github, Folder } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "DEVEATER.io",
    description:
      "Game website terinspirasi dari agar.io dengan mekanisme makan dan tumbuh, dengan karakter bahasa pemrogaman dan power ups yang unik untuk meningkatkan pengalaman bermain dan strategi pemain.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/rayindra/deveater.io",
    live: "https://deveater.vercel.app/",
  },
  {
    title: "E-Ray's Printing",
    description:
      "Platform percetakan online untuk memesan berbagai layanan cetak dengan mudah dan cepat.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/rayindra/rays-print-shop",
    live: "https://erays.vercel.app/",
  },
  {
    title: "IF22 : Outbreak",
    description:
      "Game turn-based RPG berbasis Unity Engine dengan mekanisme pertarungan strategis dan alur cerita yang imersif.",
    tech: ["Unity", "C#", "Game Dev"],
    github: "https://github.com/rayindra/IF22_OUTBREAK",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="proyek" className="section-padding">
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-2xl font-bold mb-2">
            <span className="text-primary mr-2">03.</span>
            Proyek
          </h2>
          <div className="h-px bg-border mt-2 mb-10" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass-card p-6 hover:border-primary/30 transition-all duration-700 group flex flex-col hover:-translate-y-2 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              style={{ transitionDelay: `${200 + i * 150}ms`, borderColor: "hsla(220, 14%, 18%, 0.6)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <Folder className="text-primary" size={32} strokeWidth={1.5} />
                <div className="flex gap-3 text-muted-foreground">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
