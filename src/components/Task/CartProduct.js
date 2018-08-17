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
        >
      <Icon name='arrow-back' />
      </Button>
      </Left>
      <Body>
      <Title style={{justifyContent:'center'}} >Restaurants</Title>
      </Body>
      </Header>
      <Content style={{backgroundColor: '#fff'}}>
      <View style={{padding:8, flexDirection: 'row' , justifyContent:'space-between', margin:9}}>
      <Text style={{color:'black',fontSize: 18}}>Your Order</Text>
      <Text style={{color:'green'}}>Edit Order</Text>
      </View>
      <View
      style={{
       borderBottomColor: 'grey',
       borderBottomWidth: 1,
       marginLeft: 15,
       marginRight: 15,

     }} />
     <View style={{padding:8, flexDirection: 'row',margin: 8}}>
     <Text style={{color:'green',flex:1,fontSize:15}}>1x</Text>
     <View style={{flex:12,flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
     <Text style={{color:'black',textAlign:'left',fontSize:18}}>Chicken Royale</Text>
     <Text style={{textAlign:'left'}}>Chicken Royale</Text>
     <Text style={{textAlign:'left'}}>Chicken Royale</Text>
     </View>
     <Text style={{color:'black',flex:2,textAlign:'right'}}>&pound; 4.39</Text>
     </View>

       <View
      style={{
       borderBottomColor: 'grey',
       borderBottomWidth: 1,
       marginLeft: 15,
       marginRight: 15,

     }} />
      
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25,marginLeft:14,marginRight:14}}>
      <Text style={{color:'black'}}>Sub Total</Text>
       <Text style={{color:'black'}}>&pound; 10.98</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:14,marginLeft:14,marginRight:14}}>
      <Text style={{color:'black'}}>Service Fee</Text>
       <Text style={{color:'black'}}>&pound; 1.10</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:14,marginLeft:14,marginRight:14}}>
      <Text style={{color:'black'}}>Surcharge for orders under &pound; 15</Text>
       <Text style={{color:'black'}}>&pound; 1.50</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:14,marginLeft:14,marginRight:14}}>
      <Text style={{color:'black'}}>Delivery Fee</Text>
       <Text style={{color:'black'}}>&pound; 2.99</Text>
      </View>

      <View
      style={{
       borderBottomColor: 'grey',
       borderBottomWidth: 1,
       marginLeft: 15,
       marginRight: 15,
       marginTop: 10,
       marginBottom: 10

     }} />
     <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:14,marginRight:14,marginBottom:15}}>
      <Text style={{color:'black'}}>Promo Code</Text>
       <Text style={{color:'green'}}>Add</Text>
      </View>


      <Text style={{color:'black',marginLeft:14}}>Rider Tip</Text>
      <View style={{margin:9}}>
      <Card style={{height:35, flexDirection: 'row',borderRadius:2}}>

      <View style={{flexDirection: 'row', flex:1,justifyContent: 'space-between'}}>
      <Button transparent small>
      <Icon name='remove-circle' style={{color: 'green'}} />
      </Button>
      <Text style={{fontSize: 20 }}>&pound; 0.00</Text>
      <Button transparent small iconRight style={{alignContent:'flex-end'}}>
      <Icon name='add-circle' style={{color: 'green'}} />
      </Button>
      </View>
      </Card>
      </View>
     
     </Content>
     <Footer style={{height: 100, backgroundColor: 'white'}}>
     <View style={{flexDirection: 'column',marginTop: 4}}>
     <Text style={{color:'black',marginLeft: 21}}>Order Total</Text>
     <Text style={{color:'black',fontSize: 26,marginLeft: 12}}>&pound; 16.57</Text>
     <Button style={{backgroundColor:'green',padding:20, marginTop:8,borderRadius:5,
    borderWidth: 1, borderColor: 'green'}}  small  onPress={() => this.props.navigation.push('CartProduct')}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>CHECK OUT</Text>
      </Button>

     </View>
     </Footer>
     </Container>
     );
   }
 }