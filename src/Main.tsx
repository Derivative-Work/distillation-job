import React from 'react';
import {AbsoluteFill, Audio, Easing, Freeze, Img, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';
import claims from '../config/claims_card.json';
import chat from '../config/chat_capture.json';
import citations from '../config/citations.json';
import cardsAudio from '../timing/cards_audio.json';
import auditHolds from '../config/audit_holds.json';
import auditBoxes from '../config/audit_log_boxes.json';
import manifest from '../config/picks_manifest.json';
import descriptions from '../config/shot_descriptions.json';
import {FILM, FPS, H, holdS, sec2f, SHOTS, TM, W, word} from './config';
import {FilmLayer} from './film/FilmLayer';
import {CalendarPage, Clip, Counter, CrashZoom, CutPaperTitle, rollValue, Shake, Split, Stamp, Still, Typed} from './film/devices';
import {Fonts} from './Fonts';
import {SwitchCameo} from './defaultOn/SwitchCameo';
import {Captions} from './Captions';

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
const MUSIC_END = (TM as unknown as {audio: {duration_s: number}}).audio.duration_s; // the edited master (config/edit.json, scripts/cut_master.py)

/* ---------- lengths of the parts around the music ---------- */
// 32 s of scroll plus the holds (config/audit_holds.json); the end-section bounce starts two bars earlier to match
// (scripts/cards_audio.py START_S 92.206, was 100.972: +8.766 s)
const D46_S = 32 + 8.766;
const factHold = (t: string) => Math.max(4, holdS(t));
type Page = ({kind: 'text'; text: string; sources?: {name: string}[]} |
  {kind: 'table'; title: string; cols: string[]; rows: string[][]; note?: string; hold_s: number}) & {backdrop?: string[]};
const PAGES = claims.pages as unknown as Page[];
const pageFrames = (pg: Page) => (pg.kind === 'table' ? sec2f(pg.hold_s) : sec2f(factHold(pg.text))) + 12;
const D45_FRAMES = PAGES.reduce((a, pg) => a + pageFrames(pg), 0);
const D47_PAGES = [claims.end_card, claims.credits];
const D47_BACKDROPS = [claims.end_backdrop.disclosure, claims.end_backdrop.credits];
/* The end section's music (scripts/cards_audio.py: the stems without vocals from a downbeat at 100.97 s, post-filtered)
 * ends with the song's own ending; the last credit holds until it does. */
const CARDS_AUDIO_F = sec2f(cardsAudio.duration_s);
const D47_HOLDS = (() => {
  const h = D47_PAGES.map((t) => sec2f(Math.max(4, holdS(t))) + 12);
  h[h.length - 1] = Math.max(h[h.length - 1], CARDS_AUDIO_F - D45_FRAMES - sec2f(D46_S) - h.slice(0, -1).reduce((a, b) => a + b, 0));
  return h;
})();
const D47_FRAMES = D47_HOLDS.reduce((a, b) => a + b, 0);
const MUSIC = sec2f(MUSIC_END);
export const MAIN_FRAMES = MUSIC + D45_FRAMES + sec2f(D46_S) + D47_FRAMES;

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
const ShotClip: React.FC<{id: string; len: number; rate?: number; skip?: number}> = ({id, len, rate, skip = 0}) => {
  if (!has(clipSrc(id))) return <Placeholder id={id} />;
  const n = CLIP_FRAMES[clipSrc(id)];
  const r = rate ?? Math.min(1, Math.max(0.5, (n - skip) / len));
  return <Clip src={clipSrc(id)} frames={n} rate={r} skip={skip} />;
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
 * D31 and stays, at 151,000,000 (frozen: decision 13). */
const COUNTER_HITS = [1, 2, 3].map((l) => at('Breakdown', l, 0));
const COUNTER_VALS = [16_000_000, 28_800_000, 151_000_000];
const ExchangeCounter: React.FC = () => {
  const f = useCurrentFrame();
  if (f < COUNTER_HITS[0]) return null;
  let v = 0;
  COUNTER_HITS.forEach((h, i) => { if (f >= h) v = rollValue(f, h, h + 14, i ? COUNTER_VALS[i - 1] : 0, COUNTER_VALS[i]); });
  const tick0 = COUNTER_HITS[2] + 14;   // the roll to 151M ends here
  // no tick after 151M (human, M6, decision 13: 3 million a day was a May-July peak, not an ongoing rate)
  if (f > tick0) v = COUNTER_VALS[2];
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
 * (log/audits/round3_qwen3.8_run1.md, line 1); from "wait", the two real captures (stacked split) with the caption. */
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
          {/* Stacked split (legibility: the audit reply runs the full window width). Real captures, cropped by
              scripts/d25_captures.py; the model name stays visible in each. */}
          {([['d25_left', 'Fresh chat', 70, 367], ['d25_right', 'Same model, replying to the lyric-audit prompt', 500, 231]] as const)
            .map(([n, label, top, h], i) => (
            <div key={n} style={{position: 'absolute', top, left: (W - 1400) / 2, width: 1400, opacity: interpolate(f - waitF, [i * 6, i * 6 + 6], [0, 1], clamp)}}>
              <div style={{position: 'absolute', top: -42, left: 0, fontFamily: FILM.card.typed_font, fontSize: 28, color: '#c9c0ad'}}>{label}</div>
              {has(`media/real/${n}.png`) ? <Img src={staticFile(`media/real/${n}.png`)}
                style={{width: 1400, height: h, display: 'block', boxShadow: '0 8px 30px rgba(0,0,0,0.6)'}} /> : null}
            </div>
          ))}
          <CaptionBand at={4} big={D25_CAPTION.big}
            small={D25_CAPTION.small} />
        </AbsoluteFill>
      </Sequence>
    </>
  );
};

/** D27e: "And stroll right out the door": a one-second freeze-frame (as D04c's roll call) with FALLBACK on the last
 * crate's tag, then the crew walks out (decision 12; the tag leaves the frame within half a second, so it's read on the
 * freeze). Tag box measured on the clip's first frame: 1118-1232 x 326-445 (clip px, 1280x704). */
const D27e: React.FC<{len: number}> = ({len: l}) => {
  const f = useCurrentFrame();
  const hold = 24, k = H / 704, ox = (W - 1280 * k) / 2;
  if (f >= hold) return <Sequence from={hold}><ShotClip id="D27e" len={l - hold} /></Sequence>;
  return (
    <AbsoluteFill>
      <Freeze frame={0}><ShotClip id="D27e" len={l} /></Freeze>
      <div style={{position: 'absolute', left: 1118 * k + ox, top: 326 * k, width: 114 * k, height: 119 * k, display: 'flex',
        alignItems: 'center', justifyContent: 'center', transform: 'rotate(-7deg)', fontFamily: FILM.card.typed_font, fontWeight: 700,
        fontSize: 31, color: '#2a1d14', mixBlendMode: 'multiply', opacity: interpolate(f, [2, 5], [0, 0.95], clamp)}}>FALLBACK</div>
    </AbsoluteFill>
  );
};

/** Chorus 2's code text on the new shots (decision 12). */
const C2Overlay: React.FC<{id: string}> = ({id}) => {
  if (id === 'D27b') return <Typed text="NEW · MONDAY" at={4} x={0.5} y={0.12} size={60} />;
  return null;
};

/** The music section: every shot, then the overlays that run across shots (stamps, the counter). */
const Song: React.FC = () => {
  const chorus2 = (l: number) => sec2f(TM.sections.find((s) => s.name === 'Chorus 2')!.lines[l].words[0].start);
  const c2 = [sec2f(T('D27')), chorus2(1), chorus2(2), chorus2(3), chorus2(4), chorus2(5), chorus2(6), chorus2(7), sec2f(TE('D27'))];
  // Chorus 2 follows verse 2 instead of replaying chorus 1 (human, M4 notes 7; decision 12): the crowd dance (both takes of
  // D27) on the "distillation" lines, new shots on the others. [shot, first line, line after the last]
  // Lines 3-5 ("Tell 'em…", the second "distillation", "Smooth as…") are one continuous take, not three restarts.
  const C2_SHOTS: [string, number, number][] = [['D27', 0, 1], ['D27b', 1, 2], ['D27c', 2, 3], ['D27_alt', 3, 6],
    ['D27d', 6, 7], ['D27e', 7, 8]];
  const pics: React.ReactNode = (
    <>
      {/* D02 on the right; D01 (the real chat) covers the left half from outside the film layer (see Main). */}
      <Sequence {...shot('D02')}>
        <div style={{position: 'absolute', top: 0, bottom: 0, left: D01_W + 14, width: W - D01_W - 14, overflow: 'hidden'}}>
          <ShotClip id="D02" len={len('D02')} />
        </div>
      </Sequence>
      <Sequence {...shot('D03')}>
        <ShotStill id="D03" from={{scale: 1.6, x: 0.0, y: 0.08}} to={{scale: 1.0, x: 0, y: 0}} />
        <Typed text="24,000" at={at('Intro', 1, 0) - sec2f(T('D03'))} x={0.5} y={0.14} size={84} />
      </Sequence>
      <Sequence {...shot('D04')}>
        <ShotStill id="D04" />
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
      {/* D04d (the vault at night) retired and the title cut to 1 bar: the intro's instrumental went from 8 bars to 4
          (human, 2026-11-10; decision 14). D04e gets 1 bar: the van's back half at 1.5x, so it still rolls out. */}
      <Sequence {...shot('D04e')}><ShotClip id="D04e" len={len('D04e')} skip={40} rate={1.5} /></Sequence>
      {/* D05: four different streets, one per panel (human, M4 notes 7, option 4) */}
      <Sequence {...shot('D05')}>
        <Split stagger={4} panels={['D05_1', 'D05_2', 'D05_3', 'D05_4'].map((id) => <ShotClip key={id} id={id} len={len('D05')} />)} />
      </Sequence>
      <Sequence {...shot('D06')}><ShotStill id="D06" /></Sequence>
      <Sequence {...shot('D07')}><ShotStill id="D07" /></Sequence>
      <Sequence {...shot('D08')}><CrashZoom at={4} x={0.5} y={0.55} scale={1.35}><ShotClip id="D08" len={len('D08')} /></CrashZoom></Sequence>
      {['D09', 'D10', 'D11'].map((id) => <Sequence key={id} {...shot(id)}><ShotClip id={id} len={len(id)} /></Sequence>)}
      <Sequence {...shot('D12')}><D12 /></Sequence>
      <Sequence {...shot('D13')}><D13 /></Sequence>
      <Sequence {...shot('D14')}><ShotClip id="D14" len={len('D14')} /></Sequence>
      {['D15', 'D16'].map((id) => <Sequence key={id} {...shot(id)}><ShotClip id={id} len={len(id)} /></Sequence>)}
      <Sequence {...shot('D17')}><ShotStill id="D17" /></Sequence>
      <Sequence {...shot('D18')}><ShotClip id="D18" len={len('D18')} /></Sequence>
      {/* D19: both takes side by side, the second mirrored (no clip twice in one frame; decision 12) */}
      <Sequence {...shot('D19')}>
        <Split stagger={6} panels={[<ShotClip key="a" id="D19" len={len('D19')} />,
          <AbsoluteFill key="b" style={{transform: 'scaleX(-1)'}}><ShotClip id="D19_alt" len={len('D19')} /></AbsoluteFill>]} />
      </Sequence>
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
      {C2_SHOTS.map(([id, a, b]) => (
        <Sequence key={`c2-${id}`} from={c2[a]} durationInFrames={c2[b] - c2[a]}>
          {id === 'D27e' ? <D27e len={c2[b] - c2[a]} /> : <ShotClip id={id} len={c2[b] - c2[a]} />}
          <C2Overlay id={id} />
        </Sequence>
      ))}
      <Sequence {...shot('D27a')}>
        <ShotStill id="D27a" />
        <Typed text="THEIR COUNT, NOT OURS" at={10} x={0.5} y={0.12} size={60} />
      </Sequence>
      <Sequence {...span(T('D28'), T('D31'))}><AbsoluteFill style={{background: '#16343a'}} /></Sequence>
      <Sequence from={COUNTER_HITS[0]} durationInFrames={COUNTER_HITS[1] - COUNTER_HITS[0]}><CalendarPage month="FEB" year="2026" /></Sequence>
      <Sequence from={COUNTER_HITS[1]} durationInFrames={COUNTER_HITS[2] - COUNTER_HITS[1]}><CalendarPage month="JUN" year="2026" /></Sequence>
      {['D31', 'D32'].map((id) => <Sequence key={id} {...shot(id)}><ShotClip id={id} len={len(id)} /></Sequence>)}
      <Sequence {...shot('D33')}>
        <ShotClip id="D33" len={len('D33')} />
        {/* Little Switch from Default On instead of the typed SWITCH (human, 2026-11-09; decision 11) */}
        <SwitchCameo enter={at('Bridge', 1, 9) - sec2f(T('D33'))} flip={at('Bridge', 1, 11) - sec2f(T('D33'))} />
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
        <Stamp at={6} text="TRANSFORMATIVE" x={0.25} y={0.62} size={90} maxWidth={820} ink="#a8730a" holdFrames={len('D39b')} />
        <Stamp at={18} text="NATIONAL SECURITY" x={0.75} y={0.62} size={90} maxWidth={820} holdFrames={len('D39b')} />
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

/** D12: the labels are written onto two of the corked bottles (human, M4 notes 4: the bottle being filled is open; the
 * label goes on the ones already sealed). Label boxes measured on the clip's first and last frames (clip px, 1280x704)
 * and interpolated, since the camera drifts; a slow push-in keeps the words readable. */
const D12_LABELS: [string, [number, number], [number, number]][] = [
  ['REASONING', [796, 581], [808, 597]],
  ['SMALL BATCH', [886, 573], [903, 589]],
];
const D12: React.FC = () => {
  const f = useCurrentFrame();
  const n = CLIP_FRAMES[clipSrc('D12')] ?? 73, p = Math.min(1, f / (n - 1));
  const k = H / 704, ox = (W - 1280 * k) / 2;                 // the clip is cover-fit: 1280x704 -> frame px
  const zoom = interpolate(f, [0, len('D12')], [1, 1.25], {easing: Easing.inOut(Easing.sin), ...clamp});
  return (
    <AbsoluteFill style={{transform: `scale(${zoom})`, transformOrigin: `${(860 * k + ox) / W * 100}% ${(610 * k) / H * 100}%`}}>
      <ShotClip id="D12" len={len('D12')} />
      {D12_LABELS.map(([t, a, b]) => {
        const x = a[0] + (b[0] - a[0]) * p, y = a[1] + (b[1] - a[1]) * p;
        const words = t.split(' ');
        return (
          <div key={t} style={{position: 'absolute', left: x * k + ox, top: y * k, width: 68 * k, height: 58 * k, display: 'flex',
            flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: FILM.card.typed_font,
            fontSize: words.length > 1 ? 30 : 22, lineHeight: 1.0, fontWeight: 700, color: '#21160e', letterSpacing: -1, textAlign: 'center',
            mixBlendMode: 'multiply', opacity: interpolate(f, [2, 6], [0, 0.95], clamp)}}>
            {words.map((w) => <span key={w}>{w}</span>)}
          </div>
        );
      })}
    </AbsoluteFill>
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

/** D44: "(Allegedly.)": one last stamp over the counter, full size, frozen at 151,000,000 (decision 13). */
const D44: React.FC = () => {
  const t0 = sec2f(T('D44'));
  const v = COUNTER_VALS[2];
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

/** D01 (opening bookend), merged into D02 (human, M4 notes 4: too long before the music): the real research chat
 * scrolls from the request to the first numbers in a narrow left panel while the crew leans in on the right. Captured
 * at a large-phone width so the text reflows (scripts/capture_chat.mjs ... 540 1.42 6000). Real capture: drawn
 * outside the film layer. */
const D01_W = 800;
const D01: React.FC = () => {
  const f = useCurrentFrame();
  const L = len('D02'), sc = chat.scale, iw = chat.viewport[0] * sc;
  const yReq = (chat.boxes.request.y - 40) * sc, yNum = chat.boxes.numbers.y * sc - 760;
  const y = interpolate(f, [sec2f(0.8), L - sec2f(1.2)], [yReq, yNum], {easing: Easing.inOut(Easing.sin), ...clamp});
  return (
    <>
      <div style={{position: 'absolute', left: 0, top: 0, width: D01_W, height: H, background: '#fff', overflow: 'hidden'}}>
        <Img src={staticFile('media/real/research_chat.png')} style={{position: 'absolute', left: (D01_W - iw) / 2, top: -y, width: iw}} />
        <div style={{position: 'absolute', left: 24, top: 24, background: 'rgba(20,24,28,0.88)', color: '#f1e9d6', padding: '10px 20px',
          fontFamily: FILM.card.typed_font, fontSize: 30, borderRadius: 4}}>Research: Claude, Nov 4, 2026</div>
      </div>
      <div style={{position: 'absolute', left: D01_W, top: 0, width: 14, height: H, background: '#0d1114'}} />
    </>
  );
};

/** Behind each end-section card, the shots it refers to, in turn, darkened, with a feathered dark pool where the text
 * sits (after Sandbox Rhapsody's card backdrops: 30% picture, a 60%-black pool). */
const Backdrop: React.FC<{ids: string[]; dur: number; pool?: 'centre' | 'full'}> = ({ids, dur, pool = 'centre'}) => {
  const seg = Math.ceil(dur / ids.length);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{filter: 'brightness(0.3) saturate(0.85)'}}>
        <FilmLayer>
          {ids.map((id, i) => (
            <Sequence key={id + i} from={i * seg} durationInFrames={seg}>
              {has(clipSrc(id)) ? <ShotClip id={id} len={seg} /> : <ShotStill id={id} />}
            </Sequence>
          ))}
        </FilmLayer>
      </AbsoluteFill>
      <AbsoluteFill style={{background: pool === 'full'
        ? 'radial-gradient(ellipse 70% 62% at 50% 48%, rgba(0,0,0,0.62), rgba(0,0,0,0.25) 100%)'
        : 'radial-gradient(ellipse 46% 40% at 50% 50%, rgba(0,0,0,0.6), rgba(0,0,0,0) 100%)'}} />
    </AbsoluteFill>
  );
};

/** D45: the claims card, white on black (config/claims_card.json "pages"; condensed at M4 notes 6 now that the
 * in-video chips carry the figures): text pages one at a time, and two tables of who claimed what about whom. */
const D45: React.FC = () => {
  let a = 0;
  return (
    <AbsoluteFill style={{background: '#000'}}>
      {PAGES.map((pg, i) => {
        const d = pageFrames(pg);
        const from = a; a += d;
        return (
          <Sequence key={i} from={from} durationInFrames={d}>
            {pg.backdrop ? <Backdrop ids={pg.backdrop} dur={d} pool={pg.kind === 'table' ? 'full' : 'centre'} /> : null}
            {pg.kind === 'table' ? <ClaimsTable page={pg} />
              : <FactPage text={pg.text} sources={(pg.sources ?? []).map((s) => s.name).join(' · ')} />}
          </Sequence>
        );
      })}
      <div style={{position: 'absolute', right: 30, top: 24, fontFamily: 'monospace', fontSize: 20, color: '#c8282c'}}>
        Sources checked Nov 10, 2026 · legal review pending
      </div>
    </AbsoluteFill>
  );
};
const FactPage: React.FC<{text: string; sources: string}> = ({text, sources}) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, 8], [0, 1], clamp);
  return (
    <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', padding: '0 220px', opacity: o, textShadow: '0 2px 10px rgba(0,0,0,0.9)'}}>
      <div style={{fontFamily: 'Old Standard TT', fontSize: text.length > 260 ? 44 : 52, lineHeight: 1.4, color: '#fff', textAlign: 'left'}}>{text}</div>
      {sources ? <div style={{fontFamily: 'Old Standard TT', fontSize: 30, color: '#9a9a9a', marginTop: 36, alignSelf: 'flex-start'}}>
        Source: {sources}</div> : null}
    </AbsoluteFill>
  );
};
const ClaimsTable: React.FC<{page: Extract<Page, {kind: 'table'}>}> = ({page}) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, 8], [0, 1], clamp);
  const widths = ['14%', '17%', '17%', '36%', '16%'];
  const cell: React.CSSProperties = {padding: '14px 16px', verticalAlign: 'top', borderTop: '1px solid #3a3a3a'};
  return (
    <AbsoluteFill style={{padding: '70px 110px', opacity: o, fontFamily: 'Old Standard TT', color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.95)'}}>
      <div style={{fontSize: 46, marginBottom: 22}}>{page.title}</div>
      <table style={{borderCollapse: 'collapse', width: '100%', fontSize: 27, lineHeight: 1.3}}>
        <thead><tr>{page.cols.map((c, i) => <th key={c} style={{...cell, borderTop: 'none', width: widths[i], textAlign: 'left',
          color: '#9a9a9a', fontWeight: 400, fontSize: 24}}>{c}</th>)}</tr></thead>
        <tbody>{page.rows.map((r, j) => <tr key={j}>{r.map((c, i) => <td key={i} style={{...cell,
          color: i === 4 ? '#9a9a9a' : '#fff', whiteSpace: i === 0 ? 'nowrap' : undefined}}>{c}</td>)}</tr>)}</tbody>
      </table>
      <div style={{fontSize: 27, color: '#c9c0ad', marginTop: 26}}>{page.note ? `${page.note} ` : ''}These are claims, not findings of liability.</div>
    </AbsoluteFill>
  );
};

