import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = ["Tentang", "Keahlian", "Pengalaman", "Proyek", "Kontak"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#kontak"
            className="hidden md:inline-block text-sm border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Hubungi Saya
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
            >
              {item}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-center border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Hubungi Saya
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
