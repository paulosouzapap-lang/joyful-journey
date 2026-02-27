import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services, fadeUp, stagger } from "@/data/content";

const ServicesSection = () => (
  <section id="servicos" aria-label="Serviços veterinários oferecidos pela Unipet" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <span className="text-primary font-bold uppercase tracking-wider text-sm">Serviços</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Serviços Veterinários 🩺</h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          Oferecemos cuidados completos para a saúde e bem-estar do seu pet.
        </p>
      </motion.div>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
      >
        {services.map((s) => (
          <motion.div key={s.title} variants={fadeUp}>
            <Card className="h-full hover:shadow-lg transition-shadow border-0 bg-card shadow-sm overflow-hidden" role="article">
              {s.img && (
                <img src={s.img} alt={`Serviço de ${s.title} na clínica veterinária Unipet`} className="w-full h-40 object-cover" loading="lazy" />
              )}
              <CardContent className="p-6 flex gap-4 items-start">
                <div className="rounded-xl bg-primary/10 p-3 shrink-0">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{s.desc}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center mt-10">
        <Button asChild size="lg" className="rounded-full font-bold">
          <a href="#agendar"><Calendar className="h-5 w-5" /> Agendar Atendimento</a>
        </Button>
      </div>
    </div>
  </section>
);

export default ServicesSection;
