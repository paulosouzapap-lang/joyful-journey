import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/data/content";
import WhatsAppLink from "@/components/WhatsAppLink";

const ContactSection = () => (
  <section id="contato" aria-label="Informações de contato e localização da Unipet" className="py-20 bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4">
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
      >
        <motion.div variants={fadeUp} className="space-y-6">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Contato</span>
          <h2 className="text-3xl md:text-4xl font-extrabold">Venha nos visitar 📍</h2>
          <div className="space-y-4 text-primary-foreground/80">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>Unipet Clínica Veterinária e Pet Shop</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary shrink-0" />
              <span>Segunda a Sábado — Atendimento com hora marcada</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>(00) 00000-0000</span>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <WhatsAppLink size="md" />
            <Button variant="outline" className="rounded-full font-bold border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white">
              <ChevronRight className="h-5 w-5" /> Como Chegar
            </Button>
          </div>
        </motion.div>
        <motion.div variants={fadeUp}>
          <div className="rounded-2xl overflow-hidden shadow-xl bg-muted/20 h-72 flex items-center justify-center">
            <iframe
              title="Localização Unipet"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197!2d-46.6388!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzgnMTkuNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
