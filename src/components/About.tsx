import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const badges = [
    "Profissional legalizado",
    "Atendimento com responsabilidade",
    "Serviço limpo e bem executado",
    "Compromisso com prazo"
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square max-w-md mx-auto lg:max-w-none border-4 border-white ring-1 ring-gray-100">
              <img 
                src="https://i.imgur.com/MtlVLfy.png" 
                alt="Milton - Proprietário da NC Instalações" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-bold text-xl">Milton</p>
                <p className="text-gray-200 text-sm">Proprietário e Eletricista Responsável</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-nc-blue font-semibold rounded-full text-sm">
              Conheça Nossa Empresa
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Sobre a <span className="text-nc-blue">NC Instalações Serviços e Manutenção</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              À frente da NC Instalações está Milton, profissional reconhecido em Aracaju pela responsabilidade, qualidade no serviço e compromisso com o cliente. A empresa atende instalações, manutenções e soluções elétricas com foco em segurança, bom acabamento e pontualidade.
            </p>
            
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <div key={index} className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <CheckCircle2 className="text-nc-orange flex-shrink-0 mt-0.5" size={20} />
                  <span className="font-medium text-gray-700">{badge}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <img 
                src="https://i.imgur.com/1eXY3xf.png" 
                alt="Logotipo NC Instalações" 
                className="h-16 w-auto opacity-80"
              />
            </div>
            
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
