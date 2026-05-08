import { motion } from "motion/react";
import { Star, ShieldCheck, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-nc-yellow/20 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold self-start border border-nc-yellow/50">
              <div className="flex text-nc-yellow drop-shadow-sm">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} fill="currentColor" />
                ))}
              </div>
              <span>4,8 estrelas no Google • 20 avaliações</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nc-blue leading-tight">
              Eletricista em Aracaju com Qualidade, <span className="text-nc-orange">Segurança e Responsabilidade</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl md:text-xl">
              A NC Instalações Serviços e Manutenção realiza serviços elétricos residenciais e comerciais com compromisso, prazo e atendimento profissional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="https://wa.me/5579998182472?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-nc-orange hover:bg-nc-orange-hover text-white px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
              >
                Solicitar orçamento no WhatsApp
              </a>
              <a 
                href="#servicos"
                className="flex items-center justify-center bg-white border-2 border-nc-blue text-nc-blue hover:bg-nc-blue hover:text-white px-8 py-3.5 rounded-full font-bold text-base transition-all text-center"
              >
                Ver serviços
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-green-600" size={20} />
                <span>Atendimento Profissional</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-nc-blue" size={20} />
                <span>Compromisso com o Prazo</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://i.imgur.com/9QGqU5S.png" 
                alt="Eletricista trabalhando em quadro de distribuição" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nc-blue/40 to-transparent"></div>
            </div>
            
            {/* Floating decoration badge */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-green-100 p-2 rounded-full">
                <ShieldCheck className="text-green-600" size={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 block">Certificado</span>
                <span className="text-xs text-gray-500">Segurança Garantida</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
