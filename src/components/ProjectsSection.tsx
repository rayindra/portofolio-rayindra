import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Platform e-commerce full-stack dengan fitur payment gateway, manajemen produk, dan dashboard analytics.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    title: "Task Management App",
    description: "Aplikasi manajemen tugas real-time dengan fitur kolaborasi tim, drag & drop, dan notifikasi.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
  },
  {
    title: "IoT Monitoring Dashboard",
    description: "Dashboard monitoring perangkat IoT dengan visualisasi data real-time dan sistem alert otomatis.",
    tech: ["React", "Python", "MQTT", "InfluxDB"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="proyek" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl font-bold mb-2">
          <span className="text-primary mr-2">03.</span>
          Proyek
        </h2>
        <div className="h-px bg-border mt-2 mb-10" />
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card p-6 md:p-8 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-muted-foreground">
                  <a href="#" className="hover:text-primary transition-colors"><Github size={18} /></a>
                  <a href="#" className="hover:text-primary transition-colors"><ExternalLink size={18} /></a>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs text-primary/80 bg-primary/10 px-2.5 py-1 rounded-full">
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
