import React from 'react';
import {AbsoluteFill, Easing, Img, interpolate, Loop, OffthreadVideo, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {FILM, H, SEED, W} from '../config';
import {hash} from './rand';

/* The 1970s caper devices (brief, 'Look'): stills with eased moves, clips, crash zooms, split screens, the cut-paper
 * title, the ALLEGEDLY! stamp (series callback), typed captions and the mechanical exchange counter. Every random
 * choice is seeded (config/seeds.json). */

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

/* ---------- Still: a generated image with a slow eased push or pan ---------- */

export type Move = {scale: number; x: number; y: number}; // x, y: centre offset as a fraction of the frame width/height

export const Still: React.FC<{src: string; from?: Move; to?: Move; aspect?: number; children?: React.ReactNode}> =
  ({src, from = {scale: 1, x: 0, y: 0}, to = from, aspect = W / H, children}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const k = interpolate(frame, [0, Math.max(1, durationInFrames - 1)], [0, 1], {easing: Easing.inOut(Easing.sin), ...clamp});
  const iw = aspect >= W / H ? H * aspect : W, ih = aspect >= W / H ? H : W / aspect;
  const s = from.scale + (to.scale - from.scale) * k;
  const x = from.x + (to.x - from.x) * k, y = from.y + (to.y - from.y) * k;
  return (
    <AbsoluteFill style={{overflow: 'hidden', background: '#000'}}>
      <div style={{position: 'absolute', width: iw, height: ih, left: (W - iw) / 2, top: (H - ih) / 2,
        transform: `translate(${-x * W}px, ${-y * H}px) scale(${s})`, transformOrigin: 'center'}}>
        <Img src={staticFile(src)} style={{position: 'absolute', width: iw, height: ih, objectFit: 'cover'}} />
        {children}
      </div>
    </AbsoluteFill>
  );
};

/* ---------- Clip: generated video, looped (mirrored on alternate passes) when the shot is longer ---------- */

export const Clip: React.FC<{src: string; frames: number; rate?: number; mirror?: boolean}> =
  ({src, frames, rate = 1, mirror = true}) => {
  const frame = useCurrentFrame();
  const pass = Math.max(1, Math.floor(frames / rate));
  const k = Math.floor(frame / pass);
  return (
    <AbsoluteFill style={{background: '#000'}}>
      <Loop durationInFrames={pass}>
        <AbsoluteFill style={{transform: mirror && k % 2 ? 'scaleX(-1)' : undefined}}>
          <OffthreadVideo src={staticFile(src)} playbackRate={rate} muted style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </AbsoluteFill>
      </Loop>
    </AbsoluteFill>
  );
};

/* ---------- Crash zoom: a fast punch-in with motion blur, then hold ---------- */

export const CrashZoom: React.FC<{at: number; x?: number; y?: number; scale?: number; children: React.ReactNode}> =
  ({at, x = 0.5, y = 0.5, scale = FILM.crash_zoom.scale, children}) => {
  const f = useCurrentFrame();
  const n = FILM.crash_zoom.frames;
  const k = interpolate(f, [at, at + n], [0, 1], {easing: Easing.in(Easing.cubic), ...clamp});
  const s = 1 + (scale - 1) * k;
  const blur = f >= at && f < at + n ? FILM.crash_zoom.blur_px * Math.sin(Math.PI * (f - at + 0.5) / n) : 0;
  return (
    <AbsoluteFill style={{overflow: 'hidden'}}>
      <AbsoluteFill style={{transform: `scale(${s})`, transformOrigin: `${x * 100}% ${y * 100}%`, filter: blur ? `blur(${blur}px)` : undefined}}>
        {children}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

/* ---------- Split screen: 2 side by side or a 2x2 grid, black gutters, panels slide in from their edges ---------- */

export const Split: React.FC<{panels: React.ReactNode[]; stagger?: number}> = ({panels, stagger = 3}) => {
  const f = useCurrentFrame();
  const g = FILM.split.gutter_px, n = panels.length;
  const cols = n === 2 ? 2 : 2, rows = n === 2 ? 1 : 2;
  const pw = (W - g * (cols + 1)) / cols, ph = (H - g * (rows + 1)) / rows;
  return (
    <AbsoluteFill style={{background: '#000'}}>
      {panels.map((p, i) => {
        const c = i % cols, r = Math.floor(i / cols);
        const k = interpolate(f, [i * stagger, i * stagger + FILM.split.slide_frames], [1, 0], {easing: Easing.out(Easing.cubic), ...clamp});
        const dx = (c === 0 ? -1 : 1) * k * (pw + g), dy = rows === 2 ? (r === 0 ? -1 : 1) * k * 0 : 0;
        return (
          <div key={i} style={{position: 'absolute', left: g + c * (pw + g), top: g + r * (ph + g), width: pw, height: ph,
            overflow: 'hidden', transform: `translate(${dx}px, ${dy}px)`}}>
            <div style={{position: 'absolute', width: W, height: H, left: (pw - W) / 2, top: (ph - H) / 2,
              transform: `scale(${Math.max(pw / W, ph / H) * 1.02})`}}>{p}</div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

/* ---------- Paper texture (cut-paper cards, typed strips) ---------- */

const PaperGrain: React.FC<{id: string; opacity?: number}> = ({id, opacity = 0.25}) => (
  <svg width="100%" height="100%" style={{position: 'absolute', inset: 0}}>
    <filter id={id}><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={3} seed={SEED} />
      <feColorMatrix type="saturate" values="0" /></filter>
    <rect width="100%" height="100%" filter={`url(#${id})`} opacity={opacity} style={{mixBlendMode: 'multiply'}} />
  </svg>
);

/* ---------- Cut-paper title: each letter on its own paper chip, animated on twos (12 fps) like stop motion ---------- */

export const CutPaperTitle: React.FC<{lines: string[]; at?: number; size?: number; board?: string}> =
  ({lines, at = 0, size = 150, board = '#173438'}) => {
  const f = useCurrentFrame();
  const step = Math.round(FILM.frame.fps / FILM.cutpaper.fps_on);
  const t = Math.floor(f / step) * step; // stop-motion: the paper moves only on twos
  const papers = FILM.cutpaper.papers;
  let idx = 0;
  return (
    <AbsoluteFill style={{background: board, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: size * 0.12}}>
      <PaperGrain id="board-grain" opacity={0.35} />
      {lines.map((line, li) => (
        <div key={li} style={{display: 'flex', gap: size * 0.06}}>
          {[...line].map((ch, ci) => {
            const i = idx++;
            if (ch === ' ') return <div key={ci} style={{width: size * 0.35}} />;
            const start = at + i * FILM.cutpaper.stagger_frames;
            if (t < start) return <div key={ci} style={{width: size * 0.72, height: size * 1.1, visibility: 'hidden'}} />;
            const land = interpolate(t, [start, start + 2 * step], [1.7, 1], {easing: Easing.out(Easing.back(2)), ...clamp});
            const bg = papers[Math.floor(hash(SEED, 300, i) * (papers.length - 1))];
            const dark = bg === '#1d2b33' || bg === '#2f6f73';
            const jig = Math.floor(t / step);
            const rot = (hash(SEED, 301, i) - 0.5) * 10 + (hash(SEED, 302, i * 97 + jig) - 0.5) * 1.6;
            const dy = (hash(SEED, 303, i) - 0.5) * size * 0.12 + (hash(SEED, 304, i * 97 + jig) - 0.5) * 2;
            return (
              <div key={ci} style={{position: 'relative', background: bg, padding: `${size * 0.04}px ${size * 0.08}px`,
                transform: `translateY(${dy}px) rotate(${rot}deg) scale(${land})`,
                boxShadow: '4px 6px 0 rgba(0,0,0,0.45)', clipPath: `polygon(${[0, 1, 2, 3].map((c) =>
                  `${(c === 1 || c === 2 ? 100 : 0) + (hash(SEED, 305 + c, i) - 0.5) * 6}% ${(c >= 2 ? 100 : 0) + (hash(SEED, 309 + c, i) - 0.5) * 6}%`).join(',')})`}}>
                <span style={{fontFamily: FILM.card.title_font, fontSize: size, lineHeight: 1, color: dark ? '#e9dcc3' : '#1d2b33'}}>{ch}</span>
              </div>
            );
          })}
        </div>
      ))}
    </AbsoluteFill>
  );
};

/* ---------- The ALLEGEDLY! stamp: courtroom serif in red ink, slammed on like a gavel (series callback) ---------- */

/** Shakes its children for a few frames from `at` (the gavel's hit). */
export const Shake: React.FC<{at: number; children: React.ReactNode}> = ({at, children}) => {
  const f = useCurrentFrame();
  const s = FILM.stamp, k = f - at - s.slam_frames;
  const amp = k >= 0 && k < s.shake_frames ? s.shake_px * (1 - k / s.shake_frames) : 0;
  const dx = amp * (hash(SEED, 400, f) * 2 - 1), dy = amp * (hash(SEED, 401, f) * 2 - 1);
  return <AbsoluteFill style={{transform: `translate(${dx}px, ${dy}px)`}}>{children}</AbsoluteFill>;
};

export const Stamp: React.FC<{at: number; text?: string; x?: number; y?: number; size?: number; holdFrames?: number}> =
  ({at, text = FILM.stamp.text, x = 0.5, y = 0.5, size = 190, holdFrames = Math.round(FILM.stamp.hold_s * FILM.frame.fps)}) => {
  const f = useCurrentFrame();
  const s = FILM.stamp;
  if (f < at || f > at + s.slam_frames + holdFrames + 6) return null;
  const k = interpolate(f, [at, at + s.slam_frames], [0, 1], {easing: Easing.in(Easing.quad), ...clamp});
  const scale = 2.6 - 1.6 * k;
  const opacity = interpolate(f, [at, at + 1, at + s.slam_frames + holdFrames, at + s.slam_frames + holdFrames + 6], [0, 0.95, 0.95, 0], clamp);
  const id = `ink-${at}`;
  const tw = size * 0.82 * text.length + size * 0.5, th = size * 1.45;
  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <svg width={W} height={H} style={{position: 'absolute', inset: 0, opacity}}>
        <defs>
          <filter id={id} x="-10%" y="-20%" width="120%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves={2} seed={SEED + at} result="warp" />
            <feDisplacementMap in="SourceGraphic" in2="warp" scale={5} result="w" />
            <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves={2} seed={SEED + at + 1} result="speck" />
            <feColorMatrix in="speck" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.2 2.0" result="mask" />
            <feComposite in="w" in2="mask" operator="in" />
          </filter>
        </defs>
        <g transform={`translate(${x * W} ${y * H}) rotate(${s.rotate_deg}) scale(${scale})`} filter={`url(#${id})`}>
          <rect x={-tw / 2} y={-th / 2} width={tw} height={th} rx={size * 0.08} fill="none" stroke={s.ink} strokeWidth={size * 0.07} />
          <rect x={-tw / 2 + size * 0.13} y={-th / 2 + size * 0.13} width={tw - size * 0.26} height={th - size * 0.26}
            fill="none" stroke={s.ink} strokeWidth={size * 0.025} />
          <text x={0} y={size * 0.34} textAnchor="middle" fill={s.ink} style={{fontFamily: FILM.card.stamp_font, fontWeight: 700,
            fontSize: size, letterSpacing: size * 0.04}}>{text}</text>
        </g>
      </svg>
    </AbsoluteFill>
  );
};

/* ---------- Typed caption on a paper strip (Special Elite), typed in one character per frame ---------- */

export const Typed: React.FC<{text: string; at?: number; x?: number; y?: number; size?: number; rotate?: number; perChar?: number}> =
  ({text, at = 0, x = 0.5, y = 0.85, size = 48, rotate = -1.5, perChar = 1}) => {
  const f = useCurrentFrame();
  if (f < at) return null;
  const shown = text.slice(0, Math.floor((f - at) / perChar) + 1);
  return (
    <div style={{position: 'absolute', left: x * W, top: y * H, transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
      background: '#efe6d2', padding: `${size * 0.25}px ${size * 0.5}px`, boxShadow: '3px 5px 0 rgba(0,0,0,0.5)', overflow: 'hidden'}}>
      <PaperGrain id={`typed-${at}`} opacity={0.18} />
      <span style={{position: 'relative', fontFamily: FILM.card.typed_font, fontSize: size, color: '#1b1b1b', whiteSpace: 'pre',
        visibility: 'hidden'}}>{text}</span>
      <span style={{position: 'absolute', left: size * 0.5, top: size * 0.25, fontFamily: FILM.card.typed_font, fontSize: size,
        color: '#1b1b1b', whiteSpace: 'pre'}}>{shown}</span>
    </div>
  );
};

/* ---------- Mechanical exchange counter: odometer digit wheels in a brass housing ---------- */

/** value: the count shown (may be fractional while rolling); digits: wheels. Lower wheels roll continuously, higher
 * wheels turn only as the one below passes 9, like a real tally counter. */
export const Counter: React.FC<{value: number; digits?: number; x?: number; y?: number; scale?: number}> =
  ({value, digits = 9, x = 0.5, y = 0.5, scale = 1}) => {
  const dw = 78, dh = 112, gap = 6;
  const wheels: React.ReactNode[] = [];
  for (let i = digits - 1; i >= 0; i--) {
    const p = 10 ** i;
    const d = Math.floor(value / p) % 10;
    const frac = Math.min(1, Math.max(0, (value % p) - (p - 1) * (i === 0 ? 0 : 1)));
    const roll = i === 0 ? value % 1 : frac;
    const pos = digits - 1 - i;
    const comma = i > 0 && i % 3 === 0;
    wheels.push(
      <div key={i} style={{display: 'flex', alignItems: 'flex-end'}}>
        <div style={{position: 'relative', width: dw, height: dh, overflow: 'hidden', background: '#111',
          boxShadow: 'inset 0 14px 14px rgba(0,0,0,0.85), inset 0 -14px 14px rgba(0,0,0,0.85)', borderRadius: 4,
          marginLeft: pos === 0 ? 0 : gap}}>
          {[d, (d + 1) % 10].map((n, k) => (
            <div key={k} style={{position: 'absolute', left: 0, width: dw, height: dh, top: (k - roll) * dh,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FILM.card.title_font,
              fontSize: 84, color: '#f1e9d6'}}>{n}</div>
          ))}
        </div>
        {comma ? <div style={{fontFamily: FILM.card.title_font, fontSize: 60, color: '#2b1d0e', margin: '0 2px', lineHeight: 1}}>,</div> : null}
      </div>,
    );
  }
  return (
    <div style={{position: 'absolute', left: x * W, top: y * H, transform: `translate(-50%, -50%) scale(${scale})`,
      background: 'linear-gradient(#d9b45a, #a87a2a 55%, #7a5418)', padding: 18, borderRadius: 14,
      boxShadow: '0 10px 0 rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.5)', display: 'flex'}}>
      {wheels}
    </div>
  );
};

/** A count that rolls from `from` to `to` over [a, b] frames (ease out, as a spun counter settles). */
export const rollValue = (f: number, a: number, b: number, from: number, to: number) =>
  from + (to - from) * interpolate(f, [a, b], [0, 1], {easing: Easing.out(Easing.cubic), ...clamp});

/* ---------- Calendar page (breakdown: FEB, JUN) ---------- */

export const CalendarPage: React.FC<{month: string; x?: number; y?: number; at?: number}> = ({month, x = 0.82, y = 0.3, at = 0}) => {
  const f = useCurrentFrame();
  const drop = interpolate(f, [at, at + 4], [-0.6, 0], {easing: Easing.out(Easing.back(1.5)), ...clamp});
  return (
    <div style={{position: 'absolute', left: x * W, top: (y + drop) * H, transform: 'translate(-50%, -50%) rotate(4deg)',
      width: 260, background: '#f4efe4', boxShadow: '4px 8px 0 rgba(0,0,0,0.5)'}}>
      <div style={{background: '#c8282c', height: 46}} />
      <div style={{fontFamily: FILM.card.title_font, fontSize: 110, textAlign: 'center', color: '#1d2b33', padding: '18px 0'}}>{month}</div>
    </div>
  );
};
