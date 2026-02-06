import React from 'react';
import { View, StyleSheet, Touchable, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import StatusBadge from '../Components/Buttons/TaskButtons/StatusBadge';
import TaskProgressStatus from '../Components/Buttons/TaskProgressStatus/TaskProgressStatus';
import CreateTask from '../Components/Buttons/CreateTaskButton/CreateTask';
import FilterButton from '../Components/Buttons/FilterButton/FilterButton';
import RecordButton from '../Components/Buttons/RecordButton/RecordButton';
import Discard from '../Components/Buttons/DiscardButton/Discard';
import RedButton from '../Components/Buttons/RedButton/RedButton';
import Container from '../Components/Views/Container/index'
import { RootStackParamList } from '../navigation';

type ComponentsNavigationScreenProps =
  NativeStackNavigationProp<RootStackParamList, 'Components'>;
export default function Components() {

    const navigation = useNavigation<ComponentsNavigationScreenProps>()

//   const navigation = useNavigation<LoginNavigationScreenProps>();

    return (
    <Container style={[styles.container]}>
      <Discard />
      <StatusBadge type="priority" value="High"/>
          <StatusBadge type="priority" value='Low' />
      <StatusBadge type="dueStatus" value='New Task' />
            <StatusBadge type="dueStatus" value='Due Today'/>


      <StatusBadge type="dueStatus" value='Over Due' />


      <TaskProgressStatus status="On Hold" />
      <TaskProgressStatus status="In progress" />

      {/* <TaskDueStatusButton dueStatus="New Task" /> */}
      <CreateTask/>
      <FilterButton />
      <RecordButton />
      <RedButton />
      <TouchableOpacity onPress={() => navigation.navigate('Cards')} style={{backgroundColor : '#cdcdcd', width : 100, height : 50, justifyContent : 'center', alignItems : 'center', borderRadius : 10}}>
        <Text>hjbubububu</Text>
        </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181815',
paddingVertical : 100,
},
});
