import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

type Props = { size?: number; color?: string };

export const CameraIcon: React.FC<Props> = ({ size = 48, color = '#171717' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 8.5C3 7.4 3.9 6.5 5 6.5H7L8.5 4.5H15.5L17 6.5H19C20.1 6.5 21 7.4 21 8.5V17.5C21 18.6 20.1 19.5 19 19.5H5C3.9 19.5 3 18.6 3 17.5V8.5Z"
      stroke={color}
      strokeWidth={1.8}
      strokeLinejoin="round"
    />
    <Circle cx="12" cy="13" r="3.5" stroke={color} strokeWidth={1.8} />
  </Svg>
);
