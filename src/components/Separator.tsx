/**
 * VibeCheck "or sign in with" separator — text-only divider used inside the
 * Sign Up bottom sheet.
 *
 * The Figma render has no horizontal rules — just the muted label centred
 * between the form and the social row.
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, text } from '../theme';

type Props = {
  label?: string;
  /** Render flanking rules around the label (the Pay-with-Card layout uses this). */
  withRules?: boolean;
};

export const Separator: React.FC<Props> = ({ label = 'or sign in with', withRules = false }) => (
  <View style={styles.row}>
    {withRules ? <View style={styles.rule} /> : null}
    <Text style={[text.label, styles.label]}>{label}</Text>
    {withRules ? <View style={styles.rule} /> : null}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rule: { flex: 1, height: 1, backgroundColor: colors.divider },
  label: {
    marginHorizontal: spacing.s3,
    color: colors.fgSecondary,
    fontSize: 14,
  },
});
