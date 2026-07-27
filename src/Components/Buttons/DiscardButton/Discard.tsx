import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { FontType } from '../../Constants/FontType';

const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 420;

export default function Discard() {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => console.log('discarded')}
    >
      <Text style={[styles.text]}>Discard</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: isSmallScreen ? 170 : 90,
    paddingVertical: 16,
    borderWidth: 1.4,
    borderColor: '#676767',
    backgroundColor: 'transparent',
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: FontType.medium2,
  },
});
