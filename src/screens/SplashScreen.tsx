/**
 * Splash — the brand-only opening frame (Figma frame 1).
 *
 * - Espresso background, full-bleed
 * - Neon-lime signature centred slightly above the optical centre
 * - Auto-advances to Welcome after 1.4s
 */
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Logo, Screen } from '../components';
import { colors } from '../theme';
import type { AuthStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'Splash'>;

const HOLD_MS = 2000;

export const SplashScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const id = setTimeout(() => navigation.replace('Welcome'), HOLD_MS);
    return () => clearTimeout(id);
  }, [navigation]);

  return (
    <Screen
      backgroundColor={colors.bgSplash}
      statusBar="light"
      noScroll
      noGutter
      noKeyboardAvoid
    >
      <View style={styles.center}>
        {/* <Logo width={240} color={colors.lime} /> */}
        <Image source={require('../assets/logo.png')} resizeMode='contain' style={{height:'50%' ,width:'80%'}} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
