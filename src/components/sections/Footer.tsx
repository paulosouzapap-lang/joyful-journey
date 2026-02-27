import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/unipet-logo.png";

const Footer = () => (
  <footer className="bg-foreground border-t border-primary-foreground/10 py-8" role="contentinfo">
    <div className="container mx-auto px-4 text-center space-y-4">
      <img src={logo} alt="Unipet" className="h-10 mx-auto brightness-200" />
      <div className="flex justify-center gap-4">
        <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
          <Instagram className="h-5 w-5" />
        </a>
        <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
          <Facebook className="h-5 w-5" />
        </a>
      </div>
      <p className="text-primary-foreground/50 text-sm">
        Unipet — Amor, cuidado e respeito em cada atendimento 🐾💜
      </p>
      <p className="text-primary-foreground/30 text-xs">
        © {new Date().getFullYear()} Unipet. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
