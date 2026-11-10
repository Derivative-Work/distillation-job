import React from 'react';
import {AbsoluteFill, Audio, Easing, Freeze, Img, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';
import claims from '../config/claims_card.json';
import chat from '../config/chat_capture.json';
import manifest from '../config/picks_manifest.json';
import descriptions from '../config/shot_descriptions.json';
import {FILM, FPS, H, holdS, sec2f, SHOTS, TM, W, word} from './config';
import {FilmLayer} from './film/FilmLayer';
import {CalendarPage, Clip, Counter, CrashZoom, CutPaperTitle, rollValue, Shake, Split, Stamp, Still, Typed} from './film/devices';
import {Fonts} from './Fonts';

/* The whole video: D01 (opening bookend, before the music), every shot D02–D44c cut to the locked master at its
 * timing/shot_times.json times, then D45 (claims card), D46 (closing bookend) and D47 (end card). Media are the picks in
 * public/media/picks (scripts/publish_picks.py); a shot whose media is missing renders a labelled placeholder.
 * Real captures (D01, D46; D25's inserts) bypass the film layer so they read as real. */

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const FILES = new Set((manifest as {files: string[]}).files);
const CLIP_FRAMES = (manifest as {frames: Record<string, number>}).frames;
const DESC = descriptions as unknown as Record<string, {picture: string; text: string; type: string}>;
const T = (id: string) => SHOTS[id].start as number;
const TE = (id: string) => SHOTS[id].end as number;
const MUSIC_END = 264.8;

/* ---------- lengths of the parts around the music ---------- */
export const D01_S = 10;
const D46_S = 32;
const factHold = (t: string) => Math.max(4, holdS(t));
const FACTS = [claims.intro, ...claims.items.map((i) => i.text)];
const D45_FRAMES = FACTS.reduce((a, t) => a + sec2f(factHold(t)) + 12, 0);
const D47_FRAMES = sec2f(holdS(claims.end_card));
const PRE = sec2f(D01_S);
const MUSIC = sec2f(MUSIC_END);
export const MAIN_FRAMES = PRE + MUSIC + D45_FRAMES + sec2f(D46_S) + D47_FRAMES;

/* ---------- media helpers ---------- */
const still = (id: string) => `media/picks/${id}.png`;
const clipSrc = (id: string) => `media/picks/${id}.mp4`;
const has = (f: string) => FILES.has(f);

const Placeholder: React.FC<{id: string}> = ({id}) => (
  <AbsoluteFill style={{background: '#1d2b33', alignItems: 'center', justifyContent: 'center', padding: 120, textAlign: 'center'}}>
    <div style={{fontFamily: FILM.card.title_font, fontSize: 90, color: '#e9dcc3'}}>{id}</div>
    <div style={{fontFamily: FILM.card.typed_font, fontSize: 40, color: '#e9dcc3', marginTop: 30}}>{DESC[id]?.picture}</div>
  </AbsoluteFill>
);

/** A clip stretched to its shot: slowed down to fill (not below half speed), else looped with a mirror flip. */
const ShotClip: React.FC<{id: string; len: number; rate?: number}> = ({id, len, rate}) => {
  if (!has(clipSrc(id))) return <Placeholder id={id} />;
  const n = CLIP_FRAMES[clipSrc(id)];
  const r = rate ?? Math.min(1, Math.max(0.5, n / len));
  return <Clip src={clipSrc(id)} frames={n} rate={r} />;
};

/** A still with a slow eased push; the direction is picked from the shot ID, so neighbours differ. */
const ShotStill: React.FC<{id: string; from?: {scale: number; x: number; y: number}; to?: {scale: number; x: number; y: number}}> =
  ({id, from, to}) => {
  if (!has(still(id))) return <Placeholder id={id} />;
  const k = [...id].reduce((a, c) => a + c.charCodeAt(0), 0) % 4;
  const f0 = from ?? {scale: 1.02, x: 0, y: 0};
  const t0 = to ?? [{scale: 1.1, x: 0.02, y: -0.01}, {scale: 1.1, x: -0.02, y: 0.01}, {scale: 1.12, x: 0, y: -0.02}, {scale: 1.08, x: 0.02, y: 0.02}][k];
  return <Still src={still(id)} from={f0} to={t0} />;
};

/* ---------- music-section helpers: frames on the take's timeline ---------- */
const span = (a: number, b: number) => ({from: sec2f(a), durationInFrames: Math.max(1, sec2f(b) - sec2f(a))});
const shot = (id: string) => span(T(id), TE(id));
const len = (id: string) => sec2f(TE(id)) - sec2f(T(id));
const at = (sec: string, line: number, w: number) => sec2f(word(sec, line, w).start);

/** The stamp hits: every "(allegedly!)" in the choruses; the outro's "(Allegedly.)" gets its own text. */
const STAMPS = [['Chorus 1', 0], ['Chorus 1', 4], ['Chorus 2', 0], ['Chorus 2', 4], ['Final chorus', 0], ['Final chorus', 4]]
  .map(([s, l]) => at(s as string, l as number, 3));
const OUTRO_STAMP = at('Outro', 1, 0);

/** D28–D44c exchange counter: slams in at "Sixteen million!", rolls through the three figures, shrinks to a corner at
 * D31 and stays, ticking at about 3 million a day (35 a second) to the end of the song. */
const COUNTER_HITS = [1, 2, 3].map((l) => at('Breakdown', l, 0));
const COUNTER_VALS = [16_000_000, 28_800_000, 151_000_000];
const ExchangeCounter: React.FC = () => {
  const f = useCurrentFrame();
  if (f < COUNTER_HITS[0]) return null;
  let v = 0;
  COUNTER_HITS.forEach((h, i) => { if (f >= h) v = rollValue(f, h, h + 14, i ? COUNTER_VALS[i - 1] : 0, COUNTER_VALS[i]); });
  const tick0 = COUNTER_HITS[2] + 14;
  if (f > tick0) v = COUNTER_VALS[2] + Math.floor(((f - tick0) / FPS) * 35);
  const slam = interpolate(f, [COUNTER_HITS[0], COUNTER_HITS[0] + 3], [2.2, 1], {easing: Easing.in(Easing.quad), ...clamp});
  const shrinkAt = sec2f(T('D31'));
  const k = interpolate(f, [shrinkAt, shrinkAt + 10], [0, 1], {easing: Easing.inOut(Easing.cubic), ...clamp});
  // Off for the cards and shots that fill the frame with their own text: D43 (disclaimer) and D44 (its own big counter).
  if (f >= sec2f(T('D43')) && f < sec2f(T('D44a'))) return null;
  return <Counter value={v} x={0.5 + 0.38 * k} y={0.55 - 0.47 * k} scale={1.5 * slam * (1 - 0.8 * k)} />;
};

/** A caption band for D25 (two lines: the claim and the disclaimer). */
const CaptionBand: React.FC<{big: string; small: string; at?: number}> = ({big, small, at: a = 0}) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [a, a + 6], [0, 1], clamp);
  return (
    <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, padding: '28px 80px 34px', background: 'rgba(10,14,16,0.92)',
      opacity: o, textAlign: 'center'}}>
      <div style={{fontFamily: FILM.card.typed_font, fontSize: 46, color: '#f1e9d6', lineHeight: 1.25}}>{big}</div>
      <div style={{fontFamily: FILM.card.typed_font, fontSize: 30, color: '#c9c0ad', marginTop: 12}}>{small}</div>
    </div>
  );
};

