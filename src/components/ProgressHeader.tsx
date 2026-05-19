/**
 * VibeCheck onboarding progress header.
 *
 * Anatomy (Profile Pic, Age, Favorite Places screens):
 *   - Left: 40×40 circular outline button containing a back arrow
 *   - Middle: 6pt-tall light-grey track with espresso fill, full width
 *   - Right: "Skip" text button
 *
 * Step is reported as a 1-based index over `total` (e.g. step=1 total=5 ⇒ 20%).
 */
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, sizing, spacing, text } from '../theme';
import { BackArrowIcon } from './icons';

type Props = {
  step: number;
  total: number;
  onBack?: () => void;
  onSkip?: () => void;
  /** Hide the Skip text-button (e.g. terminal steps). */
  hideSkip?: boolean;
};

export const ProgressHeader: React.FC<Props> = ({
  step,
  total,
  onBack,
  onSkip,
  hideSkip,
}) => {
  const pct = Math.max(0, Math.min(1, step / total));

  return (
    <View style={styles.row}>
      <Pressable
        onPress={onBack}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel="Go back"
        style={({ pressed }) => [styles.iconBtn, pressed && styles.pressed]}
      >
        <BackArrowIcon size={25} color={colors.fgPrimary} />
      </Pressable>

      <View style={styles.track}>
        <View style={[styles.fill, { width: `${pct * 100}%` }]} />
      </View>

      {hideSkip ? (
        <View style={styles.skipPlaceholder} />
      ) : (
        <Pressable
          onPress={onSkip}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="Skip step"
          style={({ pressed }) => [styles.skipBtn, pressed && styles.pressed]}
        >
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.s3,
  },
  iconBtn: {
    width:50,
    height: 50,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg,
  },
  pressed: { opacity: 0.7 },
  track: {
    flex: 1,
    height: 7,
    borderRadius: radius.pill,
    backgroundColor: '#ECECEC',
    marginHorizontal: spacing.s5,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: colors.espresso,
    borderRadius: radius.pill,
  },
  skipBtn: { minWidth: 44, alignItems: 'flex-end' },
  skipPlaceholder: { width: sizing.iconButton },
  skipText: {
    ...text.h3,
    color: colors.fgPrimary,
    marginBottom:5,
    fontWeight: '500',
  },
});
