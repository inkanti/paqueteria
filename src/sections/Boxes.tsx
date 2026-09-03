import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { BOXES } from '../data/site';

/**
 * Boxes — 3 tarjetas de cajas con precio fijo, estilo Shipito.
 * La caja pequeña lleva el tag "Popular". Hover: eleva la tarjeta.
 */
export default function Boxes() {
  return (
    <section className="bg-brand-gray py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          kicker="Precios claros"
          title="Ejemplos de Cajas"
          subtitle="Tarifas fijas por tamaño. Llená tu caja y olvidate de la báscula."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {BOXES.map((box, i) => (
            <Reveal key={box.name} delay={i * 130}>
              <article className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Franja superior con ilustración */}
                <div className="flex h-36 items-center justify-center bg-gradient-to-br from-brand-blue2 to-brand-blue text-7xl">
                  <span aria-hidden>{box.icon}</span>
                  {box.tag && (
                    <span className="absolute right-3 top-3 rounded-full bg-brand-yellow px-3 py-1 text-xs font-black uppercase text-brand-ink shadow">
                      {box.tag}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-slate-900">{box.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-brand-blue2">{box.capacity}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {box.description}
                  </p>

                  {/* Precio destacado */}
                  <p className="mt-4 text-3xl font-black text-brand-red">
                    <span className="text-sm font-semibold text-slate-500">Desde </span>$
                    {box.price}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
