import React, { Children } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import Container from '../Components/Views/Container';
import { RootStackParamList } from '../navigation';
import {
  useNavigation,
  NavigationProp,
  NavigationContainerProps,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FontType } from '../Components/Constants/FontType';
import { Dimensions } from 'react-native';
import DateBox from '../Components/Buttons/DateBox';
import TaskBottomSheet from '../Components/Bottomsheet';
import Cards from '../Components/Views/TaskView/Cards';
const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 420;

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const cards = [1, 2, 3, 4, 5]; // Example array of cards
  return (
    <Container>
      <View style={styles.header}>
        <Image
          style={styles.bgLogo}
          resizeMode="contain"
          source={require('../assets/images/360logo.png')}
        />
        <View style={styles.nameDesignationView}>
          <View>
            <Text style={styles.name}>Sheikh Usama </Text>
          </View>
          <View>
            <Text style={styles.designation}>Lead UI/UX Designer</Text>
          </View>
        </View>
      </View>

      <View style={styles.checkInScheduleContainer}>
        <Text style={styles.time}>09 : 15 : 05</Text>
        <TouchableOpacity
          style={styles.checkInButton}
          onPress={() => navigation.navigate('Components')}
        >
          <Image
            style={styles.checkInArrow}
            source={require('../assets/images/checkIn.png')}
            resizeMode="cover"
          />
          <Text style={styles.checkinText}>Check-In</Text>
        </TouchableOpacity>
      </View>

      <DateBox />

      <TaskBottomSheet>
        {cards.map((item, index) => (
          <View key={item} style={styles.dummyCard}>
            <Cards
              title={`Task ${index + 1}`}
              description={`Description for Task ${index + 1}`}
            />
          </View>
        ))}
      </TaskBottomSheet>
    </Container>
  );
}

const styles = StyleSheet.create({
  bgLogo: {
    width: 130,
    height: 130,
  },
  dropDown: {
    backgroundColor: '#2C2C2C',
    borderRadius: 20,
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    // backgroundColor : 'red',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    paddingHorizontal: 20,
    height: 120,
  },
  nameDesignationView: {
    // backgroundColor : '#000',
    justifyContent: 'space-evenly',
    height: 80,
    // width: '100%',
    alignItems: 'flex-end',
    paddingVertical: 10,
  },
  name: {
    color: '#FFFF',
    fontSize: FontType.large,
    fontWeight: '500',
  },
  designation: {
    color: '#FFFF',
    fontSize: FontType.medium2,
    fontWeight: '200',
  },
  checkInScheduleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    // backgroundColor : '#cdcdcd',
    alignSelf: 'center',
  },
  time: {
    color: '#FFFF',
    fontSize: isSmallScreen ? 37 : FontType.titleBold,
    fontWeight: '800',
    fontFamily: 'ClashDisplay-Bold.otf',
  },
  checkInButton: {
    backgroundColor: '#E02723',
    borderRadius: 25,
    // width: 130,
    width: '34%',
    paddingHorizontal: isSmallScreen ? 8 : 10,
    paddingVertical: isSmallScreen ? 10 : 11,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  checkInArrow: {
    width: 21,
    height: 21,
  },
  checkinText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: FontType.medium2,
  },
  dummyCard: {
    backgroundColor: 'pink',
    flexGrow: 1,
  },
});
//https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap" rel="stylesheet
