import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

/**
 * Frequency — 2 tarjetas grandes con la frecuencia de salidas.
 * Bordes superiores de color e iconos grandes.
 */
const FREQUENCIES = [
  {
    icon: '✈️',
    title: 'Envíos Aéreos',
    frequency: 'Salidas semanales',
    tag: 'Rápido',
    tagColor: 'bg-brand-red',
    borderColor: 'border-t-brand-red',
    description:
      'Tu carga despega cada semana desde Colorado. Entrega en El Salvador de 3 a 7 días hábiles. Tarifa fija: $10.00 por libra.',
  },
  {
    icon: '🚢',
    title: 'Envíos Marítimos',
    frequency: 'Salidas quincenales',
    tag: 'Económico',
    tagColor: 'bg-brand-blue2',
    borderColor: 'border-t-brand-blue',
    description:
      'Dos salidas al mes para carga pesada y voluminosa. Entrega estimada de 30 a 45 días.',
  },
];

export default function Frequency() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          kicker="Siempre en movimiento"
          title="Frecuencia de Salidas"
          subtitle="Salidas constantes para que tu carga nunca espere de más."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {FREQUENCIES.map((f, i) => (
            <Reveal key={f.title} delay={i * 150}>
              <article
                className={`flex h-full flex-col items-center rounded-2xl border-t-8 bg-white p-8 text-center shadow-lg ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${f.borderColor}`}
              >
                <span className="text-6xl" aria-hidden>
                  {f.icon}
                </span>
                <span
                  className={`mt-4 rounded-full px-4 py-1 text-xs font-black uppercase tracking-wider text-white ${f.tagColor}`}
                >
                  {f.tag}
                </span>
                <h3 className="mt-3 text-2xl font-extrabold text-slate-900">{f.title}</h3>
                <p className="mt-1 text-lg font-bold text-brand-blue">{f.frequency}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
