import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryImages = [
  "https://i.imgur.com/vMKnwUz.png",
  "https://i.imgur.com/xUDp33D.png",
  "https://i.imgur.com/jadAzHZ.png",
  "https://i.imgur.com/VNDszE9.png",
  "https://i.imgur.com/wgTYSQf.png",
  "https://i.imgur.com/AL1helU.png",
  "https://i.imgur.com/F9HAM2i.png",
  "https://i.imgur.com/C4ZgSiq.png",
  "https://i.imgur.com/q9GgV60.png",
  "https://i.imgur.com/6H34Hi6.png",
  "https://i.imgur.com/kcHREf4.png",
  "https://i.imgur.com/eoPJClh.png",
  "https://i.imgur.com/vfOTH5f.png",
  "https://i.imgur.com/dSnkd8J.png",
  "https://i.imgur.com/voCj9GM.png",
  "https://i.imgur.com/VvRqfaU.png",
  "https://i.imgur.com/wE08FTs.png",
  "https://i.imgur.com/DYMCeoQ.png",
  "https://i.imgur.com/B2x8Zil.png",
  "https://i.imgur.com/hOBpgZS.png",
  "https://i.imgur.com/Gmg8SxU.png",
];

export default function Gallery() {
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIdx(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling behind lightbox
  };

  const closeLightbox = () => {
    setSelectedImageIdx(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((selectedImageIdx + 1) % galleryImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx !== null) {
      setSelectedImageIdx(
        (selectedImageIdx - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serviços <span className="text-nc-blue">realizados</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira a qualidade e o capricho nos serviços elétricos que entregamos aos nossos clientes em Aracaju e região.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-sm bg-gray-100"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={src}
                alt={`Serviço realizado ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-nc-blue/0 group-hover:bg-nc-blue/40 transition-colors flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100 duration-300" size={32} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-medium text-gray-800 mb-6">Gostou do resultado? Solicite seu orçamento.</p>
          <a
            href="https://wa.me/5579998182472?text=Ol%C3%A1%2C%20vi%20as%20fotos%20dos%20servi%C3%A7os%20no%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-nc-orange hover:bg-nc-orange-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Falar pelo WhatsApp agora
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors"
              onClick={closeLightbox}
              title="Fechar"
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 p-3 rounded-full transition-colors"
              onClick={prevImage}
              title="Anterior"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.img
              key={selectedImageIdx}
              src={galleryImages[selectedImageIdx]}
              alt="Serviço executado em destaque"
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()} // don't close when clicking image
            />

            <button
              className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 p-3 rounded-full transition-colors"
              onClick={nextImage}
              title="Próxima"
            >
              <ChevronRight size={36} />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 bg-black/50 px-4 py-1 rounded-full text-sm">
              {selectedImageIdx + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