/** D46: the audit log (every auditor's findings, mistakes and catches) scrolling top to bottom, stopping on each finding
 * where an auditor defends its own maker or doesn't (brief; config/audit_holds.json), with a highlight and a label. */
const D46: React.FC = () => {
  const f = useCurrentFrame();
  const total = sec2f(D46_S), k = W / auditBoxes.width;          // css px -> frame px
  const maxY = auditBoxes.height * k - H;
  const hold = sec2f(auditHolds.hold_s), edge = sec2f(1.5);
  const stops = auditBoxes.holds.map((b) => ({...b, top: b.y * k, y: Math.min(maxY, Math.max(0, (b.y + b.h / 2) * k - H * 0.45))}));
  // keyframes: top (hold), each stop (hold), bottom (hold); moving time shared in proportion to distance
  const pts = [0, ...stops.map((s) => s.y), maxY];
  const moveF = total - 2 * edge - stops.length * hold;
  const dist = pts.slice(1).reduce((a, p, i) => a + Math.abs(p - pts[i]), 0);
  const keys: [number, number][] = [[0, 0], [edge, 0]];
  let t = edge;
  pts.slice(1).forEach((p, i) => {
    t += Math.max(6, Math.round(moveF * Math.abs(p - pts[i]) / dist));
    keys.push([t, p]);
    if (i < stops.length) { t += hold; keys.push([t, p]); }
  });
  const y = interpolate(f, keys.map((q) => q[0]), keys.map((q) => q[1]), {easing: Easing.inOut(Easing.sin), ...clamp});
  const active = stops.findIndex((s, i) => f >= keys[2 + 2 * i][0] && f < keys[3 + 2 * i][0]);
  const s0 = active >= 0 ? stops[active] : null;
  const o = s0 ? interpolate(f - keys[2 + 2 * active][0], [0, 6], [0, 1], clamp) : 0;
  return (
    <AbsoluteFill style={{background: '#fff', overflow: 'hidden'}}>
      <Img src={staticFile('media/real/audit_log.png')} style={{position: 'absolute', left: 0, top: -y, width: W}} />
      {s0 ? (<>
        <div style={{position: 'absolute', left: 52, right: 52, top: s0.top - y - 4, height: s0.h * k + 8,
          background: 'rgba(255,214,90,0.38)', mixBlendMode: 'multiply', opacity: o}} />
        <div style={{position: 'absolute', left: 60, top: s0.top - y - 64, opacity: o, background: 'rgba(20,24,28,0.9)',
          color: '#f1e9d6', padding: '8px 18px', fontFamily: FILM.card.typed_font, fontSize: 30, borderRadius: 4}}>
          {auditHolds.holds[s0.i].label}</div>
      </>) : null}
    </AbsoluteFill>
  );
};

