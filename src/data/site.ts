/**
 * ─────────────────────────────────────────────────────────────
 *  DATOS CENTRALES DEL SITIO — Alvaro Flores Express
 *  Edita este archivo para actualizar teléfonos, precios,
 *  testimonios o números de tracking sin tocar los componentes.
 * ─────────────────────────────────────────────────────────────
 */

/** Información del negocio */
export const BUSINESS = {
  name: 'Alvaro Flores',
  nameSuffix: 'Express',
  slogan: 'Servicio de Encomiendas — Por Cajas y Por Libras',
  origin: 'Denver, Colorado, USA',
  destination: 'Todo El Salvador',
  address: '4290 Crown Blvd, Denver CO 80239',
  phoneUS: '720-292-8478',
  phoneUSHref: 'tel:+17202928478',
  phoneSV: '011 (503) 7841-5801',
  phoneSVHref: 'tel:+50378415801',
  whatsapp: 'https://wa.me/50378415801',
  facebook: 'https://facebook.com/alvarofloresencomiendaselsalvador',
  instagram: 'https://instagram.com/',
  email: 'info@alvaroflorescargo.com',
  schedule: 'Avión: salidas semanales · Barco: salidas quincenales',
} as const;

/** Tarifas del negocio — el envío aéreo tiene TARIFA FIJA por libra */
export const PRICING = {
  airPerLb: 10.0, // USD por libra — avión (tarifa fija)
  seaNote: 'Tarifa marítima según volumen — consultar por WhatsApp',
} as const;

/** Cajas por barco — medidas (pulgadas) y precios oficiales.
 *  Nota: la medida 30×30×30 fue reemplazada por 30×24×26 al mismo
 *  precio ($450). Todas incluyen entrega hasta la puerta de la casa. */
export const BOXES = [
  { size: '22 × 22 × 22', unit: 'pulgadas', price: 350, tag: null },
  { size: '25 × 25 × 25', unit: 'pulgadas', price: 375, tag: null },
  { size: '28 × 28 × 28', unit: 'pulgadas', price: 400, tag: 'Popular' },
  { size: '30 × 24 × 26', unit: 'pulgadas', price: 450, tag: 'Más grande' },
] as const;

/** Testimonios (datos ficticios de ejemplo — se muestran en orden aleatorio) */
export interface Testimonial {
  quote: string;
  name: string;
  city: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { quote: 'Mi lavadora llegó intacta y antes de lo esperado. ¡Son los mejores!', name: 'Ana P.', city: 'San Salvador' },
  { quote: 'El servicio al cliente por WhatsApp es increíble, responden en minutos.', name: 'Pedro G.', city: 'Denver' },
  { quote: 'Trajeron mi camioneta desde Colorado sin un solo rasguño. Muy profesionales.', name: 'Roberto S.', city: 'Santa Ana' },
  { quote: 'Pedí unas llantas y llegaron perfectamente empacadas. ¡100% confiables!', name: 'Diana H.', city: 'San Salvador' },
  { quote: 'El precio por libra es el más justo que encontré. Totalmente recomendado.', name: 'Luis F.', city: 'Aurora' },
  { quote: 'Mi moto llegó de Denver a Santa Ana en tiempo récord. Excelente servicio.', name: 'Javier T.', city: 'Santa Ana' },
  { quote: 'Nunca pensé que traer muebles fuera tan fácil. Todo llegó en perfectas condiciones.', name: 'Carmen V.', city: 'San Salvador' },
  { quote: 'Responden el WhatsApp a cualquier hora. Eso se valora mucho.', name: 'Miguel A.', city: 'Denver' },
  { quote: 'Trajeron mi pickup desde Estados Unidos sin complicaciones. Muy satisfecho.', name: 'Eduardo N.', city: 'Santa Ana' },
  { quote: 'El envío de mis electrodomésticos fue impecable. Todo funcionando al 100%.', name: 'Patricia M.', city: 'San Salvador' },
  { quote: 'Buenísimo precio y el seguimiento del paquete es muy transparente.', name: 'Andrés C.', city: 'Aurora' },
  { quote: 'Mi carro deportivo llegó sin problemas de aduana. Experiencia excelente.', name: 'Fernando R.', city: 'Santa Ana' },
  { quote: 'Pedí repuestos para mi vehículo y llegaron en solo días. Muy eficientes.', name: 'Gloria E.', city: 'San Salvador' },
  { quote: 'El trato es personalizado y el precio por libra es competitivo.', name: 'Ricardo D.', city: 'Denver' },
  { quote: 'Trajeron mi SUV familiar desde Colorado. Mis hijos están felices.', name: 'Sofía L.', city: 'Santa Ana' },
  { quote: 'Nunca tuve que preocuparme por mis envíos. Todo llega seguro y a tiempo.', name: 'Jorge B.', city: 'San Salvador' },
  { quote: 'WhatsApp activo 24/7. Eso hace toda la diferencia cuando tienes dudas.', name: 'Daniel K.', city: 'Aurora' },
  { quote: 'Mi camioneta de trabajo llegó lista para operar. Gran servicio logístico.', name: 'Manuel O.', city: 'Santa Ana' },
  { quote: 'He enviado con ellos más de 10 veces y nunca me han fallado.', name: 'Laura J.', city: 'San Salvador' },
  { quote: 'El mejor precio del mercado y la entrega siempre puntual. ¡Los recomiendo siempre!', name: 'Carlos H.', city: 'Denver' },
];

