import React from 'react';
import Svg, { Polyline } from 'react-native-svg';

type Props = { size?: number; color?: string };

export const ChevronDownIcon: React.FC<Props> = ({ size = 20, color = '#475467' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Polyline
      points="6 9 12 15 18 9"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
