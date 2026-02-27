import { LucideIcon } from "lucide-react";
import {
  Stethoscope, Syringe, FlaskConical, ClipboardCheck, HeartPulse, Sparkles,
  Package, Bone, Scissors, Dog, Heart, Shield, Users, PawPrint,
} from "lucide-react";
import servicesConsultation from "@/assets/services-consultation.jpg";
import servicesVaccine from "@/assets/services-vaccine.jpg";
import servicesLab from "@/assets/services-lab.jpg";
import servicesCheckup from "@/assets/services-checkup.jpg";
import servicesClinical from "@/assets/services-clinical.jpg";
import servicesGuidance from "@/assets/services-guidance.jpg";
import galleryTeam from "@/assets/gallery-team.jpg";
import galleryClinic from "@/assets/gallery-clinic.jpg";
import galleryCat from "@/assets/gallery-cat.jpg";
import galleryPetshop from "@/assets/gallery-petshop.jpg";
import galleryVaccine from "@/assets/gallery-vaccine.jpg";
import galleryReception from "@/assets/gallery-reception.jpg";

export const WHATSAPP_URL = "https://wa.me/5500000000000";

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  img: string | null;
}

export const services: ServiceItem[] = [
  { icon: Stethoscope, title: "Consultas Veterinárias", desc: "Atendimento completo e cuidadoso para a saúde do seu pet.", img: servicesConsultation },
  { icon: Syringe, title: "Vacinação", desc: "Protocolo vacinal atualizado para proteção total.", img: servicesVaccine },
  { icon: FlaskConical, title: "Exames Laboratoriais", desc: "Diagnósticos precisos com tecnologia de ponta.", img: servicesLab },
  { icon: ClipboardCheck, title: "Check-up Preventivo", desc: "Prevenção é o melhor cuidado para seu companheiro.", img: servicesCheckup },
  { icon: HeartPulse, title: "Atendimento Clínico", desc: "Cuidados clínicos gerais com atenção e dedicação.", img: servicesClinical },
  { icon: Sparkles, title: "Orientações de Saúde", desc: "Dicas e acompanhamento para o bem-estar animal.", img: servicesGuidance },
];

export interface PetShopItem {
  icon: LucideIcon;
  title: string;
}

export const petShopItems: PetShopItem[] = [
  { icon: Package, title: "Rações Premium" },
  { icon: Bone, title: "Petiscos" },
  { icon: Scissors, title: "Higiene" },
  { icon: Dog, title: "Acessórios" },
  { icon: Heart, title: "Brinquedos" },
];

export interface Differential {
  icon: LucideIcon;
  text: string;
}

export const differentials: Differential[] = [
  { icon: Heart, text: "Atendimento atencioso e humanizado" },
  { icon: Users, text: "Profissionais dedicados e carinhosos" },
  { icon: Shield, text: "Ambiente acolhedor e seguro" },
  { icon: Sparkles, text: "Compromisso com a comunidade LGBTQ+" },
  { icon: PawPrint, text: "Espaço respeitoso e confortável para todos" },
];

export interface Review {
  name: string;
  text: string;
  stars: number;
}

export const reviews: Review[] = [
  { name: "Ana Paula", text: "Atendimento maravilhoso desde a recepção até a consulta. Minha pet ficou tranquila e bem cuidada.", stars: 5 },
  { name: "Carlos Eduardo", text: "Profissionais atenciosos, diagnóstico preciso e muito carinho com os animais.", stars: 5 },
  { name: "Mariana Silva", text: "Gostei muito da localização, atendimento e preços justos. Recomendo a todos!", stars: 5 },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const faqItems: FaqItem[] = [
  { q: "Preciso agendar para ser atendido?", a: "Sim! Trabalhamos com agendamento para garantir um atendimento organizado, sem longas esperas, e com toda a atenção que seu pet merece. Agende pelo WhatsApp ou pelo formulário do site." },
  { q: "Quais animais vocês atendem?", a: "Atendemos cães e gatos de todas as raças e idades, desde filhotes até idosos, sempre com carinho e dedicação." },
  { q: "Vocês atendem emergências?", a: "Nosso foco é o atendimento agendado para consultas, check-ups e vacinação. Em caso de emergência, entre em contato pelo WhatsApp para orientações e encaminhamento." },
  { q: "Quais formas de pagamento são aceitas?", a: "Aceitamos dinheiro, Pix, cartões de débito e crédito. Consulte condições especiais de parcelamento na recepção." },
  { q: "O pet shop tem entrega?", a: "No momento, nossos produtos estão disponíveis apenas na loja física. Venha nos visitar e aproveite para conhecer nosso espaço!" },
  { q: "A clínica é um ambiente seguro para todos?", a: "Sim! A Unipet é um espaço inclusivo, acolhedor e seguro para todos os tutores e pets. Valorizamos o respeito, a diversidade e tratamos cada pessoa e animal com carinho." },
];

export interface GalleryPhoto {
  src: string;
  alt: string;
  label: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  { src: galleryTeam, alt: "Equipe de veterinários e auxiliares da clínica Unipet", label: "Nossa Equipe" },
  { src: galleryClinic, alt: "Sala de consulta e atendimento veterinário moderna e equipada", label: "Consultório" },
  { src: galleryCat, alt: "Gato sendo examinado com cuidado por veterinária especializada", label: "Cuidado Felino" },
  { src: galleryPetshop, alt: "Pet shop com produtos de higiene, rações e acessórios para animais", label: "Pet Shop" },
  { src: galleryVaccine, alt: "Filhote de cachorro recebendo vacinação com protocolo atualizado", label: "Vacinação" },
  { src: galleryReception, alt: "Recepção acolhedora da clínica veterinária Unipet", label: "Recepção" },
];

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#petshop", label: "Pet Shop" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#galeria", label: "Galeria" },
  { href: "#faq", label: "FAQ" },
  { href: "#agendar", label: "Agendar" },
  { href: "#contato", label: "Contato" },
];
