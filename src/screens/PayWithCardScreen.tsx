/**
 * Pay with Card — Figma frame 10 (transparent-modal bottom sheet over the
 * PaymentMethod screen).
 *
 * Captures card number, expiry, CVC, cardholder name, and a country select.
 * The CTA is the same green pill ("Start Trial") used everywhere else; on
 * submit it resolves the mock charge and navigates back to the Subscription
 * Tier route with the success overlay enabled.
 */
import React, { useMemo, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  AmexIcon,
  BottomSheet,
  Button,
  Input,
  MasterCardIcon,
  Select,
  VisaIcon,
  XIcon,
} from '../components';
import { COUNTRY_OPTIONS } from '../constants/onboarding';
import { colors, spacing, text } from '../theme';
import type { AuthStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'PayWithCard'>;

export const PayWithCardScreen: React.FC<Props> = ({ navigation }) => {
  const [card, setCard] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = useMemo(() => {
    const digits = card.replace(/\s/g, '');
    return (
      digits.length >= 14 &&
      /^\d{2}\/\d{2}$/.test(expiry) &&
      cvc.length >= 3 &&
      name.trim().length >= 2 &&
      country !== null
    );
  }, [card, expiry, cvc, name, country]);

  const onSubmit = async () => {
    if (!canSubmit) return;
    setSubmitting(true);
    // Mock charge — wire to Stripe in src/services/auth.ts once keys are set.
    setTimeout(() => {
      setSubmitting(false);
      navigation.navigate('SubscriptionTier', { showSuccess: true });
    }, 700);
  };

  return (
    <BottomSheet onDismiss={() => navigation.goBack()} minHeightPct={0.86}>
      <View style={styles.header}>
        <Text style={styles.title}>Pay with Card</Text>
        <Pressable
          onPress={() => navigation.goBack()}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="Close"
        >
          <XIcon size={22} color={colors.fgPrimary} />
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Details:</Text>
      <View style={styles.bullets}>
        <Text style={styles.bullet}>· Plan: Yearly</Text>
        <Text style={styles.bullet}>· Free trial: 7 days</Text>
        <Text style={styles.bullet}>· After trial: 13,99 €/year</Text>
      </View>

      <View style={styles.fields}>
        <Input
          label="Card number"
          required
          value={card}
          onChangeText={setCard}
          keyboardType="number-pad"
          maxLength={19}
          trailing={
            <View style={styles.brandRow}>
              <AmexIcon width={22} height={14} />
              <MasterCardIcon width={22} height={14} />
              <VisaIcon width={26} height={16} />
            </View>
          }
        />
        <View style={styles.expiryRow}>
          <Input
            label="Expiry"
            required
            placeholder="MM/YY"
            value={expiry}
            onChangeText={setExpiry}
            keyboardType="number-pad"
            maxLength={5}
            containerStyle={styles.expiry}
          />
          <Input
            label="CVC"
            required
            placeholder="123"
            value={cvc}
            onChangeText={setCvc}
            keyboardType="number-pad"
            maxLength={4}
            containerStyle={styles.cvc}
          />
        </View>
        <Input
          label="Name"
          required
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />
        <Select
          label="Country"
          required
          value={country}
          options={COUNTRY_OPTIONS}
          onChange={setCountry}
        />
      </View>

      <Text style={styles.disclaimer}>
        You will not be charged today. Cancel anytime before trial ends.
      </Text>

      <Button
        label="Start Trial"
        onPress={onSubmit}
        disabled={!canSubmit}
        loading={submitting}
        style={styles.cta}
      />

      <Text style={styles.stripe}>Secure payment via Stripe</Text>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: spacing.s4,
  },
  title: {
    ...text.h2,
    fontSize: 20,
    fontWeight: '700',
  },
  sectionTitle: {
    ...text.h3,
    fontSize: 16,
    fontWeight: '700',
    marginTop: spacing.s2,
  },
  bullets: { marginTop: spacing.s2, gap: 2, marginBottom: spacing.s5 },
  bullet: {
    ...text.body,
    fontSize: 14,
  },
  fields: { gap: spacing.s3 },
  expiryRow: { flexDirection: 'row', gap: spacing.s3 },
  expiry: { flex: 1 },
  cvc: { flex: 1 },
  brandRow: { flexDirection: 'row', gap: 4, width: 'auto' },
  disclaimer: {
    ...text.caption,
    textAlign: 'center',
    color: colors.fgSecondary,
    marginTop: spacing.s5,
  },
  cta: { marginTop: spacing.s3 },
  stripe: {
    ...text.caption,
    textAlign: 'center',
    color: colors.fgSecondary,
    marginTop: spacing.s3,
  },
});
