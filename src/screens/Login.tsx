import {
  NavigationContainerProps,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { RootStackParamList } from '../navigation';
import Container from '../Components/Views/Container';
import { LoginSplashScreenProps } from '../navigation/index';
import { FontType } from '../Components/Constants/FontType';

type LoginNavigationScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export default function Login() {
  const [phoneNo, setPhoneNo] = useState("033526676627");
  const navigation = useNavigation<LoginNavigationScreenProps>();


  const navigate = () => {
    // if (!phoneNo) {
    //   Alert.alert('Missing Information', 'Please enter your phone number');
    // }
    // else{
    navigation.navigate('HomeScreen');
  // }
}
  return (
    <Container
      bgSource={require('../assets/images/splash/splashBgImg.png')}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.bglogo}
          source={require('../assets/images/360logo.png')}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          justifyContent: 'flex-end',
        }}
      >
        <View style={styles.dropDown}>
          <View style={styles.innerView}>
            <Text style={styles.greetings}>Join the Movement</Text>

            <View style={styles.phoneView}>
              <Text style={styles.phoneNoText}>Phone Number</Text>
              <TextInput
                style={styles.phoneInput}
                value={phoneNo}
                // placeholder={'enter your phone number'}
                // placeholderTextColor={'#FFFF'}
              />
            </View>
            <TouchableOpacity style={styles.slider}>
              <Text style={styles.sliderText}>Open New Doors!</Text>

              <TouchableOpacity style={styles.arrowButton} onPress={navigate}>
                <Image
                  style={styles.arrow}
                  source={require('../assets/images/login/arrow-right.png')}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#2c2c2c',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  logoContainer: {
    position: 'absolute',
    marginTop: 73,
    alignSelf: 'center',
  },
  bglogo: {
    width: 190,
    height: 140,
  },

  dropDown: {
    backgroundColor: '#2c2c2c',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    // width : '100%'
  },
  innerView: {
    // backgroundColor: '#000',
    width: '90%',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  greetings: {
    color: '#FFFFFF',
    fontSize: FontType.large,
    fontWeight: '600',
    marginTop: 10,
    // fontStyle : 'italic'
  },
  phoneView: {
    // backgroundColor : '#cdcdcd',
    marginVertical: 14,
    justifyContent: 'center',
    width: '100%',
  },
  phoneNoText: {
    color: '#FFFFFF',
    fontSize: FontType.medium2,
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 3,
    // fontStyle : 'italic'
  },
  phoneInput: {
    backgroundColor: '#1C1C1C',
    paddingHorizontal: 20,
    color: '#FFFF',
    width: '100%',
    height: 60,
    borderRadius: 16,
    marginVertical: 16,
    marginBottom: 20,
  },
  slider: {
    backgroundColor: '#E02723',
    width: '98%',
    height: 60,
    marginTop: 10,
    borderRadius: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sliderText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: FontType.medium2,
    paddingLeft: 20,
  },
  arrowButton: {
    width: 53,
    height: 53,
    marginRight: 7,
    backgroundColor: '#000',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: 27,
    height: 27,
    // marginRight : 10,
  },
});
