import React from 'react';
import {AbsoluteFill, Freeze, Sequence} from 'remotion';
import shorts from '../config/shorts.json';
import {Captions} from './Captions';
import {FPS} from './config';
import {CutPaperTitle, Typed} from './film/devices';
import {Fonts} from './Fonts';
import {Citations, Main} from './Main';

/**
 * The vertical Shorts, 1080x1920 (adapted from ../buy-it-on-margin/src/Shorts.tsx), one per entry in config/shorts.json:
 * the cut-paper title above (settled); the whole 16:9 main edit at 1080 wide (nothing cropped: D39b's split stamps and
 * the corner counter stay whole), with its own audio; the citation chip at full size under the picture; captions below. D04a's disclaimer opens each one.
 */
const CFG = shorts as {disclaimer_s: number; shorts: Record<string, {from: number; to: number}>};
const PIC_TOP = 560, PIC_H = 608;
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
      <div style={{position: 'absolute', left: 0, top: 60, width: 1080, height: 440, overflow: 'hidden'}}>
        <div style={{position: 'absolute', left: -420, top: -320, width: 1920, height: 1080, transform: 'scale(0.62)', transformOrigin: '50% 50%'}}>
          <Freeze frame={90}><CutPaperTitle lines={['THE', 'DISTILLATION', 'JOB']} size={150} board="#0d1114" /></Freeze>
        </div>
      </div>
      <div style={{position: 'absolute', left: 0, top: PIC_TOP, width: 1080, height: PIC_H, overflow: 'hidden'}}>
        <div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, transform: 'scale(0.5625)', transformOrigin: '0 0'}}>
          <Sequence from={-from}><Main captions={false} chips={false} /></Sequence>
          <Sequence durationInFrames={disclaimer}>
            <AbsoluteFill style={{background: 'rgba(0,0,0,0.55)'}} />
            <Typed text="A DRAMATIZATION OF ALLEGATIONS" at={0} y={0.5} size={72} perChar={0.5} />
          </Sequence>
        </div>
      </div>
      {/* the chip, full size, between the picture and the captions (its own bottom: 140 inside this box) */}
      <div style={{position: 'absolute', left: 0, top: PIC_TOP + PIC_H + 20, width: 1080, height: 330}}>
        <Sequence from={-from}><Citations /></Sequence>
      </div>
      <div style={{position: 'absolute', left: 0, top: PIC_TOP + PIC_H + 360, width: 1080, height: 300}}>
        <Captions offsetS={from / FPS} size={54} width={960} bottom={undefined} />
      </div>
    </AbsoluteFill>
  );
};
