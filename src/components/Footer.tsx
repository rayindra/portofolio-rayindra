import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/rayindra", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rayindraraia", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/rayindraraia/", label: "Instagram" },
  { icon: Mail, href: "mailto:rayindrasatrya@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="py-8 text-center text-muted-foreground text-xs">
    <div className="flex items-center justify-center gap-5 mb-3">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
    <p>Didesain & Dibangun oleh Rayindra Satrya Fitrian</p>
  </footer>
);

export default Footer;
