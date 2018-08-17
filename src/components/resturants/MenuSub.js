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
import {FooterCus} from '../footer/FooterCus'
export default class MenuSub extends Component {
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
      
      
      
      <View>

      <List style={{backgroundColor: 'white'}}>
      
      
      <ListItem selected button onPress={() => this.props.navigation.push('FooterCus1')}>
      <View style={{flex:1, flexDirection: 'row'}}>
      <Image source={require('../Image/download.jpg')} style={{height: 40 , width:90}} />
      <View style={{flex:3 , flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black'}}> Chicken Royale</Text>
      <Text style={{flex: 2, textAlign: 'right', color: 'black'}}>&pound; 3.99</Text> 
      <Icon name='md-arrow-forward' style= {{fontSize: 17, marginLeft: 5}}/>
      </View>
      <View style={{flexDirection: 'column'}}>
      <Text   numberOfLines={1} ellipsizeMode ={'tail'} style={{paddingTop: 7}}>Our crowning glory the Chicken Royale is everything a great sandwich should be. Tasty chicken wrapped in a special crisp coating, topped with iceberg lettuce, creamy mayonnaise and crowned with a toasted sesame seed bun.</Text>
      
      </View>
      </View>

      

      </View>

      </ListItem>
      <ListItem  onPress={() => this.props.navigation.push('AddToCart')}>
      <View style={{flex:1, flexDirection: 'row'}}>
      <Image source={require('../Image/download.jpg')} style={{height: 40 , width:90}} />
      <View style={{flex:3 , flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black'}}> Chicken Royale</Text>
      <Text style={{flex: 2, textAlign: 'right', color: 'black'}}>&pound; 3.99</Text> 
      <Icon name='md-arrow-forward' style= {{fontSize: 17, marginLeft: 5}}/>
      </View>
      <View style={{flexDirection: 'column'}}>
      <Text   numberOfLines={1} ellipsizeMode ={'tail'} style={{paddingTop: 7}}>Our crowning glory the Chicken Royale is everything a great sandwich should be. Tasty chicken wrapped in a special crisp coating, topped with iceberg lettuce, creamy mayonnaise and crowned with a toasted sesame seed bun.</Text>
      
      </View>
      </View>

      

      </View>

      </ListItem>
      <ListItem selected>
      <View style={{flex:1, flexDirection: 'row'}}>
      <Image source={require('../Image/download.jpg')} style={{height: 40 , width:90}} />
      <View style={{flex:3 , flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black'}}> Chicken Royale</Text>
      <Text style={{flex: 2, textAlign: 'right', color: 'black'}}>&pound; 3.99</Text> 
      <Icon name='md-arrow-forward' style= {{fontSize: 17, marginLeft: 5}}/>
      </View>
      <View style={{flexDirection: 'column'}}>
      <Text   numberOfLines={1} ellipsizeMode ={'tail'} style={{paddingTop: 7}}>Our crowning glory the Chicken Royale is everything a great sandwich should be. Tasty chicken wrapped in a special crisp coating, topped with iceberg lettuce, creamy mayonnaise and crowned with a toasted sesame seed bun.</Text>
      
      </View>
      </View>

      

      </View>

      </ListItem>
      <ListItem selected>
      <View style={{flex:1, flexDirection: 'row'}}>
      <Image source={require('../Image/download.jpg')} style={{height: 40 , width:90}} />
      <View style={{flex:3 , flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black'}}> Chicken Royale</Text>
      <Text style={{flex: 2, textAlign: 'right', color: 'black'}}>&pound; 3.99</Text> 
      <Icon name='md-arrow-forward' style= {{fontSize: 17, marginLeft: 5}}/>
      </View>
      <View style={{flexDirection: 'column'}}>
      <Text   numberOfLines={1} ellipsizeMode ={'tail'} style={{paddingTop: 7}}>Our crowning glory the Chicken Royale is everything a great sandwich should be. Tasty chicken wrapped in a special crisp coating, topped with iceberg lettuce, creamy mayonnaise and crowned with a toasted sesame seed bun.</Text>
      
      </View>
      </View>

      

      </View>

      </ListItem>
      <ListItem selected>
      <View style={{flex:1, flexDirection: 'row'}}>
      <Image source={require('../Image/download.jpg')} style={{height: 40 , width:90}} />
      <View style={{flex:3 , flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black'}}> Chicken Royale</Text>
      <Text style={{flex: 2, textAlign: 'right', color: 'black'}}>&pound; 3.99</Text> 
      <Icon name='md-arrow-forward' style= {{fontSize: 17, marginLeft: 5}}/>
      </View>
      <View style={{flexDirection: 'column'}}>
      <Text   numberOfLines={1} ellipsizeMode ={'tail'} style={{paddingTop: 7}}>Our crowning glory the Chicken Royale is everything a great sandwich should be. Tasty chicken wrapped in a special crisp coating, topped with iceberg lettuce, creamy mayonnaise and crowned with a toasted sesame seed bun.</Text>
      
      </View>
      </View>

      

      </View>

      </ListItem>
      <ListItem selected>
      <View style={{flex:1, flexDirection: 'row'}}>
      <Image source={require('../Image/download.jpg')} style={{height: 40 , width:90}} />
      <View style={{flex:3 , flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black'}}> Chicken Royale</Text>
      <Text style={{flex: 2, textAlign: 'right', color: 'black'}}>&pound; 3.99</Text> 
      <Icon name='md-arrow-forward' style= {{fontSize: 17, marginLeft: 5}}/>
      </View>
      <View style={{flexDirection: 'column'}}>
      <Text   numberOfLines={1} ellipsizeMode ={'tail'} style={{paddingTop: 7}}>Our crowning glory the Chicken Royale is everything a great sandwich should be. Tasty chicken wrapped in a special crisp coating, topped with iceberg lettuce, creamy mayonnaise and crowned with a toasted sesame seed bun.</Text>
      
      </View>
      </View>

      

      </View>

      </ListItem>
      

<ListItem>
      <View style={{flex:1, flexDirection: 'row'}}>
      <Image source={require('../Image/download.jpg')} style={{height: 40 , width:90}} />
      <View style={{flex:3 , flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black'}}> Chicken Royale</Text>
      <Text style={{flex: 2, textAlign: 'right', color: 'black'}}>&pound; 3.99</Text> 
      <Icon name='md-arrow-forward' style= {{fontSize: 17, marginLeft: 5}}/>
      </View>
      <View style={{flexDirection: 'column'}}>
      <Text   numberOfLines={1} ellipsizeMode ={'tail'} style={{paddingTop: 7}}>Our crowning glory the Chicken Royale is everything a great sandwich should be. Tasty chicken wrapped in a special crisp coating, topped with iceberg lettuce, creamy mayonnaise and crowned with a toasted sesame seed bun.</Text>
      
      </View>
      </View>

      

      </View>

      </ListItem>


      <ListItem>
      <View style={{flex:1, flexDirection: 'row'}}>
      <Image source={require('../Image/download.jpg')} style={{height: 40 , width:90}} />
      <View style={{flex:3 , flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black'}}> Chicken Royale</Text>
      <Text style={{flex: 2, textAlign: 'right', color: 'black'}}>&pound; 3.99</Text> 
      <Icon name='md-arrow-forward' style= {{fontSize: 17, marginLeft: 5}}/>
      </View>
      <View style={{flexDirection: 'column'}}>
      <Text   numberOfLines={1} ellipsizeMode ={'tail'} style={{paddingTop: 7}}>Our crowning glory the Chicken Royale is everything a great sandwich should be. Tasty chicken wrapped in a special crisp coating, topped with iceberg lettuce, creamy mayonnaise and crowned with a toasted sesame seed bun.</Text>
      
      </View>
      </View>

      

      </View>

      </ListItem>

      <ListItem>
      <View style={{flex:1, flexDirection: 'row'}}>
      <Image source={require('../Image/download.jpg')} style={{height: 40 , width:90}} />
      <View style={{flex:3 , flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black'}}> Chicken Royale</Text>
      <Text style={{flex: 2, textAlign: 'right', color: 'black'}}>&pound; 3.99</Text> 
      <Icon name='md-arrow-forward' style= {{fontSize: 17, marginLeft: 5}}/>
      </View>
      <View style={{flexDirection: 'column'}}>
      <Text   numberOfLines={1} ellipsizeMode ={'tail'} style={{paddingTop: 7}}>Our crowning glory the Chicken Royale is everything a great sandwich should be. Tasty chicken wrapped in a special crisp coating, topped with iceberg lettuce, creamy mayonnaise and crowned with a toasted sesame seed bun.</Text>
      
      </View>
      </View>

      

      </View>

      </ListItem>

      <ListItem>
      <View style={{flex:1, flexDirection: 'row'}}>
      <Image source={require('../Image/download.jpg')} style={{height: 40 , width:90}} />
      <View style={{flex:3 , flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black'}}> Chicken Royale</Text>
      <Text style={{flex: 2, textAlign: 'right', color: 'black'}}>&pound; 3.99</Text> 
      <Icon name='md-arrow-forward' style= {{fontSize: 17, marginLeft: 5}}/>
      </View>
      <View style={{flexDirection: 'column'}}>
      <Text   numberOfLines={1} ellipsizeMode ={'tail'} style={{paddingTop: 7}}>Our crowning glory the Chicken Royale is everything a great sandwich should be. Tasty chicken wrapped in a special crisp coating, topped with iceberg lettuce, creamy mayonnaise and crowned with a toasted sesame seed bun.</Text>
      
      </View>
      </View>

      

      </View>

      </ListItem>

      <ListItem>
      <View style={{flex:1, flexDirection: 'row'}}>
      <Image source={require('../Image/download.jpg')} style={{height: 40 , width:90}} />
      <View style={{flex:3 , flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black'}}> Chicken Royale</Text>
      <Text style={{flex: 2, textAlign: 'right', color: 'black'}}>&pound; 3.99</Text> 
      <Icon name='md-arrow-forward' style= {{fontSize: 17, marginLeft: 5}}/>
      </View>
      <View style={{flexDirection: 'column'}}>
      <Text   numberOfLines={1} ellipsizeMode ={'tail'} style={{paddingTop: 7}}>Our crowning glory the Chicken Royale is everything a great sandwich should be. Tasty chicken wrapped in a special crisp coating, topped with iceberg lettuce, creamy mayonnaise and crowned with a toasted sesame seed bun.</Text>
      
      </View>
      </View>

      

      </View>

      </ListItem>


      <ListItem selected>
      <View style={{flex:1, flexDirection: 'row'}}>
      <Image source={require('../Image/download.jpg')} style={{height: 40 , width:90}} />
      <View style={{flex:3 , flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={{color: 'black'}}> Chicken Royale</Text>
      <Text style={{flex: 2, textAlign: 'right', color: 'black'}}>&pound; 3.99</Text> 
      <Icon name='md-arrow-forward' style= {{fontSize: 17, marginLeft: 5}}/>
      </View>
      <View style={{flexDirection: 'column'}}>
      <Text   numberOfLines={1} ellipsizeMode ={'tail'} style={{paddingTop: 7}}>Our crowning glory the Chicken Royale is everything a great sandwich should be. Tasty chicken wrapped in a special crisp coating, topped with iceberg lettuce, creamy mayonnaise and crowned with a toasted sesame seed bun.</Text>
      
      </View>
      </View>

      

      </View>

      </ListItem>
      </List>


      </View>
      
      
      </Content>
      <FooterCus propw={this.props}/>
      </Container>
      );
    }
  }