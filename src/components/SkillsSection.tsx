import { Code2, Server, Wifi } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";

interface SkillItem {
  name: string;
  level: number;
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
      { name: "React", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", level: 70 },
      { name: "Express", level: 65 },
      { name: "Python", level: 60 },
      { name: "PostgreSQL", level: 55 },
      { name: "REST API", level: 75 },
    ],
  },
  {
    category: "Hardware & Jaringan",
    icon: Wifi,
    items: [
      { name: "PC Building", level: 85 },
      { name: "Hardware Maintenance", level: 80 },
      { name: "Software Maintenance", level: 75 },
      { name: "Networking", level: 70 },
      { name: "Mikrotik & Cisco", level: 65 },
      { name: "Troubleshooting", level: 80 },
      { name: "Linux Administration", level: 60 },
    ],
  },
];

const SkillBar = ({ name, level, delay, animate }: { name: string; level: number; delay: number; animate: boolean }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setWidth(level), delay);
      return () => clearTimeout(timer);
    }
  }, [animate, level, delay]);

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary font-heading font-semibold">{width}%</span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

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
              <div className="flex items-center gap-3 mb-5">
                <span className="text-primary bg-primary/10 p-2 rounded">
                  <group.icon size={18} />
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {group.category}
                </h3>
              </div>
              <div className="space-y-4">
                {group.items.map((skill, j) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={400 + i * 200 + j * 100}
                    animate={isVisible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
