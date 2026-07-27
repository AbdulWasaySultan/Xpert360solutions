import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function FilterButton() {
  return (
    <TouchableOpacity style={styles.createContainer}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require('../../../assets/images/filter.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  createContainer: {
    backgroundColor: '#E02723',
    borderRadius: 20,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 32,
    height: 32,
  },
});
