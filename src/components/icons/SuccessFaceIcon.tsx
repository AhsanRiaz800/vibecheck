/**
 * Friendly smiley illustration used on the "Congratulations!" screen.
 * A grey blob behind a white card with a yellow top band, two eyes, and a smile.
 * Stylised from the Figma export — no licensed artwork.
 */
import React from 'react';
import Svg, { Circle, G, Path, Rect } from 'react-native-svg';

type Props = { size?: number };

export const SuccessFaceIcon: React.FC<Props> = ({ size = 120 }) => (
  <Svg width={size} height={size} viewBox="0 0 160 160" fill="none">
    {/* soft grey blob behind */}
    <Path
      d="M40 50C50 25 110 25 125 55C140 85 130 120 95 130C60 140 30 115 30 90C30 75 35 60 40 50Z"
      fill="#F2F4F7"
    />
    {/* tiny dot accents top-right */}
    <Circle cx="115" cy="34" r="3.2" fill="#D0D5DD" />
    <Circle cx="125" cy="40" r="2.2" fill="#D0D5DD" />
    <Circle cx="120" cy="48" r="1.6" fill="#D0D5DD" />
    {/* face card */}
    <Rect x="50" y="55" width="60" height="55" rx="3" fill="#FFFFFF" stroke="#101828" strokeWidth="3" />
    {/* yellow header band */}
    <Rect x="50" y="55" width="60" height="9" fill="#FFC107" />
    {/* eyes */}
    <Circle cx="68" cy="80" r="3.8" fill="#FFC107" stroke="#101828" strokeWidth="1.8" />
    <Circle cx="92" cy="80" r="3.8" fill="#FFC107" stroke="#101828" strokeWidth="1.8" />
    {/* smile */}
    <G>
      <Path
        d="M68 92 Q80 102 92 92"
        stroke="#101828"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </G>
    {/* base line under card */}
    <Path d="M40 115 L120 115" stroke="#101828" strokeWidth="2.4" strokeLinecap="round" />
  </Svg>
);
