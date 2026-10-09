import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { BOXES } from '../data/site';

/**
 * Boxes — tabla de precios "Cajas por Barco" con medidas oficiales.
 * 4 tarjetas con la medida en pulgadas y el precio; la nota recuerda
 * que TODAS incluyen entrega hasta la puerta de la casa en El Salvador.
 */
export default function Boxes() {
  return (
    <section className="bg-brand-gray py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          kicker="🚢 Envío marítimo"
          title="Cajas por Barco — Medidas y Precios"
          subtitle="Precio fijo por caja según su tamaño. Llená tu caja sin preocuparte por la báscula."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BOXES.map((box, i) => (
            <Reveal key={box.size} delay={i * 120}>
              <article className="relative flex h-full flex-col items-center overflow-hidden rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Franja superior roja estilo publicidad */}
                <div className="absolute inset-x-0 top-0 h-2 bg-brand-red" aria-hidden />

                {box.tag && (
                  <span className="absolute right-3 top-4 rounded-full bg-brand-yellow px-3 py-1 text-xs font-black uppercase text-brand-ink shadow">
                    {box.tag}
                  </span>
                )}

                {/* Icono de caja con la medida */}
                <span className="mt-4 text-5xl" aria-hidden>📦</span>

                <h3 className="mt-3 text-2xl font-black tracking-tight text-brand-blue">
                  {box.size}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  {box.unit}
                </p>

                {/* Precio destacado */}
                <p className="mt-4 text-4xl font-black text-brand-red">
                  ${box.price}
                  <span className="text-base font-semibold text-slate-500">.00</span>
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">Precio fijo por caja</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Nota oficial: entrega a domicilio incluida */}
        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-2xl rounded-2xl bg-brand-blue px-6 py-4 text-center text-sm font-bold text-white shadow-md sm:text-base">
            🏠 Todas las cajas se entregan hasta la puerta de la casa en El Salvador
          </p>
        </Reveal>

        {/* ── Notas de tarifas especiales ────────────────────── */}
        <Reveal delay={280}>
          <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-dashed border-brand-red/40 bg-white p-5 text-center">
              <p className="text-2xl" aria-hidden>📦</p>
              <p className="mt-2 text-sm font-bold text-brand-blue">¿Ya tenés tu propia caja?</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Aceptamos cualquier otra medida de caja que el cliente ya tenga. Te cotizamos
                según su tamaño.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-dashed border-brand-red/40 bg-white p-5 text-center">
              <p className="text-2xl" aria-hidden>📄 💍 📱</p>
              <p className="mt-2 text-sm font-bold text-brand-blue">
                Documentos, oro y electrónicos
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                No se cobran por libra: consolas, laptops, celulares, tablets, joyería de oro y
                documentos se cotizan por artículo.
              </p>
            </div>
            
          </div>
        </Reveal>
      </div>
    </section>
  );
}
