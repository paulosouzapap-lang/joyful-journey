import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { reviews, fadeUp, stagger } from "@/data/content";

const ReviewsSection = () => (
  <section id="avaliacoes" aria-label="Avaliações e depoimentos de clientes da Unipet" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <span className="text-primary font-bold uppercase tracking-wider text-sm">Avaliações</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">O que dizem nossos clientes ⭐</h2>
      </motion.div>
      <motion.div
        className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
      >
        {reviews.map((r) => (
          <motion.div key={r.name} variants={fadeUp}>
            <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-star text-star" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{r.text}"</p>
                <p className="font-bold text-foreground">— {r.name}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ReviewsSection;
