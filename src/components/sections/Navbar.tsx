import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import WhatsAppLink from "@/components/WhatsAppLink";
import logo from "@/assets/unipet-logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        <img src={logo} alt="Unipet Logo" className="h-12 md:h-20 w-auto" />
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-foreground/80">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary transition-colors">{link.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <WhatsAppLink size="sm" className="hidden sm:inline-flex" />
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 font-semibold py-2 px-3 rounded-lg hover:bg-muted hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <WhatsAppLink size="sm" fullWidth className="mt-2">
              Falar no WhatsApp
            </WhatsAppLink>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
