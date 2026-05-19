import React from 'react';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';

type Props = { width?: number; height?: number };

export const AmexIcon: React.FC<Props> = ({ width = 28, height = 18 }) => (
  <Svg width={width} height={height} viewBox="0 0 28 18">
    <Rect width={28} height={18} rx={2} fill="#2671B9" />
    <SvgText
      x={14}
      y={11}
      textAnchor="middle"
      fontSize={6}
      fontWeight="bold"
      fill="#FFFFFF"
    >
      AMEX
    </SvgText>
  </Svg>
);
