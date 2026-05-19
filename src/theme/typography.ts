/**
 * VibeCheck Design System — Type tokens.
 *
 * The design uses one geometric sans throughout. We default to the platform
 * system font (`System`) which resolves to SF Pro on iOS and Roboto on
 * Android — both visually compatible with the Figma render at the sizes
 * used. To ship the exact Inter file, drop the .ttf into android/iOS and
 * change `fontFamily` to `'Inter'` — no other code needs to change.
 */

import { TextStyle } from 'react-native';
import { colors } from './colors';
import { responsiveFontSize } from '../utils/helper';

export const fontFamily = 'System';

export const weights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

export const fontSize = {
  display: 32,
  h1: 26,
  h2: 22,
  h3: responsiveFontSize(18),
  body: responsiveFontSize(16),
  label: responsiveFontSize(14),
  caption: 12,
  micro: 11,
} as const;

export const lineHeight = {
  display: 40,
  h1: 32,
  h2: 28,
  h3: 24,
  body: 22,
  label: 20,
  caption: 16,
} as const;

export const tracking = {
  tight: -0.4,
  cta: 0.1,
} as const;

export const text = {
  display: {
    fontFamily,
    fontWeight: weights.bold as TextStyle['fontWeight'],
    fontSize: fontSize.display,
    lineHeight: lineHeight.display,
    color: colors.fgPrimary,
    letterSpacing: tracking.tight,
  },
  h1: {
    fontFamily,
    fontWeight: weights.bold as TextStyle['fontWeight'],
    fontSize: fontSize.h1,
    lineHeight: lineHeight.h1,
    color: colors.fgPrimary,
    letterSpacing: tracking.tight,
  },
  h2: {
    fontFamily,
    fontWeight: weights.semibold as TextStyle['fontWeight'],
    fontSize: fontSize.h2,
    lineHeight: lineHeight.h2,
    color: colors.fgPrimary,
  },
  h3: {
    fontFamily,
    fontWeight: weights.semibold as TextStyle['fontWeight'],
    fontSize: fontSize.h3,
    lineHeight: lineHeight.h3,
    color: colors.fgPrimary,
  },
  body: {
    fontFamily,
    fontWeight: weights.regular as TextStyle['fontWeight'],
    fontSize: fontSize.body,
    lineHeight: lineHeight.body,
    color: colors.fgPrimary,
  },
  bodyMuted: {
    fontFamily,
    fontWeight: weights.regular as TextStyle['fontWeight'],
    fontSize: fontSize.body,
    lineHeight: lineHeight.body,
    color: colors.fgSecondary,
  },
  label: {
    fontFamily,
    fontWeight: weights.regular as TextStyle['fontWeight'],
    fontSize: fontSize.label,
    lineHeight: lineHeight.label,
    color: colors.fgSecondary,
  },
  caption: {
    fontFamily,
    fontWeight: weights.regular as TextStyle['fontWeight'],
    fontSize: fontSize.caption,
    lineHeight: lineHeight.caption,
    color: colors.fgMuted,
  },
  cta: {
    fontFamily,
    fontWeight: weights.semibold as TextStyle['fontWeight'],
    fontSize: fontSize.body,
    lineHeight: lineHeight.body,
    letterSpacing: tracking.cta,
    color: colors.fgOnLime,
  },
  link: {
    fontFamily,
    fontWeight: weights.semibold as TextStyle['fontWeight'],
    color: colors.fgPrimary,
    textDecorationLine: 'underline',
  },
} as const satisfies Record<string, TextStyle>;
