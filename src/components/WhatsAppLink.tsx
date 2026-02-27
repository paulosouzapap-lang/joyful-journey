import { PawPrint } from "lucide-react";
import { WHATSAPP_URL } from "@/data/content";

interface WhatsAppLinkProps {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-3 text-base",
};

const WhatsAppLink = ({ children, className = "", size = "md", fullWidth = false }: WhatsAppLinkProps) => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full font-bold shadow-[0_8px_30px_rgba(34,197,94,0.45)] hover:shadow-[0_12px_40px_rgba(34,197,94,0.55)] hover:scale-105 transition-all duration-300 ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`}
  >
    <PawPrint className="h-4 w-4" />
    {children || "WhatsApp"}
  </a>
);

export default WhatsAppLink;
