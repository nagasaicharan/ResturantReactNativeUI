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
export default class Login extends Component {
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
  
  
  <ImageBackground
  source={require('../Image/rest.jpg')}
  style={{flex:1, height: null, width: null,justifyContent: 'center'}}
  >

  <Text style={styles.TextMainBlack}>CITY <Text style={styles.TextMain}>DELIVERY</Text></Text>      
  <Card style= {{marginLeft: 20, marginRight: 20}}>
  
  
  <Form style= {{margin: 8}}>
  <Item floatingLabel>
  <Label>Username</Label>
  <Input />
  </Item>
  <Item floatingLabel>
  <Label>Password</Label>
  <Input />
  </Item>

  </Form>
  <Button block  style= {{margin: 8, backgroundColor: 'orange'}} >
  <Text>Login</Text>
  </Button>
  <Text style={styles.TextStyle}>Forget Password?</Text>

  <Text style={styles.TextStyle}

  onPress={() => this.props.navigation.navigate('SignUp')}>Don't Have an account yet? Sign up here</Text>
  </Card>

  

  </ImageBackground>


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