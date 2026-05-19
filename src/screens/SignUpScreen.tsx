/**
 * Sign Up — Figma frames 3 (empty) and 4 (filled).
 *
 * Renders as a transparent-modal bottom sheet sitting over the Welcome
 * mosaic: title bar, 4 inputs, primary CTA, "or sign in with" + circular
 * social buttons, sign-in link, footer copy.
 *
 * Every required field must be present and the email must look like one.
 * The CTA stays disabled (greyed pill) until the form is valid — the exact
 * state the empty frame shows.
 */
import React, { useCallback, useMemo, useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  BottomSheet,
  Button,
  Input,
  Separator,
  SocialButton,
  XIcon,
} from '../components';
import { auth } from '../services';
import { colors, spacing, text } from '../theme';
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
} from '../utils/validation';
import type { AuthStackParamList } from '../navigation/types';
import { responsiveFontSize } from '../utils/helper';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

export const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const isValid = useMemo(
    () =>
      !validateName(fullName) &&
      !validateEmail(email) &&
      !validatePhone(phone) &&
      !validatePassword(password),
    [fullName, email, phone, password],
  );

  const onSubmit = useCallback(async () => {
    if (!isValid) return;
    try {
      setSubmitting(true);
      await auth.signUp({ fullName, email, phone, password });
      navigation.replace('Onboarding');
    } catch (e) {
      Alert.alert('Sign up failed', String((e as Error).message ?? e));
    } finally {
      setSubmitting(false);
    }
  }, [email, fullName, isValid, navigation, password, phone]);

  const onGoogle = useCallback(async () => {
    try {
      await auth.withGoogle();
      navigation.replace('Onboarding');
    } catch (e) {
      Alert.alert('Google sign-in failed', String((e as Error).message ?? e));
    }
  }, [navigation]);

  const onFacebook = useCallback(async () => {
    try {
      await auth.withFacebook();
      navigation.replace('Onboarding');
    } catch (e) {
      Alert.alert('Facebook sign-in failed', String((e as Error).message ?? e));
    }
  }, [navigation]);

  const onOpenLinks = useCallback((kind: 'agreement' | 'privacy') => {
    Alert.alert('VibeCheck', `Opening ${kind} — wire this to your CMS.`);
  }, []);

  return (
    <View style={{flex:1}}>

<View style={{width:'100%' ,height:'100%'}}>
<Image 
      source={require('../assets/welcome.png')}
       style={{height:'65%' ,width:'100%'}}
       resizeMode='cover'
         />
         
         </View>

<View style={{position:'absolute' ,backgroundColor:'white' ,top:170 ,paddingHorizontal:20 ,borderTopLeftRadius:20 ,borderTopRightRadius:20}}>
                <View style={styles.header}>
        <View style={styles.headerSpacer} />
        <Text style={styles.title}>Create an Account</Text>
        <Pressable
          onPress={() => navigation.goBack()}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="Close"
          style={styles.close}
        >
          <XIcon size={25} color={colors.fgPrimary} />
        </Pressable>
      </View>

      <View style={styles.fields}>
        <Input
          label="Full Name"
          required
          value={fullName}
          onChangeText={setFullName}
          autoCapitalize="words"
          textContentType="name"
        />
        <Input
          label="Email Address"
          required
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
        />
        <Input
          label="Phone Number"
          required
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
        />
        <Input
          label="Password"
          required
          secure
          value={password}
          onChangeText={setPassword}
          textContentType="newPassword"
        />
      </View>

      <Button
        label="Create an Account"
        onPress={onSubmit}
        disabled={!isValid}
        loading={submitting}
        style={styles.cta}
      />

      <View style={styles.socialBlock}>
        <Separator label="or sign in with" />
        <View style={styles.socialRow}>
          <SocialButton provider="facebook" onPress={onFacebook} />
          <SocialButton provider="google" onPress={onGoogle} />
        </View>
      </View>

      <Text style={styles.haveAccount}>
        Have a CheckVibe Account?{' '}
        <Text
          style={styles.haveAccountLink}
          onPress={() => navigation.replace('SignIn')}
        >
          Sign In
        </Text>
      </Text>

      <Text style={styles.legal}>
        By creating an account, you agree to our{' '}
        <Text style={styles.legalLink} onPress={() => onOpenLinks('agreement')}>
          user agreement
        </Text>{' '}
        and acknowledge our{' '}
        <Text style={styles.legalLink} onPress={() => onOpenLinks('privacy')}>
          privacy policy
        </Text>
      </Text>
      </View>
     </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:25,
    justifyContent: 'space-between',
    paddingBottom: spacing.s5,
  },
  headerSpacer: { width: 24 },
  title: {
    ...text.h2,
    fontSize: responsiveFontSize(20),
    textAlign: 'center',
    marginBottom :10,
    flex: 1,
  },
  close: { width: 24, alignItems: 'flex-end' },
  fields: { gap: spacing.s3 },
  cta: { marginTop: spacing.s6 },
  socialBlock: { marginTop: spacing.s7, alignItems: 'center' },
  socialRow: {
    flexDirection: 'row',
    gap: spacing.s5,
    marginTop: spacing.s7,
  },
  haveAccount: {
    ...text.body,
    color: colors.fgSecondary,
    textAlign: 'center',
    marginTop: 100,
    fontSize:responsiveFontSize(14),
  },
  haveAccountLink: {
    color: colors.fgPrimary,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  legal: {
    ...text.caption,
    textAlign: 'center',
    color: colors.fgSecondary,
    marginTop: spacing.s6,
    fontSize:responsiveFontSize(13),
    lineHeight: 22,
  },
  legalLink: {
    color: colors.fgPrimary,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
