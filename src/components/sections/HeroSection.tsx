import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/data/content";
import WhatsAppLink from "@/components/WhatsAppLink";
import heroImg from "@/assets/hero-vet.jpg";

const HeroSection = () => (
  <section aria-label="Banner principal da Unipet" className="relative pt-20 min-h-[90vh] flex items-center">
    <div className="absolute inset-0 pt-20">
      <img src={heroImg} alt="Veterinária cuidando de cachorro" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
    </div>
    <motion.div
      className="container relative mx-auto px-4 py-20"
      initial="hidden" animate="visible" variants={stagger}
    >
      <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold text-white max-w-2xl leading-tight">
        Cuidamos do seu melhor amigo como se fosse da nossa família 🐾
      </motion.h1>
      <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-white/90 max-w-xl">
        Atendimento veterinário completo, pet shop e profissionais que tratam seu pet com carinho, respeito e dedicação.
      </motion.p>
      <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
        <Button asChild size="lg" className="rounded-full text-base font-bold shadow-lg">
          <a href="#agendar"><Calendar className="h-5 w-5" /> Agendar Consulta</a>
        </Button>
        <WhatsAppLink size="lg">Falar no WhatsApp</WhatsAppLink>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
