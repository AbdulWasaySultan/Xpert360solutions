import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { RootStackParamList } from '../../navigation/index'
import RNSplash from 'react-native-splash-screen';
import { useNavigation } from '@react-navigation/native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

type SplashScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Splash'
>;

export default function Splash() {
  const navigation = useNavigation<SplashScreenProps>();
  const route = useRoute<RouteProp<RootStackParamList, 'Splash'>>();

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      RNSplash.hide();
    }, 100);

    const navTimer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => {
      clearTimeout(navTimer);
      clearTimeout(hideTimer);
    };
  }, [navigation]);
  return(


  <View style={styles.container}>
      {/* 1. Force the UI to use the area behind the clock/notch */}
      <StatusBar hidden={true} />

      {/* 2. The Background Image */}
      <Image
        style={styles.fullScreenBg}
        source={require('../../assets/images/secondSplash/splash.png')}
        resizeMode="cover" // Use 'cover' to fill the entire screen dimensions
      />

      {/* 3. If the logo is part of the image, the image MUST be the exact screen size. 
          If you are rendering the logo separately (Recommended): */}
      <View style={StyleSheet.absoluteFill}>
        {/* <View style={styles.centeredContent}>
           <Image
              style={styles.bglogo}
              source={require('../../assets/images/360logo.png')}
              resizeMode="contain"
            />
        </View> */}
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Match your splash background
  },
  fullScreenBg: {
    position: 'absolute',
    width: width,
    height: height,
    top: 0,
    left: 0,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bglogo: {
    width: 200,
    height: 200,
  },
});


   // <Container
    //   bgSource={require('../assets/splash/splashBgImg.png')}
    //   style={styles.container}
    // >
    //   <View style={styles.container}>
    //     <StatusBar translucent backgroundColor="transparent" />
    //     <View style={styles.logoContainer}>
    //       <Image
    //         style={styles.bglogo}
    //         source={require('../assets/360logo.png')}
    //         resizeMode="contain"
    //       />
    //     </View>

    //     <TouchableOpacity onPress={() => navigation.navigate('Login')}>
    //       <Text style={{ color: '#FFFF' }}>hello aalu</Text>
    //     </TouchableOpacity>
    //   </View>
    // </Container>