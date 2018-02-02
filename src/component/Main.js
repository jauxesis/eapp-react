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
import Images from '../image/js/Images';
import { BackHandler } from "react-native";

import  Home  from '../component/home/Home';
import  Welcome  from '../component/welcome/Welcome';
import Starter from '../component/starter/Starter';

import { Router, Route, Schema, Stack, Scene } from 'react-native-router-flux';

// var {Router, routerReducer, Route, Container, Animations, Schema} = require('react-native-redux-router');

const Main = () =>(
        <Router>
          <Scene key="root">
            <Scene key="welcome" component={Welcome} title="Welcome"
            initial={true} hideNavBar={true} />
            <Scene key="starter" component={Starter} title="Welcome" hideNavBar={true} />
            <Scene key="home" component={Home} title="Home"/>
          </Scene>
        </Router>
)
export default Main;

// export class Main extends Component<{}> {
//   constructor(props){
//     super(props);
//     this.state = {
//       welcomeText:'Welcome To EMP.ORG',
//       navs:this.props.navigation
//     }
//
//     // const navigate  = this.props.navigation;
//   }
//
//   render() {
//     return (
//       <Router>
//         <Stack key="root">
//           <Scene key="Welcome" component={Welcome} title="Welcome"
//           initial={true}  />
//           <Scene key="home" component={Home}/>
//         </Stack>
//       </Router>
//     );
//   }
//
// }
