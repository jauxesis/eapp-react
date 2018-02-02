import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  AppRegistry,
  StatusBar,
  TouchableHighlight,TouchableOpacity,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import {Actions} from 'react-native-router-flux';
import Images from '../../image/js/Images';
import { NavigationActions } from 'react-navigation';

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#182936',
    height:'100%'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111e31',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#182936',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  btnswip:{
    flex:1,
    flexDirection: 'row',
  }
})

export default class Starter extends Component {

  constructor(props){
    super(props);
    this.state = {
      swiperIndex:0
    }
  }

  // for swiperIndex
  swipe(targetIndex) {
        const currentIndex = this.swiper.state.index;
        const offset = targetIndex- currentIndex;
        this.swiper.scrollBy(offset);
  }

  //go directly
  godirectly(){
    this.props.navigation.dispatch(NavigationActions.reset({
     index:0,
     actions:[
       NavigationActions.navigate({routeName:'home'})
     ]
    }));
  }

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} loop={false}
        onIndexChanged={
          (index)=>{
              this.setState({swiperIndex:index});
          }
        }
        ref={component => this.swiper = component}
      >

        <View style={styles.slide1}>
          <StatusBar
           backgroundColor="#182936"
           barStyle="light-content"
         />
          <View style={styles.btnswip}>
              <View style={{
                  width: '50%', height: 50,
                  // backgroundColor: 'powderblue',
                  padding:15
                }} >
                <TouchableOpacity onPress={
                  ()=>{
                    this.godirectly();
                  }
                }>
                  <Text style={{textAlign:'left',color:'#fff'}}>SKIP</Text>
                </TouchableOpacity>
              </View>
              <View style={{
                  width: '50%', height: 50,
                  // backgroundColor: 'steelblue',
                  padding:15
                }} >
                <TouchableOpacity onPress={
                  ()=>{
                    // this.setState({swiperIndex:1});
                    //   alert("ok1 "+this.state.swiperIndex);
                    this.swipe(1);
                  }
                }>
                <Text style={{textAlign:'right',color:'#fff'}}>NEXT</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View style={{flex:2,alignContent:'center',alignItems:'center',marginBottom:"25%"}}>
            <Image  style={{margin:'5%'}} source={Images.TeamPro} />
            <Text style={styles.text}>A Popular Team</Text>
          </View>
        </View>


        <View style={styles.slide2}>
          <View style={styles.btnswip}>
              <View style={{
                  width: '50%', height: 50,
                  // backgroundColor: 'powderblue',
                  padding:15
                }} >
                <TouchableOpacity onPress={
                  ()=>{
                    this.godirectly();
                  }
                }>
                  <Text style={{textAlign:'left',color:'#fff'}}>SKIP</Text>
                </TouchableOpacity>
              </View>
              <View style={{
                  width: '50%', height: 50,
                  // backgroundColor: 'steelblue',
                  padding:15
                }} >
                <TouchableOpacity onPress={
                  ()=>{
                    this.swipe(2);
                  }
                }>
                <Text style={{textAlign:'right',color:'#fff'}}>NEXT</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View style={{flex:2,alignContent:'center',alignItems:'center',marginBottom:"25%"}}>
            <Image style={{padding:'5%'}} source={Images.TeamReunion} />
            <Text style={styles.text}>Reunion Circle</Text>
          </View>
        </View>

        <View style={styles.slide3}>
          <View style={styles.btnswip}>
              <View style={{
                  width: '100%', height: 50,
                  // backgroundColor: 'steelblue',
                  padding:15
                }} >
                <TouchableOpacity onPress={
                  ()=>{
                    this.godirectly();
                  }
                }>
                  <Text style={{textAlign:'right',color:'#fff'}}>DONE</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View style={{flex:2,alignContent:'center',alignItems:'center',marginBottom:"25%"}}>
            <Image style={{padding:'5%'}} source={Images.TeamWork} />
            <Text style={styles.text}>A Team Work</Text>
          </View>
        </View>
      </Swiper>
    )
  }
}
