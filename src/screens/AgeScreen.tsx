 
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button, OptionPill, ProgressHeader, Screen } from '../components';
import { AGE_GROUPS, AgeGroup } from '../constants/onboarding';
import { colors, spacing, text } from '../theme';
import type { AuthStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'Age'>;

export const AgeScreen: React.FC<Props> = ({ navigation }) => {
  const [selected, setSelected] = useState<AgeGroup | null>(null);

  return (
    <Screen backgroundColor={colors.bg}>
      <ProgressHeader
        step={2}
        total={5}
        onBack={() => navigation.goBack()}
        onSkip={() => navigation.navigate('FavoritePlaces')}
      />

      <View style={styles.intro}>
        <Text style={styles.title}>How Old are you?</Text>
        <Text style={styles.subtitle}>
          Your age helps us personalize your experience.
        </Text>
      </View>

      <View style={styles.options}>
        {AGE_GROUPS.map((age) => (
          <OptionPill
            key={age}
            label={age}
            selected={selected === age}
            onPress={() => setSelected(age)}
          />
        ))}
      </View>

      <Text style={styles.disclaimer}>
        Your selection won’t limit access to any features
      </Text>

      <View style={styles.footer}>
        <Button
          label="Continue"
          onPress={() => navigation.navigate('FavoritePlaces')}
          disabled={selected === null}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  intro: {
    alignItems: 'center',
    marginTop: spacing.s7,
    marginBottom: spacing.s7,
  },
  title: { ...text.h1, textAlign: 'center' },
  subtitle: {
    ...text.bodyMuted,
    textAlign: 'center',
    marginTop: spacing.s2,
    color: colors.fgSecondary,
    fontSize: 15,
  },
  options: { gap: spacing.s3 },
  disclaimer: {
    ...text.label,
    textAlign: 'center',
    color: colors.fgSecondary,
    marginTop: spacing.s7,
  },
  footer: {
    marginTop: 'auto',
    paddingTop: spacing.s5,
    paddingBottom: spacing.s5,
  },
});
