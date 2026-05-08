import { motion } from "motion/react";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          <div className="w-full lg:w-1/2 p-8 md:p-12 bg-nc-blue text-white flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
              <p className="text-blue-100 mb-10 text-lg">
                Precisa de um eletricista de confiança em Aracaju? Fale conosco agora mesmo para tirar dúvidas ou solicitar orçamento.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-5">
                    <Phone className="text-nc-yellow" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm text-blue-200 uppercase tracking-wider font-semibold mb-1">Telefone / WhatsApp</h4>
                    <p className="text-xl font-medium">(79) 99818-2472</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-5">
                    <MapPin className="text-nc-yellow" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm text-blue-200 uppercase tracking-wider font-semibold mb-1">Endereço</h4>
                    <p className="text-lg">Tv. Dois, 217 - Lamarão</p>
                    <p className="text-blue-100">Aracaju - SE, 49088-043</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-5">
                    <Clock className="text-nc-yellow" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm text-blue-200 uppercase tracking-wider font-semibold mb-1">Horário de Atendimento</h4>
                    <p className="text-lg">Seg - Sex: 08:00 às 18:00</p>
                    <p className="text-blue-100">Sábado: 08:00 às 12:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a
                  href="https://wa.me/5579998182472?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20eletricista."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-nc-orange hover:bg-white hover:text-nc-orange text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg w-full sm:w-auto text-center"
                >
                  <MessageCircle size={24} />
                  Falar com a NC no WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.064560738491!2d-37.0726249!3d-10.8827056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3a3bfeec449%3A0xe7a50ca7da11d8ce!2sR.%20Dois%20(Loteamento%20Nova%20Liberdade)%2C%20217%20-%20Jardim%20Centenario%2C%20Aracaju%20-%20SE%2C%2049088-043!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full object-cover"
              title="Mapa de localização NC Instalações"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
