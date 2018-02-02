import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Home extends Component<{}> {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
       backgroundColor="#182936"
       barStyle="light-content"
     />
        <Text style={styles.welcome}>
          Welcome to React Native Android It is a Test!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#14b4be'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
