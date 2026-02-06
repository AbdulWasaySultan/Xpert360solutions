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
import Splash from './src/screens/Splash/Splash'
import HomeScreen from './src/screens/Home';
import Components from './src/screens/Components';
import Cards from './src/Components/Views/TaskView/Cards';
import CustomTabBar from './src/screens/BottomTabNavigatorScreens/BottomTabNavigator/MyTasksTab'

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name ="Components" component={Components}/>
        <Stack.Screen name ="Cards" component={Cards}/>
        <Stack.Screen name ="CustomTabBar" component={CustomTabBar}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
