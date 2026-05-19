/**
 * Centralised runtime configuration for VibeCheck.
 *
 * The auth flow is fully functional in mock mode out-of-the-box. To enable
 * production behaviour:
 *   1. Replace the empty strings below with your provider credentials.
 *   2. Set `MOCK_AUTH = false`.
 *   3. Re-run `pod install` after adding the corresponding native SDKs to
 *      `package.json` (see comments next to each key).
 *
 * Keeping every secret in this one file makes it trivial to swap to a real
 * env loader (`react-native-config`, `react-native-dotenv`) later — the only
 * change is to read from the loader instead of from the inline constants.
 */

export const env = {
  /** When true, every "auth" call resolves to a mock user after 600ms. */
  MOCK_AUTH: true,

  /** Google Sign-In — requires @react-native-google-signin/google-signin. */
  GOOGLE: {
    iosClientId: '',
    webClientId: '',
  },

  /** Facebook Login — requires react-native-fbsdk-next. */
  FACEBOOK: {
    appId: '',
    clientToken: '',
  },

  /** Stripe (Pay-with-Card sheet). Backend should mint paymentIntents. */
  STRIPE: {
    publishableKey: '',
  },

  /** Backend API base — leave blank to keep the mock layer in charge. */
  API_BASE_URL: '',
} as const;

export type Env = typeof env;
