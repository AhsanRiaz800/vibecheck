import React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

type Props = { width?: number; height?: number };

export const MasterCardIcon: React.FC<Props> = ({ width = 28, height = 18 }) => (
  <Svg width={width} height={height} viewBox="0 0 28 18">
    <Rect width={28} height={18} rx={2} fill="#FFFFFF" />
    <Circle cx="11" cy="9" r="5.6" fill="#EB001B" />
    <Circle cx="17" cy="9" r="5.6" fill="#F79E1B" fillOpacity={0.95} />
    <Path
      d="M14 4.6a5.6 5.6 0 010 8.8 5.6 5.6 0 010-8.8z"
      fill="#FF5F00"
    />
  </Svg>
);
