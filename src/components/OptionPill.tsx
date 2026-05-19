/**
 * Full-width selectable pill — the option pattern on the Age screen.
 *
 * - 56pt tall pill, 1pt grey border, white fill
 * - Selected state thickens the border to espresso (1.5pt) and inverts the
 *   label weight to bold (mirroring the implicit Figma "active" state).
 */
import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { colors, radius, sizing, spacing, text } from '../theme';
import { responsiveFontSize } from '../utils/helper';

type Props = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  testID?: string;
};

export const OptionPill: React.FC<Props> = ({
  label,
  selected = false,
  onPress,
  style,
  testID,
}) => (
  <Pressable
    onPress={onPress}
    accessibilityRole="button"
    accessibilityState={{ selected }}
    accessibilityLabel={label}
    testID={testID}
    style={({ pressed }) => [
      styles.pill,
      selected && styles.selected,
      pressed && styles.pressed,
      style,
    ]}
  >
    <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  pill: {
    height: sizing.optionPill,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.s2,
  },
  selected: {
    borderColor: colors.espresso,
    borderWidth: 1.5,
  },
  pressed: { backgroundColor: colors.bgInput },
  label: {
    ...text.body,
    fontSize: responsiveFontSize(14),
    color: colors.black,
  },
  labelSelected: { fontWeight: '700' },
});
