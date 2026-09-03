import { useEffect, useState } from 'react';
import { BUSINESS, NAV_LINKS } from '../data/site';

/**
 * Header — navegación principal sticky.
 * - Logo: icono avión + "Alvaro Flores / Cargo Express"
 * - Menú desktop + botón WhatsApp verde
 * - Menú hamburguesa en móvil
 * - Sombra al hacer scroll
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detecta scroll para aplicar sombra al header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        {/* ── Logo ─────────────────────────────────────────── */}
        <a href="#inicio" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue text-xl shadow-md">
            ✈️
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-brand-blue">
              {BUSINESS.name}
            </span>
            <span className="block text-xs font-bold uppercase tracking-widest text-brand-red">
              {BUSINESS.nameSuffix}
            </span>
          </span>
        </a>

        {/* ── Menú desktop ─────────────────────────────────── */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Botón WhatsApp (desktop) + hamburguesa (móvil) ── */}
        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand-whatsapp px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>

          {/* Botón hamburguesa */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          >
            <span className="text-xl leading-none">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* ── Menú móvil desplegable ─────────────────────────── */}
      {menuOpen && (
        <nav
          className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden"
          aria-label="Navegación móvil"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-brand-gray hover:text-brand-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 border-t border-slate-100 pt-3 sm:hidden">
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-brand-whatsapp px-5 py-2.5 text-sm font-bold text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Escríbenos por WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

/** Icono oficial de WhatsApp en SVG (reutilizable) */
export function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
