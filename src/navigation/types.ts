/**
 * Auth-stack route map for the VibeCheck onboarding flow.
 *
 * Routes follow the Figma frame order:
 *
 *   Splash → Welcome
 *           ├── SignUp (transparent modal)
 *           └── SignIn (transparent modal)
 *   Welcome → ProfilePic → Age → FavoritePlaces → SubscriptionTier
 *           → PaymentMethod → PayWithCard (transparent modal)
 *           → SubscriptionTier with `showSuccess`
 *
 * The transparent-modal screens render a bottom sheet over their parent so
 * the underlying hero stays visible (matches the Figma frames 3, 4, 10).
 */
export type AuthStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  SignUp: undefined;
  SignIn: undefined;
  ProfilePic: undefined;
  Age: undefined;
  Onboarding:undefined;
  FavoritePlaces: undefined;
  SubscriptionTier: { showSuccess?: boolean } | undefined;
  PaymentMethod: undefined;
  PayWithCard: undefined;
  MainTabs: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Events: undefined;
  Feed: undefined;
  League: undefined;
  Profile: undefined;
};