/** D25: the bottle pops (clip); its label becomes a screen with the Qwen audit excerpt, verbatim
 * (log/audits/round3_qwen3.8_run1.md, line 1); from "wait", the two real captures side by side with the caption. */
const QWEN_EXCERPT = 'I am Claude, made by Anthropic.';
const D25: React.FC = () => {
  const f = useCurrentFrame();
  const waitF = at('Verse 2', 6, 10) - sec2f(T('D25'));
  const screenIn = 14;
  const so = interpolate(f, [screenIn, screenIn + 6], [0, 1], clamp);
  return (
    <>
      <Sequence durationInFrames={waitF}>
        <FilmLayer frameOffset={sec2f(T('D25'))}>
          <ShotClip id="D25" len={waitF} rate={1} />
        </FilmLayer>
        <div style={{position: 'absolute', left: W * 0.5, top: H * 0.68, transform: 'translate(-50%, -50%)', opacity: so,
          background: '#0b1a12', border: '6px solid #6b5a3a', borderRadius: 10, padding: '16px 24px', width: 420,
          boxShadow: '0 0 30px rgba(80,255,140,0.25)'}}>
          <div style={{fontFamily: 'monospace', fontSize: 26, color: '#8dfcae', lineHeight: 1.3}}>{QWEN_EXCERPT}</div>
          <div style={{fontFamily: 'monospace', fontSize: 15, color: '#5fb57c', marginTop: 8}}>qwen3.8:27b · audit run 1 · Nov 6, 2026</div>
        </div>
      </Sequence>
      <Sequence from={waitF}>
        <AbsoluteFill style={{background: '#0d1114'}}>
          {['d25_left', 'd25_right'].map((n, i) => (
            <div key={n} style={{position: 'absolute', top: 70, left: i ? W / 2 + 20 : 60, width: W / 2 - 80, height: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              {has(`media/real/${n}.png`) ? <Img src={staticFile(`media/real/${n}.png`)}
                style={{maxWidth: '100%', maxHeight: '100%', boxShadow: '0 8px 30px rgba(0,0,0,0.6)'}} /> : null}
            </div>
          ))}
          <CaptionBand at={4} big="SAME MODEL. HANDED A PAGE ABOUT CLAUDE, IT DECIDED IT WAS CLAUDE."
            small="Models often misidentify themselves. This is not evidence of distillation." />
        </AbsoluteFill>
      </Sequence>
    </>
  );
};

/** Four (or two) copies of one clip as a split screen, each framed differently. */
const ClipSplit: React.FC<{id: string; n: 2 | 4; len: number}> = ({id, n, len: l}) => (
  <Split stagger={n === 4 ? 4 : 6} panels={Array.from({length: n}, (_, i) => (
    <AbsoluteFill key={i} style={{transform: `scale(${1 + 0.08 * i}) translateX(${(i % 2 ? 1 : -1) * 40 * i}px) ${i % 2 ? 'scaleX(-1)' : ''}`}}>
      <ShotClip id={id} len={l} />
    </AbsoluteFill>
  ))} />
);

/** The music section: every shot, then the overlays that run across shots (stamps, the counter). */
const Song: React.FC = () => {
  const chorus2 = (l: number) => sec2f(TM.sections.find((s) => s.name === 'Chorus 2')!.lines[l].words[0].start);
  const c2 = [sec2f(T('D27')), chorus2(1), chorus2(2), chorus2(3), chorus2(4), chorus2(5), chorus2(6), chorus2(7), sec2f(TE('D27'))];
  const C2_SHOTS: [string, 'clip' | 'still' | 'split'][] = [['D27', 'clip'], ['D16', 'clip'], ['D17', 'still'], ['D27', 'clip'],
    ['D15', 'clip'], ['D27', 'clip'], ['D18', 'clip'], ['D19', 'split']];
  const pics: React.ReactNode = (
    <>
      <Sequence {...shot('D02')}><ShotClip id="D02" len={len('D02')} /></Sequence>
      <Sequence {...shot('D03')}>
        <ShotStill id="D03" from={{scale: 1.6, x: 0.0, y: 0.08}} to={{scale: 1.0, x: 0, y: 0}} />
        <Typed text="24,000" at={at('Intro', 1, 0) - sec2f(T('D03'))} x={0.5} y={0.14} size={84} />
      </Sequence>
      <Sequence {...shot('D04')}>
        <ShotStill id="D04" />
        <Typed text="PLEASE" at={6} x={0.5} y={0.5} size={96} rotate={0} perChar={2} />
      </Sequence>
      <Sequence {...shot('D04a')}>
        <ShotStill id="D04a" />
        <Typed text="A DRAMATIZATION OF ALLEGATIONS" at={6} y={0.86} />
      </Sequence>
      <Sequence {...shot('D04b')}><CutPaperTitle lines={['THE', 'DISTILLATION', 'JOB']} /></Sequence>
      <Sequence {...shot('D04c')}>
        <Split panels={['THE PROXY', 'THE BURNER', 'THE PROMPTER', 'THE BOTTLER'].map((r, i) => (
          <AbsoluteFill key={r}>
            <Still src={still('D04c')} from={{scale: 1.15 + i * 0.05, x: (i % 2 ? 0.06 : -0.06), y: 0}} />
            <Typed text={r} at={10 + i * 4} y={0.82} size={64} rotate={i % 2 ? 2 : -2} />
          </AbsoluteFill>
        ))} />
      </Sequence>
      <Sequence {...shot('D04d')}>
        <CrashZoom at={Math.round(len('D04d') / 2)} x={0.62} y={0.45}><ShotStill id="D04d" from={{scale: 1, x: 0, y: 0}} to={{scale: 1.06, x: 0, y: 0}} /></CrashZoom>
      </Sequence>
      <Sequence {...shot('D04e')}><ShotClip id="D04e" len={len('D04e')} /></Sequence>
      <Sequence {...shot('D05')}><ClipSplit id="D05" n={4} len={len('D05')} /></Sequence>
      <Sequence {...shot('D06')}><ShotStill id="D06" /></Sequence>
      <Sequence {...shot('D07')}><ShotStill id="D07" /></Sequence>
      <Sequence {...shot('D08')}><CrashZoom at={4} x={0.5} y={0.55} scale={1.35}><ShotClip id="D08" len={len('D08')} /></CrashZoom></Sequence>
      {['D09', 'D10', 'D11'].map((id) => <Sequence key={id} {...shot(id)}><ShotClip id={id} len={len(id)} /></Sequence>)}
      <Sequence {...shot('D12')}>
        <ShotClip id="D12" len={len('D12')} />
        <Typed text="REASONING · SMALL BATCH" at={4} x={0.68} y={0.9} size={34} rotate={-1} />
      </Sequence>
      <Sequence {...shot('D13')}><D13 /></Sequence>
      <Sequence {...shot('D14')}><ShotClip id="D14" len={len('D14')} /></Sequence>
      {['D15', 'D16'].map((id) => <Sequence key={id} {...shot(id)}><ShotClip id={id} len={len(id)} /></Sequence>)}
      <Sequence {...shot('D17')}><ShotStill id="D17" /></Sequence>
      <Sequence {...shot('D18')}><ShotClip id="D18" len={len('D18')} /></Sequence>
      <Sequence {...shot('D19')}><ClipSplit id="D19" n={2} len={len('D19')} /></Sequence>
      <Sequence {...shot('D20')}><ShotStill id="D20" /><CalendarPage month="MON" x={0.84} y={0.26} at={4} /></Sequence>
      <Sequence {...shot('D21')}>
        <ShotClip id="D21" len={len('D21')} />
        <Typed text="24 HRS (ALLEGED)" at={8} x={0.3} y={0.14} size={56} />
      </Sequence>
      <Sequence {...shot('D22')}><ShotClip id="D22" len={len('D22')} /></Sequence>
      <Sequence {...shot('D23')}>
        <ShotClip id="D23" len={len('D23')} />
        <Typed text="METADATA?" at={10} x={0.5} y={0.12} size={64} />
      </Sequence>
      <Sequence {...shot('D24')}><ShotStill id="D24" /></Sequence>
      {/* D25 is drawn outside the film layer (its captures are real); see Main. */}
      {C2_SHOTS.map(([id, kind], i) => (
        <Sequence key={`c2-${i}`} from={c2[i]} durationInFrames={c2[i + 1] - c2[i]}>
          {kind === 'clip' ? <ShotClip id={id} len={c2[i + 1] - c2[i]} /> : kind === 'still' ? <ShotStill id={id} />
            : <ClipSplit id={id} n={2} len={c2[i + 1] - c2[i]} />}
        </Sequence>
      ))}
      <Sequence {...shot('D27a')}>
        <ShotStill id="D27a" />
        <Typed text="THEIR COUNT, NOT OURS" at={10} x={0.5} y={0.12} size={60} />
      </Sequence>
      <Sequence {...span(T('D28'), T('D31'))}><AbsoluteFill style={{background: '#16343a'}} /></Sequence>
      <Sequence from={COUNTER_HITS[0]} durationInFrames={COUNTER_HITS[1] - COUNTER_HITS[0]}><CalendarPage month="FEB" /></Sequence>
      <Sequence from={COUNTER_HITS[1]} durationInFrames={COUNTER_HITS[2] - COUNTER_HITS[1]}><CalendarPage month="JUN" /></Sequence>
      {['D31', 'D32'].map((id) => <Sequence key={id} {...shot(id)}><ShotClip id={id} len={len(id)} /></Sequence>)}
      <Sequence {...shot('D33')}>
        <ShotClip id="D33" len={len('D33')} />
        <Typed text="SWITCH" at={at('Bridge', 1, 11) - sec2f(T('D33'))} x={0.5} y={0.14} size={72} />
      </Sequence>
      {['D34', 'D35'].map((id) => <Sequence key={id} {...shot(id)}><ShotClip id={id} len={len(id)} /></Sequence>)}
      <Sequence {...shot('D36')}><D36 /></Sequence>
      <Sequence {...shot('D37')}><ShotStill id="D37" /></Sequence>
      <Sequence {...shot('D38')}><ShotClip id="D38" len={len('D38')} /></Sequence>
      <Sequence {...shot('D39')}><Shake at={0}><CrashZoom at={6} x={0.55} y={0.5} scale={1.3}><ShotClip id="D39" len={len('D39')} /></CrashZoom></Shake></Sequence>
      <Sequence {...shot('D39a')}>
        <Split stagger={6} panels={[<Still key="l" src={still('D39a_l')} />, <Still key="r" src={still('D39a_r')} />]} />
      </Sequence>
      <Sequence {...shot('D39b')}>
        <ShotStill id="D39b" from={{scale: 1, x: 0, y: 0}} to={{scale: 1.04, x: 0, y: 0}} />
        <Stamp at={6} text="TRANSFORMATIVE" x={0.25} y={0.6} size={84} ink="#e0b42a" holdFrames={len('D39b')} />
        <Stamp at={18} text="NATIONAL SECURITY" x={0.75} y={0.66} size={70} holdFrames={len('D39b')} />
      </Sequence>
      <Sequence {...shot('D39c')}><ShotClip id="D39c" len={len('D39c')} /></Sequence>
      <Sequence {...shot('D39d')}><ShotStill id="D39d" /></Sequence>
      {['D40', 'D41', 'D42', 'D42b'].map((id) => <Sequence key={id} {...shot(id)}><ShotClip id={id} len={len(id)} /></Sequence>)}
      {/* D42a: crop out the left frame bar, which reads as a hinge missing its door once the door swings right (human, M4 notes 2). */}
      <Sequence {...shot('D42a')}>
        <AbsoluteFill style={{transform: 'scale(1.31)', transformOrigin: '100% 75%'}}><ShotClip id="D42a" len={len('D42a')} /></AbsoluteFill>
      </Sequence>
      <Sequence {...shot('D43')}><CutPaperTitle lines={['NO WEIGHTS WERE HARMED', 'IN THE MAKING', 'OF THIS SONG']} size={64} /></Sequence>
      <Sequence {...shot('D44')}><D44 /></Sequence>
      <Sequence {...shot('D44a')}><ShotClip id="D44a" len={len('D44a')} /></Sequence>
      <Sequence {...shot('D44b')}><ShotStill id="D44b" /></Sequence>
      <Sequence {...shot('D44c')}><D44c /></Sequence>
    </>
  );
  // Stamp hits shake the picture under them.
  const shaken = [...STAMPS, OUTRO_STAMP].reduce<React.ReactNode>((acc, h) => <Shake at={h}>{acc}</Shake>, pics);
  return (
    <>
      {shaken}
      <ExchangeCounter />
      {STAMPS.map((h) => <Stamp key={h} at={h} />)}
    </>
  );
};

/** D13: the toss, with the account number ticking up by one at the landing. */
const D13: React.FC = () => {
  const f = useCurrentFrame();
  const l = len('D13');
  const v = rollValue(f, Math.round(l * 0.55), Math.round(l * 0.55) + 6, 24_017, 24_018);
  return (
    <>
      <ShotClip id="D13" len={l} />
      <Counter value={v} digits={5} x={0.84} y={0.12} scale={0.55} />
    </>
  );
};

/** D36: needle-scratch freeze on the first frame, then a slow pull back. */
const D36: React.FC = () => {
  const f = useCurrentFrame();
  const hold = 10;
  const s = interpolate(f, [hold, len('D36')], [1.3, 1.0], {easing: Easing.out(Easing.cubic), ...clamp});
  return (
    <Shake at={-2}>
      <AbsoluteFill style={{transform: `scale(${s})`}}>
        {f < hold ? <Freeze frame={0}><ShotClip id="D36" len={len('D36')} /></Freeze>
          : <Sequence from={hold}><ShotClip id="D36" len={len('D36') - hold} /></Sequence>}
      </AbsoluteFill>
    </Shake>
  );
};

/** D44: "(Allegedly.)": one last stamp over the ticking counter, full size. */
const D44: React.FC = () => {
  const f = useCurrentFrame();
  const t0 = sec2f(T('D44'));
  const tick0 = COUNTER_HITS[2] + 14;
  const v = COUNTER_VALS[2] + Math.floor(((f + t0 - tick0) / FPS) * 35);
  return (
    <AbsoluteFill style={{background: '#16343a'}}>
      <Counter value={v} x={0.5} y={0.5} scale={1.4} />
      <Stamp at={OUTRO_STAMP - t0} text="ALLEGEDLY." holdFrames={len('D44')} />
    </AbsoluteFill>
  );
};

/** D44c: pull back along the line; fade to black with the bass. */
const D44c: React.FC = () => {
  const f = useCurrentFrame();
  const l = len('D44c');
  const s = interpolate(f, [0, l], [1.25, 1.0], {easing: Easing.inOut(Easing.sin), ...clamp});
  const fade = interpolate(f, [l - 36, l], [0, 1], clamp);
  return (
    <>
      <AbsoluteFill style={{transform: `scale(${s})`}}><ShotClip id="D44c" len={l} /></AbsoluteFill>
      <AbsoluteFill style={{background: '#000', opacity: fade}} />
    </>
  );
};

/* ---------- bookends and cards ---------- */

/** D01: the real research chat, scrolling from the request to the first numbers; labelled with model and date. */
const D01: React.FC = () => {
  const f = useCurrentFrame();
  const sc = chat.scale, imgW = chat.viewport[0] * sc, k = W / imgW;
  const y0 = 0, y1 = Math.max(0, (chat.boxes.numbers.y - 260) * sc * k);
  const y = interpolate(f, [sec2f(1.2), PRE - sec2f(1.5)], [y0, y1], {easing: Easing.inOut(Easing.sin), ...clamp});
  return (
    <AbsoluteFill style={{background: '#fff', overflow: 'hidden'}}>
      <Img src={staticFile('media/real/research_chat.png')} style={{position: 'absolute', left: 0, top: -y, width: W}} />
      <div style={{position: 'absolute', left: 40, bottom: 36, background: 'rgba(20,24,28,0.88)', color: '#f1e9d6', padding: '10px 22px',
        fontFamily: FILM.card.typed_font, fontSize: 34, borderRadius: 4}}>Research: Claude, Nov 4, 2026</div>
    </AbsoluteFill>
  );
};

/** D45: the claims card, white on black, one item at a time; marked as a draft until M6. */
const D45: React.FC = () => {
  let a = 0;
  return (
    <AbsoluteFill style={{background: '#000'}}>
      {FACTS.map((t, i) => {
        const d = sec2f(factHold(t)) + 12;
        const from = a; a += d;
        const srcs = i ? claims.items[i - 1].sources.map((s) => s.name).join(' · ') : '';
        return (
          <Sequence key={i} from={from} durationInFrames={d}>
            <FactPage text={t} sources={srcs} />
          </Sequence>
        );
      })}
      <div style={{position: 'absolute', right: 30, top: 24, fontFamily: 'monospace', fontSize: 20, color: '#c8282c'}}>
        DRAFT · sources to be reopened and checked at M6
      </div>
    </AbsoluteFill>
  );
};
const FactPage: React.FC<{text: string; sources: string}> = ({text, sources}) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, 8], [0, 1], clamp);
  return (
    <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', padding: '0 220px', opacity: o}}>
      <div style={{fontFamily: 'Old Standard TT', fontSize: text.length > 260 ? 44 : 52, lineHeight: 1.4, color: '#fff', textAlign: 'left'}}>{text}</div>
      {sources ? <div style={{fontFamily: 'Old Standard TT', fontSize: 30, color: '#9a9a9a', marginTop: 36, alignSelf: 'flex-start'}}>
        Source: {sources}</div> : null}
    </AbsoluteFill>
  );
};

