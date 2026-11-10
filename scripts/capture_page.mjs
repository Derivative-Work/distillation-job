// Full-page screenshot of a local HTML file (D46's rendered audit log; D25's placeholder captures).
// Usage: node scripts/capture_page.mjs <in.html> <out.png> [width=1280] [scale=1.5] [boxes.json]
// boxes.json (optional): page height and the box of every [data-hold] element, in css px (D46's holds).
// --no-sandbox: Ubuntu AppArmor blocks Chrome's user-namespace sandbox on this machine.
import puppeteer from 'puppeteer';
import path from 'path';
const [inp, outp, width = '1280', scale = '1.5', boxesOut] = process.argv.slice(2);
const browser = await puppeteer.launch({headless: 'shell', args: ['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width: +width, height: 800, deviceScaleFactor: +scale});
await page.goto('file://' + path.resolve(inp), {waitUntil: 'networkidle0'});
await page.screenshot({path: outp, fullPage: true});
const h = await page.evaluate(() => document.documentElement.scrollHeight);
console.log(`${outp}: ${width}x${h} css px at ${scale}x`);
if (boxesOut) {
  const holds = await page.evaluate(() => [...document.querySelectorAll('[data-hold]')].map((e) => {
    const b = e.getBoundingClientRect(); return {i: +e.dataset.hold, y: b.top + window.scrollY, h: b.height}; }));
  (await import('fs')).writeFileSync(boxesOut, JSON.stringify({width: +width, height: h, scale: +scale, holds}, null, 1) + '\n');
  console.log(boxesOut, holds.length, 'holds');
}
await browser.close();
