import { Code, Database, Cloud, Shield, Cpu, Terminal } from "lucide-react";

const icons = [
  { Icon: Code, top: "15%", left: "75%", delay: "0s" },
  { Icon: Database, top: "30%", left: "85%", delay: "0.8s" },
  { Icon: Cloud, top: "60%", left: "80%", delay: "1.6s" },
  { Icon: Shield, top: "75%", left: "70%", delay: "2.4s" },
  { Icon: Cpu, top: "10%", left: "90%", delay: "1.2s" },
  { Icon: Terminal, top: "50%", left: "92%", delay: "2s" },
];

const FloatingIcons = () => {
  return (
    <>
      {icons.map(({ Icon, top, left, delay }, i) => (
        <div
          key={i}
          className="absolute hidden lg:block text-primary/10 animate-float"
          style={{ top, left, animationDelay: delay }}
        >
          <Icon size={28} strokeWidth={1.5} />
        </div>
      ))}
    </>
  );
};

export default FloatingIcons;
