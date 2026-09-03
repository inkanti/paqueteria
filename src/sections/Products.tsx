import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

/**
 * Products — 6 tarjetas con lo que se puede enviar.
 * Grid responsive con hover de escala.
 */
const PRODUCTS = [
  { icon: '❄️', title: 'Refrigeradoras', description: 'Nuevas o usadas, empacadas y aseguradas.' },
  { icon: '🔥', title: 'Cocinas y Estufas', description: 'De gas o eléctricas, llegan listas para usar.' },
  { icon: '🌀', title: 'Lavadoras y Secadoras', description: 'Carga superior o frontal, sin daños.' },
  { icon: '🏭', title: 'Equipos Industriales', description: 'Maquinaria y equipo pesado para tu negocio.' },
  { icon: '🚗', title: 'Vehículos', description: 'Carros, pickups, motos y SUVs desde Colorado.' },
  { icon: '📦', title: 'Paquetes y Cajas', description: 'Compras en línea, regalos y carga general.' },
];

export default function Products() {
  return (
    <section className="bg-brand-gray py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          kicker="Sin límites"
          title="¿Qué Podemos Traerte?"
          subtitle="Si cabe en un contenedor, nosotros lo movemos. Esto es lo más pedido:"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="group flex h-full items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
                <span
                  aria-hidden
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-gray text-3xl transition-colors group-hover:bg-brand-blue/10"
                >
                  {p.icon}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{p.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
