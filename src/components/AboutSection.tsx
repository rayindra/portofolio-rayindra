import profileImg from "@/assets/profile.jpg";

const AboutSection = () => {
  return (
    <section id="tentang" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl font-bold mb-2">
          <span className="text-primary mr-2">01.</span>
          Tentang Saya
        </h2>
        <div className="h-px bg-border flex-1 mt-2 mb-10" />
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Saya adalah seorang developer yang passionate dalam membangun produk digital yang berdampak.
              Perjalanan saya di dunia IT dimulai sejak kuliah, dan sejak saat itu saya terus mengembangkan
              keahlian di berbagai teknologi modern.
            </p>
            <p>
              Saat ini, saya berfokus pada pengembangan aplikasi full-stack dengan pendekatan
              clean architecture dan best practices. Saya percaya bahwa kode yang baik adalah kode
              yang mudah dibaca, di-maintain, dan di-scale.
            </p>
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "5+", label: "Tahun Pengalaman" },
                { value: "30+", label: "Proyek Selesai" },
                { value: "15+", label: "Klien Puas" },
              ].map((stat) => (
                <div key={stat.label} className="text-center glass-card p-4">
                  <div className="text-2xl font-heading font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-6 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Decorative grid */}
            <div className="absolute inset-0 grid-bg" />
            <div className="relative z-10">
               <img src={profileImg} alt="Rayindra Satrya Fitrian" className="w-32 h-32 rounded-full border-2 border-primary/30 object-cover glow-dot" />
               <p className="mt-4 text-sm text-muted-foreground text-center">IT Enthusiast</p>
               <p className="text-xs text-primary/60 font-mono text-center mt-1">~/rayindra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
