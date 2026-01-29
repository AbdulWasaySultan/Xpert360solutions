import { NavigationContainerProps, useNavigation } from '@react-navigation/native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList, SecondSplashScreenProps } from '../navigation';
import { NativeStackNavigatorProps } from '@react-navigation/native-stack';

export default function Login() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('SecondSplash')}>
        <Text style={styles.text}>hello moto</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
