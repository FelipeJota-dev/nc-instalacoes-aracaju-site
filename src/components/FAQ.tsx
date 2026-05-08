import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "A NC atende em quais regiões?",
      a: "Atende Aracaju e região."
    },
    {
      q: "Posso pedir orçamento pelo WhatsApp?",
      a: "Sim, o atendimento pode ser feito diretamente pelo WhatsApp pelo número (79) 99818-2472."
    },
    {
      q: "A empresa faz manutenção elétrica?",
      a: "Sim, realiza manutenção elétrica preventiva e corretiva para residências e comércios."
    },
    {
      q: "Trabalha com instalação elétrica?",
      a: "Sim, realiza instalações elétricas, tomadas, iluminação, quadros, disjuntores e outros serviços."
    },
    {
      q: "O serviço é feito com segurança?",
      a: "Sim, todos os serviços são feitos com foco em segurança, responsabilidade e bom acabamento."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas <span className="text-nc-blue">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre nosso atendimento e serviços elétricos.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-blue-200 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.q}</span>
                <div className={`transform transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180 text-nc-blue' : 'text-gray-400'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 bg-gray-50/50 pt-2 border-t border-gray-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
