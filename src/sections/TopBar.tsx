import { BUSINESS } from '../data/site';
import Flag from '../components/Flag';

/**
 * TopBar — barra superior fija con dirección y teléfonos clickeables.
 * Fondo oscuro, texto blanco. En móvil muestra versión compacta.
 */
export default function TopBar() {
  return (
    <div className="bg-brand-ink text-white text-xs sm:text-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 sm:justify-between">
        {/* Dirección de la bodega */}
        <span className="inline-flex items-center gap-1.5 text-white/85">
          <span aria-hidden>📍</span>
          <span className="hidden sm:inline">{BUSINESS.address}</span>
          <span className="sm:hidden">Denver, CO 80239</span>
        </span>

        {/* Teléfonos clickeables */}
        <div className="flex items-center gap-4">
          <a
            href={BUSINESS.phoneUSHref}
            className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-brand-yellow"
          >
            <Flag country="us" className="h-3.5 w-5" /> {BUSINESS.phoneUS}
          </a>
          <span className="text-white/30" aria-hidden>|</span>
          <a
            href={BUSINESS.phoneSVHref}
            className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-brand-yellow"
          >
            <Flag country="sv" className="h-3.5 w-5" /> {BUSINESS.phoneSV}
          </a>
        </div>
      </div>
    </div>
  );
}
