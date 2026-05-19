/**
 * Auth navigator — VibeCheck onboarding flow.
 *
 * Splash → Welcome → (SignUp | SignIn modal) → ProfilePic → Age →
 * FavoritePlaces → SubscriptionTier → PaymentMethod → PayWithCard modal.
 *
 * The native stack gives us iOS edge-swipe-back and Android hardware-back
 * for free. SignUp / SignIn / PayWithCard are presented as transparent
 * modals so the underlying screen stays visible behind their bottom sheet.
 */
import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AgeScreen,
  FavoritePlacesScreen,
  PaymentMethodScreen,
  PayWithCardScreen,
  ProfilePicScreen,
  SignInScreen,
  SignUpScreen,
  SplashScreen,
  SubscriptionTierScreen,
  WelcomeScreen,
} from '../screens';
import type { AuthStackParamList } from './types';
import { OnboardingScreen } from '../screens/Onboarding';
import { MainTabs } from './MainTabs';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{
      headerShown: false,
      animation: Platform.OS === 'ios' ? 'slide_from_right' : 'fade_from_bottom',
      contentStyle: { backgroundColor: '#FFFFFF' },
    }}
  >
    <Stack.Screen
      name="Splash"
      component={SplashScreen}
      options={{ gestureEnabled: false, animation: 'fade' }}
    />
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{
        presentation: 'transparentModal',
        animation: 'fade',
      }}
    />
    <Stack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{
        presentation: 'transparentModal',
        animation: 'fade',
      }}
    />
    <Stack.Screen name="ProfilePic" component={ProfilePicScreen} />
    <Stack.Screen name="Age" component={AgeScreen} />
    <Stack.Screen name="FavoritePlaces" component={FavoritePlacesScreen} />
    <Stack.Screen name="SubscriptionTier" component={SubscriptionTierScreen} />
    <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />

    <Stack.Screen
      name="PayWithCard"
      component={PayWithCardScreen}
      options={{
        presentation: 'transparentModal',
        animation: 'fade',
      }}
    />
    <Stack.Screen
  name="MainTabs"
  component={MainTabs}
  options={{
    gestureEnabled: false,
  }}
/>
  </Stack.Navigator>
);
