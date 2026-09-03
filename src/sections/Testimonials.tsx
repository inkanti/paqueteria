import { useMemo } from 'react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { TESTIMONIALS, type Testimonial } from '../data/site';

/**
 * Testimonials — 3 tarjetas de reseñas con 5 estrellas y avatar
 * de iniciales. Los testimonios se seleccionan y ordenan de forma
 * ALEATORIA en cada carga de la página (algoritmo Fisher-Yates).
 */

/** Baraja un array sin mutar el original (Fisher-Yates) */
function shuffle<T>(arr: readonly T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Colores de avatar rotativos para variedad visual */
const AVATAR_COLORS = ['bg-brand-blue', 'bg-brand-red', 'bg-brand-blue2', 'bg-brand-darkred'];

/** Extrae hasta 2 iniciales de un nombre ("Ana P." → "AP") */
function initials(name: string): string {
  return name
    .split(' ')
    .map((w) => w.replace('.', '').charAt(0))
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function TestimonialCard({ t, color }: { t: Testimonial; color: string }) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-xl">
      {/* Estrellas */}
      <p className="text-lg tracking-wide text-brand-yellow" aria-label="5 de 5 estrellas">
        ★★★★★
      </p>

      {/* Texto de la reseña */}
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
        “{t.quote}”
      </blockquote>

      {/* Avatar + nombre + ciudad */}
      <footer className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
        <span
          aria-hidden
          className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-black text-white ${color}`}
        >
          {initials(t.name)}
        </span>
        <div>
          <p className="text-sm font-bold text-slate-900">{t.name}</p>
          <p className="text-xs text-slate-500">{t.city}</p>
        </div>
      </footer>
    </article>
  );
}

export default function Testimonials() {
  // Se baraja una sola vez por carga de página (useMemo sin dependencias)
  const shown = useMemo(() => shuffle(TESTIMONIALS).slice(0, 3), []);

  return (
    <section className="bg-brand-gray py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          kicker="Clientes felices"
          title="Lo que dicen nuestros clientes"
          subtitle="Familias y negocios que ya confían en nosotros de Denver a El Salvador."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {shown.map((t, i) => (
            <Reveal key={t.name} delay={i * 130}>
              <TestimonialCard t={t} color={AVATAR_COLORS[i % AVATAR_COLORS.length]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
