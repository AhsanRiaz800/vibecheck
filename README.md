# Vibechecki — React Native (iOS + Android)

Production-ready Sign In / Sign Up implementation for the **Vibechecki** construction-industry SaaS, built directly from the official Vibechecki Design System handoff bundle (`Vibechecki-design-system`).

> Voice & vibe: practical, busy-professional, US-construction-office. Functional, second-person copy. Inter type, 4pt grid, brand blue `#007AB6` + safety yellow `#FFC107@0.8`. No gradients, no emoji, no patterns.

## What's implemented

| Module  | Screens        | Flow                                             |
| ------- | -------------- | ------------------------------------------------ |
| Sign In | `SignInScreen` | Email + password, Remember me, Forgot Password, Google / Apple SSO |
| Sign Up | `SignUpScreen` | Name, Email, Password, Confirm Password, Remember me, Google / Apple SSO |

Both are wired into a `@react-navigation/native-stack` so the iOS edge-swipe-back gesture and the Android hardware-back button both work.

### Functional behavior

- Per-field validation (required, email format, password min length, password match) with inline errors that clear on edit.
- `returnKey` chaining: tapping **next** on a soft keyboard advances focus to the next field; **done** submits.
- Loading spinner on the primary CTA during async submission, with the button disabled while pending.
- `KeyboardAvoidingView` keeps inputs reachable on small Androids; tap outside dismisses the keyboard.
- All buttons, links, checkboxes, and password-visibility toggles are functional and announce their role to assistive tech.

## Tech

- React Native 0.85, TypeScript
- `@react-navigation/native` + `@react-navigation/native-stack`
- `react-native-screens`, `react-native-safe-area-context`
- `react-native-svg` for the brand mark + all iconography (no asset bundling, single source)

## Folder layout

```
App.tsx                          # Root: SafeAreaProvider + NavigationContainer
src/
  theme/
    colors.ts                    # Brand + Untitled-UI gray ramp + semantic
    typography.ts                # Inter weights, sizes, line-heights, .t-* styles
    spacing.ts                   # 4pt grid, radii, two subtle shadows
    index.ts
  components/
    Logo.tsx                     # SVG brand lockup + mark-only mode
    Button.tsx                   # primary | secondary | link in sm | md | lg
    Input.tsx                    # labelled, leading icon, password toggle, error
    Checkbox.tsx                 # 18×18, brand blue when checked
    SocialButton.tsx             # Google / Apple sign-in
    Separator.tsx                # "or" between CTA and SSO
    Screen.tsx                   # SafeArea + KAV + scroll wrapper
    icons/                       # EyeIcon, EyeOffIcon, CheckIcon, GoogleIcon, AppleIcon
    index.ts
  screens/
    SignInScreen.tsx
    SignUpScreen.tsx
    index.ts
  navigation/
    AuthNavigator.tsx            # native-stack: SignIn ⇄ SignUp
    types.ts                     # AuthStackParamList
    index.ts
  utils/
    validation.ts                # email / password / name / match validators
```

## Running

```bash
# 1. Install JS deps
npm install

# 2. iOS — install pods (first run + after native dep changes)
cd ios && bundle install && bundle exec pod install && cd ..
npm run ios

# 3. Android
npm run android
```

The Metro bundler will start automatically with `npm run ios` / `npm run android`. To start it explicitly:

```bash
npm start
```

## Typography note (Inter)

The design specifies **Inter** as the only typeface. It is referenced by name throughout the styles. Until a custom-font bundle is linked (`react-native.config.js` + `react-native-asset`), iOS will fall back to SF Pro and Android to Roboto for any unrecognised family — visually close, not pixel-identical. To ship pixel-perfect, add Inter to `assets/fonts/` and run `npx react-native-asset`.

## Known caveats inherited from the design handoff

- **Iconography** is a Lucide stand-in for the licensed Untitled UI set. Replace `src/components/icons/*` with the Untitled UI export when available — the API surface (size + color props) is already correct.
- **Logo SVG** was rebuilt from JSX values and not the master vector. Confirm before shipping.
- **Source copy quirks** noted in the chat handoff: the design uses "Phone Name" (should be "Phone Number") and "Forget Password?" — we kept "Forgot Password?" in the Sign In screen and labelled the second password field "Confirm Password" (visually identical, semantically correct for assistive tech).
- **Out of scope** (present in the design but not asked for in this build): Splash, Company Details, Select User, Verification, Congratulations. Add them as additional screens under the same `AuthStackParamList`.
