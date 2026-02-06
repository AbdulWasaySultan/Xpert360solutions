import React, { useMemo } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { TabConfig } from '../BottomTabNavigatorScreens/TabConfig';
import CreateTask from '../../Components/Buttons/CreateTaskButton/CreateTask';
import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Container from '../../Components/Views/Container';

const { width } = Dimensions.get('window');
const BAR_HEIGHT = 90;

// type TabButtonNavigationScreenProp =
//     NativeStackNavigationProp<TabButton>,
//     'TabButton'
// }

type TabButtonProps = {
  route: any;
  isFocused: boolean;
  onPress: () => void;
};

// Sub-component for individual Tabs
const TabButton = ({ route, isFocused, onPress }: TabButtonProps) => {
  // const navigation = useNavigation<TabButtonNavigationScreenProp>();
  const config = TabConfig[route.name];
  const navigation = useNavigation<any>();

  // Handle Standard Tabs
  return (
    <TouchableOpacity onPress={onPress} style={styles.tabItem}>
      <Image
        source={isFocused ? config?.activeIcon : config?.inactiveIcon}
        style={[styles.icon]}
      />
      <Text style={[styles.label, { color: isFocused ? '#FFFFFF' : '#676767' }]}>
        {config?.label || route.name}
      </Text>
    </TouchableOpacity>
  );
};

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  // Memoize the SVG path so it doesn't recalculate on every tap (prevents lag)
  // const navigation = useNavigation()
  const svgPath = useMemo(() => {
    const holeW = 160; // Wave ki total chorai (width)
    const holeH = 42; // Gehrai (Depth) - Isko 32 se 42 kar diya hai
    const flatness = 0.55; // Isse curve ki smoothness maintain rahegi

    const mid = width / 2;
    const start = mid - holeW / 2;
    const end = mid + holeW / 2;

    // C (Cubic Bezier) points ko control karke smooth gehrai banai hai
    return `
    M 0,0 
    L ${start},0 
    C ${start + holeW * flatness * 0.5},0 ${
      mid - holeW * flatness * 0.5
    },${holeH} ${mid},${holeH} 
    C ${mid + holeW * flatness * 0.5},${holeH} ${
      end - holeW * flatness * 0.5
    },0 ${end},0 
    L ${width},0 
    L ${width},${BAR_HEIGHT} 
    L 0,${BAR_HEIGHT} 
    Z
  `;
  }, [width]);

  const leftTabs = state.routes.slice(0, 2);
  const rightTabs = state.routes.slice(2, 4);

  const renderTab = (route: any, index: number, actualIndex: number) => (
    <TabButton
      key={route.key}
      route={route}
      isFocused={state.index === actualIndex}
      onPress={() => navigation.navigate(route.name)}
    />
  );

  return (
    <Container bgSource={require('../../assets/images/bgImages/bgImg.png')}>

    <View style={styles.container}>
      <Svg width={width} height={BAR_HEIGHT}>
        <Path fill="#1E1E1E" d={svgPath} />
      </Svg>

      <View style={styles.buttonWrapper}>
        {/* Left Packet/Wrapper */}
        <View style={styles.tabGroup}>
          {leftTabs.map((route: any, index: number) =>
            renderTab(route, index, index),
          )}
        </View>

        <View style={styles.plusButton}>
          <CreateTask onPress={() => navigation.navigate('CreateTaskScreen')} />
        </View>

        <View style={styles.tabGroup}>
          {rightTabs.map((route: any, index: number) =>
            renderTab(route, index, index + 2),
          )}
        </View>
      </View>
    </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { position: 'absolute', bottom: 0, width },
  buttonWrapper: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15, // Corners mein space ke liye
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 50,
  },
  icon: { width: 24, height: 24, marginBottom: 4 },
  label: { fontSize: 10 },
  plusButton: {
    // Center it physically
    // alignSelf: 'center',
    // Move it up so it sits perfectly in the shallow wave
    // Adjust 'bottom' based on how high you want the FAB to sit
    bottom: 55,
    zIndex: 10,
    position: 'absolute',
    left: (width - 73) / 2, // Center the button based on its width (73)
  },
  plusIcon: { color: 'white', fontSize: 32, marginBottom: 4 },
  tabGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 1,
    justifyContent: 'space-around', // Isse tabs corners ki taraf rahenge
    // marginRight : 20,
    // backgroundColor : 'cyan'
  },
});
