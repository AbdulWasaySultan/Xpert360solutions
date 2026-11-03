import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Dimensions } from 'react-native';
import { FontType } from '../../Constants/FontType';

type Priority = 'High' | 'Low';
type DueStatus = 'New Task' | 'Due Today' | 'Over Due';

type Props =
  | { type: 'priority'; value: Priority }
  | { type: 'dueStatus'; value: DueStatus };

const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 420;

const getBackgroundColor = (type: Props['type'], value: string) => {
  if (type === 'priority') {
    switch (value) {
      case 'High':
        return '#E02723';
      case 'Low':
        return '#3D8C05';
    }
  }

  if (type === 'dueStatus') {
    switch (value) {
      case 'New Task':
        return '#0764E6';
      case 'Due Today':
        return '#3D8C05';
      case 'Over Due':
        return '#E02723';
      default:
        return '#cdcdcd';
    }
  }
  return '#cdcdcd';
};

const getWidth = (type: Props['type']) => {
  switch (type) {
    case 'priority':
      return isSmallScreen ? 70 : 90;

    case 'dueStatus':
      return isSmallScreen ? 130 : 150;
    default:
      return 90;
  }
};

export default function StatusBadge({ type, value }: Props) {
  return (
    <View
      style={[
        styles.buttonContainer,
        {
          backgroundColor: getBackgroundColor(type, value),
          width: getWidth(type),
        },
      ]}
    >
      <Text
        style={[styles.priority, type === 'priority' && { fontWeight: '500' }]}
        numberOfLines={1}
        ellipsizeMode="clip"
      >
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',

    paddingVertical: 6,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    alignSelf: 'flex-start',

    flexGrow: 0,
    flexShrink: 0,

    // borderWidth: 1,
    // borderColor: 'yellow',
  },
  priority: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: FontType.small2,
  },
});
