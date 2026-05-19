/**
 * Circular icon button — used for the standalone back / close affordances
 * on the Subscription, Free Trial and Pay-with-Card screens.
 */
import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { colors, radius, sizing } from '../theme';

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
  size?: number;
  variant?: 'outline' | 'solid';
  accessibilityLabel?: string;
  style?: ViewStyle;
  testID?: string;
};

export const IconButton: React.FC<Props> = ({
  children,
  onPress,
  size = sizing.iconButton,
  variant = 'outline',
  accessibilityLabel,
  style,
  testID,
}) => (
  <Pressable
    onPress={onPress}
    hitSlop={8}
    accessibilityRole="button"
    accessibilityLabel={accessibilityLabel}
    testID={testID}
    style={({ pressed }) => [
      styles.base,
      { width: size, height: size, borderRadius: size / 2 },
      variant === 'outline' ? styles.outline : styles.solid,
      pressed && styles.pressed,
      style,
    ]}
  >
    {children}
  </Pressable>
);

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  outline: {
    backgroundColor: colors.bg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
  },
  solid: {
    backgroundColor: colors.bg,
  },
  pressed: { opacity: 0.7 },
});
