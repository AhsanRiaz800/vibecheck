/**
 * VibeCheck screen wrapper.
 *
 * Handles the cross-cutting layout concerns every auth screen wants:
 *   - SafeAreaView for iOS notch / Android display cutout
 *   - Status-bar style synced to the page background
 *   - Optional KeyboardAvoidingView for screens with forms
 *   - Optional vertical scroll for short devices
 *   - 24pt horizontal gutter (toggle off for full-bleed screens)
 */
import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { colors, gutter } from '../theme';

type Props = {
  children: React.ReactNode;
  backgroundColor?: string;
  /** Force a status-bar style regardless of background. Defaults to dark-on-light. */
  statusBar?: 'dark' | 'light';
  /** Disable horizontal gutter for full-bleed screens (welcome mosaic, splash). */
  noGutter?: boolean;
  /** Disable scrolling — useful for static screens like the splash. */
  noScroll?: boolean;
  /** Disable safe-area top inset — used when a custom hero already pads it. */
  edges?: Edge[];
  /** Disable keyboard avoidance — for screens with no inputs. */
  noKeyboardAvoid?: boolean;
  contentStyle?: ViewStyle;
  testID?: string;
};

export const Screen: React.FC<Props> = ({
  children,
  backgroundColor = colors.bg,
  statusBar,
  noGutter = false,
  noScroll = false,
  edges = ['top', 'bottom'],
  noKeyboardAvoid = false,
  contentStyle,
  testID,
}) => {
  const barStyle =
    statusBar === 'light'
      ? 'light-content'
      : statusBar === 'dark'
        ? 'dark-content'
        : isDarkBg(backgroundColor)
          ? 'light-content'
          : 'dark-content';

  const Body = (
    <View
      style={[
        styles.body,
        !noGutter && styles.gutter,
        contentStyle,
      ]}
    >
      {children}
    </View>
  );

  const Inner = noScroll ? (
    Body
  ) : (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {Body}
      </ScrollView>
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView
      edges={edges}
      style={[styles.safe, { backgroundColor }]}
      testID={testID}
    >
      <StatusBar
        barStyle={barStyle}
        backgroundColor={backgroundColor}
        translucent={false}
      />
      {noKeyboardAvoid ? (
        Inner
      ) : (
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          {Inner}
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};

const isDarkBg = (hex: string): boolean => {
  if (!hex.startsWith('#') || hex.length < 7) return false;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance < 128;
};

const styles = StyleSheet.create({
  safe: { flex: 1 },
  flex: { flex: 1 },
  scroll: { flexGrow: 1 },
  body: { flex: 1 },
  gutter: { paddingHorizontal: gutter.mobile },
});
