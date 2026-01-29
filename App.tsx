/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/navigation';
import Login from './src/screens/Login';
import FirstSplash from './src/screens/FirstSplash';
import SecondSplash from './src/screens/SecondSplash';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SecondSplash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SecondSplash" component={SecondSplash} />
        <Stack.Screen name="Login" component={Login} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
