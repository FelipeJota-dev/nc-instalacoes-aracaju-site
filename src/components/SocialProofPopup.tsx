import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X } from "lucide-react";

export default function SocialProofPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [viewerCount, setViewerCount] = useState(7);

  useEffect(() => {
    // Initial delay of 2 minutes
    const initialDelay = setTimeout(() => {
      showPopup();
    }, 120000);

    return () => clearTimeout(initialDelay);
  }, []);

  const showPopup = () => {
    // Randomize viewers between 4 and 12
    setViewerCount(Math.floor(Math.random() * (12 - 4 + 1)) + 4);
    setIsVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
      // Wait another 2 minutes, then show again
      setTimeout(() => {
        showPopup();
      }, 120000);
    }, 5000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-24 left-4 z-40 bg-white shadow-xl rounded-xl border border-gray-100 p-4 max-w-xs flex items-start gap-4"
        >
          <div className="bg-blue-50 text-nc-blue p-2 rounded-full">
            <Eye size={20} />
          </div>
          <div>
            <p className="text-gray-800 text-sm font-semibold">
              <span className="text-nc-blue font-bold">{viewerCount} pessoas</span> vendo este site agora.
            </p>
            <p className="text-xs text-gray-500 mt-1">Eletricista concorrido, não perca tempo!</p>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 self-start"
            aria-label="Fechar notificação"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
