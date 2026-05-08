import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function Reviews() {
  const reviews = [
    { name: "Wilson Santos", text: "Serviço de qualidade muito bom ✔️" },
    { name: "Rolien Melo", text: "Muito bom!!! Serviço profissional." },
    { name: "Givas Givass", text: "Serviços foram feitos com responsabilidade, comprometimento e dentro do prazo prometido." },
    { name: "Nivia Santos", text: "Empresa super competente, bom serviço e entrega no prazo." },
    { name: "Gladston Santos", text: "Profissional 100% correto, super recomendo." },
    { name: "Mauricio Santos", text: "Serviço com qualidade e profissionalismo." },
    { name: "Joana Rodrigues", text: "Excelente profissional, nesse eu indico e confio." },
    { name: "Milton Nicacio", text: "Empresa top, compromisso e qualidade." },
  ];

  return (
    <section id="avaliacoes" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex text-nc-yellow mb-4 drop-shadow-sm">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={28} fill="currentColor" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que os <span className="text-nc-blue">clientes dizem</span>
          </h2>
          <p className="bg-white px-6 py-2 rounded-full border border-gray-100 shadow-sm text-gray-700 font-medium font-sans">
            <span className="text-gray-900 font-bold">4,8/5</span> com <span className="text-gray-900 font-bold">20</span> avaliações no Google
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Quote className="text-gray-200 absolute top-4 right-4" size={40} />
              <div className="flex text-nc-yellow mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic text-sm md:text-base leading-relaxed relative z-10">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-nc-blue flex items-center justify-center font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500">Cliente verificado</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
