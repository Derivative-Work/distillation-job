import React from 'react';
import {useCurrentFrame} from 'remotion';
import rule from '../config/captions.json';
import tmap from '../timing/timing_map.json';
import {FILM, FPS, SEED} from './config';
import {hash} from './film/rand';

/**
 * Burned-in captions as ransom-note clippings (human, 2026-11-10: "cut the lyrics into groups of 1, 2, or 3 words each,
 * as if each group came from the same magazine page"). Each line of the lyrics as sung (timing/timing_map.json) is cut
 * into groups of 1-3 words; each group is one clipping: one paper, one face, one tilt. A line builds up clipping by
 * clipping as its words are sung and stays for the line's time (the SRT's rule, config/captions.json), so it reads
 * as a whole. The SRT stays line by line (scripts/export_srt.py).
 *
 * Grouping (config/captions.json "groups"): a group ends after max_words words, after a word ending in punctuation, or
 * before a gap over gap_s.
 */
type Word = {w: string; start: number; end: number};
type Clip = {a: number; text: string; key: number};
type Line = {a: number; b: number; clips: Clip[]};
const G = (rule as any).groups as {max_words: number; gap_s: number};

export const LINES: Line[] = (() => {
  // words already on screen (a stamp, a card) are left out (config/captions.json "omit")
  const omit = ((rule as any).omit ?? []) as {section: string; line: number; from?: number}[];
  // a line starts no earlier than the last word of the line before it ends (the aligner put chorus 1's and the final
  // chorus's "Take" on top of "sieve", so "sieve" was replaced as it landed: human, 2026-11-10); same rule in the SRT
  const raw = (tmap as any).sections.flatMap((s: any) => s.lines) as {start: number; end: number; words: Word[]}[];
  const startOf = new Map(raw.map((l, i) => {
    const prevEnd = i ? raw[i - 1].words[raw[i - 1].words.length - 1].end : -1;
    return [l, Math.max(l.start, prevEnd + 0.02)] as const;
  }));
  const lines = (tmap as any).sections.flatMap((s: any) => s.lines.map((l0: any, i: number) => {
    const a = startOf.get(l0)!;
    const l = a === l0.start ? l0 : {...l0, start: a, words: l0.words.map((w: Word) => (w.start < a ? {...w, start: a} : w))};
    const o = omit.find((q) => q.section === s.name && q.line === i);
    return o ? {...l, words: o.from === undefined ? [] : l.words.slice(0, o.from)} : l;
  })).filter((l: any) => l.words.length) as {start: number; end: number; words: Word[]}[];
  let k = 0;
  return lines.map((l, li) => {
    const groups: Word[][] = [];
    let cur: Word[] = [];
    l.words.forEach((w, i) => {
      if (cur.length && w.start - cur[cur.length - 1].end > G.gap_s) { groups.push(cur); cur = []; }
      cur.push(w);
      const nextGap = i + 1 < l.words.length ? l.words[i + 1].start - w.end : 99;
      if (cur.length >= G.max_words || /[,.!?;:)\u2014\u2026]$/.test(w.w) || nextGap > G.gap_s) { groups.push(cur); cur = []; }
    });
    if (cur.length) groups.push(cur);
    const nxt = li + 1 < lines.length ? lines[li + 1].start : 1e9;
    return {a: l.start, b: Math.max(l.start + (rule as any).min_s, Math.min(nxt, l.words[l.words.length - 1].end + (rule as any).tail_s)),
      clips: groups.map((g) => ({a: g[0].start, text: g.map((w) => w.w).join(' '), key: k++}))};
  });
})();

const FACES: [string, number, string][] = [   // family, weight, style
  [FILM.card.title_font, 400, 'normal'], ['Old Standard TT', 700, 'normal'], ['Old Standard TT', 400, 'italic'],
  [FILM.card.typed_font, 400, 'normal']];
const PAPERS = FILM.cutpaper.papers;
const DARK = new Set(['#1d2b33', '#2f6f73']);

/** One clipping: a group of words cut from one magazine page, landing on twos (stop motion). */
const Clipping: React.FC<{c: Clip; t: number; size: number}> = ({c, t, size}) => {
  const step = 2 / FPS;
  const tq = Math.floor(t / step) * step;
  if (tq < c.a) return null;
  const land = Math.min(1, (tq - c.a) / (4 / FPS));
  const i = c.key;
  const bg = PAPERS[Math.floor(hash(SEED, 500, i) * PAPERS.length)];
  const [face, weight, style] = FACES[Math.floor(hash(SEED, 501, i) * FACES.length)];
  const rot = (hash(SEED, 502, i) - 0.5) * 6;
  const dy = (hash(SEED, 503, i) - 0.5) * size * 0.14;
  const s = face === FILM.card.title_font ? 0.9 : face === FILM.card.typed_font ? 1.0 : 1.1;
  return (
    <div style={{background: bg, padding: `${size * 0.06}px ${size * 0.2}px ${size * 0.1}px`, lineHeight: 1,
      transform: `translateY(${dy}px) rotate(${rot}deg) scale(${1.25 - 0.25 * land})`, boxShadow: '3px 5px 0 rgba(0,0,0,0.55)',
      clipPath: `polygon(${[0, 1, 2, 3].map((q) => `${(q === 1 || q === 2 ? 100 : 0) + (hash(SEED, 505 + q, i) - 0.5) * 3}% ${(q >= 2 ? 100 : 0) + (hash(SEED, 509 + q, i) - 0.5) * 10}%`).join(',')})`}}>
      <span style={{fontFamily: face, fontWeight: weight, fontStyle: style, fontSize: size * s, whiteSpace: 'nowrap',
        color: DARK.has(bg) ? '#efe4cc' : '#1d2b33'}}>{c.text}</span>
    </div>
  );
};

/** raised: frame ranges where a caption band sits at the bottom (D25); the caption rises above it. Elsewhere it sits
 * `bottom` px up (or hangs from `top`, in the Shorts); overlays (the citation chips) keep 140 px clear. offsetS: song time at this composition's frame 0. */
export const Captions: React.FC<{offsetS?: number; size?: number; bottom?: number; top?: number; width?: number; raised?: [number, number][]}> =
  ({offsetS = 0, size = 50, bottom = 40, top, width = 1500, raised = []}) => {
    const f = useCurrentFrame();
    const t = f / FPS + offsetS;
    const b = raised.some(([a, z]) => f >= a && f < z) ? 196 : bottom;
    // in an excerpt (offsetS > 0) a line must start inside it: no clipped tail of the one before the cut
    const line = LINES.find((l) => t >= l.a && t < l.b && l.a >= offsetS);
    if (!line) return null;
    return (
      <div style={{position: 'absolute', left: 0, right: 0, ...(top !== undefined ? {top} : {bottom: b}), display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', maxWidth: width,
          columnGap: size * 0.28, rowGap: size * 0.22}}>
          {line.clips.map((c) => <Clipping key={c.key} c={c} t={t} size={size} />)}
        </div>
      </div>
    );
  };
