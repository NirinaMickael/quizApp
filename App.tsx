import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, ColorSchemeName } from 'react-native';
import {  SafeAreaView } from 'react-native-safe-area-context';
import Colors from './constants/Colors';
import Layout from './constants/Layout';
import { darkTheme, lightTheme } from './constants/theme';

import useCachedResources from './hooks/useCachedResources';
import { ThemeContext, ThemeContext as themeContext } from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [_theme,setTheme] = useState<NonNullable<ColorSchemeName>>("light");
  console.log(Layout);
  if (!isLoadingComplete) {
    return <ActivityIndicator size="small" color="#0000ff" /> ;
  } else {
    return (
      <SafeAreaView style={{
        flex:1
      }}>
        <ThemeContext.Provider value={{theme:_theme,setter:setTheme}}>
          <Navigation />
        </ThemeContext.Provider>
        <StatusBar 
        backgroundColor={_theme=="dark"?darkTheme.colors.background:Colors.light.background}
        />
      </SafeAreaView>
    );
  }
}
