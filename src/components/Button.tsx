/**
 * VibeCheck Button — pill-shaped CTA used across every screen.
 *
 * Variants (mapped 1:1 to Figma frames):
 *   - primary   : neon-lime fill, black label, disabled state turns grey (used on every Continue / Create Account)
 *   - secondary : white fill with grey 1px border, black label (used for "Sign In" on welcome and "Continue for Free")
 *   - dark      : espresso fill, white label (used inside the success modal "Continue")
 *
 * Always pill-shaped (radius.pill), 56pt tall by default, full-width by default.
 */
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors, radius, sizing, spacing, weights } from '../theme';
import { responsiveFontSize } from '../utils/helper';

type Variant = 'primary' | 'secondary' | 'dark' | 'success';

type Props = {
  label: string;
  onPress?: () => void;
  variant?: Variant;
  full?: boolean;
  disabled?: boolean;
  loading?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  style?: ViewStyle;
  testID?: string;
};

export const Button: React.FC<Props> = ({
  label,
  onPress,
  variant = 'primary',
  full = true,
  disabled = false,
  loading = false,
  leadingIcon,
  trailingIcon,
  style,
  testID,
}) => {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={isDisabled ? undefined : onPress}
      disabled={isDisabled}
      testID={testID}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      style={({ pressed }) => [
        styles.base,
        variantStyles(pressed, isDisabled)[variant].container,
        full && styles.full,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? colors.fgOnLime : colors.fgOnBrand}
        />
      ) : (
        <View style={[styles.content ,{}]}>
          {leadingIcon ? <View style={styles.leading}>{leadingIcon}</View> : null}
          <Text
            numberOfLines={1}
            style={[styles.label, variantStyles(false, isDisabled)[variant].label]}
          >
            {label}
          </Text>
          {trailingIcon ? <View style={styles.trailing}>{trailingIcon}</View> : null}
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    height: sizing.button,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.s7,
  },
  full: { width: '100%' },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leading: { marginRight: spacing.s2 },
  trailing: { marginLeft: spacing.s2 },
  label: {
    fontSize: responsiveFontSize(16),
    lineHeight: 22,
    fontWeight: weights.semibold as TextStyle['fontWeight'],
    letterSpacing: 0.1,
  },
});

const variantStyles = (
  pressed: boolean,
  disabled: boolean,
): Record<Variant, { container: ViewStyle; label: TextStyle }> => {
  if (disabled) {
    return {
      primary: {
        container: { backgroundColor: colors.bgDisabled },
        label: { color: colors.fgDisabled },
      },
      secondary: {
        container: {
          backgroundColor: colors.bg,
          borderWidth: 1,
          borderColor: colors.border,
          opacity: 0.6,
        },
        label: { color: colors.fgDisabled },
      },
      dark: {
        container: { backgroundColor: colors.bgDisabled },
        label: { color: colors.fgDisabled },
      },
      success: {
        container: { backgroundColor: colors.bgDisabled },
        label: { color: colors.fgDisabled },
      },
    };
  }
  return {
    primary: {
      container: { backgroundColor: pressed ? colors.limePress : colors.lime },
      label: { color: colors.fgOnLime },
    },
    secondary: {
      container: {
        backgroundColor: pressed ? colors.bgInput : colors.bg,
        borderWidth: 1,
        borderColor: colors.border,
      },
      label: { color: colors.fgPrimary },
    },
    dark: {
      container: { backgroundColor: pressed ? colors.espressoSoft : colors.espresso },
      label: { color: colors.fgOnBrand },
    },
    success: {
      container: { backgroundColor: pressed ? '#1FA85F' : colors.successDeep },
      label: { color: colors.fgOnBrand },
    },
  };
};
