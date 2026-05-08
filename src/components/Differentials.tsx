import { motion } from "motion/react";
import { UserCheck, Shield, Clock, HeartHandshake, Star, MessageSquare } from "lucide-react";

export default function Differentials() {
  const items = [
    { title: "Atendimento profissional", icon: UserCheck },
    { title: "Serviço com qualidade e segurança", icon: Shield },
    { title: "Compromisso com prazo", icon: Clock },
    { title: "Responsabilidade do início ao fim", icon: HeartHandshake },
    { title: "Boa avaliação no Google", icon: Star },
    { title: "Atendimento direto pelo WhatsApp", icon: MessageSquare },
  ];

  return (
    <section className="py-20 bg-nc-blue relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-5"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-nc-orange opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Por que escolher a <span className="text-nc-yellow">NC Instalações?</span>
          </h2>
          <div className="w-24 h-1 bg-nc-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="bg-nc-orange text-white p-3 rounded-lg shadow-md flex-shrink-0">
                  <Icon size={24} />
                </div>
                <h3 className="text-white font-semibold text-lg leading-tight">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
