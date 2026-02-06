import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function RecordButton() {
  return (
    <TouchableOpacity style={styles.createContainer}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require('../../../assets/images/record.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  createContainer: {
    backgroundColor: '#E02723',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
});
