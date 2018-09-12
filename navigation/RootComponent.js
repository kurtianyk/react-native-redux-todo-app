import React from 'react';
import TabNavigator from './MainTabNavigator';
import { Font, AppLoading } from 'expo'; // requirement for using native-base in expo

export default class RootComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoading: true, // to load font in expo
    };
  }

  // required to load native-base font in expo
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({fontLoading: false});
  }

  render() {
    if (this.state.fontLoading){
      return (
        <AppLoading />
      );
    }else{
      return (
          <TabNavigator />
      );
    }
  }


}