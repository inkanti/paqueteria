/** Validación v3: nuevos cambios de octubre */
import puppeteer from 'puppeteer-core';

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const OUT = process.env.TEMP;

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: 'shell',
  args: ['--no-sandbox', '--disable-gpu'],
});
const page = await browser.newPage();
const errors = [];
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
page.on('pageerror', (e) => errors.push(String(e)));

await page.setViewport({ width: 1400, height: 900 });
await page.goto('http://localhost:7200/', { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise((r) => setTimeout(r, 1500));

const html = await page.content();
const checks = {
  consoleErrors: errors,
  logoEnHeader: html.includes('/images/logo.png'),
  tituloEncomiendas: html.includes('encomiendas') && html.includes('Denver, Colorado'),
  caja22: html.includes('22 × 22 × 22'),
  caja30nueva: html.includes('30 × 24 × 26'),
  precio450: html.includes('$450'),
  sinCaja30x30x30: !html.includes('30 × 30 × 30'),
  sinTracking: !html.includes('Rastrea tu Envío'),
  sinEmailContacto: !html.includes('info@alvaroflorescargo.com'),
  recoleccion: html.includes('recolectemos'),
  rutaEntrega: html.includes('Ruta de entrega'),
  flechasCarrusel: html.includes('aria-label="Siguiente"'),
};

// Probar las flechas del carrusel
const before = await page.$eval('.snap-x', (el) => el.scrollLeft);
await page.click('button[aria-label="Siguiente"]');
await new Promise((r) => setTimeout(r, 900));
const after = await page.$eval('.snap-x', (el) => el.scrollLeft);
checks.carruselAvanza = after > before;

// Capturas
await page.screenshot({ path: `${OUT}/afce-v3-top.png` });
const boxes = await page.$('section:nth-of-type(4)');
console.log(JSON.stringify(checks, null, 2));
await browser.close();
