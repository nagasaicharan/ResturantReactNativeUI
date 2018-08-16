import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  ImageBackground,
  View,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Content, Footer, FooterTab, Button, Icon ,Left,Body, Title, Card, Item,Input, CardItem,ListItem,List,Right,CheckBox} from 'native-base';

export default class CardProduct extends Component {
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
      <Content style={{backgroundColor: '#e8e5e5'}}>


      <View style={{flexDirection:'column'}}>
      <Image source={require('../Image/whopper.jpg')} resizeMode='stretch' style={{height: 200,  width: '100%'}} />

      <View style={{ backgroundColor: 'white'}}>

      <Text style={{color: 'black',fontSize: 14 ,padding: 5}}>Our crowning glory the Chicken Royale is everything a great sandwich should be. Tasty chicken wrapped in a special crisp coating, topped with iceberg lettuce, creamy mayonnaise and crowned with a toasted sesame seed bun.</Text>
      </View>
      </View>




      <View>

      <List style={{back
        groundColor: 'white'}}>
      <ListItem>
      <Text style ={{color: 'orange'}}>Recommended Add-ons</Text>
      </ListItem>
      <ListItem>
      <CheckBox  color='orange' />
      <Body>
      <Text style={{marginLeft: 6, fontSize: 13}}>ADD CHEESE</Text>

      </Body>
      </ListItem>
      <ListItem>
      <CheckBox  color='orange' checked={true} />
      <Body>
      <Text style={{marginLeft: 6, fontSize: 13}}>ADD BACON</Text>

      </Body>
      </ListItem>

      </List>


      </View>
      
      
      </Content>

      <Footer style ={{backgroundColor: "white", height: 130}}>
      <View style={{flex:1 ,flexDirection: 'column'}}>


      <Text style={{textAlign: 'left', marginLeft: 10}}>Quantity</Text>
      <View style={{paddingBottom: 10,paddingLeft:10,paddingRight: 10}}>

      <Card style={{height:35, flexDirection: 'row',elevation:1}}>

      <View style={{flexDirection: 'row', flex:1,justifyContent: 'space-between'}}>
      <Button transparent small>
      <Icon name='remove-circle' style={{color: 'green'}} />
      </Button>
      <Text style={{fontSize: 20 }}>1</Text>
      <Button transparent small iconRight style={{alignContent:'flex-end'}}>
      <Icon name='add-circle' style={{color: 'green'}} />
      </Button>
      </View> 

      </Card>

      <View style={{flexDirection: 'row',justifyContent: 'space-between',marginLeft:30,marginTop: 5, marginRight: 30}}>

      <View>
      <Text style={{fontSize: 20,color: 'black' }}>Item Total</Text>
      <Text style={{fontSize: 20 ,color: 'black',fontWeight: 'bold', marginLeft: 5 }}>&pound; 3.99</Text>
      </View>
      <Button style={{backgroundColor:'green',padding: 5, marginTop:8,borderRadius:5,
    borderWidth: 1, borderColor: 'green'}}  small  onPress={() => this.props.navigation.push('CartProduct')}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>ADD TO CART</Text>
      </Button>



      </View>
      </View>
      </View>
      </Footer>

      </Container>
      );
    }
  }