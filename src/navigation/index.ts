import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Login : undefined
  HomeScreen : undefined
  Components : undefined
  Cards : undefined
  CustomTabBar : undefined
  
};

export type BottomTabParamList = {
  MyTasks : undefined;
  BoardView: undefined;
  // CreateTaskScreen: undefined;
  Attendance: undefined;
  Notifications: undefined; 
}


export type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Splash'
>;

export type LoginSplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

export type HomeScreenScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'HomeScreen'
>;

export type ComponentsScreenProps = NativeStackScreenProps<
RootStackParamList, 'Components'>

export type CardsScreenProps = NativeStackScreenProps<
RootStackParamList, 'Cards'>

//
export type MyTasksScreenProps = NativeStackScreenProps<
BottomTabParamList, 'MyTasks'>

export type BoardViewScreenProps = NativeStackScreenProps<
BottomTabParamList, 'BoardView'>

export type AttendanceScreenProps = NativeStackScreenProps<
BottomTabParamList, 'Attendance'>

export type NotificationsScreenProps = NativeStackScreenProps<
BottomTabParamList, 'Notifications'>
