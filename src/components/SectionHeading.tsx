import Reveal from './Reveal';

/**
 * SectionHeading — encabezado reutilizable de sección:
 * etiqueta pequeña (kicker), título grande y subtítulo opcional.
 */
interface SectionHeadingProps {
  kicker: string;
  title: string;
  subtitle?: string;
  dark?: boolean; // true cuando el fondo de la sección es oscuro
}

export default function SectionHeading({ kicker, title, subtitle, dark = false }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <p
        className={`text-xs font-bold uppercase tracking-[0.2em] sm:text-sm ${
          dark ? 'text-brand-yellow' : 'text-brand-red'
        }`}
      >
        {kicker}
      </p>
      <h2
        className={`mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          dark ? 'text-white' : 'text-brand-blue'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg ${dark ? 'text-white/75' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
