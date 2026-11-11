import React from 'react';
import {AbsoluteFill, Freeze, Sequence, useCurrentFrame} from 'remotion';
import shorts from '../config/shorts.json';
import {Captions} from './Captions';
import {FPS} from './config';
import {CutPaperTitle, Typed} from './film/devices';
import {Fonts} from './Fonts';
import {Citations, D25_BAND, D25_CAPTION, Highlighted, Main, SatireTag, satireShown} from './Main';

/**
 * The vertical Shorts, 1080x1920 (adapted from ../buy-it-on-margin/src/Shorts.tsx), one per entry in config/shorts.json:
 * everything inside the platforms' safe zone (see SAFE_W): the cut-paper title above (settled); the whole 16:9 main
 * edit at 950 wide (nothing cropped: D39b's split stamps stay whole), with its own audio; the citation chip at full size under the picture; ransom-note captions below. AI-GENERATED SATIRE and
 * A DRAMATIZATION OF ALLEGATIONS open each one; the satire tag then sits at the picture's top right, full size, except
 * over D25 (as in the main edit).
 */
const CFG = shorts as {disclaimer_s: number; shorts: Record<string, {from: number; to: number}>};
// Safe zone (human, 2026-11-10: captions were under the Shorts/Reels UI): the platforms overlay the bottom ~500 px
// (title, caption, audio, buttons) and a ~130 px button rail on the right, and the top ~140 px. Everything sits in
// y 140-1400; the chip and captions are centred on x 475, clear of the right rail.
const SAFE_W = 950, PIC_TOP = 440, PIC_H = Math.round(SAFE_W * 9 / 16);   // the picture also keeps clear of the rail
export const SHORT_IDS = Object.keys(CFG.shorts);
export const shortSpec = (id: string) => {
  const c = CFG.shorts[id];
  const from = Math.round(c.from * FPS), to = Math.round(c.to * FPS);
  return {from, frames: to - from, disclaimer: Math.round(CFG.disclaimer_s * FPS)};
};

export const Short: React.FC<{id: string}> = ({id}) => {
  const {from, disclaimer} = shortSpec(id);
  return (
    <AbsoluteFill style={{background: '#0d1114'}}>
      <Fonts />
      <div style={{position: 'absolute', left: 0, top: 130, width: SAFE_W, height: 300, overflow: 'hidden'}}>
        <div style={{position: 'absolute', left: -485, top: -390, width: 1920, height: 1080, transform: 'scale(0.47)', transformOrigin: '50% 50%'}}>
          <Freeze frame={90}><CutPaperTitle lines={['THE', 'DISTILLATION', 'JOB']} size={150} board="#0d1114" /></Freeze>
        </div>
      </div>
      <div style={{position: 'absolute', left: 0, top: PIC_TOP, width: SAFE_W, height: PIC_H, overflow: 'hidden'}}>
        <div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, transform: `scale(${SAFE_W / 1920})`, transformOrigin: '0 0'}}>
          <Sequence from={-from}><Main captions={false} chips={false} satire={false} /></Sequence>
          <Sequence durationInFrames={disclaimer}>
            <AbsoluteFill style={{background: 'rgba(0,0,0,0.55)'}} />
            <div style={{position: 'absolute', left: '50%', top: '33%', transform: 'translate(-50%, -50%)'}}><SatireTag size={84} /></div>
            <Typed text="A DRAMATIZATION OF ALLEGATIONS" at={6} y={0.6} size={72} perChar={0.5} />
          </Sequence>
        </div>
      </div>
      {/* the chip, full size, between the picture and the captions (its own bottom: 140 inside this box) */}
      <div style={{position: 'absolute', left: 0, top: PIC_TOP + PIC_H - 40, width: SAFE_W, height: 330}}>
        <Sequence from={-from}><Citations /></Sequence>
      </div>
      <ShortSatire from={from} disclaimer={disclaimer} />
      <D25Caption from={from} />
      <div style={{position: 'absolute', left: 0, top: PIC_TOP + PIC_H + 175, width: SAFE_W, height: 250}}>
        <Captions offsetS={from / FPS} size={54} width={SAFE_W - 70} top={10} />
      </div>
    </AbsoluteFill>
  );
};

/** The satire tag at the picture's top right, full size, after the opening disclaimer; off over D25. */
const ShortSatire: React.FC<{from: number; disclaimer: number}> = ({from, disclaimer}) => {
  const f = useCurrentFrame();
  if (f < disclaimer) return null;
  return (
    <div style={{position: 'absolute', right: 1080 - SAFE_W + 14, top: PIC_TOP + 14, opacity: satireShown(f + from)}}><SatireTag size={26} /></div>
  );
};

/** D25's caption and disclaimer are unreadable at the Short's picture size; while they're up, they're repeated at
 * full size over the picture's own (tiny) band, above the lyric captions. */
const D25Caption: React.FC<{from: number}> = ({from}) => {
  const f = useCurrentFrame() + from;
  const [a, b] = D25_BAND();
  if (f < a + 4 || f >= b) return null;
  return (
    <div style={{position: 'absolute', left: 0, width: SAFE_W, top: PIC_TOP + PIC_H - 96, background: 'rgb(10,14,16)',
      padding: '14px 26px', textAlign: 'center', fontFamily: 'Special Elite'}}>
      <div style={{fontSize: 32, color: '#f1e9d6', lineHeight: 1.2}}>{D25_CAPTION.big}</div>
      <div style={{fontSize: 25, color: '#c9c0ad', marginTop: 8}}><Highlighted text={D25_CAPTION.small} t={f - a - 24} /></div>
    </div>
  );
};
