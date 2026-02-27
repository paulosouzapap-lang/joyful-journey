import { motion } from "framer-motion";
import { galleryPhotos, fadeUp, stagger } from "@/data/content";

const GallerySection = () => (
  <section id="galeria" aria-label="Galeria de fotos da clínica e equipe Unipet" className="py-20 bg-warm/30">
    <div className="container mx-auto px-4">
      <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <span className="text-primary font-bold uppercase tracking-wider text-sm">Galeria</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Nosso Espaço e Equipe 📸</h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          Conheça nossa clínica, equipe e os pets que cuidamos com muito amor.
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
      >
        {galleryPhotos.map((photo) => (
          <motion.div
            key={photo.label}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl shadow-md aspect-square"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-primary-foreground font-bold text-sm">{photo.label}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default GallerySection;
