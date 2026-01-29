import React, { Children } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';

type Props = {
  children: React.ReactNode;
};
function Container({ children }: Props) {
  return (
    <View>
      <Image
        style={styles.bgImg}
        resizeMode="cover"
        source={require('../../assets/bgImg/bgImg.png')}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  bgImg: {
    width: '100%',
    height: '100%',
  },
});

export default Container;
