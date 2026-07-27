import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { BottomTabParamList } from '../../../navigation';
import MyTasks from '../../../screens/BottomTabNavigatorScreens/MyTasks';

type MyTasksScreenProps = 
  NativeStackNavigationProp<BottomTabParamList,
  'MyTasks'
>;

type CreateTask = {
  onPress: () => void;
};

export default function CreateTask(
  {onPress} : CreateTask 
) {

  const navigation = useNavigation<MyTasksScreenProps>()
  return (
    <TouchableOpacity
      style={styles.createContainer}
      onPress={() => navigation.navigate('MyTasks')}
      activeOpacity={0.8}
    >
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require('../../../assets/images/create.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  createContainer: {
    backgroundColor: '#E02723',
    borderRadius: 35,
    width: 73,
    height: 73,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 37,
    height: 37,
  },
});
