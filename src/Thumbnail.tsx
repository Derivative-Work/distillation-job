import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {CutPaperTitle, Stamp} from './film/devices';
import {FilmLayer} from './film/FilmLayer';
import {Fonts} from './Fonts';

/** M5 thumbnail, 1920x1080 (exported at 1280x720): the crew dancing at the still (D42's keyframe), the cut-paper title
 * and the ALLEGEDLY! stamp. A 120-frame composition so the title and stamp settle; render frame 110:
 * npx remotion still src/index.ts Thumbnail <out.png> --frame=110 */
export const Thumbnail: React.FC = () => (
  <AbsoluteFill style={{background: '#000'}}>
    <Fonts />
    <FilmLayer>
      <AbsoluteFill>
        <Img src={staticFile('media/picks/D42.png')} style={{width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(1.25) saturate(1.1)'}} />
        <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0) 60%)'}} />
      </AbsoluteFill>
    </FilmLayer>
    <div style={{position: 'absolute', left: 0, top: -270, width: 1920, height: 1080, transform: 'scale(0.86)', transformOrigin: '50% 50%'}}>
      <CutPaperTitle lines={['THE', 'DISTILLATION', 'JOB']} size={170} board="rgba(0,0,0,0)" grain={false} />
    </div>
    <Stamp at={70} text="ALLEGEDLY!" x={0.6} y={0.8} size={130} holdFrames={100} />
  </AbsoluteFill>
);
