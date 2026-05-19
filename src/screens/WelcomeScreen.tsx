/**
 * Welcome / Discover — Figma frame 2.
 *
 * - Top half: 3-column mosaic of event photos that fade into white
 * - Bottom: "Discover the Live Events" title, muted subtitle, "Create
 *   Account" (primary) and "Sign In" (secondary outline) CTAs
 *
 * Tapping either CTA opens a transparent modal that renders the matching
 * bottom sheet over this screen — so the mosaic stays visible behind it.
 */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button, EventMosaic } from '../components';
import { colors, gutter, spacing, text } from '../theme';
import type { AuthStackParamList } from '../navigation/types';
import { responsiveFontSize } from '../utils/helper';

type Props = NativeStackScreenProps<AuthStackParamList, 'Welcome'>;

export const WelcomeScreen: React.FC<Props> = ({ navigation }) => (
  <SafeAreaView edges={['bottom']} style={styles.safe}>
    <View style={styles.hero}>
      {/* <EventMosaic height={540} /> */}
      <Image 
      source={require('../assets/welcome.png')}
       style={{height:'100%' ,width:'100%'}}
       resizeMode='cover'
         />
    </View>
    <View style={styles.footer}>
      <Text style={styles.title}>Discover the Live Events</Text>
      <Text style={styles.subtitle}>
        Discover Thousands of events across concerts, sports and more
      </Text>
      <View style={styles.actions}>
        <Button
          label="Create Account"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Button
          label="Sign In"
          variant="secondary"
          onPress={() => navigation.navigate('SignIn')}
          style={styles.signIn}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  hero: { height:'70%' ,width:'100%' },
  footer: {
    paddingHorizontal: gutter.mobile,
    paddingBottom: spacing.s5,
    
  },
  title: {
    ...text.h1,
    fontSize: responsiveFontSize(28),
marginTop:40,
    textAlign: 'center',
  },
  subtitle: {
    ...text.bodyMuted,
    textAlign: 'center',
    alignSelf:'center',
width:'90%',
lineHeight:24,
    color: colors.fgSecondary,
    marginTop: spacing.s3,
    marginBottom: spacing.s7,
    fontSize: responsiveFontSize(15),
  },
  actions: { gap: spacing.s3 },
  signIn: { marginTop: 0 },
});
