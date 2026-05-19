import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = { size?: number };

export const GoogleIcon: React.FC<Props> = ({ size = 22 }) => (
  <Svg width={size} height={size} viewBox="0 0 48 48">
    <Path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3a12 12 0 1 1-3.4-12.5l5.7-5.7A20 20 0 1 0 44 24a20 20 0 0 0-.4-3.5z"
    />
    <Path
      fill="#FF3D00"
      d="M6.3 14.7l6.6 4.8A12 12 0 0 1 24 12a12 12 0 0 1 7.6 2.7l5.7-5.7A20 20 0 0 0 6.3 14.7z"
    />
    <Path
      fill="#4CAF50"
      d="M24 44a20 20 0 0 0 13.5-5.2l-6.2-5.3A12 12 0 0 1 13 28l-6.6 5.1A20 20 0 0 0 24 44z"
    />
    <Path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4 5.5l6.2 5.3A19.5 19.5 0 0 0 44 24a20 20 0 0 0-.4-3.5z"
    />
  </Svg>
);
