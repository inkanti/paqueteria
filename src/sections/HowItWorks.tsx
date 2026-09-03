import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS } from '../data/site';

/**
 * HowItWorks — 4 pasos visuales con números, iconos y flechas
 * conectoras. Animación escalonada al hacer scroll (fade-in).
 */
const STEPS = [
  {
    icon: '🛒',
    title: 'Compra en USA',
    description: `Compra en línea o en tienda y envía todo a nuestra bodega: ${BUSINESS.address}.`,
  },
  {
    icon: '📥',
    title: 'Recibimos tu Carga',
    description: 'Recibimos, revisamos y consolidamos tus paquetes para optimizar tu envío.',
  },
  {
    icon: '💳',
    title: 'Pagás y Elegís',
    description: 'Elegís entre avión (rápido) o barco (económico) y pagás de forma fácil y segura.',
  },
  {
    icon: '🏠',
    title: 'Recibís en Casa',
    description: 'Entregamos tu carga en la puerta de tu casa, en cualquier parte de El Salvador.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-brand-gray py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          kicker="Proceso simple"
          title="¿Cómo Funciona?"
          subtitle="En 4 pasos tus compras viajan de Denver a la puerta de tu casa."
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
      </div>
    </section>
  );
}
