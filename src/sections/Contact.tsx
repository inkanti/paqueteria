import { useState, type FormEvent } from 'react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS } from '../data/site';
import { WhatsAppIcon } from './Header';
import Flag from '../components/Flag';

/**
 * Contact — sección de contacto en 2 columnas sobre fondo azul oscuro:
 *  - Izquierda: información (dirección, teléfonos, email, redes)
 *  - Derecha: formulario con validación básica
 */
export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', type: 'Por Libras ⚖️', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  /** Validación básica antes de "enviar" (abre WhatsApp con el mensaje) */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (form.name.trim().length < 2) errs.name = 'Ingresá tu nombre completo.';
    if (form.phone.trim().length < 7) errs.phone = 'Ingresá un teléfono válido.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'El correo no parece válido.';
    if (form.message.trim().length < 10) errs.message = 'Contanos un poco más (mín. 10 caracteres).';

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Envío vía WhatsApp con el mensaje prellenado
    const text = [
      `Hola, soy ${form.name}.`,
      `• Teléfono: ${form.phone}`,
      form.email ? `• Email: ${form.email}` : '',
      `• Tipo de envío: ${form.type}`,
      `• Mensaje: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n');
    window.open(`${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  };

  const inputCls =
    'w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none backdrop-blur transition-colors focus:border-brand-yellow focus:bg-white/15';
  const errCls = 'mt-1 text-xs font-semibold text-brand-yellow';

  return (
    <section
      id="contacto"
      className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-ink py-16 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          dark
          kicker="Hablemos"
          title="Contacto"
          subtitle="Estamos listos para mover tu carga. Escribinos o visitanos en Denver."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* ── Columna izquierda: información ─────────────── */}
          <Reveal>
            <div className="space-y-5">
              <ContactRow icon="📍" label="Dirección en USA" value={BUSINESS.address} />
              <ContactRow
                icon={<Flag country="us" className="h-5 w-7" />}
                label="Teléfono USA"
                value={BUSINESS.phoneUS}
                href={BUSINESS.phoneUSHref}
              />
              <ContactRow
                icon={<Flag country="sv" className="h-5 w-7" />}
                label="Teléfono El Salvador"
                value={BUSINESS.phoneSV}
                href={BUSINESS.phoneSVHref}
              />
              <ContactRow icon="🗓️" label="Salidas" value={BUSINESS.schedule} />

              {/* Redes sociales */}
              <div className="pt-2">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/60">
                  Seguinos
                </p>
                <div className="flex gap-3">
                  <SocialLink href={BUSINESS.facebook} label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </SocialLink>
                  <SocialLink href={BUSINESS.whatsapp} label="WhatsApp">
                    <WhatsAppIcon className="h-5 w-5" />
                  </SocialLink>
                  <SocialLink href={BUSINESS.instagram} label="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  </SocialLink>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Columna derecha: formulario ──────────────────── */}
          <Reveal delay={150}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl sm:p-8"
            >
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                  <span className="text-5xl" aria-hidden>✅</span>
                  <p className="mt-4 text-lg font-bold">¡Mensaje listo!</p>
                  <p className="mt-1 text-sm text-white/70">
                    Se abrió WhatsApp con tu mensaje. También podés escribirnos directamente.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-5 rounded-full border border-white/30 px-5 py-2 text-sm font-semibold transition-colors hover:bg-white/10"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold">Nombre *</span>
                    <input className={inputCls} value={form.name} onChange={update('name')} placeholder="Tu nombre" />
                    {errors.name && <p className={errCls}>{errors.name}</p>}
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold">Teléfono *</span>
                    <input className={inputCls} value={form.phone} onChange={update('phone')} placeholder="720-000-0000" />
                    {errors.phone && <p className={errCls}>{errors.phone}</p>}
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold">Email</span>
                    <input type="email" className={inputCls} value={form.email} onChange={update('email')} placeholder="tucorreo@email.com" />
                    {errors.email && <p className={errCls}>{errors.email}</p>}
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold">Tipo de envío</span>
                    <select className={`${inputCls} [&>option]:text-slate-900`} value={form.type} onChange={update('type')}>
                      <option>Por Libras ⚖️</option>
                      <option>Por Caja 📦</option>
                      <option>Vehículo 🚗</option>
                      <option>Electrodoméstico ❄️</option>
                      <option>Otro 📋</option>
                    </select>
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="mb-1.5 block text-sm font-semibold">Mensaje *</span>
                    <textarea rows={4} className={`${inputCls} resize-none`} value={form.message} onChange={update('message')} placeholder="Contanos qué querés enviar…" />
                    {errors.message && <p className={errCls}>{errors.message}</p>}
                  </label>

                  <button
                    type="submit"
                    className="rounded-full bg-brand-red px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-brand-darkred sm:col-span-2"
                  >
                    📨 Enviar Mensaje
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Fila de información de contacto (icono + etiqueta + valor/opcional link) */
function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode; // emoji o componente (p. ej. <Flag />)
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
      <span className="flex h-7 w-7 items-center justify-center text-2xl" aria-hidden>{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-white/60">{label}</p>
        {href ? (
          <a href={href} className="mt-0.5 block font-bold text-white transition-colors hover:text-brand-yellow">
            {value}
          </a>
        ) : (
          <p className="mt-0.5 font-bold">{value}</p>
        )}
      </div>
    </div>
  );
}

/** Botón circular de red social */
function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-brand-red"
    >
      {children}
    </a>
  );
}
