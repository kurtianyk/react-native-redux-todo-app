import React from 'react';
import { Icon } from 'native-base';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import ToDoAll from '../containers/ToDoAll';

class AllToDo extends React.Component {
  render() {
    return (
      <ToDoAll show_new_todo = {true} screen = "All" />
    );
  }
}

class ActiveToDo extends React.Component {
  render() {
    return (
      <ToDoAll show_new_todo = {false} screen = "Active" />
    );
  }
}

class CompletedToDo extends React.Component {
  render() {
    return (
      <ToDoAll show_new_todo = {false} screen = "Completed" />
    );
  }
}

export default createBottomTabNavigator({
  All: { screen: AllToDo },
  Active: { screen: ActiveToDo },
  Completed: { screen: CompletedToDo },
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch(routeName) {
        case 'All':
          iconName = `list`;
          break;
        case 'Active':
          iconName = `unlock`;
          break;
        case 'Completed': 
          iconName = `checkmark`;
          break;
      }

      return <Icon name = { iconName } color = { 'red' } active = { true } />
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
  tabBarComponent: BottomTabBar,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
});