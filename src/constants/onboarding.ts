/**
 * Static option/copy constants for the onboarding flow.
 *
 * Keeping the option strings here (rather than inlining them in the screen)
 * means it's trivial to localise the flow later — the screen just maps over
 * the array.
 */

import type { SelectOption } from '../components';

export const AGE_GROUPS = [
  'Under 18',
  '18-24',
  '25-34',
  '35-44',
  '45-54',
  '55-64',
  'Over 64',
] as const;
export type AgeGroup = (typeof AGE_GROUPS)[number];

export const SUGGESTED_VENUES = [
  'Sky Lounge',
  'Neon Room',
  'Rooftop 27',
  'Echo District',
  'Midnight Social',
  'Pulse Lounge',
  'SideStreet Collective',
] as const;

export const COUNTRY_OPTIONS: SelectOption[] = [
  { label: 'One', value: 'one' },
  { label: 'Two', value: 'two' },
  { label: 'Three', value: 'three' },
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Germany', value: 'de' },
];

export const SUBSCRIPTION_FEATURES = [
  {
    title: 'Discover venues',
    body: 'Create and manage as many packing lists as you need',
  },
  {
    title: 'Unlimited Uploads',
    body: 'Upload unlimited documents, photos, or files without worrying about storage limits.',
  },
  {
    title: 'Size Passport',
    body: 'Store and access your exact clothing sizes in one place for easy shopping and packing.',
  },
] as const;
