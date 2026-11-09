import React from 'react';
import {AbsoluteFill, Img, staticFile, useCurrentFrame} from 'remotion';
import {FILM, H, SEED, W} from '../config';
import {hash, smooth} from './rand';

/**
 * The one wrapper every shot passes through: the 1970s 16mm caper look (config/film.json). Stacking order:
 * grade (teal shadows, warm highlights, lifted print blacks) -> softness -> halation on highlights -> gate weave ->
 * flicker -> grain -> dust and scratches -> vignette. Full 16:9 at 24 fps. All randomness is seeded per frame.
 */
const GRADE = 'dj-grade', HALO = 'dj-halo';
const WEAVE_X = 1, WEAVE_Y = 2, FLICK = 3, GRAIN = 4, GRAIN_X = 5, GRAIN_Y = 6, DUST = 10, SCRATCH = 20;

const hex = (c: string) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16) / 255);

const Filters: React.FC = () => {
  const g = FILM.grade, h = FILM.halation;
  const th = h.threshold, [tr, tg, tb] = hex(h.tint);
  const lin = {type: 'linear' as const, slope: 1 / (1 - th), intercept: -th / (1 - th)};
  return (
    <svg width={0} height={0} style={{position: 'absolute'}}>
      <filter id={GRADE} colorInterpolationFilters="sRGB">
        <feComponentTransfer>
          <feFuncR type="table" tableValues={g.r.join(' ')} />
          <feFuncG type="table" tableValues={g.g.join(' ')} />
          <feFuncB type="table" tableValues={g.b.join(' ')} />
        </feComponentTransfer>
        <feColorMatrix type="saturate" values={String(g.saturation)} />
      </filter>
      <filter id={HALO} colorInterpolationFilters="sRGB" x="-5%" y="-5%" width="110%" height="110%">
        <feColorMatrix type="matrix" values="0.3 0.59 0.11 0 0  0.3 0.59 0.11 0 0  0.3 0.59 0.11 0 0  0 0 0 1 0" />
        <feComponentTransfer><feFuncR {...lin} /><feFuncG {...lin} /><feFuncB {...lin} /></feComponentTransfer>
        <feGaussianBlur stdDeviation={h.blur_px} />
        <feColorMatrix type="matrix" values={`${tr} 0 0 0 0  0 ${tg} 0 0 0  0 0 ${tb} 0 0  0 0 0 1 0`} />
      </filter>
    </svg>
  );
};

const Dust: React.FC<{p: number}> = ({p}) => {
  const fps = FILM.frame.fps;
  const items: React.ReactNode[] = [];
  const perFrame = FILM.dust.specks_per_s / fps;
  const n = Math.floor(perFrame * 3 * hash(SEED, DUST, p * 7) + (hash(SEED, DUST + 1, p) < perFrame % 1 ? 1 : 0));
  const [smin, smax] = FILM.dust.size_px;
  for (let i = 0; i < n; i++) {
    const k = p * 31 + i;
    const r = smin + (smax - smin) * hash(SEED, DUST + 4, k) ** 2;
    items.push(<ellipse key={`d${i}`} cx={hash(SEED, DUST + 2, k) * W} cy={hash(SEED, DUST + 3, k) * H} rx={r}
      ry={r * (0.6 + 0.8 * hash(SEED, DUST + 6, k))} fill={hash(SEED, DUST + 5, k) < 0.5 ? '#fff' : '#000'}
      opacity={0.45 + 0.4 * hash(SEED, DUST + 7, k)} />);
  }
  if (hash(SEED, DUST + 8, p) < FILM.dust.hair_chance_per_s / fps) {
    const x = hash(SEED, DUST + 9, p) * W, y = hash(SEED, DUST + 11, p) * H;
    const dx = 30 + 60 * hash(SEED, DUST + 12, p), dy = 20 + 50 * hash(SEED, DUST + 13, p);
    items.push(<path key="hair" d={`M${x},${y} q${dx},${-dy} ${dx * 1.6},${dy * 0.4}`} stroke="#000"
      strokeWidth={1.4} fill="none" opacity={0.6} />);
  }
  const [fmin, fmax] = FILM.scratch.frames;
  for (let back = 0; back < fmax; back++) {
    const s = p - back;
    if (s < 0 || hash(SEED, SCRATCH, s) >= FILM.scratch.chance_per_s / fps) continue;
    const life = fmin + Math.floor((fmax - fmin + 1) * hash(SEED, SCRATCH + 1, s));
    if (back >= life) continue;
    const x = hash(SEED, SCRATCH + 2, s) * W + back * (hash(SEED, SCRATCH + 3, s) - 0.5) * 3;
    items.push(<rect key={`s${s}`} x={x} y={0} width={1 + hash(SEED, SCRATCH + 5, s) * 1.5} height={H}
      fill="#fff" opacity={FILM.scratch.opacity * (0.6 + 0.4 * hash(SEED, SCRATCH + 6, p))} />);
  }
  return <svg width={W} height={H} style={{position: 'absolute', inset: 0}}>{items}</svg>;
};

/** frameOffset: the main-video frame this layer's frame 0 stands for (Shorts, tests), so grain and dust match. */
export const FilmLayer: React.FC<{children: React.ReactNode; bypass?: boolean; frameOffset?: number}> =
  ({children, bypass, frameOffset = 0}) => {
  const p = useCurrentFrame() + frameOffset;
  if (bypass) return <AbsoluteFill style={{background: '#000'}}>{children}</AbsoluteFill>;
  const wx = smooth(SEED, WEAVE_X, p, FILM.weave.smooth_frames) * FILM.weave.x_px;
  const wy = smooth(SEED, WEAVE_Y, p, FILM.weave.smooth_frames) * FILM.weave.y_px;
  const fl = FILM.flicker.min + (FILM.flicker.max - FILM.flicker.min) * hash(SEED, FLICK, p);
  const g = Math.floor(hash(SEED, GRAIN, p) * FILM.grain.plates);
  const gx = (hash(SEED, GRAIN_X, p) - 0.5) * 200, gy = (hash(SEED, GRAIN_Y, p) - 0.5) * 200;
  const v = FILM.vignette;
  const graded = {position: 'absolute' as const, inset: 0, filter: `url(#${GRADE}) blur(${FILM.softness_px}px) brightness(${fl})`};
  return (
    <AbsoluteFill style={{background: '#000', overflow: 'hidden'}}>
      <Filters />
      <div style={{position: 'absolute', inset: 0, transform: `translate(${wx}px, ${wy}px)`}}>
        <div style={graded}>{children}</div>
        <div style={{position: 'absolute', inset: 0, mixBlendMode: 'screen', opacity: FILM.halation.opacity,
          filter: `url(#${HALO})`}}>{children}</div>
      </div>
      <div style={{position: 'absolute', inset: -120, transform: `translate(${gx}px, ${gy}px)`,
        mixBlendMode: 'overlay', opacity: FILM.grain.opacity}}>
        <Img src={staticFile(`grain/grain_${String(g).padStart(2, '0')}.png`)} style={{width: W + 240, height: H + 240}} />
      </div>
      <Dust p={p} />
      <div style={{position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse at center, rgba(0,0,0,0) ${v.inner * 100}%, rgba(0,0,0,${v.strength}) 100%)`}} />
    </AbsoluteFill>
  );
};
