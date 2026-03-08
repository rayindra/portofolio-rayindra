import { Briefcase, Users, Calendar } from "lucide-react";

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
  return (
    <section id="pengalaman" className="section-padding relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-heading text-2xl font-bold mb-2">
          <span className="text-primary mr-2">03.</span>
          Pengalaman
        </h2>
        <div className="h-px bg-border mt-2 mb-10" />

        {/* Pengalaman Kerja */}
        <h3 className="font-heading text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
          <Briefcase size={18} className="text-primary" />
          Pengalaman Kerja
        </h3>
        <div className="relative ml-4 mb-12">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/30" />
          {experiences
            .filter((e) => e.type === "work")
            .map((item, i) => (
              <TimelineCard key={i} item={item} />
            ))}
        </div>

        {/* Pengalaman Organisasi */}
        <h3 className="font-heading text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
          <Users size={18} className="text-primary" />
          Pengalaman Organisasi
        </h3>
        <div className="relative ml-4">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/30" />
          {experiences
            .filter((e) => e.type === "organization")
            .map((item, i) => (
              <TimelineCard key={i} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ item }: { item: TimelineItem }) => (
  <div className="relative pl-8 pb-8 last:pb-0 group">
    {/* Dot */}
    <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/30 border-2 border-primary group-hover:bg-primary transition-colors duration-300" />
    <div className="glass-card p-5 hover:border-primary/30 transition-all duration-300">
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
