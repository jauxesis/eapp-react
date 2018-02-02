import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,TouchableHighlight,TouchableNativeFeedback
} from 'react-native';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Images from '../../image/js/Images';

import { AsyncStorage } from 'react-native';

var ToastAndroid = require('NativeModules').ToastAndroid;

export default class Login extends Component<{}> {

  constructor(props){
    super(props);

    this.state = {
      email:''
    }
  }

  validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

  login(){
    let email = this.state.email;
    if( email == ""  || email == null ){
        ToastAndroid.show("Email is required",ToastAndroid.SHORT);
    }else if(!this.validateEmail(email)){
        ToastAndroid.show("Email is invalid",ToastAndroid.SHORT);
    }else{
        this.setEmail(email);
        AsyncStorage.getItem("EAPPEMP-EMAIL").then(
          (val)=>{
            ToastAndroid.show("Email is "+email+" "+val,ToastAndroid.SHORT);
          }
        );
        // ToastAndroid.show("Email is "+email+" "+this.getEmail(),ToastAndroid.SHORT);

    }
  }

  async setEmail(email){
    try{
      await AsyncStorage.setItem("EAPPEMP-EMAIL",email);
    }catch(e){
      console.log(e);
    }
  }

  async getEmail(){
    try {
      AsyncStorage.getItem("EAPPEMP-EMAIL").then(
        (val)=>{
            return val;
        }
      );
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
         backgroundColor="#182936"
         barStyle="light-content"
       />
        <Image style={{marginBottom:'5%',marginTop:'-5%'}} source={Images.Signinroute} />
        <View style={styles.loginview}>
          <TextInput
            style={{
              height: 50,
              borderColor: '#182936', borderWidth: 2,
              width:'75%',
              color:'#fff',
              borderRadius:100,
              marginTop:'2%',
              textAlign:'center',
              fontSize:15
            }}
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => this.setState({email:text})}
            placeholder="Your email" placeholderTextColor="gray"
            keyboardType="email-address"
            value={this.state.email}
          />
          <TouchableOpacity style={{
            alignItems:'center',
            marginBottom: 5,
            backgroundColor:'#1d77ce',
            borderRadius:100,
            width:200,
            marginTop:20,
            height:'16%',
            alignContent:'center',
            justifyContent:'center',
          }}
            onPress={
              ()=>{
                this.login();
              }
            }
          >
            <Text>Login</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row',marginTop:'2%'}}>
            <View style={{width:60,padding:8}}><Text style={{color:'#fff',textAlign:'center'}}>------</Text></View>
            <View style={{width:40,padding:8,backgroundColor:'#182936',borderRadius:200}}>
              <Text style={{
                color:'#fff',textAlign:'center',
                borderRadius:200
                }}>OR</Text>
            </View>
            <View style={{width:60,padding:8}}><Text style={{color:'#fff',textAlign:'center'}}>------</Text></View>
          </View>
          <View style={{
            alignContent:'center',flexDirection:'row',marginTop:'5%'
          }}>
            <View style={{right:'25%'}}>
              <TouchableOpacity>
                <Image source={Images.Social.facebook} />
              </TouchableOpacity>
            </View>
            <View style={{left:'25%'}}>
              <TouchableOpacity>
                <Image source={Images.Social.google} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
  loginview:{
    width:'94%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13202B',
    borderRadius:20,
    margin:10,
  }
});
