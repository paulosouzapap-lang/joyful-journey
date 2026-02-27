import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems, fadeUp } from "@/data/content";

const FaqSection = () => (
  <section id="faq" aria-label="Perguntas frequentes sobre a clínica veterinária" className="py-20 bg-muted/40">
    <div className="container mx-auto px-4">
      <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <span className="text-primary font-bold uppercase tracking-wider text-sm">Dúvidas</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Perguntas Frequentes ❓</h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          Tire suas principais dúvidas sobre nossos serviços e atendimento.
        </p>
      </motion.div>
      <motion.div
        className="max-w-2xl mx-auto"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border-0 shadow-sm px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5 gap-4">
                <span className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                  {item.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 pl-8">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FaqSection;
