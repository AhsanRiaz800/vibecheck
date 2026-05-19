/**
 * VibeCheck logotype — the neon "Logoipsum" signature from the splash frame.
 *
 * Implemented as a stylised SVG so it stays crisp at every device size.
 * Drop the production brand SVG into `src/assets/` and import here when the
 * real logo is ready — nothing else needs to change.
 */
import React from 'react';
import Svg, { Circle, Path, Text as SvgText } from 'react-native-svg';
import { colors } from '../theme';

type Props = { width?: number; color?: string };

export const Logo: React.FC<Props> = ({ width = 240, color = colors.lime }) => {
  const height = width * 0.42;
  return (
    <Svg width={width} height={height} viewBox="0 0 220 92">
      <Path
        d="M14 72 C 60 84, 120 80, 192 60"
        stroke={color}
        strokeWidth={5}
        strokeLinecap="round"
        fill="none"
      />
      <SvgText
        x={10}
        y={58}
        fill={color}
        fontSize={48}
        fontWeight="900"
        fontStyle="italic"
      >
        Logoipsum
      </SvgText>
      <Circle cx={206} cy={22} r={7} stroke={color} strokeWidth={2} fill="none" />
      <SvgText
        x={199}
        y={27}
        fill={color}
        fontSize={9}
        fontWeight="700"
        fontStyle="italic"
      >
        R
      </SvgText>
    </Svg>
  );
};
