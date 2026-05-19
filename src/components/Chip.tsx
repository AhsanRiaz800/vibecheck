/**
 * VibeCheck removable Chip — the venue tag pattern on the Favorite Places
 * screen.
 *
 * - 1pt grey border, rounded pill
 * - Label on the left, X on the right (closes the chip)
 * - Tapping the body is a no-op; the X is its own hit target so pressing
 *   the chip body never accidentally removes it
 */
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, text } from '../theme';
import { XIcon } from './icons';
import { responsiveFontSize } from '../utils/helper';

type Props = {
  label: string;
  onRemove?: () => void;
  testID?: string;
};

export const Chip: React.FC<Props> = ({ label, onRemove, testID }) => (
  <View style={styles.chip} testID={testID}>
    <Text style={styles.label}>{label}</Text>
    {onRemove ? (
      <Pressable
        onPress={onRemove}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel={`Remove ${label}`}
        style={styles.x}
      >
        <XIcon size={20} color={colors.fgPrimary} strokeWidth={2.2} />
      </Pressable>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: spacing.s4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.bg,
  },
  label: {
    ...text.body,
    fontSize: responsiveFontSize(14),
    color: colors.black,
  },
  x: { marginLeft: spacing.s2, padding: 2 },
});
