/**
 * VibeCheck floating-label input — used in every form field across the auth
 * flow (Create Account, Pay with Card).
 *
 * Anatomy (sampled from the Figma):
 *   - 56pt tall, 14pt corner radius, 1pt grey border (#E5E7EB)
 *   - When focused or filled: 12pt label + asterisk sits inside top-left
 *   - When empty + blurred: label collapses into the centered placeholder
 *   - 16pt black value text below the label
 *   - Right slot for the password eye toggle or other icons (card-brand row)
 */
import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import { colors, radius, sizing, spacing, text, weights } from '../theme';
import { EyeIcon, EyeOffIcon } from './icons';
import { responsiveFontSize } from '../utils/helper';

export type InputProps = {
  /** Label shown above the value once the field is focused or filled. */
  label?: string;
  /** Adds a red asterisk next to the label. */
  required?: boolean;
  /** Render a custom adornment on the right (overrides the secure eye toggle slot). */
  trailing?: React.ReactNode;
  /** When true the value is masked and an eye toggle replaces the trailing slot. */
  secure?: boolean;
  /** Inline error caption + red border. */
  error?: string;
  containerStyle?: ViewStyle;
} & Omit<TextInputProps, 'placeholderTextColor' | 'style' | 'secureTextEntry'>;

export const Input: React.FC<InputProps> = ({
  label,
  required,
  trailing,
  secure,
  error,
  containerStyle,
  value,
  onFocus,
  onBlur,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(Boolean(secure));
  const filled = Boolean(value && String(value).length > 0);
  const showLabel = Boolean(label) && (focused || filled);

  return (
    <View>
      <View
        style={[
          styles.container,
          focused && styles.focused,
          !!error && styles.errored,
          containerStyle,
        ]}
      >
        <View style={styles.fieldArea}>
          {showLabel ? (
            <View style={styles.labelRow}>
              <Text style={styles.label}>{label}</Text>
              {required ? <Text style={styles.required}> *</Text> : null}
            </View>
          ) : null}
          <TextInput
            {...rest}
            value={value}
            onFocus={(e) => {
              setFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              onBlur?.(e);
            }}
            secureTextEntry={secure ? hidden : false}
            placeholder={showLabel ? undefined : label ?? rest.placeholder}
            placeholderTextColor={colors.black}
            style={[styles.input, showLabel && styles.inputWithLabel ,{padding: showLabel? 4 :10}]}
            underlineColorAndroid="transparent"
            selectionColor={colors.fgPrimary}
          />
        </View>
        {secure ? (
          <Pressable
            onPress={() => setHidden((v) => !v)}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel={hidden ? 'Show password' : 'Hide password'}
            style={styles.trailingFixed}
          >
            {hidden ? (
              <EyeOffIcon size={20} color={colors.fgPrimary} />
            ) : (
              <EyeIcon size={20} color={colors.fgPrimary} />
            )}
          </Pressable>
        ) : trailing ? (
          <View style={styles.trailingAuto}>{trailing}</View>
        ) : null}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: sizing.input,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.bg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.s5,
  },
  focused: { borderColor: colors.fgPrimary },
  errored: { borderColor: colors.error },
  fieldArea: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  labelRow: {
    flexDirection: 'row',
    position:'absolute',
    top:-10,
    backgroundColor:'white',
    paddingHorizontal:10,
    alignItems: 'center',
    // marginBottom: 2, 
  },
  label: {
    ...text.caption,
    color: colors.fgSecondary,
    fontSize:responsiveFontSize(12),
    lineHeight: 14,
  },
  required: {
    color: colors.required,
    fontSize: 12,
    lineHeight: 14,
    fontWeight: weights.bold as any,
  },
  input: {
    ...text.body,
    color: colors.fgPrimary,
    padding:  8,
    fontSize:responsiveFontSize(15),
    margin: 0,
  },
  inputWithLabel: {
    fontSize:responsiveFontSize(15),

    lineHeight: 20,
  },
  trailingFixed: {
    marginLeft: spacing.s2,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trailingAuto: {
    marginLeft: spacing.s2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorText: {
    ...text.caption,
    color: colors.error,
    marginTop: 4,
    marginLeft: spacing.s2,
  },
});
