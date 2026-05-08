export default function Footer() {
  return (
    <footer className="bg-nc-blue-dark text-white pt-16 pb-8 border-t-4 border-nc-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="flex flex-col space-y-4">
            <img 
              src="https://i.imgur.com/1eXY3xf.png" 
              alt="NC Instalações Logo" 
              className="h-16 w-auto object-contain bg-white p-2 rounded-lg"
            />
            <p className="text-gray-300 mt-4 max-w-sm">
              Serviços elétricos com qualidade, segurança e responsabilidade em Aracaju e região.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-xl font-bold mb-2">Links Rápidos</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#inicio" className="text-gray-300 hover:text-white transition-colors">Início</a>
              <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a>
              <a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</a>
              <a href="#galeria" className="text-gray-300 hover:text-white transition-colors">Galeria</a>
              <a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a>
            </nav>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-xl font-bold mb-2">Contato</h4>
            <div className="text-gray-300 space-y-2">
              <p>(79) 99818-2472</p>
              <p>Tv. Dois, 217 - Lamarão</p>
              <p>Aracaju - SE, 49088-043</p>
            </div>
            <a 
              href="https://wa.me/5579998182472" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-nc-yellow hover:text-white font-medium transition-colors"
            >
              Chamar no WhatsApp &rarr;
            </a>
          </div>

        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>&copy; {new Date().getFullYear()} NC Instalações Serviços e Manutenção. Todos os direitos reservados.</p>
          <p className="font-semibold text-gray-300">
            Eletricista em Aracaju - SE | NC Instalações Serviços e Manutenção
          </p>
        </div>
      </div>
    </footer>
  );
}
