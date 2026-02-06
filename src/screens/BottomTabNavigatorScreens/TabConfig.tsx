export type TabConfigType = {
  [key: string]: { // This allows string indexing
    label: string;
    activeIcon: any;
    inactiveIcon: any;
  } | undefined;
};

export const TabConfig: TabConfigType = {
  MyTasks: {
    label: 'My Tasks',
    activeIcon: require('../../assets/images/bottomTabBar/myTasks.png'),
    inactiveIcon: require('../../assets/images/bottomTabBar/myTasks-dark.png'),
  },
  BoardView: {
    label: 'Board View',
    activeIcon: require('../../assets/images/bottomTabBar/boardView.png'),
    inactiveIcon: require('../../assets/images/bottomTabBar/boardView-dark.png'),
  },
  Attendance: {
    label: 'Attendance',
    activeIcon: require('../../assets/images/bottomTabBar/attendance.png'),
    inactiveIcon: require('../../assets/images/bottomTabBar/attendance-dark.png'),
  },
  Notifications: {
    label: 'Notifications',
    activeIcon: require('../../assets/images/bottomTabBar/notification.png'),
    inactiveIcon: require('../../assets/images/bottomTabBar/notification-dark.png'),
  },
};