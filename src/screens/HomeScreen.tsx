import React, { Children } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import Container from '../components/globalComponents/Container';

type Props = {
  children: React.ReactNode;
};

export default function HomeScreen({ children }: Props) {
  return (
    <Container>
      <Image
        style={styles.bgLogo}
        resizeMode="cover"
        source={require('../assets/360logo.png')}
      />


      <View style={styles.dropDown}>

      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  bgLogo: {
    width: 200,
    height: 100,
  },
  dropDown:{
backgroundColor : '#2C2C2C',
borderRadius : 20,
width : '100%',
height : '30%',
justifyContent :'center',
alignItems : 'center'

  }
});
