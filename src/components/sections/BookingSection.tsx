import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { services, WHATSAPP_URL, fadeUp } from "@/data/content";

const BookingSection = () => {
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
    <section id="agendar" aria-label="Formulário de agendamento de consulta veterinária online" className="py-20 bg-primary/5">
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
  );
};

export default BookingSection;
