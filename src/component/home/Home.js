import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Images from '../../image/js/Images';

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
        <Image  source={Images.Signinroute} />
        <Text style={styles.welcome}>
          Welcome to React Native Android It is a Test!
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
    backgroundColor: '#182936',
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
