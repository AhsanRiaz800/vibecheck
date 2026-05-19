import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = { size?: number; color?: string };

export const CloudUploadIcon: React.FC<Props> = ({ size = 24, color = '#475467' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M7 16a4 4 0 0 1-.88-7.9 5.5 5.5 0 0 1 10.78-1.06A4.5 4.5 0 0 1 17 16"
      stroke={color}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 12v8m0-8 -3 3m3-3 3 3"
      stroke={color}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
