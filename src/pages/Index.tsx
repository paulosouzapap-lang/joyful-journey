import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar, MessageCircle, Heart, Shield, Stethoscope, Syringe,
  FlaskConical, ClipboardCheck, HeartPulse, Sparkles, ShoppingBag,
  Star, MapPin, Clock, Phone, Instagram, Facebook, PawPrint,
  ChevronRight, Users, Bone, Package, Scissors, Dog, Menu, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import heroImg from "@/assets/hero-vet.jpg";
import aboutImg from "@/assets/about-pets.jpg";
import logo from "@/assets/unipet-logo.png";
import galleryTeam from "@/assets/gallery-team.jpg";
import galleryClinic from "@/assets/gallery-clinic.jpg";
import galleryCat from "@/assets/gallery-cat.jpg";
import galleryPetshop from "@/assets/gallery-petshop.jpg";
import galleryVaccine from "@/assets/gallery-vaccine.jpg";
import galleryReception from "@/assets/gallery-reception.jpg";

const WHATSAPP_URL = "https://wa.me/5500000000000";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const services = [
  { icon: Stethoscope, title: "Consultas Veterinárias", desc: "Atendimento completo e cuidadoso para a saúde do seu pet." },
  { icon: Syringe, title: "Vacinação", desc: "Protocolo vacinal atualizado para proteção total." },
  { icon: FlaskConical, title: "Exames Laboratoriais", desc: "Diagnósticos precisos com tecnologia de ponta." },
  { icon: ClipboardCheck, title: "Check-up Preventivo", desc: "Prevenção é o melhor cuidado para seu companheiro." },
  { icon: HeartPulse, title: "Atendimento Clínico", desc: "Cuidados clínicos gerais com atenção e dedicação." },
  { icon: Sparkles, title: "Orientações de Saúde", desc: "Dicas e acompanhamento para o bem-estar animal." },
];

const petShopItems = [
  { icon: Package, title: "Rações Premium" },
  { icon: Bone, title: "Petiscos" },
  { icon: Scissors, title: "Higiene" },
  { icon: Dog, title: "Acessórios" },
  { icon: Heart, title: "Brinquedos" },
];

const differentials = [
  { icon: Heart, text: "Atendimento atencioso e humanizado" },
  { icon: Users, text: "Profissionais dedicados e carinhosos" },
  { icon: Shield, text: "Ambiente acolhedor e seguro" },
  { icon: Sparkles, text: "Compromisso com a comunidade LGBTQ+" },
  { icon: PawPrint, text: "Espaço respeitoso e confortável para todos" },
];

