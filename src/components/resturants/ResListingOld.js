import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  AppRegistry,
  TouchableOpacity


} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon ,Left,Body, Title, Card, Item,Input, CardItem} from 'native-base';
import { StackNavigator } from 'react-navigation';
import {FooterCus} from '../footer/FooterCus';

export default class ResListingOld extends Component {
  constructor(props) {
    super(props)
  }


  render() {
   var {navigate} = this.props.navigation;
   return (
    <Container>
    <Header style={{backgroundColor: 'orange'}}>
    <Left>
    <Button transparent
     onPress={() => this.props.navigation.goBack()}>
    <Icon name='arrow-back' />
    </Button>
    </Left>
    <Body>
    <Title style={{justifyContent:'center'}} >Restaurants</Title>
    </Body>
    </Header>
    <Content>
    <Item>
    <Input placeholder='1234'/>
    <Icon active name='md-close' />
    </Item>
    <TouchableOpacity onPress={() => this.props.navigation.push('MenuLis')}>
    <Card style={{padding: 20}}>
    <View style={{flex:1, flexDirection: 'row'}}>
    <Image source={require('../Image/download.jpg')} style={{height: 80, width:80}} />


    <View
    style={{
     borderLeftColor: 'grey',
     borderLeftWidth: 1,
     margin: 7
   }} />


   <View style={{flex:3, flexDirection: 'column'}}>
   <Text style= {{fontSize:20,fontFamily: 'Arial', color: 'black' }}>Burger King</Text>
   <View style={{flexDirection: 'row', marginTop: 5}}>
   <Icon name="md-cart" style={{fontSize:20}} />
   <Text style= {{marginLeft: 8, fontSize: 15, color: 'black'}}>Burger King</Text>
   </View>

   <View style={{flexDirection: 'row', marginTop: 5}}>
   <Icon name="md-clock" style={{fontSize:20}} />
   <Text style= {{marginLeft: 8, fontSize: 15, color: 'black'}}>12:00 -22:00</Text>
   <View
   style={{
     borderLeftColor: 'grey',
     borderLeftWidth: 2,
     marginLeft: 5,
     marginTop: 1
   }} />

   <Text style={{color: 'green',paddingLeft: 8 }}>OPEN</Text>



   </View>
   </View>
   </View>

   </Card>
   </TouchableOpacity>
   </Content>
 <FooterCus propw={this.props}/>

   </Container>
   );
 }
}
