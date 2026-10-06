/**
 * Home — página única (one-page) de Alvaro Flores Express.
 * Ensambla todas las secciones en el orden definido por el cliente.
 * (La calculadora fue retirada a petición del cliente — oct 2026)
 */
import TopBar from '../sections/TopBar';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import HowItWorks from '../sections/HowItWorks';
import Services from '../sections/Services';
import Boxes from '../sections/Boxes';
import RouteMap from '../sections/RouteMap';
import Products from '../sections/Products';
import Gallery from '../sections/Gallery';
import Frequency from '../sections/Frequency';
import Testimonials from '../sections/Testimonials';
// import Tracking from '../sections/Tracking'; // ⏸️ Rastreo en vivo desactivado por ahora (oct 2026)
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

        {/* 6. Ejemplos de cajas */}
        <Boxes />

        {/* 7. Mapa de ruta Denver → El Salvador */}
        <RouteMap />

        {/* 8. ¿Qué podemos traerte? (con fotos reales) */}
        <Products />

        {/* 9. Galería de productos en movimiento */}
        <Gallery />

        {/* 10. Frecuencia de salidas */}
        <Frequency />

        {/* 11. Testimonios (orden aleatorio en cada carga) */}
        <Testimonials />

        {/* 12. ⭐ Sistema de seguimiento en vivo — DESACTIVADO por ahora.
            Para reactivarlo: descomentar la importación y esta línea.
        <Tracking />
        */}

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
