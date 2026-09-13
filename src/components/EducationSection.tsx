import { GraduationCap, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
}

const education: EducationItem[] = [
  {
    degree: "S1 Teknik Informatika",
    institution: "Institut Teknologi Indonesia",
    period: "Agustus 2026",
    status: "Lulus",
  },
  {
    degree: "Sekolah Menengah Atas (SMA)",
    institution: "SMA Negeri 10 Depok",
    period: "2022",
    status: "Lulus",
  },
];

const EducationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pendidikan" className="section-padding relative">
      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-2xl font-bold mb-2">
            <span className="text-primary mr-2">04.</span>
            Pendidikan
          </h2>
          <div className="h-px bg-border mt-2 mb-10" />
        </div>

        <div className={`relative ml-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
          <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/30" />
          {education.map((item, i) => (
            <div
              key={item.institution}
              className={`relative pl-8 pb-8 last:pb-0 group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Dot */}
              <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/30 border-2 border-primary group-hover:bg-primary transition-colors duration-300" />
              <div className="glass-card p-5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      <GraduationCap size={18} className="text-primary" />
                      {item.degree}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="flex items-center gap-1.5 text-xs text-primary/70 font-mono whitespace-nowrap">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded border border-primary/30 text-primary">
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
