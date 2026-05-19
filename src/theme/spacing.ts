/**
 * VibeCheck Design System — Spacing, radius, elevation tokens.
 *
 * 4-pt grid sampled from the Figma. The auth flow uses 24px page gutters,
 * 16px field gaps, and a pill radius on every CTA / option row.
 */

import { Platform, ViewStyle } from 'react-native';

export const spacing = {
  s1: 4,
  s2: 8,
  s3: 12,
  s4: 14,
  s5: 16,
  s6: 20,
  s7: 24,
  s8: 32,
  s9: 40,
  s10: 56,
} as const;

export const gutter = {
  mobile: 24,
} as const;

export const radius = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 28,
  pill: 9999,
} as const;

/** Container heights sampled directly from the Figma frames. */
export const sizing = {
  input: 56,
  button: 56,
  social: 44,
  optionPill: 56,
  iconButton: 50,
} as const;

/**
 * Shadows in the design are minimal — a tight grey lift under the cards and
 * a softer rest under the floating success modal.
 */
export const shadow: { sm: ViewStyle; modal: ViewStyle } = {
  sm: Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOpacity: 0.04,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
    },
    android: { elevation: 1 },
    default: {},
  }) as ViewStyle,
  modal: Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOpacity: 0.12,
      shadowRadius: 16,
      shadowOffset: { width: 0, height: 8 },
    },
    android: { elevation: 8 },
    default: {},
  }) as ViewStyle,
};
