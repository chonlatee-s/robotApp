import * as React from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home'
import Policies from './Policies';
import Testing from './Testing';
import Result from './Result';
import AboutMe from './AboutMe';
import ProcessApp from './ProcessApp';

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      SarabunMedium: require('./assets/fonts/Sarabun-Medium.ttf'),
      SarabunRegular: require('./assets/fonts/Sarabun-Regular.ttf'),
      SarabunLight: require('./assets/fonts/Sarabun-Light.ttf')
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }
  render() {
    const RootStack = createStackNavigator(
      {
        นายโรบอท: Home,
        ข้อตกลงการใช้งาน: Policies,
        ทำข้อสอบ: Testing,
        เฉลยข้อสอบ: Result,
        ผู้จัดทำ: AboutMe
      },
      {
        initialRouteName: 'นายโรบอท',
      }
    );
    
    const AppContainer = createAppContainer(RootStack);

    if (this.state.fontsLoaded) {
      return <AppContainer />;
    } else {
      return <ProcessApp/>;
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff'
  }
});
