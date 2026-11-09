// Full-page screenshot of a local HTML file (D46's rendered audit log; D25's placeholder captures).
// Usage: node scripts/capture_page.mjs <in.html> <out.png> [width=1280] [scale=1.5]
// --no-sandbox: Ubuntu AppArmor blocks Chrome's user-namespace sandbox on this machine.
import puppeteer from 'puppeteer';
import path from 'path';
const [inp, outp, width = '1280', scale = '1.5'] = process.argv.slice(2);
const browser = await puppeteer.launch({headless: 'shell', args: ['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width: +width, height: 800, deviceScaleFactor: +scale});
await page.goto('file://' + path.resolve(inp), {waitUntil: 'networkidle0'});
await page.screenshot({path: outp, fullPage: true});
const h = await page.evaluate(() => document.documentElement.scrollHeight);
console.log(`${outp}: ${width}x${h} css px at ${scale}x`);
await browser.close();
