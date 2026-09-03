/**
 * Script temporal de validación E2E:
 * 1. Abre la home y comprueba que no hay errores de consola.
 * 2. Busca el tracking de demo AFC-2026-001 y captura el timeline.
 * 3. Captura la vista móvil (390px) del hero + menú.
 */
import puppeteer from 'puppeteer-core';

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const URL = 'http://localhost:7200/';
const OUT = process.env.TEMP || 'C:/Users/Desarrollo/AppData/Local/Temp';

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: 'shell',
  args: ['--no-sandbox', '--disable-gpu'],
});

const page = await browser.newPage();
const errors = [];
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
page.on('pageerror', (e) => errors.push(String(e)));

// ── 1. Carga inicial + errores de consola ────────────────────
await page.setViewport({ width: 1400, height: 900 });
await page.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 });
await page.waitForSelector('#seguimiento');

// ── 2. Prueba del sistema de tracking ────────────────────────
await page.type('input[aria-label="Número de tracking"]', 'AFC-2026-001');
await page.click('button[type="submit"]');
await new Promise((r) => setTimeout(r, 1200)); // esperar animación
const trackingText = await page.$eval('#seguimiento', (el) => el.innerText);
const timelineOk =
  trackingText.includes('En Tránsito') &&
  trackingText.includes('AFC-2026-001') &&
  trackingText.includes('En Aduana');
const trackingSection = await page.$('#seguimiento');
await trackingSection.screenshot({ path: `${OUT}/afce-tracking.png` });

// Tracking inexistente → mensaje de error
await page.$eval('input[aria-label="Número de tracking"]', (el) => (el.value = ''));
await page.type('input[aria-label="Número de tracking"]', 'AFC-9999-999');
await page.click('button[type="submit"]');
await new Promise((r) => setTimeout(r, 500));
const errorShown = (await page.$eval('#seguimiento', (el) => el.innerText)).includes(
  'No encontramos el tracking'
);

// ── 3. Calculadora: cambiar a barco + caja y verificar precio ─
await page.$eval('#cotizar input[type="number"]', (el) => (el.value = ''));
await page.type('#cotizar input[type="number"]', '100');
const selects = await page.$$('#cotizar select');
await selects[0].select('sea');
await selects[1].select('box');
await new Promise((r) => setTimeout(r, 400));
const price = await page.$eval('#cotizar .text-5xl', (el) => el.textContent);

// ── 4. FAQ: abrir la primera pregunta ────────────────────────
await page.click('#faq button');
await new Promise((r) => setTimeout(r, 600));
const faqOpen = await page.$eval('#faq', (el) =>
  el.innerText.includes('El envío aéreo cuesta $3.50')
);

// ── 5. Vista móvil ───────────────────────────────────────────
await page.setViewport({ width: 390, height: 844, isMobile: true });
await page.goto(URL, { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 800));
await page.screenshot({ path: `${OUT}/afce-mobile.png` });
// Abrir menú hamburguesa
await page.click('button[aria-label="Abrir menú"]');
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: `${OUT}/afce-mobile-menu.png` });

console.log(JSON.stringify({
  consoleErrors: errors,
  timelineOk,
  errorShown,
  calculatorPrice: price, // esperado: 100 lbs × $1.80 = $180 −15% = $153.00
  faqOpen,
}, null, 2));

await browser.close();
