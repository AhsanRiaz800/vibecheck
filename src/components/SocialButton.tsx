/**
 * VibeCheck circular social sign-in button.
 *
 * Sampled from the "or sign in with" row in the Sign Up modal:
 *   - 44×44 circular hit target
 *   - Facebook glyph rendered as a filled blue circle ("f" white)
 *   - Google glyph rendered as the multi-colour G mark on white
 *
 * The button is intentionally just a glyph host (no label) — the row above
 * already supplies the affordance copy.
 */
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors, sizing } from '../theme';
import { FacebookIcon, GoogleIcon } from './icons';

type Provider = 'facebook' | 'google';

type Props = {
  provider: Provider;
  onPress?: () => void;
  testID?: string;
};

export const SocialButton: React.FC<Props> = ({ provider, onPress, testID }) => (
  <Pressable
    onPress={onPress}
    accessibilityRole="button"
    accessibilityLabel={`Continue with ${provider}`}
    testID={testID}
    hitSlop={8}
    style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
  >
    <View style={styles.glyph}>
      {provider === 'facebook' ? (
        <FacebookIcon size={40} />
      ) : (
        <GoogleIcon size={40} />
      )}
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  btn: {
    width: sizing.social,
    height: sizing.social,
    borderRadius: sizing.social / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg,
  },
  pressed: { opacity: 0.8 },
  glyph: { alignItems: 'center', justifyContent: 'center' },
});
