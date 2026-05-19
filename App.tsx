/**
 * VibeCheck — root application component.
 *
 *   - SafeAreaProvider for iOS notches / Android display cutouts
 *   - NavigationContainer hosting the auth stack
 *   - Status bar style is driven per-screen by `<Screen statusBar>` — we
 *     just keep the bar visible here.
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthNavigator } from './src/navigation';

const App: React.FC = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
