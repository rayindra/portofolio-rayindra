import { Code2, Server, Wifi, Globe, FileCode2, Paintbrush, Database, Terminal, Network, Router, Shield, MonitorCog, type LucideIcon } from "lucide-react";

interface SkillItem {
  name: string;
  icon: LucideIcon;
}

interface SkillGroup {
  category: string;
  icon: LucideIcon;
  items: SkillItem[];
}

const skills: SkillGroup[] = [
  {
    category: "Frontend",
    icon: Code2,
    items: [
      { name: "React", icon: Globe },
      { name: "TypeScript", icon: FileCode2 },
      { name: "Tailwind CSS", icon: Paintbrush },
      { name: "HTML/CSS", icon: Code2 },
      { name: "JavaScript", icon: FileCode2 },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Terminal },
      { name: "Python", icon: FileCode2 },
      { name: "PostgreSQL", icon: Database },
      { name: "REST API", icon: Globe },
    ],
  },
  {
    category: "Hardware & Jaringan",
    icon: Wifi,
    items: [
      { name: "Networking", icon: Network },
      { name: "Mikrotik", icon: Router },
      { name: "Cisco", icon: Shield },
      { name: "Troubleshooting", icon: MonitorCog },
      { name: "Linux", icon: Terminal },
    ],
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
                <span className="text-primary bg-primary/10 p-2 rounded">
                  <group.icon size={18} />
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="text-muted-foreground text-sm flex items-center gap-2 group-hover:text-secondary-foreground transition-colors"
                  >
                    <skill.icon size={14} className="text-primary/70" />
                    {skill.name}
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
