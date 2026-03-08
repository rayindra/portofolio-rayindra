import { type IconType } from "react-icons";
import { SiReact, SiTypescript, SiTailwindcss, SiHtml5, SiJavascript, SiNodedotjs, SiExpress, SiPython, SiPostgresql, SiMikrotik, SiCisco, SiLinux } from "react-icons/si";
import { Code2, Server, Wifi, Globe, Cpu, Wrench, MonitorCog, Network, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SkillItem {
  name: string;
  icon: React.ComponentType<any>;
}

interface SkillGroup {
  category: string;
  icon: React.ComponentType<any>;
  items: SkillItem[];
}

const skills: SkillGroup[] = [
  {
    category: "Frontend",
    icon: Code2,
    items: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML/CSS", icon: SiHtml5 },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Python", icon: SiPython },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "REST API", icon: Globe },
    ],
  },
  {
    category: "Hardware & Jaringan",
    icon: Wifi,
    items: [
      { name: "PC Building", icon: Cpu },
      { name: "Hardware Maintenance", icon: Wrench },
      { name: "Software Maintenance", icon: MonitorCog },
      { name: "Networking", icon: Network },
      { name: "Mikrotik & Cisco", icon: SiCisco },
      { name: "Troubleshooting", icon: Shield },
      { name: "Linux Administration", icon: SiLinux },
    ],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="keahlian" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-2xl font-bold mb-2">
            <span className="text-primary mr-2">02.</span>
            Keahlian
          </h2>
          <div className="h-px bg-border mt-2 mb-10" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`glass-card p-6 hover:border-primary/30 transition-all duration-700 group hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + i * 150}ms`, borderColor: "hsla(220, 14%, 18%, 0.6)" }}
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
