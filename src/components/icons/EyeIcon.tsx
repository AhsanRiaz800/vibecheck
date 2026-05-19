/**
 * Lucide-style "eye" icon — stand-in for Untitled UI `eye`.
 * 1.5px stroke, 24×24 viewBox, inherits color via the `color` prop.
 *
 * NOTE: The original design uses Untitled UI icons. The chat transcript explicitly
 * flagged this substitution; replace with the licensed Untitled UI export when
 * available.
 */
import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

type Props = { size?: number; color?: string };

export const EyeIcon: React.FC<Props> = ({ size = 20, color = '#98A2B3' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx="12"
      cy="12"
      r="3"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
