import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

type Props = { size?: number };

export const FacebookIcon: React.FC<Props> = ({ size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 32 32">
    <Circle cx="16" cy="16" r="16" fill="#1877F2" />
    <Path
      fill="#FFFFFF"
      d="M21 16.5h-3v9.5h-4v-9.5h-2v-3.3h2v-2.1c0-2.3 1.1-4.1 4.1-4.1H21v3.3h-1.7c-.9 0-1.3.5-1.3 1.3v1.6h3l-.5 3.3z"
    />
  </Svg>
);
