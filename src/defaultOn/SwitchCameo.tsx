// D33 cameo (human, 2026-11-09: "instead of the literal "SWITCH", use Little Switch from Default On"): Switch slides
// out from behind the right-hand curtain, startled, and on the word "switch" his paddle rocks from ON to OFF (the
// advisory's quiet downgrade). The rig is Default On's, unchanged (see README.md). Mouth as Default On's own startled Switch
// (rig sheet, review/m2/rig_sheet.jpg: X at rest; shots/Chorus.tsx S16 and scenes/KeyFrames.tsx: the "E" gasp).
import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { Switch } from "./rigs/Switch";
import { C } from "./theme/palette";

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

export const SwitchCameo: React.FC<{ enter: number; flip: number; x?: number; y?: number; scale?: number }> = ({
  enter, flip, x = 1700, y = 640, scale = 0.95,
}) => {
  const f = useCurrentFrame();
  if (f < enter) return null;
  const slide = interpolate(f, [enter, enter + 6], [1, 0], { easing: Easing.out(Easing.back(1.6)), ...clamp });
  const toggle = interpolate(f, [flip, flip + 3], [1, 0], clamp);
  const flinch = interpolate(f, [flip, flip + 2, flip + 6], [0, -6, 0], clamp);
  return (
    <svg width={1920} height={1080} style={{ position: "absolute", inset: 0 }}>
      <defs>
        {/* Default On's film/Paper.tsx defines this for the whole film; the rig's plate edge uses it */}
        <pattern id="pen-hatch" width={9} height={9} patternUnits="userSpaceOnUse" patternTransform="rotate(40)">
          <line x1={0} y1={0} x2={0} y2={9} stroke={C.ink} strokeWidth={1.6} opacity={0.6} />
        </pattern>
      </defs>
      <g transform={`translate(${x + slide * 420}, ${y}) scale(${scale}) rotate(${-8 + flinch})`}>
        <Switch pose="startled" toggle={toggle} look={[-0.8, 0.1]} mouth={f >= flip ? "E" : "X"} />
      </g>
    </svg>
  );
};
