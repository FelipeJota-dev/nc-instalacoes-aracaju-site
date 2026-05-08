import { motion } from "motion/react";
import { 
  Home, 
  Wrench, 
  Layers, 
  ToggleRight, 
  Power, 
  Lightbulb, 
  Zap, 
  Activity,
  MapPin
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Instalações elétricas residenciais",
      desc: "Projetos e execuções seguras para a sua casa.",
      icon: <Home className="text-nc-blue" size={32} />
    },
    {
      title: "Manutenção preventiva e corretiva",
      desc: "Evite curtos e danos ou repare falhas rapidamente.",
      icon: <Wrench className="text-nc-blue" size={32} />
    },
    {
      title: "Quadros de distribuição",
      desc: "Montagem, balanceamento e organização profissional.",
      icon: <Layers className="text-nc-blue" size={32} />
    },
    {
      title: "Troca de disjuntores",
      desc: "Dimensionamento correto para a carga necessária.",
      icon: <ToggleRight className="text-nc-blue" size={32} />
    },
    {
      title: "Instalação de tomadas e interruptores",
      desc: "Trocas, novas pontas e atualização de padrão.",
      icon: <Power className="text-nc-blue" size={32} />
    },
    {
      title: "Iluminação interna e externa",
      desc: "Instalação de lustres, LED, spots e refletores.",
      icon: <Lightbulb className="text-nc-blue" size={32} />
    },
    {
      title: "Padrão de entrada",
      desc: "Adequação ou nova instalação seguindo normas locais.",
      icon: <Zap className="text-nc-blue" size={32} />
    },
    {
      title: "Correção de problemas elétricos",
      desc: "Investigação cautelosa de fugas de energia e curtos.",
      icon: <Activity className="text-nc-blue" size={32} />
    },
    {
      title: "Atendimento em Aracaju e região",
      desc: "Equipe pronta para deslocamento até o seu endereço.",
      icon: <MapPin className="text-nc-blue" size={32} />
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-nc-blue">Serviços</span>
          </h2>
          <p className="text-lg text-gray-600">
            Trabalhamos com uma ampla gama de soluções elétricas, sempre prezando pela segurança da sua família e do seu patrimônio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>
              
              <a 
                href={`https://wa.me/5579998182472?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-nc-orange font-semibold hover:text-nc-orange-hover transition-colors group"
              >
                Solicitar orçamento
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
