/**
 * Selectable payment-method row used on the "Start your free trial" screen.
 *
 * Layout: brand badge (left), method title + subtitle (centre), radio (right).
 * 1pt grey border; selected state thickens to espresso 1.5pt.
 */
import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, radius, spacing, text } from '../theme';
import { RadioDot } from './RadioDot';

type Props = {
  badge: React.ReactNode;
  title: string;
  subtitle?: string;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
};

export const PaymentRow: React.FC<Props> = ({
  badge,
  title,
  subtitle,
  selected = false,
  onPress,
  style,
}) => (
  <Pressable
    onPress={onPress}
    accessibilityRole="radio"
    accessibilityState={{ selected }}
    style={({ pressed }) => [
      styles.row,
      selected && styles.selected,
      pressed && styles.pressed,
      style,
    ]}
  >
    <View style={styles.badge}>{badge}</View>
    <View style={styles.body}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
    <RadioDot selected={selected} />
  </Pressable>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 64,
    borderRadius: radius.md,
    borderWidth: 0,
    borderColor: colors.border,
    backgroundColor: colors.bg,
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s4,
  },
  selected: {
    borderColor: colors.espresso,
    borderWidth: 0.7,
  },
  pressed: { backgroundColor: colors.bgInput },
  badge: {
    width: 48,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.s4,
  },
  body: { flex: 1 },
  title: {
    ...text.body,
    color: colors.fgPrimary,
    fontWeight: '600',
  },
  subtitle: {
    ...text.caption,
    color: colors.fgSecondary,
    marginTop: 2,
  },
});
