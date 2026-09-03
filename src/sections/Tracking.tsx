import { useState, type FormEvent } from 'react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { TRACKING_STAGES, type Shipment } from '../data/site';

/** URL de la API de Google Sheets */
const SHEETS_API_URL = 'https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycbwiHuqLYyBYRVLqpxKOqF1JXPeyQGLjM0sacFEcBTg3PMv7MS6peslOVXsO8JRCFFAvuA/exec';

/**
 * Tracking — ⭐ FEATURE PRINCIPAL: sistema de seguimiento en vivo.
 *
 * - Busca un número de tracking en Google Sheets (vía JSONP para evitar CORS).
 * - Muestra un timeline visual de 5 etapas con progreso conectado.
 * - Estados por etapa: completada ✓, activa (pulsando), pendiente.
 * - Detalles del envío: número, origen, destino, peso y servicio.
 * - Responsive: en móvil el timeline se apila verticalmente.
 */
export default function Tracking() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<Shipment | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  /** Busca el envío por número de tracking en Google Sheets usando JSONP */
  const handleSearch = async (e?: FormEvent) => {
    e?.preventDefault();
    const code = query.trim().toUpperCase();
    if (!code) {
      setError('Ingresá un número de tracking para buscar.');
      setResult(null);
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const callbackName = `cb_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
      const url = `${SHEETS_API_URL}?tracking=${encodeURIComponent(code)}&callback=${callbackName}`;

      const data = await new Promise<any>((resolve, reject) => {
        const timeout = setTimeout(() => {
          reject(new Error('Timeout'));
          cleanup();
        }, 10000);

        (window as any)[callbackName] = (response: any) => {
          clearTimeout(timeout);
          resolve(response);
          cleanup();
        };

        function cleanup() {
          delete (window as any)[callbackName];
          const el = document.getElementById(callbackName);
          if (el) el.remove();
        }

        const script = document.createElement('script');
        script.src = url;
        script.id = callbackName;
        script.onerror = () => {
          clearTimeout(timeout);
          reject(new Error('Error al cargar el script'));
          cleanup();
        };
        document.head.appendChild(script);
      });

      if (data && data.tracking) {
        setResult(data);
        setError('');
      } else {
        setResult(null);
        setError(`No encontramos el tracking "${code}". Verificá el número e intentá de nuevo.`);
      }
    } catch (err) {
      setResult(null);
      setError('Error de conexión con el servidor. Intentá más tarde.');
    } finally {
      setLoading(false);
    }
  };

  /** Busca un tracking de demo */
  const searchDemo = (code: string) => {
    setQuery(code);
    setTimeout(() => {
      handleSearch();
    }, 50);
  };

  return (
    <section id="seguimiento" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          kicker="Transparencia total"
          title="📍 Rastrea tu Envío"
          subtitle="Seguí tu carga paso a paso, desde Denver hasta tu puerta en El Salvador."
        />

        {/* ── Buscador ───────────────────────────────────────── */}
        <Reveal>
          <form
            onSubmit={handleSearch}
            className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ingresa tu número de tracking (ej. AFC-2026-001)"
              aria-label="Número de tracking"
              disabled={loading}
              className="flex-1 rounded-full border-2 border-slate-200 px-5 py-3.5 text-sm font-medium text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-blue disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-brand-red px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-brand-darkred disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '⏳ Buscando...' : '🔍 Buscar'}
            </button>
          </form>

          {/* Accesos rápidos a los envíos de demostración */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
            <span>Probá la demo:</span>
            {['AFC-2026-001', 'AFC-2026-002', 'AFC-2026-003'].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => searchDemo(code)}
                disabled={loading}
                className="rounded-full bg-brand-gray px-3 py-1 font-mono font-semibold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white disabled:opacity-50"
              >
                {code}
              </button>
            ))}
          </div>

          {error && (
            <p className="mx-auto mt-4 max-w-2xl rounded-xl bg-red-50 px-4 py-3 text-center text-sm font-medium text-brand-red">
              {error}
            </p>
          )}
        </Reveal>

        {/* ── Resultado ──────────────────────────────────────── */}
        {result && <TrackingResult shipment={result} />}
      </div>
    </section>
  );
}

/** Tarjeta con detalles del envío + timeline de progreso */
function TrackingResult({ shipment }: { shipment: Shipment }) {
  const activeIndex = shipment.events.reduce(
    (acc, ev, i) => (ev.date && ev.stage !== 'delivered' ? i : acc),
    0
  );
  const isDelivered = shipment.status === 'Entregado';
  const currentIndex = isDelivered ? TRACKING_STAGES.length - 1 : activeIndex;

  return (
    <Reveal className="mt-10">
      <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-brand-blue to-brand-blue2 px-6 py-4 text-white">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/70">Número de tracking</p>
            <p className="font-mono text-lg font-black">{shipment.tracking}</p>
          </div>
          <span
            className={`rounded-full px-4 py-1.5 text-sm font-bold ${
              isDelivered
                ? 'bg-green-500 text-white'
                : 'bg-brand-yellow text-brand-ink animate-pulse-soft'
            }`}
          >
            {isDelivered ? '✓ ' : ''}
            {shipment.status}
          </span>
        </div>

        <dl className="grid grid-cols-2 gap-4 border-b border-slate-100 px-6 py-5 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-xs font-semibold uppercase text-slate-400">Origen</dt>
            <dd className="mt-0.5 font-bold text-slate-800">{shipment.origin}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase text-slate-400">Destino</dt>
            <dd className="mt-0.5 font-bold text-slate-800">{shipment.destination}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase text-slate-400">Peso</dt>
            <dd className="mt-0.5 font-bold text-slate-800">{shipment.weight}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase text-slate-400">Servicio</dt>
            <dd className="mt-0.5 font-bold text-slate-800">{shipment.service}</dd>
          </div>
        </dl>

        <ol className="flex flex-col gap-0 px-6 py-8 sm:flex-row sm:items-start sm:gap-0">
          {TRACKING_STAGES.map((stage, i) => {
            const event = shipment.events.find((e) => e.stage === stage.key);
            const done = isDelivered || i < currentIndex;
            const active = !isDelivered && i === currentIndex;

            return (
              <li key={stage.key} className="relative flex flex-1 flex-row sm:flex-col">
                {i < TRACKING_STAGES.length - 1 && (
                  <>
                    <span
                      aria-hidden
                      className={`absolute left-6 top-12 h-full w-0.5 sm:hidden ${
                        done ? 'bg-green-500' : 'bg-slate-200'
                      }`}
                    />
                    <span
                      aria-hidden
                      className={`absolute left-1/2 top-6 hidden h-0.5 w-full sm:block ${
                        i < currentIndex || isDelivered ? 'bg-green-500' : 'bg-slate-200'
                      }`}
                    />
                  </>
                )}

                <div className="relative z-10 flex flex-row items-start gap-4 pb-8 sm:flex-col sm:items-center sm:gap-0 sm:pb-0 sm:text-center">
                  <span
                    aria-hidden
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 text-xl transition-all ${
                      done
                        ? 'border-green-500 bg-green-500 text-white'
                        : active
                          ? 'animate-pulse-soft border-brand-yellow bg-brand-yellow'
                          : 'border-slate-200 bg-white grayscale'
                    }`}
                  >
                    {done ? '✓' : stage.icon}
                  </span>

                  <div className="sm:mt-3">
                    <p
                      className={`text-sm font-bold ${
                        done ? 'text-green-700' : active ? 'text-brand-blue' : 'text-slate-400'
                      }`}
                    >
                      {stage.label}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {event?.date || (active ? 'En curso…' : 'Pendiente')}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Reveal>
  );
}