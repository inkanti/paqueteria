import { BUSINESS } from '../data/site';
import { WhatsAppIcon } from '../sections/Header';

/**
 * FloatingWhatsApp — botón verde flotante sticky en la esquina
 * inferior derecha. Visible en todo momento con tooltip.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={BUSINESS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-brand-whatsapp p-4 text-white shadow-2xl transition-all hover:scale-110 hover:shadow-brand-whatsapp/40"
    >
      <WhatsAppIcon className="h-7 w-7" />
      {/* Tooltip expansible al hover (solo desktop) */}
      <span className="hidden max-w-0 overflow-hidden text-sm font-bold transition-all duration-300 group-hover:max-w-40 md:block">
        ¡Escribinos!
      </span>
      {/* Punto de notificación */}
      <span
        aria-hidden
        className="animate-pulse-soft absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-brand-red"
      />
    </a>
  );
}
