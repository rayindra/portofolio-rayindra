const ContactSection = () => {
  return (
    <section id="kontak" className="section-padding">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-primary text-sm mb-2">04. Selanjutnya</p>
        <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
          Mari Terhubung
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Saya selalu terbuka untuk peluang baru, kolaborasi, atau sekadar berdiskusi 
          tentang teknologi. Jangan ragu untuk menghubungi saya!
        </p>
        <a
          href="mailto:hello@johndoe.dev"
          className="inline-block border border-primary text-primary px-8 py-3 rounded-md font-heading text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Kirim Email
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
