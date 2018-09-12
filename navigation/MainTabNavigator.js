import React from 'react';
import { Container, Header, Title, Content, Body, Text, Icon } from 'native-base';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

class AllToDo extends React.Component {
  render() {
    return (
      <Container>
        <Header><Body><Title>All</Title></Body></Header>
        <Content><Text>All Section</Text></Content>
      </Container>
    );
  }
}

class ActiveToDo extends React.Component {
  render() {
    return (
      <Container>
        <Header><Body><Title>Active</Title></Body></Header>
        <Content><Text>Active Section</Text></Content>
      </Container>
    );
  }
}

class CompletedToDo extends React.Component {
  render() {
    return (
      <Container>
        <Header><Body><Title>Completed</Title></Body></Header>
        <Content><Text>Completed Section</Text></Content>
      </Container>
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