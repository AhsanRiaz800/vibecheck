/**
 * VibeCheck radio dot — outer ring + inner espresso dot when selected.
 * Used inside PlanCard and PaymentRow.
 */
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '../theme';

type Props = {
  selected?: boolean;
  size?: number;
  style?: ViewStyle;
};

export const RadioDot: React.FC<Props> = ({ selected, size = 30, style }) => (
  <View
    style={[
      styles.ring,
      { width: size, height: size, borderRadius: size / 2 },
      selected && styles.ringSelected,
      style,
    ]}
  >
    {selected ? (
      <View
        style={[
          styles.dot,
          { width: size * 0.5, height: size * 0.5, borderRadius: size / 4 },
        ]}
      />
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  ring: {
    borderWidth: 1.5,
    borderColor: colors.borderStrong,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg,
  },
  ringSelected: {
    borderColor: colors.espresso,
  },
  dot: {
    backgroundColor: colors.espresso,
  },
});
