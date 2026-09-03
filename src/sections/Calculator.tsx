import { useMemo, useState } from 'react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS, PRICING } from '../data/site';

/**
 * Calculator — calculadora de envío interactiva.
 * Calcula el precio estimado en tiempo real según:
 *   peso (lbs) × tarifa (avión/barco) − descuento por caja (15%).
 * Fondo azul oscuro con formulario estilo glassmorphism.
 */
export default function Calculator() {
  const [weight, setWeight] = useState<string>('10');
  const [transport, setTransport] = useState<'air' | 'sea'>('air');
  const [mode, setMode] = useState<'pounds' | 'box'>('pounds');
  const [item, setItem] = useState('');

  // Cálculo del estimado en tiempo real
  const estimate = useMemo(() => {
    const lbs = Number(weight);
    if (!Number.isFinite(lbs) || lbs <= 0) return null;

    const capped = Math.min(Math.max(lbs, PRICING.minLb), PRICING.maxLb);
    const rate = transport === 'air' ? PRICING.airPerLb : PRICING.seaPerLb;
    let total = capped * rate;
    if (mode === 'box') total *= 1 - PRICING.boxDiscount;

    return {
      total,
      capped,
      rate,
      discounted: mode === 'box',
    };
  }, [weight, transport, mode]);

  // Mensaje prefabricado para enviar la cotización por WhatsApp
  const whatsappQuoteUrl = useMemo(() => {
    if (!estimate) return BUSINESS.whatsapp;
    const lines = [
      'Hola, quiero cotizar un envío:',
      `• Peso: ${estimate.capped} lbs`,
      `• Transporte: ${transport === 'air' ? 'Avión ✈️' : 'Barco 🚢'}`,
      `• Modalidad: ${mode === 'box' ? 'Por Caja 📦' : 'Por Libras ⚖️'}`,
      item.trim() ? `• Contenido: ${item.trim()}` : '',
      `• Estimado web: $${estimate.total.toFixed(2)}`,
    ].filter(Boolean);
    return `${BUSINESS.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
  }, [estimate, transport, mode, item]);

  const inputCls =
    'w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur transition-colors focus:border-brand-yellow focus:bg-white/15';

  return (
    <section
      id="cotizar"
      className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-blue to-brand-blue2 py-16 sm:py-24"
    >
      {/* Decoración de fondo */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-float-soft absolute -right-24 top-0 h-72 w-72 rounded-full bg-white/5" />
        <div className="animate-float-soft absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-brand-yellow/10 [animation-delay:2s]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4">
        <SectionHeading
          dark
          kicker="Cotización instantánea"
          title="🧮 Calculadora de Envío"
          subtitle="Ingresá los datos de tu carga y obtené un estimado al instante."
        />

        <Reveal>
          <div className="grid gap-6 rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:grid-cols-[1.4fr_1fr]">
            {/* ── Formulario ─────────────────────────────────── */}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-white">
                  Peso en libras (lbs)
                </span>
                <input
                  type="number"
                  min={PRICING.minLb}
                  max={PRICING.maxLb}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Ej. 25"
                  className={inputCls}
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-white">
                  Tipo de transporte
                </span>
                <select
                  value={transport}
                  onChange={(e) => setTransport(e.target.value as 'air' | 'sea')}
                  className={`${inputCls} [&>option]:text-slate-900`}
                >
                  <option value="air">✈️ Avión — 3 a 7 días</option>
                  <option value="sea">🚢 Barco — 15 a 30 días</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-white">Modalidad</span>
                <select
                  value={mode}
                  onChange={(e) => setMode(e.target.value as 'pounds' | 'box')}
                  className={`${inputCls} [&>option]:text-slate-900`}
                >
                  <option value="pounds">⚖️ Por Libras</option>
                  <option value="box">📦 Por Caja (−15%)</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-white">
                  ¿Qué enviás?
                </span>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                  placeholder="Ej. ropa, herramientas…"
                  className={inputCls}
                />
              </label>

              <p className="text-xs leading-relaxed text-white/60 sm:col-span-2">
                * Precios estimados. Cotización final sujeta a verificación del peso y volumen
                reales en bodega.
              </p>
            </div>

            {/* ── Resultado dinámico ─────────────────────────── */}
            <div className="flex flex-col justify-center rounded-2xl bg-white p-6 text-center shadow-inner">
              {estimate ? (
                <>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Precio estimado
                  </p>
                  <p className="mt-1 text-5xl font-black text-brand-red">
                    ${estimate.total.toFixed(2)}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {estimate.capped} lbs × ${estimate.rate.toFixed(2)}/lb
                    {estimate.discounted && (
                      <span className="mt-1 block font-semibold text-green-700">
                        ✓ Descuento por caja aplicado (−15%)
                      </span>
                    )}
                  </p>
                  <a
                    href={whatsappQuoteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-brand-whatsapp px-6 py-3 text-sm font-bold text-white shadow-md transition-transform hover:scale-105"
                  >
                    Confirmar cotización por WhatsApp
                  </a>
                </>
              ) : (
                <p className="text-sm text-slate-500">
                  Ingresá un peso válido para ver tu estimado al instante.
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
