import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle, PawPrint } from "lucide-react";
import { WHATSAPP_URL } from "@/data/content";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WHATSAPP FLUTUANTE */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-br from-whatsapp-light to-whatsapp text-whatsapp-foreground rounded-full pl-5 pr-6 py-3.5 shadow-[0_8px_30px_hsl(var(--whatsapp)/0.45)] group cursor-pointer"
        aria-label="Falar no WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08, boxShadow: "0 12px 40px hsl(142 71% 45% / 0.55)" }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative">
          <PawPrint className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
        </span>
        <span className="text-sm font-bold tracking-wide hidden sm:inline">Fale Conosco</span>
        <MessageCircle className="h-5 w-5 sm:hidden" />
      </motion.a>

      {/* VOLTAR AO TOPO */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Voltar ao topo"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
