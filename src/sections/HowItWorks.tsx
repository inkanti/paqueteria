import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS } from '../data/site';

/**
 * HowItWorks — 4 pasos visuales con números, iconos y flechas
 * conectoras. Animación escalonada al hacer scroll (fade-in).
 *
 * Paso 1: el cliente lleva el paquete a Denver O pide recolección
 *         a domicilio (él decide).
 * Paso 4: encomiendas grandes → puerta de la casa; pequeñas →
 *         ruta de entrega en puntos establecidos.
 */
const STEPS = [
  {
    icon: '📦',
    title: 'Traé tu paquete o pedí recolección',
    description: `Llevalo a nuestra bodega en ${BUSINESS.address} o solicitá que lo recolectemos en Denver y sus alrededores. ¡Vos decidís!`,
  },
  {
    icon: '📥',
    title: 'Recibimos tu Carga',
    description: 'Recibimos, revisamos y consolidamos tus encomiendas para optimizar tu envío.',
  },
  {
    icon: '💳',
    title: 'Pagás y Elegís',
    description: 'Avión con salidas semanales (3–7 días) o barco cada 15 días (45–60 días). Pagás fácil y seguro.',
  },
  {
    icon: '🏠',
    title: 'Recibís en El Salvador',
    description: 'Encomiendas grandes: hasta la puerta de tu casa. Pequeñas: por ruta de entrega en puntos establecidos.',
  },
];

/** Ciudades de la ruta de entrega en El Salvador (según avisos oficiales) */
const DELIVERY_TOWNS = [
  'San Salvador', 'Santa Ana', 'San Miguel', 'Sonsonate', 'Ahuachapán',
  'Chalatenango', 'Usulután', 'Zacatecoluca', 'San Vicente', 'Quezaltepeque',
  'Metapán', 'El Litoral (Mizata a Cara Sucia)',
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-brand-gray py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          kicker="Proceso simple"
          title="¿Cómo Funciona?"
          subtitle="En 4 pasos tus encomiendas viajan de Denver a El Salvador."
        />

        <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 150}>
              <li className="relative flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg">
                {/* Número del paso */}
                <span className="absolute -top-4 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-brand-red text-sm font-black text-white shadow-md">
                  {i + 1}
                </span>

                <span className="mt-4 text-5xl" aria-hidden>
                  {step.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold text-brand-blue">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>

                {/* Flecha conectora (solo desktop, excepto en el último paso) */}
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-6 top-1/2 hidden -translate-y-1/2 text-2xl font-black text-brand-red lg:block"
                  >
                    →
                  </span>
                )}
              </li>
            </Reveal>
          ))}
        </ol>

        {/* ── Ruta de entrega en El Salvador ─────────────────── */}
        <Reveal delay={200}>
          <div className="mt-12 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-brand-red">
              🚚 Ruta de entrega y recolección en El Salvador
            </p>
            <p className="mt-2 text-center text-sm text-slate-600">
              Las encomiendas pequeñas se entregan en estos puntos establecidos:
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {DELIVERY_TOWNS.map((town) => (
                <span
                  key={town}
                  className="rounded-full bg-brand-gray px-3.5 py-1.5 text-xs font-semibold text-brand-blue"
                >
                  {town}
                </span>
              ))}
              <span className="rounded-full bg-brand-yellow/20 px-3.5 py-1.5 text-xs font-bold text-brand-ink">
                ¡y más!
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
