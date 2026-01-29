import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  FirstSplash: undefined;
  SecondSplash: undefined;
  Login : undefined
};

export type FirstSplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'FirstSplash'
>;

export type SecondSplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SecondSplash'
>;

export type LoginSplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;
