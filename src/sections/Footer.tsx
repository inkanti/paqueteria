import { BUSINESS, NAV_LINKS } from '../data/site';
import Flag from '../components/Flag';

/**
 * Footer — pie de página oscuro con logo, links rápidos,
 * contacto resumido y mensaje de marca.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
        {/* ── Marca ──────────────────────────────────────────── */}
        <div>
          {/* Logo sobre tarjeta blanca (el logo tiene fondo blanco) */}
          <div className="inline-flex rounded-2xl bg-white p-3 shadow-md">
            <img
              src="/images/logo.png"
              alt={`${BUSINESS.name} ${BUSINESS.nameSuffix}`}
              className="h-14 w-auto"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {BUSINESS.slogan}. Conectamos a las familias salvadoreñas con sus compras en USA desde{' '}
            {BUSINESS.origin}.
          </p>
          <p className="mt-3 flex items-center gap-2" aria-label="De Estados Unidos a El Salvador">
            <Flag country="us" className="h-4 w-6" />
            <span aria-hidden className="text-white/60">➜</span>
            <Flag country="sv" className="h-4 w-6" />
          </p>
        </div>

        {/* ── Links rápidos ──────────────────────────────────── */}
        <nav aria-label="Links rápidos">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/50">
            Links rápidos
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-brand-yellow"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Contacto resumido ──────────────────────────────── */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/50">Contacto</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>📍 {BUSINESS.address}</li>
            <li>
              <Flag country="us" className="mr-1 h-3.5 w-5" />
              <a href={BUSINESS.phoneUSHref} className="transition-colors hover:text-brand-yellow">
                {BUSINESS.phoneUS}
              </a>
            </li>
            <li>
              <Flag country="sv" className="mr-1 h-3.5 w-5" />
              <a href={BUSINESS.phoneSVHref} className="transition-colors hover:text-brand-yellow">
                {BUSINESS.phoneSV}
              </a>
            </li>
            <li>🗓️ {BUSINESS.schedule}</li>
          </ul>
        </div>
      </div>

      {/* ── Barra inferior ───────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>
            © {year} {BUSINESS.name} {BUSINESS.nameSuffix}. Todos los derechos reservados.
          </p>
          <p>Hecho con ❤️ para conectar familias</p>
        </div>
      </div>
    </footer>
  );
}
