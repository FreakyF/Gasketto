import { NavigationContainer } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import 'react-native-gesture-handler';
import { useTheme } from './src/hooks/useTheme';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  const { isDark } = useTheme();

  useEffect(() => {
    const themeColor = isDark ? '#121212' : '#FFFFFF';

    SystemUI.setBackgroundColorAsync(themeColor);

    if (Platform.OS === 'android') {
      NavigationBar.setButtonStyleAsync(isDark ? 'light' : 'dark');
    }
  }, [isDark]);;

  return (
    <NavigationContainer>
      <StatusBar style={isDark ? "light" : "dark"} />

      <RootNavigator />
    </NavigationContainer>
  );
}
