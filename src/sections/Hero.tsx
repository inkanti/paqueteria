import { BUSINESS } from '../data/site';
import Flag from '../components/Flag';

/**
 * Hero — sección principal con gradiente azul, badge de banderas,
 * título de impacto y dos llamados a la acción (CTA).
 * Incluye decoración flotante con animación sutil.
 */
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue2 to-brand-navy text-white"
    >
      {/* ── Decoración de fondo animada ─────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Círculos flotantes translúcidos */}
        <div className="animate-float-soft absolute -left-20 top-16 h-64 w-64 rounded-full bg-white/5" />
        <div className="animate-float-soft absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-white/5 [animation-delay:1.5s]" />
        <div className="animate-float-soft absolute right-1/4 top-8 h-24 w-24 rounded-full bg-brand-yellow/10 [animation-delay:3s]" />
        {/* Overlay radial sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 text-center sm:pb-28 sm:pt-24">
        {/* Badge de banderas */}
        <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide backdrop-blur sm:text-sm">
          <Flag country="us" className="h-3.5 w-5" />
          <Flag country="sv" className="h-3.5 w-5" />
          Servicio de Encomiendas Denver ↔ El Salvador
        </p>

        {/* Título principal */}
        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Traemos tus compras de <span className="text-brand-yellow">USA</span> a{' '}
          <span className="text-brand-yellow">El Salvador</span>
        </h1>

        {/* Subtítulo */}
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
          Refrigeradoras, cocinas, vehículos, electrodomésticos y más.
          <span className="font-semibold text-white"> ¡Por cajas y por libras!</span> Salidas
          quincenales.
        </p>

        {/* Botones CTA */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#cotizar"
            className="w-full rounded-full bg-brand-red px-8 py-3.5 text-base font-bold shadow-xl transition-all hover:scale-105 hover:bg-brand-darkred sm:w-auto"
          >
            📦 Cotizar mi Envío
          </a>
          <a
            href={BUSINESS.phoneSVHref}
            className="w-full rounded-full border-2 border-white/70 px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-white hover:text-brand-blue sm:w-auto"
          >
            📞 Llamar Ahora
          </a>
        </div>

        {/* Mini-indicadores de confianza */}
        <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/80">
          <span className="inline-flex items-center gap-1.5">✈️ Aéreo 3–7 días</span>
          <span className="inline-flex items-center gap-1.5">🚢 Marítimo 15–30 días</span>
          <span className="inline-flex items-center gap-1.5">📍 Rastreo Constante</span>
        </div>
      </div>

      {/* Onda divisoria hacia la siguiente sección */}
      <svg
        aria-hidden
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        className="block h-10 w-full text-brand-gray sm:h-14"
      >
        <path d="M0,40 C360,90 1080,-10 1440,40 L1440,70 L0,70 Z" fill="currentColor" />
      </svg>
    </section>
  );
}
