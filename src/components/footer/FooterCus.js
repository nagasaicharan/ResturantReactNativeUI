import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Content, Footer, FooterTab, Button, Icon ,Left,Body, Title, Card, Item,Input, CardItem,ListItem,List,Right,CheckBox} from 'native-base';

export class FooterCus extends Component {
   constructor(props) {
  super(props)
}


render() {
 var {navigate} = this.props.propw.navigation;
    return (
      
      <Footer style ={{backgroundColor: "white"}}>
   <FooterTab style ={{backgroundColor: "white"}}>


   <Button vertical
   onPress={() => navigate('ResListingOld')}>
   <Icon name="restaurant"  style={{color: 'black'}}/>
   <Text>Restaurants</Text>
   </Button>
   <Button vertical
   onPress={() => navigate('CartEmpty')}>
   <Icon name="md-cart" style={{color: 'black'}} />
   <Text>Cart</Text>
   </Button>
   <Button vertical 
   onPress={() => navigate('MenuLis')}>
   <Icon active name="ios-volume-up"  style={{color: 'black'}}/>
   <Text>Offers</Text>
   </Button>
   <Button vertical 
   onPress={() => navigate('Login')}>
   <Icon name="person" style={{color: 'black'}} />
   <Text>Account</Text>
   </Button>
   </FooterTab>
   </Footer>

      );
    }
  }
