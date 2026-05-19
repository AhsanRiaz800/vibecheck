/**
 * VibeCheck Design System — Color tokens.
 *
 * Sampled directly from the Auth Flow Figma (Vibe Check - Auth Flow.fig).
 * The palette is intentionally small: a dark espresso neutral, a single neon
 * lime accent for primary CTAs, and a clean light-grey ramp for surfaces and
 * borders. Everything that isn't an accent collapses to white or one of the
 * neutral greys.
 */

export const colors = {
  // ─── Brand ────────────────────────────────────────────────────────────
  /** Primary CTA fill — neon lime / chartreuse used on every Continue button. */
  lime: '#E0FF31',
  limePress: '#C5DF5C',
  /** Espresso brown used on the splash, progress fills and chosen badges. */
  espresso: '#2B1B12',
  espressoSoft: '#3A2820',
  /** Subtle yellow-green wash used as the gradient base on subscription screens. */
  limeWash: '#E9F3B5',
  limeWashSoft: '#F5FADD',

  // ─── Surfaces ─────────────────────────────────────────────────────────
  bg: '#FFFFFF',
  bgSplash: '#2B1B12',
  bgInput: '#F4F4F5',
  bgChipMuted: '#F4F4F5',
  bgDisabled: '#E5E5E5',
  scrim: 'rgba(20, 16, 14, 0.45)',
  // scrim: 'rgba(0, 0, 0, 0.45)',

  // ─── Foreground / text ────────────────────────────────────────────────
  fgPrimary: '#171717',
  fgSecondary: '#737373', 

  fgMuted: '#9A9A9A',
  black:'#404040',
  fgOnBrand: '#FFFFFF',
  fgOnLime: '#171717',
  fgDisabled: '#A1A1A1',
  link: '#171717',

  // ─── Lines ────────────────────────────────────────────────────────────
  border: '#E5E5E5',
  borderStrong: '#D4D4D8',
  divider: '#EEEEEE',

  // ─── Semantic ─────────────────────────────────────────────────────────
  error: '#D14343',
  success: '#22C55E',
  successDeep: '#2BB673',
  required: '#E11D48',

  // ─── Brand colours of external auth providers ─────────────────────────
  facebook: '#1877F2',
} as const;

export type ColorToken = keyof typeof colors;
