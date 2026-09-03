/**
 * Home — página única (one-page) de Alvaro Flores Cargo Express.
 * Ensambla todas las secciones en el orden definido por el cliente.
 */
import TopBar from '../sections/TopBar';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import HowItWorks from '../sections/HowItWorks';
import Services from '../sections/Services';
import Calculator from '../sections/Calculator';
import Boxes from '../sections/Boxes';
import RouteMap from '../sections/RouteMap';
import Products from '../sections/Products';
import Frequency from '../sections/Frequency';
import Testimonials from '../sections/Testimonials';

import Faq from '../sections/Faq';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      {/* 1. Barra superior con dirección y teléfonos */}
      <TopBar />

      {/* 2. Navegación sticky */}
      <Header />

      <main>
        {/* 3. Hero principal */}
        <Hero />

        {/* 4. Cómo funciona (4 pasos) */}
        <HowItWorks />

        {/* 5. Servicios (4 tarjetas) */}
        <Services />

        {/* 6. Calculadora de envío interactiva */}
        <Calculator />

        {/* 7. Ejemplos de cajas */}
        <Boxes />

        {/* 8. Mapa de ruta Denver → El Salvador */}
        <RouteMap />

        {/* 9. ¿Qué podemos traerte? */}
        <Products />

        {/* 10. Frecuencia de salidas */}
        <Frequency />

        {/* 11. Testimonios (orden aleatorio en cada carga) */}
        <Testimonials />

        

        {/* 13. Preguntas frecuentes */}
        <Faq />

        {/* 14. Contacto */}
        <Contact />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <FloatingWhatsApp />
    </>
  );
}