/* ─────────────────────────────────────────────────────────────
   SISTEMA DE SEGUIMIENTO — datos de ejemplo precargados
   ───────────────────────────────────────────────────────────── */

/** Etapas fijas del timeline de seguimiento */
export const TRACKING_STAGES = [
  { key: 'received', label: 'Recibido en Denver', icon: '📥' },
  { key: 'transit', label: 'En Tránsito', icon: '✈️' },
  { key: 'customs', label: 'En Aduana', icon: '🛃' },
  { key: 'delivery', label: 'En Reparto', icon: '🚚' },
  { key: 'delivered', label: 'Entregado', icon: '✅' },
] as const;

export interface TrackingEvent {
  stage: (typeof TRACKING_STAGES)[number]['key'];
  date: string; // Fecha/hora legible; vacío si la etapa aún no ocurre
}

export interface Shipment {
  tracking: string;
  status: string; // Texto del estado actual
  origin: string;
  destination: string;
  weight: string;
  service: string;
  events: TrackingEvent[];
}

/** Envíos de demostración (reemplazar con datos reales / API) */
export const SHIPMENTS: Shipment[] = [
  {
    tracking: 'AFC-2026-001',
    status: 'En Tránsito',
    origin: 'Denver, CO 🇺🇸',
    destination: 'San Salvador 🇸🇻',
    weight: '65 lbs',
    service: 'Aéreo — Por Libras',
    events: [
      { stage: 'received', date: '15 ago 2026 · 10:24 a.m.' },
      { stage: 'transit', date: '18 ago 2026 · 6:10 p.m.' },
      { stage: 'customs', date: '' },
      { stage: 'delivery', date: '' },
      { stage: 'delivered', date: 'Estimado: 25 ago 2026' },
    ],
  },
  {
    tracking: 'AFC-2026-002',
    status: 'Entregado',
    origin: 'Denver, CO 🇺🇸',
    destination: 'San Salvador 🇸🇻',
    weight: '42 lbs',
    service: 'Marítimo — Por Caja',
    events: [
      { stage: 'received', date: '1 ago 2026 · 9:00 a.m.' },
      { stage: 'transit', date: '4 ago 2026 · 7:30 a.m.' },
      { stage: 'customs', date: '17 ago 2026 · 11:45 a.m.' },
      { stage: 'delivery', date: '19 ago 2026 · 8:15 a.m.' },
      { stage: 'delivered', date: '20 ago 2026 · 2:40 p.m.' },
    ],
  },
  {
    tracking: 'AFC-2026-003',
    status: 'En Aduana',
    origin: 'Denver, CO 🇺🇸',
    destination: 'Santa Ana 🇸🇻',
    weight: '120 lbs',
    service: 'Aéreo — Por Libras',
    events: [
      { stage: 'received', date: '12 ago 2026 · 3:05 p.m.' },
      { stage: 'transit', date: '15 ago 2026 · 5:20 p.m.' },
      { stage: 'customs', date: '22 ago 2026 · 9:30 a.m. — En proceso de despacho' },
      { stage: 'delivery', date: '' },
      { stage: 'delivered', date: '' },
    ],
  },
];

/** Preguntas frecuentes */
export const FAQS = [
  {
    q: '¿Cuánto cuesta el envío por libra?',
    a: 'El envío por avión tiene una tarifa fija de $10.00 por libra. Para envíos marítimos y por caja, la tarifa depende del volumen: escribinos por WhatsApp y te cotizamos al instante.',
  },
  {
    q: '¿Puedo enviar un vehículo?',
    a: '¡Sí! Traemos carros, camionetas, pickups, motos y SUVs desde Colorado hasta El Salvador. Contáctanos por WhatsApp para una cotización personalizada según el modelo y año del vehículo.',
  },
  {
    q: '¿Cuánto tiempo tarda en llegar?',
    a: 'Los envíos aéreos tardan de 3 a 7 días y los marítimos de 30 a 45 días. Los aviones salen semanalmente y los barcos quincenalmente; podés rastrear tu carga desde esta misma página.',
  },
  {
    q: '¿Cómo pago desde El Salvador?',
    a: 'Aceptamos pagos en dólares: transferencias bancarias, depósitos, remesas y pagos en efectivo en nuestras oficinas de Denver. También puedes pagar contra entrega en El Salvador en envíos seleccionados.',
  },
  {
    q: '¿Necesito pagar aduana?',
    a: 'Nosotros gestionamos todo el trámite aduanero. Los impuestos aplicables según el tipo de mercancía se te informan por adelantado en tu cotización, sin sorpresas ni cargos ocultos.',
  },
  {
    q: '¿Dónde dejo mis paquetes en Denver?',
    a: 'Puedes entregar tus compras o cajas directamente en nuestra bodega: 4290 Crown Blvd, Denver CO 80239. Si compras en línea, usa esa dirección como dirección de envío y nosotros la recibimos por ti.',
  },
] as const;

/** Enlaces del menú de navegación */
export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cómo Funciona', href: '#como-funciona' },
  { label: 'Servicios', href: '#servicios' },
  /*{ label: 'Seguimiento', href: '#seguimiento' },*/
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
] as const;
