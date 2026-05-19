/**
 * Subtle yellow-green gradient background used on the Subscription Tier,
 * Free Trial and Pay-with-Card screens.
 *
 * Implemented with react-native-svg's <LinearGradient> so we don't need to
 * pull in `react-native-linear-gradient` (which would mean another native
 * link). The SVG layer fills the entire safe-area-aware screen behind the
 * normal Screen content.
 */
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { colors } from '../theme';

type Props = ViewProps & {
  /** Two-stop gradient: top → bottom. Override per-screen if needed. */
  from?: string;
  to?: string;
};

export const GradientBackground: React.FC<Props> = ({
  from = colors.limeWash,
  to = colors.bg,
  style,
  children,
  ...rest
}) => (
  <View style={[styles.root, style]} {...rest}>
    <Svg style={StyleSheet.absoluteFill} preserveAspectRatio="none">
      <Defs>
      <LinearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
  {/* Lime only at very top */}
  <Stop offset="0%" stopColor={from} stopOpacity={1} />

  {/* Hold lime until ~15% */}
  <Stop offset="15%" stopColor={from} stopOpacity={1} />

  {/* Quick smooth fade to white */}
  <Stop offset="28%" stopColor={to} stopOpacity={1} />

  {/* Fully white */}
  <Stop offset="100%" stopColor={to} stopOpacity={1} />
</LinearGradient>
      </Defs>
      <Rect x={0} y={0} width="100%" height="100%" fill="url(#bg)" />
    </Svg>
    {children}
  </View>
);

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
});
