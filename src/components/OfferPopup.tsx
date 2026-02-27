import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PawPrint, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatPhone, isValidPhone } from "@/lib/phone";
import logo from "@/assets/unipet-logo.png";

const WHATSAPP_URL = "https://wa.me/5500000000000";

const OfferPopup = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("unipet_offer_seen", "true");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidPhone(phone)) {
      setError("Insira um número de WhatsApp válido.");
      return;
    }
    const msg = `Olá! Vim pelo site e gostaria de saber mais sobre a oferta especial. Meu WhatsApp: ${phone}`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
    setTimeout(handleClose, 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Popup */}
          <motion.div
            className="relative w-full max-w-sm bg-card rounded-3xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Top decorative bar */}
            <div className="bg-gradient-to-r from-primary via-accent to-primary h-2" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-6 pt-8 text-center space-y-4">
              {/* Logo */}
              <motion.div
                className="mx-auto w-20 h-20 flex items-center justify-center"
                animate={{ rotate: [0, -4, 4, -2, 0] }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              >
                <img src={logo} alt="Unipet Logo" className="w-full h-full object-contain" />
              </motion.div>

              {/* Title */}
              <div>
                <h3 className="text-xl font-extrabold text-foreground">
                  Oferta Especial 🐾
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Deixe seu WhatsApp e receba uma condição exclusiva para a primeira consulta do seu pet!
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-6 space-y-2"
                >
                  <PawPrint className="h-10 w-10 text-primary mx-auto" />
                  <p className="font-bold text-foreground">Obrigado! 💜</p>
                  <p className="text-muted-foreground text-sm">Redirecionando para o WhatsApp...</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-left">
                  <div className="space-y-1.5">
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={phone}
                        onChange={handlePhoneChange}
                        className="pl-10 rounded-xl border-border focus:border-primary"
                        autoFocus
                      />
                    </div>
                    {error && (
                      <p className="text-destructive text-xs font-medium">{error}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl font-bold text-base bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                  >
                    <PawPrint className="h-5 w-5" /> Quero a Oferta!
                  </Button>

                  <p className="text-muted-foreground text-[11px] text-center leading-tight">
                    Ao enviar, você será direcionado ao nosso WhatsApp para receber a oferta.
                  </p>
                </form>
              )}
            </div>

            {/* Bottom paw prints decoration */}
            <div className="flex justify-center gap-2 pb-4 opacity-20">
              <PawPrint className="h-4 w-4 text-primary" />
              <PawPrint className="h-3 w-3 text-accent" />
              <PawPrint className="h-4 w-4 text-primary" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OfferPopup;
