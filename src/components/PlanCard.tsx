/**
 * VibeCheck plan card — Monthly / Yearly pickers on the Subscription Tier
 * screen.
 *
 * - 16pt corner radius, 1pt grey border, white fill
 * - Selected card thickens to espresso 1.5pt
 * - Optional "7 Days Free" badge floats top-right inside an espresso pill
 * - Radio dot lives bottom-right, inside the card
 */
import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, radius, spacing, text } from '../theme';
import { RadioDot } from './RadioDot';

type Props = {
  title: string;
  price: string;
  badge?: string;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
};

export const PlanCard: React.FC<Props> = ({
  title,
  price,
  badge,
  selected = false,
  onPress,
  style,
}) => (
  <Pressable
    onPress={onPress}
    accessibilityRole="button"
    accessibilityLabel={`${title} ${price}`}
    accessibilityState={{ selected }}
    style={({ pressed }) => [
      styles.card,
      selected && styles.selected,
      pressed && styles.pressed,
      style,
    ]}
  >
    {badge ? (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{badge}</Text>
      </View>
    ) : null}
    <View style={styles.body}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
    <View style={styles.radio}>
      <RadioDot selected={selected} />
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 96,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.bg,
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s5,
    overflow: 'visible',
  },
  selected: {
    borderColor: colors.espresso,
    backgroundColor:'#FCFFEA',
    borderWidth: 1.5,
  },
  pressed: { opacity: 0.92 },
  badge: {
    position: 'absolute',
    top: -12,
    right: 12,
    paddingHorizontal: spacing.s3,
    paddingVertical: 4,
    borderRadius: radius.pill,
    backgroundColor: colors.espresso,
  },
  badgeText: {
    color: colors.bg,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '600',
  },
  body: { paddingRight: 28 },
  title: {
    ...text.label,
    color: colors.fgSecondary,
    fontSize: 13,
    marginBottom: 4,
  },
  price: {
    ...text.h3,
    color: colors.fgPrimary,
    fontWeight: '700',
  },
  radio: {
    position: 'absolute',
    bottom: spacing.s8,
    right: spacing.s4,
  },
});
