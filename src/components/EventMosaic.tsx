/**
 * VibeCheck Welcome / Sign-Up hero mosaic.
 *
 * The Figma shows a 3-column grid of event photographs (concerts, weddings,
 * stadiums, rooftops) that fades into white at the bottom edge. We replicate
 * the layout with remote placeholder images so the screen renders correctly
 * on first launch without any bundled asset weight; product can swap the
 * URLs (or the entire array) for real photography later.
 *
 * The bottom fade is layered as a transparent-to-white SVG gradient so the
 * mosaic blends into the screen body wherever the parent renders it.
 */
import React from 'react';
import { Image, StyleSheet, View, ViewStyle } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { colors, spacing } from '../theme';

/**
 * Twelve evocative event photos from Unsplash that map to the Figma render.
 * URLs are loaded over HTTPS at runtime; bundle nothing.
 */
const TILES = [
  'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=300',
  'https://images.unsplash.com/photo-1493804714600-6edb1cd93080?w=300',
  'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=300',
  'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300',
  'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=300',
  'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=300',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300',
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=300',
];

type Props = {
  height?: number;
  /** Fade colour at the bottom — defaults to white to match the welcome bg. */
  fadeColor?: string;
  style?: ViewStyle;
};

export const EventMosaic: React.FC<Props> = ({
  height = 480,
  fadeColor = colors.bg,
  style,
}) => {
  return (
    <View style={[styles.wrap, { height }, style]}>
      <View style={styles.grid}>
        {TILES.map((uri) => (
          <View key={uri} style={styles.tile}>
            <Image source={{ uri }} style={styles.image} />
          </View>
        ))}
      </View>
      <Svg
        style={[StyleSheet.absoluteFill, styles.fade]}
        preserveAspectRatio="none"
        pointerEvents="none"
      >
        <Defs>
          <LinearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={fadeColor} stopOpacity={0} />
            <Stop offset="0.55" stopColor={fadeColor} stopOpacity={0} />
            <Stop offset="1" stopColor={fadeColor} stopOpacity={1} />
          </LinearGradient>
        </Defs>
        <Rect x={0} y={0} width="100%" height="100%" fill="url(#fade)" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: { width: '100%', overflow: 'hidden' },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.s2,
    padding: spacing.s2,
  },
  tile: {
    width: '32%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.bgInput,
  },
  image: { width: '100%', height: '100%' },
  fade: { width: '100%', height: '100%' },
});
