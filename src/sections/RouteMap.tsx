import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Flag from '../components/Flag';

/**
 * RouteMap — mapa visual de la ruta Denver → El Salvador.
 * Fondo con patrón de puntos, flecha animada (SVG) y detalles
 * de modalidades debajo.
 */
export default function RouteMap() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* Patrón sutil de puntos (tipo mapa) */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #E84B1C 1.2px, transparent 1.2px)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          kicker="Nuestra ruta"
          title="De Denver a todo El Salvador"
          subtitle="Una sola bodega en Colorado conecta con cada rincón del país."
        />

        <Reveal>
          <div className="flex flex-col gap-10 rounded-3xl bg-white/90 p-8 shadow-xl ring-1 ring-slate-100 backdrop-blur sm:p-10">
            {/* ══ Sentido 1: Denver → El Salvador ══ */}
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
              {/* ── Origen ─────────────────────────────────────── */}
              <div className="text-center lg:text-left">
                <Flag country="us" className="h-10 w-16 drop-shadow-md" />
                <h3 className="mt-2 text-2xl font-extrabold text-brand-blue">Denver, Colorado</h3>
                <p className="mt-1 text-sm font-medium text-slate-600">5150 Colorado Blvd, Denver Colorado 80216</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                  Punto de origen
                </p>
              </div>

              {/* ── Flecha animada ─────────────────────────────── */}
              <div className="flex flex-col items-center" aria-hidden>
                <svg
                  viewBox="0 0 220 40"
                  className="hidden h-10 w-56 text-brand-red lg:block"
                  fill="none"
                >
                  <line
                    x1="4" y1="20" x2="196" y2="20"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="animate-dash-flow"
                  />
                  <path d="M196 8 L216 20 L196 32" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="animate-pulse-soft text-4xl text-brand-red lg:hidden">⬇️</span>
                <span className="mt-1 hidden rounded-full bg-brand-gray px-3 py-1 text-xs font-bold text-brand-blue lg:inline-block">
                  3,300 km aprox.
                </span>
              </div>

              {/* ── Destino ────────────────────────────────────── */}
              <div className="text-center lg:text-right">
                <Flag country="sv" className="h-10 w-16 drop-shadow-md" />
                <h3 className="mt-2 text-2xl font-extrabold text-brand-blue">El Salvador</h3>
                <p className="mt-1 text-sm font-medium text-slate-600">Todo el territorio nacional</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                  Entrega a domicilio
                </p>
              </div>
            </div>

            {/* ── Separador ── */}
            <div className="border-t border-dashed border-slate-200" aria-hidden />

            {/* ══ Sentido 2: El Salvador → Denver ══ */}
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
              {/* ── Origen ─────────────────────────────────────── */}
              <div className="text-center lg:text-left">
                <Flag country="sv" className="h-10 w-16 drop-shadow-md" />
                <h3 className="mt-2 text-2xl font-extrabold text-brand-blue">El Salvador</h3>
                <p className="mt-1 text-sm font-medium text-slate-600">Todo el territorio nacional</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                  Punto de origen
                </p>
              </div>

              {/* ── Flecha animada ─────────────────────────────── */}
              <div className="flex flex-col items-center" aria-hidden>
                <svg
                  viewBox="0 0 220 40"
                  className="hidden h-10 w-56 text-brand-blue lg:block"
                  fill="none"
                >
                  <line
                    x1="4" y1="20" x2="196" y2="20"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="animate-dash-flow"
                  />
                  <path d="M196 8 L216 20 L196 32" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="animate-pulse-soft text-4xl text-brand-blue lg:hidden">⬇️</span>
                <span className="mt-1 hidden rounded-full bg-brand-gray px-3 py-1 text-xs font-bold text-brand-blue lg:inline-block">
                  3,300 km aprox.
                </span>
              </div>

              {/* ── Destino ────────────────────────────────────── */}
              <div className="text-center lg:text-right">
                <Flag country="us" className="h-10 w-16 drop-shadow-md" />
                <h3 className="mt-2 text-2xl font-extrabold text-brand-blue">Denver, Colorado</h3>
                <p className="mt-1 text-sm font-medium text-slate-600">5150 Colorado Blvd, Denver Colorado 80216</p>
                {/* <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                  Entrega a domicilio
                </p>    */}
              </div>
            </div>
          </div>
        </Reveal>
        

        {/* ── Detalles de modalidades ────────────────────────── */}
        <Reveal delay={150}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              '✈️ Avión 3–7 días',
              '🚢 Barco 45–60 días',
              '📦 Cajas y libras',
              '🚗 Vehículos',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-brand-blue/20 bg-white px-4 py-2 text-sm font-semibold text-brand-blue shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
