/**
 * Choose how you want to use VibeCheck — Figma frame 8.
 *
 * - Gradient background (limeWash → white)
 * - Back icon button top-left
 * - Title + subtitle
 * - 3 feature rows (espresso check + title + body)
 * - 2 plan cards side-by-side with a "7 Days Free" badge on Yearly
 * - "Continue for Free" secondary button
 * - "Start with 7 day free Trial" primary button with crown leading icon
 *
 * Also displays the success overlay when `route.params.showSuccess` is true
 * (the success modal is the terminal frame of the flow).
 */
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Svg, {
  Defs,
  LinearGradient,
  Rect,
  Stop,
} from 'react-native-svg';
import {
  BackArrowIcon,
  Button,
  Checkbox,
  ChevronRightIcon,
  CrownIcon,
  GradientBackground,
  IconButton,
  PlanCard,
  SuccessOverlay,
} from '../components';
import { SUBSCRIPTION_FEATURES } from '../constants/onboarding';
import { colors, fontSize, gutter, spacing, text, weights } from '../theme';
import type { AuthStackParamList } from '../navigation/types';
import { responsiveFontSize } from '../utils/helper';

type Props = NativeStackScreenProps<AuthStackParamList, 'SubscriptionTier'>;

type Plan = 'monthly' | 'yearly';

export const SubscriptionTierScreen: React.FC<Props> = ({
  navigation,
  route,
}) => {
  const [plan, setPlan] = useState<Plan>('yearly');
  const showSuccess = Boolean(route.params?.showSuccess);

  return (
    <GradientBackground>
      <SafeAreaView edges={['top', 'bottom']} style={styles.safe}>
        <View style={styles.header}>
          <IconButton
            onPress={() => navigation.goBack()}
            accessibilityLabel="Go back"
          >
            <BackArrowIcon size={25} color={colors.fgPrimary} />
          </IconButton>

          {/* <Text style={[styles.subtitle ,{marginLeft:75 ,color:colors.black ,fontSize:fontSize.body ,fontWeight:weights.medium}]}>Start your free trial</Text> */}

        </View>

        <View style={styles.body}>
          <Text style={styles.title}>
            Choose how you want to {'\n'}use VibeCheck
          </Text>
          <Text style={styles.subtitle}>Start free. Upgrade anytime</Text>

          <View style={styles.features}>
            {SUBSCRIPTION_FEATURES.map((f) => (
              <View key={f.title} style={styles.featureRow}>

<View style={{alignItems:'center'}}>
                <Checkbox checked size={28} />
                {/* <View style={{height:60 ,width:2 ,marginTop:5 ,backgroundColor:'black'}}></View> */}
                <Svg width={2} height={65} style={{ marginTop: 5 }}>
  <Defs>
    <LinearGradient id="featureLine" x1="0" y1="0" x2="0" y2="1">
      <Stop offset="0%" stopColor="#CBD5E1" stopOpacity={1} />
      <Stop offset="65%" stopColor="#E2E8F0" stopOpacity={0.9} />
      <Stop offset="100%" stopColor="#F1F5F9" stopOpacity={0.8} />
    </LinearGradient>
  </Defs>

  <Rect
    x="0"
    y="0"
    width="2"
    height="65"
    rx="1"
    fill="url(#featureLine)"
  />
</Svg>
      </View>
                <View style={styles.featureCopy}>
                  <Text style={styles.featureTitle}>{f.title}</Text>
                  <Text style={styles.featureBody}>{f.body}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.plans}>
            <PlanCard
              title="Monthly"
              price="3,99 €/mo"
              selected={plan === 'monthly'}
              onPress={() => setPlan('monthly')}
            />
            <PlanCard
              title="Yearly"
              price="1,16 €/mo"
              badge="7 Days Free"
              selected={plan === 'yearly'}
              onPress={() => setPlan('yearly')}
            />
          </View>

          {/* <Button
            label="Continue for Free"
            variant="secondary"
            onPress={() =>
              navigation.navigate('SubscriptionTier', { showSuccess: true })
            }
            trailingIcon={<ChevronRightIcon size={18} />}
            style={styles.continueFree}
          /> */}

          <Pressable  onPress={() =>
              navigation.navigate('SubscriptionTier', { showSuccess: true })
            }
             style={{width:'100%' ,height:60 ,flexDirection:'row'  ,marginTop:20 ,alignItems:'center' ,paddingHorizontal:15,justifyContent:'space-between' , borderWidth:1, borderColor:'#E5E5E5' ,borderRadius:10}}>
<Text style={{fontSize:fontSize.body ,fontWeight:weights.medium ,color:colors.black}}>Continue for Free</Text>
          <ChevronRightIcon size={25} />
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Button
            label="Start with 7 day free Trial"
            leadingIcon={<CrownIcon size={25} color={colors.fgOnLime} />}
            onPress={() => navigation.navigate('PaymentMethod')}
          />
        </View>
      </SafeAreaView>

      <SuccessOverlay
        visible={showSuccess}
        onContinue={() => navigation.popToTop()}
        onDismiss={() =>
          navigation.setParams({ showSuccess: false } as never)
        }
      />
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, paddingHorizontal: gutter.mobile },
  header: { paddingTop: spacing.s3 ,flexDirection:'row' ,alignItems:"center"  },
  body: {
    flex: 1,
    paddingTop: spacing.s5,
  },
  title: {
    ...text.h1,
    textAlign: 'center',
    fontSize: responsiveFontSize(24),
    fontWeight:'600',
    lineHeight: 32,
  },
  subtitle: {
    ...text.bodyMuted,
    textAlign: 'center',
    marginTop: 4,
    color: colors.fgSecondary,
    fontSize: responsiveFontSize(14),
  },
  features: {
    marginTop: spacing.s7,
    gap: spacing.s5,
  },
  featureRow: { flexDirection: 'row', alignItems: 'flex-start' },
  featureCopy: { flex: 1, marginLeft: spacing.s4 },
  featureTitle: {
    ...text.h3,
    fontSize: responsiveFontSize(18),
    fontWeight: '600',
  },
  featureBody: {
    ...text.label,
    color: colors.fgSecondary,
    marginTop: 2,
    width:'85%',
    fontSize:responsiveFontSize(13.3),
    lineHeight:20
  },
  plans: {
    flexDirection: 'row',
    gap: spacing.s3,
    marginTop: 70,
  },
  continueFree: {
    marginTop: spacing.s5,
    height: 52,
  },
  footer: {
    paddingTop: spacing.s3,
    paddingBottom: spacing.s5,
  },
});
