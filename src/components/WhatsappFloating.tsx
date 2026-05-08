import { MessageCircle } from "lucide-react";

export default function WhatsappFloating() {
  return (
    <a
      href="https://wa.me/5579998182472?text=Ol%C3%A1%2C%20estou%20no%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all flex items-center justify-center group"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle size={32} />
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-100">
        Orçamento Rápido
      </span>
      {/* Ripple effect */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping -z-10"></span>
    </a>
  );
}
