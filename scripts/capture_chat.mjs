// D01 (opening bookend): screenshot the public research-chat share page, tall enough to hold everything from the
// request to the first numbers, and measure where both sit, so Remotion can scroll from one to the other.
// Adapted from ../buy-it-on-margin/scripts/capture_chat.mjs (one viewport there; a tall viewport here).
// Usage: node scripts/capture_chat.mjs [url] -> public/media/real/research_chat.png + config/chat_capture.json
// --no-sandbox: Ubuntu AppArmor blocks Chrome's user-namespace sandbox on this machine.
import puppeteer from 'puppeteer';
import fs from 'fs';
const url = process.argv[2] || 'https://claude.ai/share/cd15ffd8-ec3f-43bd-b916-282c92b2e116';
const MARKS = {request: 'summarize the known/alleged instances of model distillation', numbers: 'over 16 million exchanges'};
const out = 'public/media/real';
fs.mkdirSync(out, {recursive: true});
const browser = await puppeteer.launch({headless: 'shell', args: ['--no-sandbox']});
const page = await browser.newPage();
await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0 Safari/537.36');
await page.setViewport({width: 1280, height: 4800, deviceScaleFactor: 1.5});
await page.emulateMediaFeatures([{name: 'prefers-color-scheme', value: 'light'}]);
await page.goto(url, {waitUntil: 'networkidle2', timeout: 90000});
await new Promise((r) => setTimeout(r, 5000));
// Scroll every scrollable container to the top so the request is in view.
await page.evaluate(() => { document.querySelectorAll('*').forEach((e) => { if (e.scrollHeight > e.clientHeight + 10) e.scrollTop = 0; }); window.scrollTo(0, 0); });
await new Promise((r) => setTimeout(r, 2500));
const boxes = await page.evaluate((marks) => {
  const res = {};
  for (const [k, t] of Object.entries(marks)) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n; while ((n = walker.nextNode())) {
      const i = n.textContent.indexOf(t);
      if (i >= 0) { const r = document.createRange(); r.setStart(n, i); r.setEnd(n, i + t.length);
        const b = r.getBoundingClientRect(); res[k] = {x: b.x, y: b.y, w: b.width, h: b.height}; break; }
    }
  }
  return res;
}, MARKS);
await page.screenshot({path: `${out}/research_chat.png`});
const meta = {url, marks: MARKS, viewport: [1280, 4800], scale: 1.5, boxes, captured: new Date().toISOString()};
fs.writeFileSync('config/chat_capture.json', JSON.stringify(meta, null, 1) + '\n');
console.log(JSON.stringify(boxes));
await browser.close();
