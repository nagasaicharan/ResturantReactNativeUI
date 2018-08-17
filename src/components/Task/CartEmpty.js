import React, { Component} from 'react';
import {
  Image,
  StyleSheet,
  ImageBackground,
  View,
  
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text ,Left,Body,Title,Form,Item,Label,Input,Card,CardItem} from 'native-base';
//import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { StackNavigator } from 'react-navigation';
export default class CartEmpty extends Component {
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
  <Title style={{justifyContent:'center'}}>Restaurants</Title>
  </Body>
  </Header>
  
  
    <Content>
          <View  style={{padding:15}}>
          <Text>No Items found in your basket.</Text>
          <Button block style={{backgroundColor:'green',padding: 5, marginTop:10,borderRadius:5,
    borderWidth: 1, borderColor: 'green'}}  small
    onPress={() => this.props.navigation.push('CartProduct')} >
      <Text style={{color: 'white', fontWeight: 'bold'}}>ADD ITEMS</Text>
      </Button>
          </View>    

    </Content>


  </Container>
  );
}
}

const styles = StyleSheet.create({
 TextStyle: {
   
  textAlign: 'center',
  fontSize: 15,
  textDecorationLine: 'underline',
  color : 'orange',
  margin : 10,
  fontFamily: 'Bahnschrift SemiBold'
},
TextMain : {
 textAlign: 'center',
 fontSize : 40,
 color: 'orange',
 marginBottom : 20
},
TextMainBlack : {
 textAlign: 'center',
 fontSize : 40,
 color: 'black',
 marginBottom : 20
}
});