/**
 * VibeCheck authentication service.
 *
 * Every method below resolves with a mock User after a short delay while
 * `env.MOCK_AUTH` is true (the default). Swap each branch for the real
 * provider call once the keys in `src/config/env.ts` are filled in and the
 * native SDKs are linked. The function signatures are intentionally stable
 * so the screens never need to change.
 *
 * For Google / Facebook integrations follow:
 *   - https://github.com/react-native-google-signin/google-signin
 *   - https://github.com/thebergamo/react-native-fbsdk-next
 */
import { env } from '../config/env';

export type User = {
  id: string;
  fullName: string;
  email: string;
  provider: 'email' | 'google' | 'facebook';
};

export type SignUpInput = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
};

export type SignInInput = {
  email: string;
  password: string;
};

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(() => resolve(), ms));

export const auth = {
  async signUp(input: SignUpInput): Promise<User> {
    if (env.MOCK_AUTH) {
      await delay(600);
      return {
        id: cryptoIshId(),
        fullName: input.fullName,
        email: input.email,
        provider: 'email',
      };
    }
    throw new Error('Production sign-up not implemented — wire src/config/env.ts');
  },

  async signIn(input: SignInInput): Promise<User> {
    if (env.MOCK_AUTH) {
      await delay(500);
      return {
        id: cryptoIshId(),
        fullName: 'Guest User',
        email: input.email,
        provider: 'email',
      };
    }
    throw new Error('Production sign-in not implemented — wire src/config/env.ts');
  },

  async withGoogle(): Promise<User> {
    if (env.MOCK_AUTH) {
      await delay(400);
      return {
        id: cryptoIshId(),
        fullName: 'Google User',
        email: 'google.user@example.com',
        provider: 'google',
      };
    }
    /*
     * Production wiring sketch (uncomment after installing the SDK):
     *
     *   import { GoogleSignin } from '@react-native-google-signin/google-signin';
     *   GoogleSignin.configure({ iosClientId: env.GOOGLE.iosClientId, webClientId: env.GOOGLE.webClientId });
     *   const result = await GoogleSignin.signIn();
     *   return { id: result.user.id, fullName: result.user.name ?? '', email: result.user.email, provider: 'google' };
     */
    throw new Error('Google Sign-In not configured — see src/services/auth.ts');
  },

  async withFacebook(): Promise<User> {
    if (env.MOCK_AUTH) {
      await delay(400);
      return {
        id: cryptoIshId(),
        fullName: 'Facebook User',
        email: 'fb.user@example.com',
        provider: 'facebook',
      };
    }
    /*
     * Production wiring sketch (uncomment after installing the SDK):
     *
     *   import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
     *   const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
     *   if (result.isCancelled) throw new Error('Facebook sign-in cancelled');
     *   const token = await AccessToken.getCurrentAccessToken();
     *   // … fetch profile via Graph API …
     */
    throw new Error('Facebook Login not configured — see src/services/auth.ts');
  },
};

const cryptoIshId = () =>
  Math.random().toString(36).slice(2) + Date.now().toString(36);