/** D47: the end card. */
/** D47: the end card, two pages: the disclosure, then the credits. No counter (human, overriding the brief's "still
 * ticking during the end card": decision 10). */
const D47: React.FC = () => {
  let a = 0;
  return (
    <AbsoluteFill style={{background: '#000'}}>
      {D47_PAGES.map((t, i) => {
        const d = D47_HOLDS[i];
        const from = a; a += d;
        return (
          <Sequence key={i} from={from} durationInFrames={d}>
            <Backdrop ids={D47_BACKDROPS[i]} dur={d} />
            <EndPage text={t} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
const EndPage: React.FC<{text: string}> = ({text}) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', padding: '0 200px', opacity: interpolate(f, [0, 8], [0, 1], clamp), textShadow: '0 2px 10px rgba(0,0,0,0.9)'}}>
      <div style={{fontFamily: 'Old Standard TT', fontSize: 40, lineHeight: 1.5, color: '#fff'}}>{text}</div>
    </AbsoluteFill>
  );
};

/** In-video citations (config/citations.json; human, M4 notes 5): a chip bottom-left naming who made the claim and
 * where it was reported, never an accused lab. Drawn outside the film layer so it reads cleanly. */
type Chip = {cue: [string, number, number]; hold: number; who: string; via: string};
const CHIPS = (citations.chips as unknown as Chip[]).map((c) => ({...c, from: sec2f(word(c.cue[0], c.cue[1], c.cue[2]).start)}))
  .map((c, i, a) => ({...c, dur: Math.min(sec2f(c.hold), (a[i + 1]?.from ?? Infinity) - c.from - 6)}));
const CitationChip: React.FC<{who: string; via: string; dur: number}> = ({who, via, dur}) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, 5, dur - 5, dur], [0, 1, 1, 0], clamp);
  const x = interpolate(f, [0, 6], [-24, 0], {easing: Easing.out(Easing.cubic), ...clamp});
  return (
    <div style={{position: 'absolute', left: 44 + x, bottom: 140, maxWidth: 900, opacity: o, background: 'rgba(12,16,18,0.86)',
      borderLeft: '6px solid #d9692a', padding: '12px 22px 12px 18px', boxShadow: '0 6px 20px rgba(0,0,0,0.45)'}}>
      <div style={{fontFamily: FILM.card.typed_font, fontSize: 30, lineHeight: 1.2, color: '#f1e9d6'}}>{who}</div>
      <div style={{fontFamily: FILM.card.typed_font, fontSize: 23, color: '#c9c0ad', marginTop: 4}}>Source: {via}</div>
    </div>
  );
};
export const Citations: React.FC = () => (
  <>{CHIPS.map((c) => <Sequence key={c.from} from={c.from} durationInFrames={c.dur}><CitationChip who={c.who} via={c.via} dur={c.dur} /></Sequence>)}</>
);

/** D25's caption span on the song timeline (frames): from "wait" to the shot's end. */
export const D25_BAND = (): [number, number] => [at('Verse 2', 6, 10), sec2f(TE('D25'))];
export const D25_CAPTION = {big: 'SAME MODEL. HANDED A PAGE ABOUT CLAUDE, IT DECIDED IT WAS CLAUDE.',
  small: 'Models often misidentify themselves. This is not evidence of distillation.'};

export const Main: React.FC<{captions?: boolean; chips?: boolean}> = ({captions = true, chips = true}) => {
  const d25 = shot('D25');
  // D25's caption band (from "wait" to the shot's end) sits at the bottom: the lyric captions rise above it there
  const d25Band: [number, number] = [at('Verse 2', 6, 10), sec2f(TE('D25'))];
  return (
    <AbsoluteFill style={{background: '#000'}}>
      <Fonts />
      <Sequence from={0} durationInFrames={MUSIC}>
        <Audio src={staticFile('audio/master.wav')} />
        <FilmLayer><Song /></FilmLayer>
        <Sequence {...shot('D02')}><D01 /></Sequence>
        <Sequence {...d25}><D25 /></Sequence>
        {chips ? <Citations /> : null}
        {captions ? <Captions raised={[d25Band]} /> : null}
      </Sequence>
      {/* the end section's own music: the song again without its vocals, post-filtered (scripts/cards_audio.py) */}
      <Sequence from={MUSIC} durationInFrames={CARDS_AUDIO_F}><Audio src={staticFile('audio/cards.wav')} /></Sequence>
      <Sequence from={MUSIC} durationInFrames={D45_FRAMES}><D45 /></Sequence>
      <Sequence from={MUSIC + D45_FRAMES} durationInFrames={sec2f(D46_S)}><D46 /></Sequence>
      <Sequence from={MUSIC + D45_FRAMES + sec2f(D46_S)} durationInFrames={D47_FRAMES}><D47 /></Sequence>
    </AbsoluteFill>
  );
};
