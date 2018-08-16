  import React, { Component} from 'react';
   import {
    Image,
  StyleSheet,
    ImageBackground,
    View,
    AppRegistry
   
  } from 'react-native';

  import MainScreenNavigator from './route';

  export default class SignUp1 extends Component {
     


     render() {
      return (
         <MainScreenNavigator/>
      );
    }
  }

  AppRegistry.registerComponent('resturant', () =>SignUp1);