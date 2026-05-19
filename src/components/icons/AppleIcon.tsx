import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = { size?: number; color?: string };

export const AppleIcon: React.FC<Props> = ({ size = 20, color = '#000000' }) => (
  <Svg width={size} height={(size * 22) / 20} viewBox="0 0 24 24" fill={color}>
    <Path d="M16.4 12.5c0-2.4 2-3.5 2-3.6-1.1-1.6-2.8-1.8-3.4-1.8-1.5-.2-2.8.8-3.6.8-.7 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.7 2.5 2.9 2.4 1.2 0 1.6-.7 3.1-.7s1.8.7 3.1.7c1.3 0 2.1-1.2 2.8-2.4.9-1.4 1.3-2.7 1.3-2.7-.1 0-2.4-.9-2.4-3.9zM14 4.7c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.6 2.8-1.4z" />
  </Svg>
);
