const AboutSection = () => {
  return (
    <section id="tentang" className="section-padding">
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
          </div>
          <div className="glass-card p-6 flex flex-col items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center text-4xl font-heading font-bold text-primary">
              JD
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Software Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
