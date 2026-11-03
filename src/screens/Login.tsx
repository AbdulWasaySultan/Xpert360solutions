import {
  NavigationContainerProps,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { strictPakistanMobileSchema } from '../services/zod';

import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
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
  const [phoneNo, setPhoneNo] = useState('03302679795');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigation = useNavigation<LoginNavigationScreenProps>();

  const navigate = () => {
    try {
      setErrorMessage(null);

      const validationResult = strictPakistanMobileSchema.safeParse({
        mobileNumber: phoneNo,
      });

      if (!validationResult.success) {
        const errorMsg =
          validationResult.error.issues[0]?.message || 'Invalid phone number';
        setErrorMessage(errorMsg);
        Alert.alert('Invalid Phone Number', errorMsg);
        return;
      }
      console.log(
        'Validated Pakistani Number Format:',
        validationResult.data.mobileNumber,
      );
      navigation.navigate('HomeScreen');
    } catch (error) {
      setErrorMessage('An unexpected validation processing error occurred');
    }
  };

  const handlePhoneNumber = (text: string) => {
    if (errorMessage) setErrorMessage(null);
    setPhoneNo(text);
  };

  return (
    <Container
      bgSource={require('../assets/images/splash/splashBgImg.png')}
      style={styles.container}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          bounces={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.logoContainer}>
            <Image
              style={styles.bglogo}
              source={require('../assets/images/360logo.png')}
              resizeMode="contain"
            />
          </View>

          <View style={styles.bottomFlexFiller} />

          <View style={styles.dropDown}>
            <View style={styles.innerView}>
              <Text style={styles.greetings}>Join the Movement</Text>

              <View style={styles.phoneView}>
                <Text style={styles.phoneNoText}>Phone Number</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[
                      styles.phoneInput,
                      errorMessage
                        ? { borderColor: '#E02723', borderWidth: 1 }
                        : null,
                    ]}
                    value={phoneNo}
                    onChangeText={handlePhoneNumber}
                    keyboardType="phone-pad"
                    textContentType="telephoneNumber"
                    placeholder="03305679865"
                    returnKeyType="done"
                    placeholderTextColor="#777777"
                    editable={true}
                    autoFocus={false}
                  />
                  {phoneNo.length > 0 && (
                    <TouchableOpacity
                      style={styles.clearButton}
                      onPress={() => setPhoneNo('')}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.clearButtonText}>✕</Text>
                    </TouchableOpacity>
                  )}
                </View>
                {errorMessage && (
                  <Text style={styles.errorText}>{errorMessage}</Text>
                )}
              </View>

              <TouchableOpacity
                style={styles.slider}
                activeOpacity={0.8}
                onPress={navigate}
              >
                <Text style={styles.sliderText}>Open New Doors!</Text>

                <View style={styles.arrowButton}>
                  <Image
                    style={styles.arrow}
                    source={require('../assets/images/login/arrow-right.png')}
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  logoContainer: {
    alignSelf: 'center',
    marginTop: 73,
    marginBottom: 40,
  },
  bglogo: {
    width: 190,
    height: 140,
  },
  bottomFlexFiller: {
    flex: 1,
  },
  dropDown: {
    backgroundColor: '#2c2c2c',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    width: '100%',
  },
  innerView: {
    width: '90%',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 34,
  },
  greetings: {
    color: '#FFFFFF',
    fontSize: FontType.large,
    fontWeight: '600',
    marginTop: 10,
  },
  phoneView: {
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
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  phoneInput: {
    backgroundColor: '#1C1C1C',
    paddingHorizontal: 20,
    paddingRight: 50,
    color: '#FFFF',
    width: '100%',
    height: 60,
    borderRadius: 16,
  },
  clearButton: {
    position: 'absolute',
    right: 16,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#888888',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -1,
  },
  errorText: {
    color: '#E02723',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginLeft: 4,
    marginTop: 4,
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
  },
});