const reviews = [
  { name: "Ana Paula", text: "Atendimento maravilhoso desde a recepção até a consulta. Minha pet ficou tranquila e bem cuidada.", stars: 5 },
  { name: "Carlos Eduardo", text: "Profissionais atenciosos, diagnóstico preciso e muito carinho com os animais.", stars: 5 },
  { name: "Mariana Silva", text: "Gostei muito da localização, atendimento e preços justos. Recomendo a todos!", stars: 5 },
];

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#petshop", label: "Pet Shop" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#avaliacoes", label: "Avaliações" },
    { href: "#galeria", label: "Galeria" },
    { href: "#agendar", label: "Agendar" },
    { href: "#contato", label: "Contato" },
  ];

  const [bookingDate, setBookingDate] = useState<Date>();
  const [formData, setFormData] = useState({
    tutorName: "", petName: "", serviceType: "", time: "", phone: "",
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de agendar uma consulta.\n\nTutor: ${formData.tutorName}\nPet: ${formData.petName}\nServiço: ${formData.serviceType}\nData: ${bookingDate ? format(bookingDate, "dd/MM/yyyy") : ""}\nHorário: ${formData.time}\nTelefone: ${formData.phone}`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b">
        <nav className="container mx-auto flex items-center justify-between py-3 px-4">
          <img src={logo} alt="Unipet Logo" className="h-12 md:h-20 w-auto" />
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-foreground/80">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-primary transition-colors">{link.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-full font-bold hidden sm:inline-flex">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </Button>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 font-semibold py-2 px-3 rounded-lg hover:bg-muted hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild size="sm" className="rounded-full font-bold w-full mt-2">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-20 min-h-[90vh] flex items-center">
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
            <Button asChild size="lg" variant="outline" className="rounded-full text-base font-bold bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <img src={aboutImg} alt="Pets na clínica" className="rounded-2xl shadow-xl w-full max-w-md mx-auto" />
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

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20">
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
                <Card className="h-full hover:shadow-lg transition-shadow border-0 bg-card shadow-sm">
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

      {/* PET SHOP */}
      <section id="petshop" className="py-20 bg-mint/30">
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

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="py-20 bg-lavender/30">
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

      {/* AVALIAÇÕES */}
      <section id="avaliacoes" className="py-20">
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
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
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

      {/* GALERIA */}
      <section id="galeria" className="py-20 bg-warm/30">
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
            {[
              { src: galleryTeam, alt: "Nossa equipe veterinária", label: "Nossa Equipe" },
              { src: galleryClinic, alt: "Sala de atendimento", label: "Consultório" },
              { src: galleryCat, alt: "Gatinho sendo examinado", label: "Cuidado Felino" },
              { src: galleryPetshop, alt: "Pet shop e banho", label: "Pet Shop" },
              { src: galleryVaccine, alt: "Vacinação de filhote", label: "Vacinação" },
              { src: galleryReception, alt: "Recepção da clínica", label: "Recepção" },
            ].map((photo) => (
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

      {/* AGENDAMENTO */}
      <section id="agendar" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Agendamento</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Agende Online 📅</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Seu pet merece cuidado profissional. Agende com quem realmente se importa.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Card className="max-w-2xl mx-auto border-0 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleBooking} className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="tutorName">Nome do Tutor</Label>
                    <Input id="tutorName" placeholder="Seu nome" required
                      value={formData.tutorName}
                      onChange={(e) => setFormData({ ...formData, tutorName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="petName">Nome do Pet</Label>
                    <Input id="petName" placeholder="Nome do seu pet" required
                      value={formData.petName}
                      onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Tipo de Atendimento</Label>
                    <Select onValueChange={(v) => setFormData({ ...formData, serviceType: v })}>
                      <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Data</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("w-full justify-start font-normal", !bookingDate && "text-muted-foreground")}>
                          <Calendar className="h-4 w-4 mr-2" />
                          {bookingDate ? format(bookingDate, "dd/MM/yyyy") : "Escolha a data"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={bookingDate}
                          onSelect={setBookingDate}
                          disabled={(date) => date < new Date()}
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label>Horário</Label>
                    <Select onValueChange={(v) => setFormData({ ...formData, time: v })}>
                      <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                      <SelectContent>
                        {["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"].map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone / WhatsApp</Label>
                    <Input id="phone" placeholder="(00) 00000-0000" required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" size="lg" className="w-full rounded-full font-bold text-base">
                      <MessageCircle className="h-5 w-5" /> Enviar Agendamento via WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 bg-foreground text-primary-foreground">
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
                <Button asChild className="rounded-full font-bold">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" /> WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="rounded-full font-bold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
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

      {/* RODAPÉ */}
      <footer className="bg-foreground border-t border-primary-foreground/10 py-8">
        <div className="container mx-auto px-4 text-center space-y-4">
          <img src={logo} alt="Unipet" className="h-10 mx-auto brightness-200" />
          <div className="flex justify-center gap-4">
            <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
          <p className="text-primary-foreground/50 text-sm">
            Unipet — Amor, cuidado e respeito em cada atendimento 🐾💜
          </p>
          <p className="text-primary-foreground/30 text-xs">
            © {new Date().getFullYear()} Unipet. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-transform hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
};

export default Index;
