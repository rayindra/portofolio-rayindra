import { Mail, MapPin, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="kontak" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div ref={ref} className="max-w-lg mx-auto text-center relative z-10">
        <p className={`text-primary text-sm font-mono mb-2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          04. Selanjutnya
        </p>
        <h2 className={`font-heading text-4xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Mari Terhubung
        </h2>
        <p className={`text-muted-foreground leading-relaxed mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Saya selalu terbuka untuk peluang baru, kolaborasi, atau sekadar berdiskusi
          tentang teknologi. Jangan ragu untuk menghubungi saya!
        </p>
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail size={16} className="text-primary" />
            rayindrasatrya@gmail.com
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={16} className="text-primary" />
            Indonesia
          </div>
        </div>
        <a
          href="mailto:rayindrasatrya@gmail.com"
          className={`inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-md font-heading text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-500 delay-[400ms] hover:-translate-y-0.5 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <Send size={16} />
          Kirim Email
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
