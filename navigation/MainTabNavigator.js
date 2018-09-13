import React from 'react';
import { Container, Header, Title, Content, Body, Text, Icon } from 'native-base';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import AddToDoButton from '../components/AddToDoButton'
import AddToDo from '../components/AddToDo';

class AllToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      new_todo: false,
    }
  }

  saveToDoData = (todo) => {
    this.addNewToDo(show = false);
    console.log(`Todo is ${todo.title} ${todo.completed ? "completed!" : "not completed!"}`);
  }
  addNewToDo = (show) => {
    this.setState({
      new_todo: show
    });
  }

  render() {
    const { new_todo } = this.state;
    return (
      <Container>
        <Header><Body><Title>All</Title></Body></Header>
        <Content>
          {new_todo &&
            <AddToDo
              onPress = { this.saveToDoData }
              onCancel = { this.addNewToDo }
            />
          }
        </Content>
        <AddToDoButton onAddNewToDo = { this.addNewToDo } />
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