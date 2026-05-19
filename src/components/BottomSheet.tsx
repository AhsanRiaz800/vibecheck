/**
 * VibeCheck bottom-sheet container.
 *
 * Used by the Sign Up modal and the Pay-with-Card sheet — both sit on top
 * of a parent screen with the page content peeking at the top of the
 * viewport.
 *
 * Wraps a SafeAreaView + scrim + rounded sheet, with a centred drag handle
 * at the top. The route renders inside; navigation uses
 * `presentation: 'transparentModal'` so the scrim fades cleanly.
 */
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius, shadow, spacing } from '../theme';

type Props = {
  children: React.ReactNode;
  /** Backdrop tap handler — usually navigation.goBack(). */
  onDismiss?: () => void;
  /** Override the sheet height (default: auto with min 60% screen). */
  minHeightPct?: number;
  showHandle?: boolean;
  contentStyle?: ViewStyle;
};

export const BottomSheet: React.FC<Props> = ({
  children,
  onDismiss,
  minHeightPct = 0.78,
  showHandle = true,
  contentStyle,
}) => (
  <View style={styles.root}>
    <Pressable
      style={StyleSheet.absoluteFill}
      onPress={onDismiss}
      accessibilityLabel="Dismiss"
    />
    {/* <Pressable
      style={styles.scrim}
      onPress={onDismiss}
      accessibilityLabel="Dismiss"
    /> */}
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.kav}
      pointerEvents="box-none"
    >
      <SafeAreaView edges={['bottom']} style={styles.safe}>
        <View style={[styles.sheet, { minHeight: `${minHeightPct * 100}%` as any }]}>
          {showHandle ? <View style={styles.handle} /> : null}
          <ScrollView
            contentContainerStyle={[styles.scroll, contentStyle]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.scrim,
    justifyContent: 'flex-end',
  },
  kav: { width: '100%' },
  safe: {
    backgroundColor: colors.bg,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    ...shadow.modal,
  },
  sheet: {
    backgroundColor: colors.bg,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    paddingTop: spacing.s3,
  },
  handle: {
    alignSelf: 'center',
    width: 44,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#D9D9D9',
    marginBottom: spacing.s3,
  },
  scroll: {
    paddingHorizontal: spacing.s7,
    paddingBottom: spacing.s7,
  },
  scrim: {
    // ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(20, 16, 14, 0.15)',   // ← Very transparent
  },
});