/** D46: the audit log (every auditor's findings, mistakes and catches) scrolling top to bottom. */
const D46: React.FC = () => {
  const f = useCurrentFrame();
  const total = sec2f(D46_S);
  const imgH = (W / (1280 * 1.5)) * 4030 * 1.5;   // public/media/real/audit_log.png: 1280 css px wide at 1.5x, 4030 css px tall
  const y = interpolate(f, [sec2f(1.5), total - sec2f(1.5)], [0, Math.max(0, imgH - H)], clamp);
  return (
    <AbsoluteFill style={{background: '#fff', overflow: 'hidden'}}>
      <Img src={staticFile('media/real/audit_log.png')} style={{position: 'absolute', left: 0, top: -y, width: W}} />
    </AbsoluteFill>
  );
};

/** D47: the end card. */
const D47: React.FC = () => (
  <AbsoluteFill style={{background: '#000', alignItems: 'center', justifyContent: 'center', padding: '0 200px'}}>
    <div style={{fontFamily: 'Old Standard TT', fontSize: 40, lineHeight: 1.5, color: '#fff'}}>{claims.end_card}</div>
  </AbsoluteFill>
);

export const Main: React.FC = () => {
  const d25 = shot('D25');
  return (
    <AbsoluteFill style={{background: '#000'}}>
      <Fonts />
      <Sequence durationInFrames={PRE}><FilmLayer bypass><D01 /></FilmLayer></Sequence>
      <Sequence from={PRE} durationInFrames={MUSIC}>
        <Audio src={staticFile('audio/master.wav')} />
        <FilmLayer><Song /></FilmLayer>
        <Sequence {...d25}><D25 /></Sequence>
      </Sequence>
      <Sequence from={PRE + MUSIC} durationInFrames={D45_FRAMES}><D45 /></Sequence>
      <Sequence from={PRE + MUSIC + D45_FRAMES} durationInFrames={sec2f(D46_S)}><D46 /></Sequence>
      <Sequence from={PRE + MUSIC + D45_FRAMES + sec2f(D46_S)} durationInFrames={D47_FRAMES}><D47 /></Sequence>
    </AbsoluteFill>
  );
};
