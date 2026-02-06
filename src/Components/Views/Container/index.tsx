import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: object;
  bgSource? : any
};

export default function Container({ children, style, bgSource }: Props) {
  return (
    <View style={[styles.container, style]}>
      {/* Background Image */}
      <Image
        style={styles.bgImg}
        source={require('../../../assets/images/bgImages/bgImg.png')}
        resizeMode="cover"
      />
      {bgSource && <Image style={styles.bgImg} source={bgSource} resizeMode='cover'/>}
      {/* Children on top */}
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
  },
  bgImg: {
    ...StyleSheet.absoluteFill,
    width: undefined,
    height: undefined,
  },
  childrenContainer: {
    flex: 1,
    // backgroundColor : '#cdcdcd'
  },
});
