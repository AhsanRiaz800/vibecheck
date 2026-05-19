/**
 * Any favorite places? — Figma frame 7 (onboarding step 3 of 5).
 *
 * Anatomy:
 *   - ProgressHeader (40% fill)
 *   - Centred title + supporting copy
 *   - Pill-shaped search field (light grey, magnifier glyph)
 *   - Wrapping row of removable Chips for each followed venue
 *   - "Continue" pinned to the bottom
 *
 * Search filters the suggested venues — pressing Return adds the typed value
 * as a new chip when it doesn't match an existing entry.
 */
import React, { useMemo, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  Button,
  Chip,
  ProgressHeader,
  Screen,
  SearchIcon,
} from '../components';
import { SUGGESTED_VENUES } from '../constants/onboarding';
import { colors, radius, sizing, spacing, text } from '../theme';
import type { AuthStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'FavoritePlaces'>;

export const FavoritePlacesScreen: React.FC<Props> = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [followed, setFollowed] = useState<string[]>([...SUGGESTED_VENUES]);

  const visibleChips = useMemo(() => {
    if (!query.trim()) return followed;
    const q = query.toLowerCase();
    return followed.filter((v) => v.toLowerCase().includes(q));
  }, [followed, query]);

  const addCustom = () => {
    const v = query.trim();
    if (!v) return;
    if (!followed.includes(v)) setFollowed((s) => [...s, v]);
    setQuery('');
  };

  return (
    <Screen backgroundColor={colors.bg}>
      <ProgressHeader
        step={3}
        total={5}
        onBack={() => navigation.goBack()}
        onSkip={() => navigation.navigate('SubscriptionTier')}
      />

      <View style={styles.intro}>
        <Text style={styles.title}>Any favorite places?</Text>
        <Text style={styles.subtitle}>
          Follow venues you already like to see what’s happening there
        </Text>
      </View>

      <View style={styles.search}>
        <SearchIcon color={colors.fgSecondary} />
        <TextInput
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={addCustom}
          placeholder="Search venues"
          placeholderTextColor={colors.fgMuted}
          returnKeyType="done"
          style={styles.searchInput}
        />
      </View>

      <View style={styles.chips}>
        {visibleChips.map((v) => (
          <Chip
            key={v}
            label={v}
            onRemove={() => setFollowed((s) => s.filter((x) => x !== v))}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <Button
          label="Continue"
          onPress={() => navigation.navigate('SubscriptionTier')}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  intro: {
    alignItems: 'center',
    marginTop: spacing.s7,
    marginBottom: spacing.s6,
  },
  title: { ...text.h1, textAlign: 'center' },
  subtitle: {
    ...text.bodyMuted,
    textAlign: 'center',
    marginTop: spacing.s2,
    color: colors.fgSecondary,
    fontSize: 15,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    height: sizing.input,
    backgroundColor: colors.bgInput,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.s5,
    gap: spacing.s3,
  },
  searchInput: {
    ...text.body,
    flex: 1,
    color: colors.fgPrimary,
    padding: 0,
  },
  chips: {
    marginTop: spacing.s5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.s2,
  },
  footer: {
    marginTop: 'auto',
    paddingTop: spacing.s5,
    paddingBottom: spacing.s5,
  },
});
