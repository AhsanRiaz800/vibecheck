/**
 * VibeCheck floating-label Select — matches Input visually but renders a
 * trailing chevron and opens a modal of mock options on press.
 *
 * Used by the "Country" field in the Pay-with-Card sheet. The option set is
 * passed in so screens can supply real (or mock — One/Two/Three) data.
 */
import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { colors, radius, sizing, spacing, text } from '../theme';
import { ChevronDownIcon } from './icons';

export type SelectOption = { label: string; value: string };

type Props = {
  label?: string;
  required?: boolean;
  placeholder?: string;
  value?: string | null;
  options: SelectOption[];
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: string;
  style?: ViewStyle;
  testID?: string;
};

export const Select: React.FC<Props> = ({
  label,
  required,
  placeholder = 'Select',
  value,
  options,
  onChange,
  disabled = false,
  error,
  style,
  testID,
}) => {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value) ?? null;
  const showLabel = Boolean(label) && Boolean(selected);

  return (
    <View>
      <Pressable
        onPress={disabled ? undefined : () => setOpen(true)}
        disabled={disabled}
        accessibilityRole="button"
        accessibilityLabel={label}
        accessibilityState={{ disabled }}
        testID={testID}
        style={({ pressed }) => [
          styles.field,
          !!error && styles.fieldError,
          pressed && styles.fieldPressed,
          style,
        ]}
      >
        <View style={styles.fieldArea}>
          {showLabel ? (
            <View style={styles.labelRow}>
              <Text style={styles.label}>{label}</Text>
              {required ? <Text style={styles.required}> *</Text> : null}
            </View>
          ) : null}
          <Text
            numberOfLines={1}
            style={[styles.value, !selected && styles.placeholder]}
          >
            {selected ? selected.label : label ?? placeholder}
          </Text>
        </View>
        <ChevronDownIcon color={colors.fgPrimary} />
      </Pressable>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)}>
          <Pressable style={styles.sheet} onPress={(e) => e.stopPropagation()}>
            <Text style={styles.sheetTitle}>{label ?? placeholder}</Text>
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <Pressable
                  key={opt.value}
                  onPress={() => {
                    onChange?.(opt.value);
                    setOpen(false);
                  }}
                  style={({ pressed }) => [
                    styles.option,
                    pressed && styles.optionPressed,
                  ]}
                >
                  <Text
                    style={[
                      styles.optionText,
                      isSelected && styles.optionTextSelected,
                    ]}
                  >
                    {opt.label}
                  </Text>
                </Pressable>
              );
            })}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    minHeight: sizing.input,
    borderRadius: radius.md,
    backgroundColor: colors.bg,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.s5,
  },
  fieldArea: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  fieldError: { borderColor: colors.error },
  fieldPressed: { backgroundColor: colors.bgInput },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  label: {
    ...text.caption,
    color: colors.fgSecondary,
    fontSize: 12,
    lineHeight: 14,
  },
  required: {
    color: colors.required,
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '700',
  },
  value: {
    ...text.body,
    color: colors.fgPrimary,
  },
  placeholder: { color: colors.fgMuted },
  errorText: {
    ...text.caption,
    color: colors.error,
    marginTop: 4,
    marginLeft: spacing.s2,
  },
  backdrop: {
    flex: 1,
    backgroundColor: colors.scrim,
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: colors.bg,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    paddingHorizontal: spacing.s7,
    paddingTop: spacing.s7,
    paddingBottom: spacing.s8,
  },
  sheetTitle: {
    ...text.h3,
    marginBottom: spacing.s5,
  },
  option: {
    paddingVertical: spacing.s5,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  optionPressed: { backgroundColor: colors.bgInput },
  optionText: {
    ...text.body,
    color: colors.fgPrimary,
  },
  optionTextSelected: {
    fontWeight: '700',
  },
});
