import React from 'react';
import Svg, { Polyline } from 'react-native-svg';

type Props = { size?: number; color?: string };

export const CheckIcon: React.FC<Props> = ({ size = 12, color = '#FFFFFF' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Polyline
      points="20 6 9 17 4 12"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
