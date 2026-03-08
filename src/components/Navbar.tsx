const navItems = ["Tentang", "Keahlian", "Proyek", "Kontak"];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-x-0 border-t-0 rounded-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-heading text-xl font-bold text-gradient">
          &lt;Dev /&gt;
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#kontak"
          className="text-sm border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Hubungi Saya
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
