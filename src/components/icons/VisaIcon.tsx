import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

type Props = { width?: number; height?: number };

/** Stylised Visa logo (wordmark in white on the brand blue). */
export const VisaIcon: React.FC<Props> = ({ width = 38, height = 22 }) => (
  <Svg width={width} height={height} viewBox="0 0 38 22">
    <Rect width={38} height={22} rx={3} fill="#1A1F71" />
    <Path
      fill="#FFFFFF"
      d="M14.5 7.3l-3 7.3H9.6L8 9.2c-.1-.4-.2-.5-.5-.7-.6-.3-1.5-.5-2.3-.7l.1-.4h2.9c.4 0 .7.2.8.6l.8 4.2 2-4.9h1.7zm6.8 4.9c0-1.7-2.3-1.8-2.3-2.5 0-.3.3-.6.9-.7.3 0 1.1-.1 2 .3l.3-1.4c-.5-.2-1.1-.4-1.9-.4-2 0-3.3 1-3.3 2.5 0 1.1 1 1.7 1.7 2 .8.4 1 .6 1 1 0 .5-.6.7-1.1.7-1 0-1.5-.3-2-.5l-.4 1.5c.5.2 1.4.4 2.4.4 2 0 3.4-1 3.4-2.6zm4.5 2.4h1.5L25.9 7.3h-1.3c-.3 0-.6.2-.7.5l-2.5 6.8h2l.4-1h2.4l.2.9zm-2.2-2.5l1-2.8.6 2.8h-1.6zm-7-4.6L15 14.6h-1.9l1.6-7.3h1.9z"
    />
  </Svg>
);
