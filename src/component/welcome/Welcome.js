import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';
import Images from '../../image/js/Images';

import { Actions } from 'react-native-router-flux';
import { NavigationActions } from 'react-navigation';

export default class Welcome extends Component {
  constructor(props){
    super(props);
    this.state = {
      welcomeText:'Welcome To EMP.ORG'
    }

    setTimeout(()=>{
      this.props.navigation.dispatch(NavigationActions.reset({
       index:0,
       actions:[
         NavigationActions.navigate({routeName:'starter'})
       ]
      }));
    },1500);
    // console.log("this.props.navigation",this.props.navigation)
    //
    //underlayColor="#ff5062"background={TouchableNativeFeedback.Ripple('#F5FCFF',true)}
  }
  render() {

    return (
      <View style={styles.container}>
        <StatusBar
         backgroundColor="#182936"
         barStyle="light-content"
       />
       <Image source={Images.teamHome} />
        <Text style={styles.welcometext}>{this.state.welcomeText}
        </Text>
        <TouchableOpacity
          onPress={
            ()=>{
              //Actions.home({data:"From Welcome"});
               this.props.navigation.dispatch(NavigationActions.reset({
                index:0,
                actions:[
                  NavigationActions.navigate({routeName:'starter'})
                ]
               }));
            }
          }
          style={styles.welcomeletmein}
        >
          <Text style={styles.welcomeletmeintext}>LET ME IN</Text>
          <Text>{this.state.navs}</Text>
        </TouchableOpacity>
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
    width:'100%'
  },
  welcometext: {
    fontSize: 20,
    margin: 15,
    color: '#14b4be'
  },
  welcomeletmein: {
    alignItems:'center',
    marginBottom: 5,
    backgroundColor:'#ff5062',
    borderRadius:100,
    width:200,
    marginTop:20,
    height:'8%',
    alignContent:'center',
    justifyContent:'center',
    // shadowColor:'white',
    // shadowOpacity:1,
    // shadowRadius:100,
    // shadowOffset:{width: 20,height: 15}
  },
  welcomeletmeintext:{
    alignItems:'center',
    textAlign:'center',
    textAlignVertical:"center",
    color:'#fff',
    fontSize:20,
  }
});
