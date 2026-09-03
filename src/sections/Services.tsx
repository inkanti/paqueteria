import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

/**
 * Services — 4 tarjetas de servicio con tag destacado.
 * Hover: la tarjeta se levanta, gana sombra y borde azul.
 */
const SERVICES = [
  {
    icon: '✈️',
    title: 'Envío por Avión',
    time: '3–7 días',
    tag: 'Rápido',
    tagColor: 'bg-brand-red',
    description: 'La opción más veloz para paquetes urgentes, documentos y compras ligeras.',
  },
  {
    icon: '🚢',
    title: 'Envío por Barco',
    time: '15–30 días',
    tag: 'Económico',
    tagColor: 'bg-brand-blue2',
    description: 'Ideal para carga pesada y voluminosa al mejor precio por libra.',
  },
  {
    icon: '📦',
    title: 'Envío por Cajas',
    time: 'Precio fijo',
    tag: 'Ahorro',
    tagColor: 'bg-brand-yellow text-brand-ink',
    description: 'Cajas con tarifa fija: llená tu caja sin preocuparte por el peso exacto.',
  },
  {
    icon: '⚖️',
    title: 'Envío por Libras',
    time: 'Pagás lo que pesa',
    tag: 'Justo',
    tagColor: 'bg-brand-blue',
    description: 'Pesamos tu carga al momento y solo pagás por las libras reales.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          kicker="Nuestros servicios"
          title="Elegí cómo querés enviar"
          subtitle="Cuatro modalidades pensadas para cada tipo de carga y presupuesto."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <article className="group flex h-full flex-col rounded-2xl border-2 border-transparent bg-white p-6 shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:border-brand-blue hover:shadow-xl">
                {/* Tag del servicio */}
                <span
                  className={`self-start rounded-full px-3 py-1 text-xs font-bold text-white ${s.tagColor}`}
                >
                  {s.tag}
                </span>

                <span className="mt-4 text-5xl" aria-hidden>
                  {s.icon}
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-brand-blue">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-brand-red">{s.time}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
