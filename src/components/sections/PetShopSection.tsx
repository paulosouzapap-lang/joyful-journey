import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { petShopItems, fadeUp, stagger } from "@/data/content";

const PetShopSection = () => (
  <section id="petshop" aria-label="Pet Shop Unipet - Produtos para animais" className="py-20 bg-mint/30">
    <div className="container mx-auto px-4">
      <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <span className="text-secondary-foreground font-bold uppercase tracking-wider text-sm">Pet Shop</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Tudo para o seu pet 🛍️</h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          Produtos de qualidade com a praticidade de encontrar tudo no mesmo lugar.
        </p>
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
      >
        {petShopItems.map((item) => (
          <motion.div key={item.title} variants={fadeUp}>
            <Card className="w-40 text-center hover:shadow-lg transition-shadow border-0 bg-card">
              <CardContent className="p-6 flex flex-col items-center gap-3">
                <div className="rounded-full bg-secondary p-4">
                  <item.icon className="h-7 w-7 text-secondary-foreground" />
                </div>
                <span className="font-bold text-sm text-foreground">{item.title}</span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center mt-10">
        <Button size="lg" variant="outline" className="rounded-full font-bold">
          <ShoppingBag className="h-5 w-5" /> Ver Produtos
        </Button>
      </div>
    </div>
  </section>
);

export default PetShopSection;
