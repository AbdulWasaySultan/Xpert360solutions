import React from 'react';
import { Text, StyleSheet, TouchableOpacity,View } from 'react-native';
import { Dimensions } from 'react-native';
import { FontType } from '../../Constants/FontType';

const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 420;

export default function RedButton() {

  return (
    <View style={{width : 200}}>
        <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => console.log('Assign Tasks')}
    >
      <Text style={[styles.text]}>Assign Tasks</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // width: isSmallScreen ? 170 : 90,
    paddingVertical: 17,
    borderWidth : 1,
    backgroundColor : '#E02723',
    // paddingHorizontal : 30
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: FontType.medium2,
  },
});
