import React, {useEffect, useState} from 'react';
import {continueRender, delayRender, staticFile} from 'remotion';

const FACES: [string, string, string, string][] = [
  ['Alfa Slab One', 'fonts/AlfaSlabOne-Regular.ttf', 'normal', '400'],
  ['Special Elite', 'fonts/SpecialElite-Regular.ttf', 'normal', '400'],
  ['Old Standard TT', 'fonts/OldStandard-Regular.ttf', 'normal', '400'],
  ['Old Standard TT', 'fonts/OldStandard-Bold.ttf', 'normal', '700'],
];

/** Loads the fonts (SIL OFL / Apache 2.0, public/fonts) and holds the render until they are ready. */
export const Fonts: React.FC = () => {
  const [handle] = useState(() => delayRender('fonts'));
  useEffect(() => {
    Promise.all(FACES.map(([family, file, style, weight]) => {
      const f = new FontFace(family, `url(${staticFile(file)})`, {style, weight});
      return f.load().then((loaded) => document.fonts.add(loaded));
    })).then(() => continueRender(handle)).catch((e) => { console.error(e); continueRender(handle); });
  }, [handle]);
  return null;
};
