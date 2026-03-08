const skills = [
  {
    category: "Frontend",
    icon: "{ }",
    items: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    category: "Backend",
    icon: "> _",
    items: ["Node.js", "Express", "Python", "PostgreSQL", "REST API"],
  },
  {
    category: "Hardware & Jaringan",
    icon: "~/",
    items: ["Networking", "Mikrotik", "Cisco", "Troubleshooting", "Linux"],
  },
];

const SkillsSection = () => {
  return (
    <section id="keahlian" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-heading text-2xl font-bold mb-2">
          <span className="text-primary mr-2">02.</span>
          Keahlian
        </h2>
        <div className="h-px bg-border mt-2 mb-10" />
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
              style={{ borderColor: "hsla(220, 14%, 18%, 0.6)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary font-mono text-sm bg-primary/10 px-2 py-1 rounded">
                  {group.icon}
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground text-sm flex items-center gap-2 group-hover:text-secondary-foreground transition-colors"
                  >
                    <span className="text-primary text-xs">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
