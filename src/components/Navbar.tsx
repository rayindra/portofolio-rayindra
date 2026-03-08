import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Tentang", path: "/tentang" },
  { label: "Keahlian", path: "/keahlian" },
  { label: "Pengalaman", path: "/pengalaman" },
  { label: "Proyek", path: "/proyek" },
  { label: "Kontak", path: "/kontak" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-x-0 border-t-0 rounded-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-heading text-xl font-bold text-gradient">
          &lt;Dev /&gt;
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className={`text-sm transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/kontak"
          className="text-sm border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Hubungi Saya
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
