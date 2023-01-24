import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useContext, useEffect} from 'react';
import { ColorSchemeName } from 'react-native';
import { darkTheme, lightTheme } from '../constants/theme';
import { ThemeContext } from '../hooks/useColorScheme';
import LoginScreen from '../screens/LoginScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import {  SignUpScreen } from '../screens/SignUpScreen';
import { RootStackParamList} from '../types';

export default function Navigation() {
  const {theme,setter} = useContext(ThemeContext)
  return (
    <NavigationContainer
      theme={theme === 'dark' ? darkTheme : lightTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}