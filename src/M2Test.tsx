import React from 'react';
import {AbsoluteFill, Audio, Easing, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {sec2f, SHOTS, word} from './config';
import {FilmLayer} from './film/FilmLayer';
import {CalendarPage, Clip, Counter, CrashZoom, CutPaperTitle, rollValue, Shake, Split, Stamp, Still, Typed} from './film/devices';
import {Fonts} from './Fonts';

/** M2 gate: the film layer and every device on placeholder media (the batch-1 reference stills and one
 * placeholder clip), cut to three passages of the locked master at their real shot times (timing/shot_times.json). */

const T = (id: string) => SHOTS[id].start as number;
const SEGMENTS = [
  {id: 'titles', from: T('D04a'), to: T('D05')},
  {id: 'stamp', from: T('D15'), to: T('D17')},
  {id: 'counter', from: T('D28'), to: T('D32')},
];
const len = (s: {from: number; to: number}) => sec2f(s.to) - sec2f(s.from);
export const M2_FRAMES = SEGMENTS.reduce((a, s) => a + len(s), 0);

/** Frames from the segment start to a time on the take. */
const rel = (seg: {from: number}, t: number) => sec2f(t) - sec2f(seg.from);
const span = (seg: {from: number}, a: string, b: string) => ({from: rel(seg, T(a)), durationInFrames: sec2f(T(b)) - sec2f(T(a))});

const M = 'media/test';

const Titles: React.FC = () => {
  const s = SEGMENTS[0];
  return (
    <>
      <Sequence {...span(s, 'D04a', 'D04b')}>
        <Still src={`${M}/crew.png`} from={{scale: 1.05, x: 0, y: 0}} to={{scale: 1.15, x: 0.02, y: -0.02}} />
        <Typed text="A DRAMATIZATION OF ALLEGATIONS" at={6} y={0.86} />
      </Sequence>
      <Sequence {...span(s, 'D04b', 'D04c')}><CutPaperTitle lines={['THE', 'DISTILLATION', 'JOB']} /></Sequence>
      <Sequence {...span(s, 'D04c', 'D04d')}>
        <Split panels={['THE PROXY', 'THE BURNER', 'THE PROMPTER', 'THE BOTTLER'].map((r, i) => (
          <AbsoluteFill key={r}>
            <Still src={`${M}/crew.png`} from={{scale: 1.2 + i * 0.05, x: (i % 2 ? 0.08 : -0.08), y: 0}} />
            <Typed text={r} at={10 + i * 4} y={0.82} size={64} rotate={i % 2 ? 2 : -2} />
          </AbsoluteFill>
        ))} />
      </Sequence>
      <Sequence {...span(s, 'D04d', 'D04e')}>
        <CrashZoom at={sec2f(T('D04e') - T('D04d')) / 2} x={0.62} y={0.45}>
          <Still src={`${M}/vault.png`} from={{scale: 1.0, x: 0, y: 0}} to={{scale: 1.06, x: 0, y: 0}} />
        </CrashZoom>
      </Sequence>
      <Sequence {...span(s, 'D04e', 'D05')}><Clip src={`${M}/clip.mp4`} frames={97} /></Sequence>
    </>
  );
};

const StampTest: React.FC = () => {
  const s = SEGMENTS[1];
  const hit = rel(s, word('Chorus 1', 0, 3).start);
  return (
    <>
      <Shake at={hit}>
        <Sequence {...span(s, 'D15', 'D16')}><Still src={`${M}/still.png`} from={{scale: 1.0, x: 0, y: 0}} to={{scale: 1.08, x: 0, y: 0}} /></Sequence>
        <Sequence {...span(s, 'D16', 'D17')}>
          <CrashZoom at={0} x={0.55} y={0.55} scale={1.5}><Still src={`${M}/still.png`} /></CrashZoom>
        </Sequence>
      </Shake>
      <Stamp at={hit} />
    </>
  );
};

const CounterTest: React.FC = () => {
  const s = SEGMENTS[2];
  const f = useCurrentFrame();
  const hits = [['Breakdown', 1], ['Breakdown', 2], ['Breakdown', 3]].map(([sec, l]) => rel(s, word(sec as string, l as number, 0).start));
  const vals = [16_000_000, 28_800_000, 151_000_000];
  let v = 0;
  hits.forEach((h, i) => { if (f >= h) v = rollValue(f, h, h + 14, i ? vals[i - 1] : 0, vals[i]); });
  const slam = interpolate(f, [hits[0], hits[0] + 3], [2.2, 1], {easing: Easing.in(Easing.quad), extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const shrinkAt = rel(s, T('D31'));
  const k = interpolate(f, [shrinkAt, shrinkAt + 10], [0, 1], {easing: Easing.inOut(Easing.cubic), extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <>
      <AbsoluteFill style={{background: '#16343a'}} />
      <Sequence {...span(s, 'D31', 'D32')}><Still src={`${M}/van.png`} from={{scale: 1.0, x: 0, y: 0}} to={{scale: 1.1, x: 0, y: 0}} /></Sequence>
      <Sequence from={hits[0]} durationInFrames={hits[1] - hits[0]}><CalendarPage month="FEB" /></Sequence>
      <Sequence from={hits[1]} durationInFrames={hits[2] - hits[1]}><CalendarPage month="JUN" /></Sequence>
      {f >= hits[0] ? <Counter value={v} x={0.5 + 0.36 * k} y={0.55 - 0.45 * k} scale={1.5 * slam * (1 - 0.75 * k)} /> : null}
    </>
  );
};

export const M2Test: React.FC = () => {
  let at = 0;
  const parts = [Titles, StampTest, CounterTest];
  return (
    <AbsoluteFill style={{background: '#000'}}>
      <Fonts />
      {SEGMENTS.map((s, i) => {
        const from = at; at += len(s);
        const Part = parts[i];
        return (
          <Sequence key={s.id} from={from} durationInFrames={len(s)}>
            <Audio src={staticFile('audio/master.wav')} startFrom={sec2f(s.from)} endAt={sec2f(s.to)} />
            <FilmLayer frameOffset={sec2f(s.from)}><Part /></FilmLayer>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
