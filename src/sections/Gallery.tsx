import { useRef } from 'react';
import SectionHeading from '../components/SectionHeading';

/**
 * Gallery — carrusel de fotos reales de productos con flechas
 * de navegación (‹ ›). También se puede desplazar con el dedo
 * en móvil (scroll horizontal con scroll-snap).
 */
const GALLERY: { img: string; label: string }[] = [
  { img: '/images/web/smartwatch.jpg', label: 'Smartwatch' },
  { img: '/images/web/laptop.jpg', label: 'Laptops' },
  { img: '/images/web/perfume.jpg', label: 'Perfumes' },
  { img: '/images/web/joyeria.jpg', label: 'Joyería' },
  { img: '/images/web/carteras.jpg', label: 'Carteras y bolsos' },
  { img: '/images/web/quesadilla.jpg', label: 'Quesadillas' },
  { img: '/images/web/tamalitos.jpg', label: 'Tamalitos de elote' },
  { img: '/images/web/mariscos.jpg', label: 'Mariscos' },
  { img: '/images/web/frijoles.jpg', label: 'Frijoles frescos' },
  { img: '/images/web/consolas.jpg', label: 'Consolas de videojuego' },
  { img: '/images/web/aire-acondicionado.jpg', label: 'Aires acondicionados' },
  { img: '/images/web/bateria-cocina.jpg', label: 'Baterías de cocina' },
  { img: '/images/web/cafetera.jpg', label: 'Cafeteras espresso' },
  { img: '/images/web/chile.jpg', label: 'Chile para frutas' },
];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  /** Desplaza el carrusel una "página" hacia adelante o atrás */
  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.8 * dir;
    track.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const arrowCls =
    'flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-2xl font-black text-white shadow-lg transition-all hover:scale-110 hover:bg-brand-darkred active:scale-95';

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          kicker="Y mucho más"
          title="También traemos esto"
          subtitle="Desde tecnología hasta comida típica: si lo querés, lo traemos."
        />

        <div className="relative">
          {/* ── Pista del carrusel (scroll-snap) ─────────────── */}
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {GALLERY.map((item) => (
              <figure
                key={item.label}
                className="w-44 shrink-0 snap-start overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-100 transition-shadow hover:shadow-xl sm:w-56"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </figure>
            ))}
          </div>

          {/* ── Flechas de navegación ────────────────────────── */}
          <div className="mt-4 flex items-center justify-center gap-4">
            <button type="button" onClick={() => scrollBy(-1)} aria-label="Anterior" className={arrowCls}>
              ‹
            </button>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Deslizá o usá las flechas
            </span>
            <button type="button" onClick={() => scrollBy(1)} aria-label="Siguiente" className={arrowCls}>
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
