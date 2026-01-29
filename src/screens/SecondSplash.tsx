import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SecondSplashScreenProps } from '../navigation/index';
import RNSplash from 'react-native-splash-screen';
import { StatusBar } from 'react-native';
import Container from '../components/globalComponents/Container';

// const navigation = useNavigation<NavigationContainerProps>();

export default function SecondSplash({ navigation }: SecondSplashScreenProps) {
  useEffect(() => {
    let hideTimer = setTimeout(() => {
      RNSplash.hide();
    }, 100);

    const navTimer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => {
      clearTimeout(navTimer); // Cleanup timer on unmount
      clearTimeout(hideTimer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
      <Image
        style={styles.image}
        source={require('../assets/secondSplash/splash.png')}
        resizeMode="cover"
      />
    </View>
    // <Container>
    //   <Image
    //     style={styles.image}
    //     resizeMode="cover"
    //     source={require('../assets/360logo.png')}
    //   />
    // </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Set this to match your Figma background
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bglogo: {
    width: 200,
    height: 200,
    alignSelf : 'center'
  },
});
