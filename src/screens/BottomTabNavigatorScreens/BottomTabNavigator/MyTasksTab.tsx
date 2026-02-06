import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../../../navigation';

// Import your screens
import MyTasks from '../MyTasks'; 
import BoardView from '../BoardView'
import Attendance from '../Attendance';
import Notifications from '../Notifications';

// Import your custom UI components
import CustomTabBar from '../../CustomTabBar/CustomTabBar';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function MyTasksTab() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />} // This is the magic line
      screenOptions={{
        headerShown: false,
        lazy: true, // Improves splash transition smoothness
      }}
    >
      <Tab.Screen name="MyTasks" component={MyTasks} />
      <Tab.Screen name="BoardView" component={BoardView} />
      
      {/* Middle Button */}      
      <Tab.Screen name="Attendance" component={Attendance} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}