import { Briefcase, Users, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  type: "work" | "organization";
  icon: React.ComponentType<any>;
}

const experiences: TimelineItem[] = [
  {
    title: "IT Support Intern",
    organization: "PT. Anugerah Printer",
    period: "April 2025 — Oktober 2025",
    type: "work",
    icon: Briefcase,
  },
  {
    title: "Anggota Aktif",
    organization: "Himpunan Mahasiswa Teknik Informatika",
    period: "Desember 2024 — Sekarang",
    type: "organization",
    icon: Users,
  },
  {
    title: "Anggota Aktif",
    organization: "Dewan Kemakmuran Masjid Al-Bayan",
    period: "Desember 2024 — Sekarang",
    type: "organization",
    icon: Users,
  },
  {
    title: "Anggota Aktif",
    organization: "CITI E-Sports",
    period: "Desember 2024 — Sekarang",
    type: "organization",
    icon: Users,
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: orgRef, isVisible: orgVisible } = useScrollReveal();

  return (
    <section id="pengalaman" className="section-padding relative">
      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-2xl font-bold mb-2">
            <span className="text-primary mr-2">03.</span>
            Pengalaman
          </h2>
          <div className="h-px bg-border mt-2 mb-10" />
        </div>

        {/* Pengalaman Kerja */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <Briefcase size={18} className="text-primary" />
            Pengalaman Kerja
          </h3>
          <div className="relative ml-4 mb-12">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/30" />
            {experiences
              .filter((e) => e.type === "work")
              .map((item, i) => (
                <TimelineCard key={i} item={item} delay={300 + i * 150} isVisible={isVisible} />
              ))}
          </div>
        </div>

        {/* Pengalaman Organisasi */}
        <div
          ref={orgRef}
          className={`transition-all duration-700 ${orgVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
        >
          <h3 className="font-heading text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <Users size={18} className="text-primary" />
            Pengalaman Organisasi
          </h3>
          <div className="relative ml-4">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/30" />
            {experiences
              .filter((e) => e.type === "organization")
              .map((item, i) => (
                <TimelineCard key={i} item={item} delay={200 + i * 150} isVisible={orgVisible} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ item, delay, isVisible }: { item: TimelineItem; delay: number; isVisible: boolean }) => (
  <div
    className={`relative pl-8 pb-8 last:pb-0 group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* Dot */}
    <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/30 border-2 border-primary group-hover:bg-primary transition-colors duration-300" />
    <div className="glass-card p-5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
            {item.title}
          </h4>
          <p className="text-sm text-muted-foreground mt-1">{item.organization}</p>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-primary/70 font-mono whitespace-nowrap">
          <Calendar size={12} />
          {item.period}
        </span>
      </div>
    </div>
  </div>
);

export default ExperienceSection;
