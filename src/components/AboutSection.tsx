import profileImg from "@/assets/profile.webp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="tentang" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-heading text-2xl font-bold mb-2">
            <span className="text-primary mr-2">01.</span>
            Tentang Saya
          </h2>
          <div className="h-px bg-border flex-1 mt-2 mb-10" />
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div
            className={`md:col-span-2 space-y-4 text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <p>
              Saya adalah seorang developer yang passionate dalam membangun produk digital yang berdampak.
              Perjalanan saya di dunia IT dimulai sejak kuliah, dan sejak saat itu saya terus mengembangkan
              keahlian di berbagai teknologi modern.
            </p>
            <p>
              Saat ini, saya berfokus pada bidang IT Support, Cybersecurity, dan DevSecOps.
              Saya percaya bahwa sistem yang baik adalah sistem yang aman, andal, dan mudah
              di-maintain.
            </p>

          </div>
          <div
            ref={imageRef}
            className={`glass-card p-6 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-700 delay-300 ${imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
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
