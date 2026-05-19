import React from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

type Props = { size?: number; color?: string };

export const SearchIcon: React.FC<Props> = ({ size = 20, color = '#667085' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle
      cx="11"
      cy="11"
      r="7"
      stroke={color}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Line
      x1="20"
      y1="20"
      x2="16.1"
      y2="16.1"
      stroke={color}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
