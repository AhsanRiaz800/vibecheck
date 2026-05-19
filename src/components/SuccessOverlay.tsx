/**
 * Centred "You're all set" success modal — the final screen of the auth flow.
 *
 * Rendered as a translucent backdrop with a centred white card. Designed to
 * sit on top of the Subscription Tier route so the user sees the green check
 * pop over the gradient context (matches the Figma frame exactly).
 */
import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, shadow, spacing, text } from '../theme';
import { Button } from './Button';
import { CheckIcon, XIcon } from './icons';

type Props = {
  visible: boolean;
  title?: string;
  message?: string;
  ctaLabel?: string;
  onContinue?: () => void;
  onDismiss?: () => void;
};

export const SuccessOverlay: React.FC<Props> = ({
  visible,
  title = "You're all set",
  message = 'You have successfully setup your profile, you can also update it in settings later.',
  ctaLabel = 'Continue',
  onContinue,
  onDismiss,
}) => (
  <Modal
    visible={visible}
    transparent
    animationType="fade"
    onRequestClose={onDismiss}
  >
    <View style={styles.backdrop}>
      <View style={styles.card}>
        <Pressable
          onPress={onDismiss}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="Close"
          style={styles.close}
        >
          <XIcon size={20} color={colors.fgPrimary} />
        </Pressable>

        <View style={styles.checkRing}>
          <View style={styles.checkInner}>
            <CheckIcon size={28} color={colors.bg} />
          </View>
        </View>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>

        <Button label={ctaLabel} variant="success" onPress={onContinue} />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: colors.scrim,
    paddingHorizontal: spacing.s7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: colors.bg,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.s7,
    paddingTop: spacing.s7,
    paddingBottom: spacing.s7,
    alignItems: 'center',
    ...shadow.modal,
  },
  close: {
    position: 'absolute',
    top: spacing.s5,
    right: spacing.s5,
    padding: 4,
  },
  checkRing: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#D8F4E2',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.s5,
  },
  checkInner: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.successDeep,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...text.h2,
    marginTop: spacing.s5,
    textAlign: 'center',
  },
  message: {
    ...text.bodyMuted,
    color: colors.fgSecondary,
    textAlign: 'center',
    marginTop: spacing.s2,
    marginBottom: spacing.s7,
    fontSize: 14,
    lineHeight: 20,
  },
});
