import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Container from '../Container';
import { FontType } from '../../Constants/FontType';
import StatusBadge from '../../Buttons/TaskButtons/StatusBadge';
import TaskProgressStatus from '../../Buttons/TaskProgressStatus/TaskProgressStatus';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation';

type CustomTabBarNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CustomTabBar'
>;

interface CardProps {
  title: string;
  description: string;
}

export default function Cards({ title, description }: CardProps) {
  const navigation = useNavigation<CustomTabBarNavigationProp>();
  const tasks = [
    { id: 1, task: 'Attendance App' },
    { id: 1, task: 'task2' },
    { id: 1, task: 'task3' },
    { id: 1, task: 'task4' },
    { id: 1, task: 'task5' },
    { id: 1, task: 'task6' },
  ];

  return (
    // <ScrollView style={{backgroundColor : '#f27122'}}>
    <View style={styles.cardsContainer}>
      <View style={styles.card}>
        <View style={styles.taskButtonsView}>
          <View style={{ flexDirection: 'row' }}>
            <StatusBadge type="priority" value="High" />
            <TaskProgressStatus status="In progress" />
          </View>

          <View>
            <StatusBadge type="dueStatus" value="Over Due" />
          </View>
        </View>
        <View style={styles.taskInfoView}>
          <Text style={styles.taskName}>{tasks[0].task}</Text>
          <Text style={styles.task} numberOfLines={1}>
            The Attendace App is a smart workplace solution that automates
          </Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.users}
              resizeMode="cover"
              source={require('../../../assets/images/user1.png')}
            />
            <Image
              style={styles.users}
              resizeMode="cover"
              source={require('../../../assets/images/user1.png')}
            />
            <Image
              style={styles.users}
              resizeMode="cover"
              source={require('../../../assets/images/user1.png')}
            />
            <Image
              style={styles.users}
              resizeMode="cover"
              source={require('../../../assets/images/user1.png')}
            />
          </View>

          <View style={styles.taskActions}>
            <TouchableOpacity
              style={styles.commentBox}
              onPress={() => navigation.navigate('CustomTabBar')}
            >
              <Image
                source={require('../../../assets/images/comment.png')}
                style={styles.icon2}
                resizeMode="contain"
              />
              <Text style={styles.commentText}>10</Text>
            </TouchableOpacity>

            <View style={styles.dateBox}>
              <Image
                source={require('../../../assets/images/dateReminder.png')}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.commentText}>5 Jan</Text>
            </View>

            <View style={styles.attachmentBox}>
              <Image
                source={require('../../../assets/images/pin.png')}
                style={styles.icon3}
                resizeMode="contain"
              />
              <Text style={styles.commentText}>2 Files</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    width: '85%',
    backgroundColor: 'pink',
    // justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // flexGrow : 1,
    // flex: 1,
  },
  card: {
    borderRadius: 20,
    // backgroundColor: '#2C2C2C',
    backgroundColor: 'yellow',

    width: '100%',
    // height: 200,
    flexGrow: 0.1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 12,
    // paddingHorizontal: 16,
  },
  taskButtonsView: {
    // backgroundColor: 'blue',

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },
  taskInfoView: {
    backgroundColor: 'grey',
    alignItems: 'flex-start',
    marginVertical: 10,
    paddingVertical: 8,
    width: '100%', // 👈 Sets the width to 100% of the parent card
    alignSelf: 'center', // 👈 Centers it horizontally within the card
  },
  taskName: {
    fontSize: FontType.large2,
    fontWeight: '600',
    color: '#FFFF',
  },
  task: {
    fontSize: FontType.medium,
    fontWeight: '300',
    color: '#FFFFFF80',
    flexWrap: 'wrap-reverse',
  },
  bottomContainer: {
    // backgroundColor: 'yellow',
    // marginTop : -10,

    justifyContent: 'space-between',
    alignItems: 'center',
    width: '98%',
    marginHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#FFFFFF10',
    flexDirection: 'row',
    marginBottom: -10,
  },
  imageContainer: {
    // backgroundColor: 'pink',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 40,
    marginTop: 4,
    // width: 90,
  },
  users: {
    borderRadius: 16,
    width: 24,
    height: 24,
    borderColor: '#FFFF',
    borderWidth: 1,
    marginLeft: -12, // 👈 50% overlap
  },
  taskActions: {
    // backgroundColor: '#cdcdcd',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 11,
    marginRight: 4,
  },
  icon: {
    width: 20.5,
    height: 20.5,
  },
  icon2: {
    width: 18,
    height: 18,
  },
  icon3: {
    width: 20,
    height: 20,
  },

  commentBox: {
    // backgroundColor: 'red',

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 5,
    marginTop: 2,
  },
  commentText: {
    color: '#FFFFFF56',
    fontSize: 15,
    fontWeight: '600',
  },
  dateBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor : 'red',
    gap: 5,
    marginTop: 0.5,
  },
  attachmentBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 3,
    // backgroundColor: 'red',
    // width : 70,
    // height : 30
  },
});

// taskContainer: {
//   backgroundColor: '#2C2C2C',
//   width: '90%',
//   borderRadius: 15,
// },
// yourTask: {
//   color: '#FFFF',
//   fontSize: FontType.medium2,
//   fontWeight: '500',
// },
