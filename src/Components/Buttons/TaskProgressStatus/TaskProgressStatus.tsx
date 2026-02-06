import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Dimensions } from 'react-native';
import { FontType } from '../../Constants/FontType';

type Props = {
  status: 'In progress' | 'Completed' | 'On Hold';
};

const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 420;

export default function TaskProgressStatus({ status }: Props) {
  //   const priorityText = ['Low', 'High'];

  //not supporting hoisting
  const getColor = (status: any): string => {
    switch (status) {
      case 'In progress':
        return '#0764E6';

      case 'Completed':
        return '#3D8C05';

      case 'On Hold':
        return '#9D8500';
      default:
        return '#cdcdcd';
    }
  };

  const getWidth = ( status : any): number => {
    switch (status) {
      case 'In progress':
        return 140;
      case 'Completed':
        return 150;

      case 'On Hold':
        return 105;
    }
    return 120;
  };

  return (
    <View
      style={[styles.buttonContainer, { backgroundColor: getColor(status), width : getWidth(status)}]}
    >
      <Text style={[styles.status]}>{status}</Text>
      <Image
        style={styles.arrowDown}
        source={require('../../../assets/images/arrow-down.png')}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 6.5,
    paddingHorizontal: 8,
    alignSelf: 'flex-start', // <-- button will only take as much width as its content
    minWidth: 100, // <-- minimum width to avoid shrinking too much
    maxWidth: 180, // <-- maximum width to prevent stretching full screen
    backgroundColor: '#0764E6',
    justifyContent: 'space-evenly',
    gap: 4,
  },
  status: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 15,
  },
  arrowDown: {
    width: 16,
    height: 16,
    // marginLeft: -10,
  },
});
