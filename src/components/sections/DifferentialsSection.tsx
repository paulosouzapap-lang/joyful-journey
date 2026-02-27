import { motion } from "framer-motion";
import { differentials, fadeUp, stagger } from "@/data/content";

const DifferentialsSection = () => (
  <section id="diferenciais" aria-label="Diferenciais da clínica veterinária Unipet" className="py-20 bg-lavender/30">
    <div className="container mx-auto px-4">
      <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <span className="text-accent font-bold uppercase tracking-wider text-sm">Diferenciais</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Nosso Diferencial 💜</h2>
      </motion.div>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
      >
        {differentials.map((d) => (
          <motion.div key={d.text} variants={fadeUp} className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-sm">
            <div className="rounded-full bg-accent/15 p-3 shrink-0">
              <d.icon className="h-5 w-5 text-accent" />
            </div>
            <span className="font-semibold text-foreground text-sm">{d.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default DifferentialsSection;
