import film from '../config/film.json';
import seeds from '../config/seeds.json';
import timing from '../timing/timing_map.json';
import shotTimes from '../timing/shot_times.json';

export const FILM = film;
export const SEED: number = seeds.main;
export const FPS = film.frame.fps;
export const W = film.frame.width;
export const H = film.frame.height;

type Word = {w: string; start: number; end: number};
type Section = {name: string; start: number; end: number; lines: {text: string; words: Word[]}[]};
export const TM = timing as unknown as {sections: Section[]; beats: {band: {beats: number[]; downbeats: number[]}}};
export type Shot = {start: number | null; end: number | null; start_frame?: number; end_frame?: number};
export const SHOTS = (shotTimes as unknown as {shots: Record<string, Shot>}).shots;

/** A word on the take's timeline: lyrics/as_sung.txt indices from 0, as in config/shot_cues.json. */
export const word = (section: string, line: number, w: number): Word => {
  const s = TM.sections.find((x) => x.name === section);
  if (!s) throw new Error(`no section ${section}`);
  return s.lines[line].words[w];
};
export const sec2f = (s: number) => Math.round(s * FPS);

/** Brief/series rule: hold on-screen text >= 1.5 s + ~1 s per 3 words. */
export const holdS = (text: string) =>
  film.card.min_hold_s + text.split(/\s+/).filter(Boolean).length * film.card.s_per_word;
