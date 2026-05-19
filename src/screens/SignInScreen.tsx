/**
 * Sign In — mirror of the Sign Up bottom sheet.
 *
 * The Figma file doesn't ship an explicit Sign In frame (it only renders
 * the link from the Sign Up sheet). We reuse the same bottom-sheet shell
 * with the two account-related fields plus the same social row, so the
 * visual treatment is consistent with frames 3 and 4.
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
import { validateEmail, validatePassword } from '../utils/validation';
import type { AuthStackParamList } from '../navigation/types';
import { responsiveFontSize } from '../utils/helper';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

export const SignInScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const isValid = useMemo(
    () => !validateEmail(email) && !validatePassword(password),
    [email, password],
  );

  const onSubmit = useCallback(async () => {
    if (!isValid) return;
    try {
      setSubmitting(true);
      await auth.signIn({ email, password });
      navigation.replace('Onboarding');
    } catch (e) {
      Alert.alert('Sign in failed', String((e as Error).message ?? e));
    } finally {
      setSubmitting(false);
    }
  }, [email, isValid, navigation, password]);

  const onForgot = useCallback(() => {
    Alert.alert('VibeCheck', 'Forgot password flow is not implemented yet.');
  }, []);

  const onGoogle = useCallback(async () => {
    await auth.withGoogle();
    navigation.replace('Onboarding');
  }, [navigation]);

  const onFacebook = useCallback(async () => {
    await auth.withFacebook();
    navigation.replace('Onboarding');
  }, [navigation]);

  return (
    <View style={{flex:1}}>

    <View style={{width:'100%' ,height:'100%'}}>
    <Image 
          source={require('../assets/welcome.png')}
           style={{height:'65%' ,width:'100%'}}
           resizeMode='cover'
             />
             
             </View>
             <View style={{ width:'100%',position:'absolute' ,backgroundColor:'white' ,top:170 ,paddingHorizontal:20 ,borderTopLeftRadius:20 ,borderTopRightRadius:20}}>

                   <View style={styles.header}>
        <View style={styles.headerSpacer} />
        <Text style={styles.title}>Log In</Text>
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
          label="Password"
          required
          secure
          value={password}
          onChangeText={setPassword}
          textContentType="password"
        />
        <Pressable onPress={onForgot} hitSlop={6} style={styles.forgotRow}>
          <Text style={styles.forgot}>Forgot password?</Text>
        </Pressable>
      </View>

      <Button
        label="Sign In"
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
        New to VibeCheck?{' '}
        <Text
          style={styles.haveAccountLink}
          onPress={() => navigation.replace('SignUp')}
        >
          Create an Account
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
    marginBottom:10,
    justifyContent: 'space-between',
    paddingBottom: spacing.s5,
  },
  headerSpacer: { width: 24 },
  title: {
    ...text.h2,
    fontSize: responsiveFontSize(20),
    textAlign: 'center',
    flex: 1,
  },
  close: { width: 24, alignItems: 'flex-end' },
  fields: { gap: spacing.s3 },
  forgotRow: { alignSelf: 'flex-end', paddingVertical: 4 },
  forgot: {
    ...text.label,
    color: colors.fgPrimary,
    fontWeight: '600',
  },
  cta: { marginTop: spacing.s6 },
  socialBlock: { marginTop: spacing.s6, alignItems: 'center' },
  socialRow: {
    flexDirection: 'row',
    gap: spacing.s5,
    marginTop: spacing.s4,
  },
  haveAccount: {
    ...text.body,
    color: colors.fgSecondary,
    textAlign: 'center',
    marginTop: 300,
    fontSize: responsiveFontSize(14),
  },
  haveAccountLink: {
    color: colors.fgPrimary,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
