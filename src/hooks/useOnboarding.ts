/**
 * Onboarding state hook.
 *
 * Keeps the user's onboarding selections in memory while the auth flow is
 * running. Replace the in-memory store with AsyncStorage (or a real state
 * manager — Zustand / Redux) once the flow needs to survive process kills.
 */
import { useState } from 'react';
import type { AgeGroup } from '../constants/onboarding';

export type OnboardingState = {
  profilePicUri: string | null;
  ageGroup: AgeGroup | null;
  followedVenues: string[];
  plan: 'monthly' | 'yearly';
};

export const useOnboarding = () => {
  const [state, setState] = useState<OnboardingState>({
    profilePicUri: null,
    ageGroup: null,
    followedVenues: [],
    plan: 'yearly',
  });

  const set = <K extends keyof OnboardingState>(
    key: K,
    value: OnboardingState[K],
  ) => setState((s) => ({ ...s, [key]: value }));

  return { state, set, reset: () => setState((s) => ({ ...s })) };
};
