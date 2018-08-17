import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  
  
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Content, Footer, FooterTab, Button, Icon ,Left,Body, Title, Card, Item,Input, CardItem,ListItem,List,Right} from 'native-base';
import {FooterCus} from '../footer/FooterCus';
export default class MenuLis extends Component {
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
        >
      <Icon name='arrow-back'
       onPress={() => this.props.navigation.goBack()} />
      </Button>
      </Left>
      <Body>
      <Title style={{justifyContent:'center'}} >Restaurants</Title>
      </Body>
      </Header>
      <Content style={{backgroundColor: '#e8e5e5'}}>
      
      
      <View style={{flex:1, flexDirection: 'row',padding:20}}>
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

     <View>

     <List style={{backgroundColor: 'white'}}>
     <ListItem>
     <Text style ={{color: 'orange'}}>Menu</Text>
     </ListItem>
     
     <ListItem selected button onPress={() => this.props.navigation.push('MenuSub')}>
     <Left>
     <Text>Crispy & Tender Chicken</Text>
     </Left>
     <Right>
     <Text style={{flexDirection:'row'}}>6 <Icon name="arrow-forward" /></Text>
     
     </Right>
     </ListItem>
     </List>


     </View>
     
     
     </Content>
     <FooterCus propw={this.props}/>
     </Container>
     );
   }
 }