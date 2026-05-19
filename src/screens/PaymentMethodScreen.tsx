/**
 * Start your free trial — Figma frame 9.
 *
 * The body explains what's included on the trial, lets the user pick a
 * payment method (only one option is shown in the Figma), and bottoms out
 * with a "Continue" button that opens the Pay-with-Card sheet.
 */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  BackArrowIcon,
  Button,
  GradientBackground,
  IconButton,
  PaymentRow,
  VisaIcon,
} from '../components';
import { colors, gutter, spacing, text } from '../theme';
import type { AuthStackParamList } from '../navigation/types';
import { responsiveFontSize } from '../utils/helper';

type Props = NativeStackScreenProps<AuthStackParamList, 'PaymentMethod'>;

export const PaymentMethodScreen: React.FC<Props> = ({ navigation }) => {
  const [method, setMethod] = useState<'card' | null>('card');

  return (
    <GradientBackground>
      <SafeAreaView edges={['top', 'bottom']} style={styles.safe}>
        <View style={styles.headerRow}>
          <IconButton
            onPress={() => navigation.goBack()}
            accessibilityLabel="Go back"
          >
            <BackArrowIcon size={25} color={colors.fgPrimary} />
          </IconButton>
          <Text style={styles.headerTitle}>Start your free trial</Text>
          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.body}>
          <Text style={styles.bigTitle}>Start with 7 day free Trial</Text>
          <Text style={styles.bigSubtitle}>
            No charge today · Cancel anytime
          </Text>

          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Plan selected:</Text>
            <View style={styles.bullets}>
              <Text style={styles.bullet}>·  Yearly — 1,16 €/mo</Text>
              <Text style={styles.bullet}>·  7 days free trial</Text>
            </View>
            <Text style={styles.afterTrial}>After trial: 13,99 €/year</Text>
          </View>

          <Text style={styles.sectionTitle}>Choose payment method</Text>
          <PaymentRow
            badge={<VisaIcon width={38} height={22} />}
            title="Credit / Debit Card"
            subtitle="Visa · MasterCard · Amex"
            selected={method === 'card'}
            onPress={() => setMethod('card')}
            style={styles.methodRow}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.disclaimer}>
            By continuing you agree to Terms & Privacy. Cancel anytime.
          </Text>
          <Button
            label="Continue"
            onPress={() => navigation.navigate('MainTabs')}       
                 disabled={method === null}
          />
          <Text style={styles.stripe}>Secure payment powered by Stripe</Text>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, paddingHorizontal: gutter.mobile },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing.s3,
  },
  headerTitle: {
    ...text.h3,
    fontWeight: '500',
    flex: 1,
    textAlign: 'center',
    fontSize:responsiveFontSize(16)
   },
  headerSpacer: { width: 40 },
  body: { flex: 1, paddingTop: spacing.s7 },
  bigTitle: {
    ...text.h1,
    fontSize: responsiveFontSize(23),
    lineHeight: 32,
    fontWeight:'600',

    textAlign:'center'
  },
  bigSubtitle: {
    ...text.bodyMuted,
    color: colors.fgSecondary,
    marginTop: 4,
    fontSize: responsiveFontSize(13.5),
    textAlign:'center'

  },
  section: { marginTop: spacing.s7 },
  sectionLabel: {
    ...text.h3,
    fontSize: responsiveFontSize(16),
    fontWeight: '600',
    marginTop:25,
  },
  bullets: { marginTop: spacing.s2, gap: 4 },
  bullet: {
    ...text.body,
    color: colors.fgSecondary,
    fontSize: responsiveFontSize(12.5),
  },
  afterTrial: {
    ...text.label,
    color: colors.fgSecondary,
    marginTop: spacing.s2,
  },
  sectionTitle: {
    ...text.h3,
    fontSize: responsiveFontSize(16),
    fontWeight: '600',
    marginTop: spacing.s8,
    marginBottom: spacing.s3,
  },
  methodRow: { marginBottom: spacing.s5 },
  footer: {
    paddingBottom: spacing.s5,
    paddingTop: spacing.s3,
  },
  disclaimer: {
    ...text.caption,
    textAlign: 'center',
    color: colors.fgSecondary,
    fontSize:responsiveFontSize(12),

    marginBottom: spacing.s3,
  },
  stripe: {
    ...text.caption,
    textAlign: 'center',
    fontSize:responsiveFontSize(12),
    color: colors.fgSecondary,
    marginTop: spacing.s2,
  },
});
