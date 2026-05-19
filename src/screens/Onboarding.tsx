import React, { useState } from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  Button,
  CameraIcon,
  PlusIcon,
  ProgressHeader,
  Screen,
  OptionPill,
  Chip,
  SearchIcon,
} from '../components';

import { imagePicker } from '../services';
import { AGE_GROUPS, AgeGroup } from '../constants/onboarding';
import { SUGGESTED_VENUES } from '../constants/onboarding';
import { colors, fontSize, radius, sizing, spacing, text } from '../theme';
import type { AuthStackParamList } from '../navigation/types';
import { responsiveFontSize } from '../utils/helper';

type Props = NativeStackScreenProps<AuthStackParamList, 'Onboarding'>;

const TOTAL_STEPS = 3;

export const OnboardingScreen: React.FC<Props> = ({ navigation }) => {
  const [step, setStep] = useState(1); // 1, 2, 3 for now
  const [progressAnim] = useState(new Animated.Value(1)); // start at step 1

  // Form Data
  const [profileUri, setProfileUri] = useState<string | null>(null);
  const [selectedAge, setSelectedAge] = useState<AgeGroup | null>(null);
  const [followedVenues, setFollowedVenues] = useState<string[]>([...SUGGESTED_VENUES]);
  const [searchQuery, setSearchQuery] = useState('');

  // Animate Progress
  const animateToStep = (newStep: number) => {
    Animated.timing(progressAnim, {
      toValue: newStep,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

 

  const goNext = () => {
    if (step < TOTAL_STEPS) {
      const next = step + 1;
      setStep(next);
      animateToStep(next);
    } else {
      goToNextScreen();
    }
  };

  const goToNextScreen = () => {
    navigation.navigate('SubscriptionTier' as any);
  };
  const goBack = () => {
    if (step > 1) {
      const prev = step - 1;
      setStep(prev);
      animateToStep(prev);
    } else {
      navigation.goBack();
    }
  };
 

  const skip = () => {
    if (step < TOTAL_STEPS) {
      const next = step + 1;
      setStep(next);
      animateToStep(next);
    } else {
      // Last step → Skip also goes to SubscriptionTier
      goToNextScreen();
    }
  };

  // Profile Pic Handlers
  const pickProfile = async () => {
    const picked = await imagePicker.pickFromGallery();
    if (picked?.uri) setProfileUri(picked.uri);
  };

  // Favorite Places Handlers
  const visibleVenues = searchQuery.trim()
    ? followedVenues.filter(v => v.toLowerCase().includes(searchQuery.toLowerCase()))
    : followedVenues;

  const addCustomVenue = () => {
    const v = searchQuery.trim();
    if (v && !followedVenues.includes(v)) {
      setFollowedVenues(prev => [...prev, v]);
    }
    setSearchQuery('');
  };

  const removeVenue = (venue: string) => {
    setFollowedVenues(prev => prev.filter(v => v !== venue));
  };

  const canContinue = () => {
    if (step === 1) return true; // profile pic is optional
    if (step === 2) return selectedAge !== null;
    if (step === 3) return true;
    return true;
  };

  return (
    <Screen backgroundColor={colors.bg}>
      <ProgressHeader
        step={step}
        total={TOTAL_STEPS}
        progressAnim={progressAnim}   // ← pass animated value
        onBack={goBack}
        onSkip={skip}
      />

      <View style={styles.container}>
        {/* ==================== STEP 1: Profile Pic ==================== */}
        {step === 1 && (
          <View style={styles.content}>
            <Text style={styles.title}>Add a Profile Pic</Text>
            <Text style={styles.subtitle}>
              So other people can see you’re not a bot by uploading a picture.
            </Text>

            <Pressable onPress={pickProfile} style={styles.circleWrap}>
              <View style={styles.circle}>
                {profileUri ? (
                  <Image source={{ uri: profileUri }} style={styles.image} />
                ) : (
                  <CameraIcon size={56} color={colors.fgPrimary} />
                )}
              </View>
              <View style={styles.badge}>
                <PlusIcon size={26} color={colors.fgOnLime} />
              </View>
            </Pressable>
          </View>
        )}

        {/* ==================== STEP 2: Age ==================== */}
        {step === 2 && (
          <View style={styles.content}>
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
                  selected={selectedAge === age}
                  onPress={() => setSelectedAge(age)}
                />
              ))}
            </View>

            <Text style={styles.disclaimer}>
              Your selection won’t limit access to any features
            </Text>
          </View>
        )}

        {/* ==================== STEP 3: Favorite Places ==================== */}
        {step === 3 && (
          <View style={styles.content}>
            <View style={styles.intro}>
              <Text style={styles.title}>Any favorite places?</Text>
              <Text style={styles.subtitle}>
                Follow venues you already like to see what’s happening there
              </Text>
            </View>

            <View style={styles.search}>
              <SearchIcon color={colors.black} />
              <TextInput
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={addCustomVenue}
                placeholder="Search venues"
                placeholderTextColor={colors.fgMuted}
                returnKeyType="done"
                style={styles.searchInput}
              />
            </View>

            <View style={styles.chips}>
              {visibleVenues.map((v) => (
                <Chip
                  key={v}
                  label={v}
                  onRemove={() => removeVenue(v)}
                />
              ))}
            </View>
          </View>
        )}

        {/* Footer Button */}
        <View style={styles.footer}>
          <Button
            label="Continue"
            onPress={goNext}
            disabled={!canContinue()}
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: spacing.s7,
  },
  intro: {
    alignItems: 'center',
    marginBottom: spacing.s7,
  },
  title: {
    fontSize:responsiveFontSize(20) ,
fontWeight:'500',
color:'#404040', 
    textAlign: 'center',
  },
  subtitle: {
    ...text.bodyMuted,
    textAlign: 'center',
    marginTop: spacing.s2,
    paddingHorizontal: spacing.s7,
    color: colors.fgSecondary,
    fontSize: responsiveFontSize(14.5),
  },
  circleWrap: {
    width: 168,
    height: 168,
    marginTop: spacing.s9,
  },
  circle: {
    width: 168,
    height: 168,
    borderRadius: 84,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: { width: '100%', height: '100%' },
  badge: {
    position: 'absolute',
    right: -4,
    bottom: 6,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.lime,
    borderWidth: 4,
    borderColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  options: { gap: spacing.s3, width: '100%', paddingHorizontal: 30 },
  disclaimer: {
    ...text.label,
    fontSize:responsiveFontSize(14.5),
    textAlign: 'center',
    color: colors.fgSecondary,
    marginTop: spacing.s7,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    height: sizing.input,
    backgroundColor: colors.bgInput,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.s5,
    gap: spacing.s3,
    width: '100%',
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
    width: '100%',
  },
  footer: {
    marginTop: 'auto',
    paddingBottom: spacing.s5,
    paddingHorizontal: spacing.s1,
  },
});