import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/data/content";
import aboutImg from "@/assets/about-pets.jpg";
import aboutClinicPets from "@/assets/about-clinic-pets.jpg";

const AboutSection = () => (
  <section id="sobre" aria-label="Sobre a Unipet - Clínica Veterinária" className="py-20 bg-muted/40">
    <div className="container mx-auto px-4">
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
      >
        <motion.div variants={fadeUp} className="space-y-4">
          <img src={aboutImg} alt="Cães e gatos sendo atendidos na clínica veterinária Unipet com carinho" className="rounded-2xl shadow-xl w-full max-w-md mx-auto" />
          <img src={aboutClinicPets} alt="Gato, cachorro e filhote acolhidos na recepção da clínica veterinária" className="rounded-2xl shadow-lg w-full max-w-md mx-auto" />
        </motion.div>
        <motion.div variants={fadeUp} className="space-y-5">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Sobre a Unipet</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Um lugar onde seu pet é tratado com amor 💜
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Na Unipet, acreditamos que cada animal merece um atendimento humanizado, com carinho e respeito. 
            Nossa equipe é formada por profissionais apaixonados que tratam cada pet como se fosse da família.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nosso ambiente é acolhedor e seguro, projetado para que tutores e pets se sintam confortáveis. 
            Somos um espaço inclusivo, que abraça a diversidade e valoriza o respeito acima de tudo.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Trabalhamos com agendamento para garantir um atendimento organizado, sem longas esperas, 
            e com toda a atenção que seu companheiro merece.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
