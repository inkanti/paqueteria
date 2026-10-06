import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

/**
 * Products — 6 tarjetas con FOTOS REALES de la página de Facebook
 * (los arte promocionales oficiales de Alvaro Flores Express).
 * Las imágenes viven en /public/images/web/ optimizadas a 900px.
 * Hover: la tarjeta se eleva y la foto hace zoom suave.
 */
const PRODUCTS = [
  {
    img: '/images/web/congelador.jpg',
    title: 'Refrigeradoras y Congeladores',
    description: 'Nuevos o usados, empacados y asegurados para el viaje.',
  },
  {
    img: '/images/web/estufas.jpg',
    title: 'Cocinas y Estufas',
    description: 'De gas o eléctricas, llegan listas para usar.',
  },
  {
    img: '/images/web/electrodomesticos.jpg',
    title: 'Electrodomésticos',
    description: 'Licuadoras, procesadores, cafeteras y más para tu hogar.',
  },
  {
    img: '/images/web/maquinaria.jpg',
    title: 'Maquinaria y Equipo Industrial',
    description: 'Bobcats, montacargas, soldadores y equipo pesado para tu negocio.',
  },
  {
    img: '/images/web/vehiculos.jpg',
    title: 'Vehículos',
    description: 'Carros, pickups, motos y SUVs desde Colorado.',
  },
  {
    img: '/images/web/muebles.jpg',
    title: 'Muebles y Juegos de Sala',
    description: 'Sofás, sofá-camas, roperos y muebles para toda la casa.',
  },
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Foto del producto (lazy loading) */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-brand-blue">
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
