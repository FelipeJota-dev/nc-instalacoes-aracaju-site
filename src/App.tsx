import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Differentials from "./components/Differentials";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialProofPopup from "./components/SocialProofPopup";
import WhatsappFloating from "./components/WhatsappFloating";

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Gallery />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <SocialProofPopup />
      <WhatsappFloating />
    </div>
  );
}
