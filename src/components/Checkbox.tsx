/**
 * VibeCheck round Checkmark — the espresso circle with a white tick that
 * fronts every feature row on the Subscription Tier screen.
 *
 * It's read-only on that screen (a static "yes this is included" marker),
 * but accepting a `checked` prop keeps it usable as a real checkbox.
 */
import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, text } from '../theme';
import { CheckIcon } from './icons';

type Props = {
  checked: boolean;
  onChange?: (next: boolean) => void;
  label?: string;
  size?: number;
  style?: ViewStyle;
  testID?: string;
};

export const Checkbox: React.FC<Props> = ({
  checked,
  onChange,
  label,
  size = 24,
  style,
  testID,
}) => {
  const dim = { width: size, height: size, borderRadius: size / 2 };
  return (
    <Pressable
      onPress={onChange ? () => onChange(!checked) : undefined}
      disabled={!onChange}
      hitSlop={6}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      accessibilityLabel={label}
      style={[styles.row, style]}
      testID={testID}
    >
      <View style={[styles.box, dim, !checked && styles.boxUnchecked]}>
        {checked ? <CheckIcon size={size * 0.55} color={colors.bg} /> : null}
      </View>
      {label ? <Text style={[text.body, styles.label]}>{label}</Text> : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.espresso,
  },
  boxUnchecked: {
    backgroundColor: colors.bg,
    borderWidth: 1.5,
    borderColor: colors.border,
  },
  label: { marginLeft: 12 },
});
