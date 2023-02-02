import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useContext, useEffect } from 'react'
import { darkTheme, lightTheme } from '../constants/theme'
import { ThemeContext } from '../hooks/useColorScheme'
import {  LoginScreen, NotFoundScreen, SignUpScreen } from '../screens'
import Dashboard from '../screens/Dashboard'
import { RootStackParamList } from '../types'
const StackScreen = createNativeStackNavigator<RootStackParamList>()
export default function Navigation() {
  const { theme, setter } = useContext(ThemeContext)
  return (
    <NavigationContainer theme={theme === 'dark' ? darkTheme : lightTheme}>
      <RootNavigator />
    </NavigationContainer>
  )
}


function RootNavigator() {
  return (
    <StackScreen.Navigator
      screenOptions={{
        animationDuration: 0,
        animation: 'none',
        headerShown: false,
      }}
      id=''
    >
      <StackScreen.Screen name="Root" component={SignUpScreen} />
      <StackScreen.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerBackTitle: 'kuuku',
          title: 'Login',
          headerTitleStyle: {
            color: 'red',
          },
        }}
      />
      <StackScreen.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <StackScreen.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: 'Home' }}
      />
    </StackScreen.Navigator>
  )
}

