import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = { size?: number; color?: string };

export const CrownIcon: React.FC<Props> = ({ size = 20, color = '#171717' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Path d="M3 7.5L7 11l5-7 5 7 4-3.5L19 18H5L3 7.5z" />
  </Svg>
);
