import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ColorSchemeName } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Layout from './constants/Layout';

import useCachedResources from './hooks/useCachedResources';
import { ThemeContext, ThemeContext as themeContext } from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [_theme,setTheme] = useState<NonNullable<ColorSchemeName>>("dark");
  console.log(Layout);
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeContext.Provider value={{theme:_theme,setter:setTheme}}>
        <Navigation />
        </ThemeContext.Provider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
