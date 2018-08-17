import React, { Component} from 'react';
import {
	Image,
	StyleSheet,
	ImageBackground,
	View,
	AppRegistry,
	TouchableOpacity

} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text ,Left,Body,Title,Form,Item,Label,Input} from 'native-base';
import { StackNavigator } from 'react-navigation';

export default class PinCodeWise extends Component {

	constructor(props) {
		super(props)
	}

	render() {

		 var {navigate} = this.props.navigation;

		return (
			<Container>

           <ImageBackground
			source={require('../Image/rest.jpg')}
			style={{ flex:1,height: null, width: null }}
			>

				<Text style={styles.TextMainBlack}>CITY <Text style={styles.TextMain}>DELIVERY</Text></Text>
				<Item regular style={{marginLeft: 8, marginRight: 8, backgroundColor: 'white' }}>
				<Input placeholder='Enter Full Postcode' />


				</Item>
				<Button block style={{marginTop: 20, backgroundColor: 'orange',justifyContent: 'center',marginLeft: 8,borderRadius:5, marginRight: 8}}
				onPress={() => this.props.navigation.navigate('ResListingOld')}>

						<Text style={{fontWeight: 'bold'}}>Search</Text>
				 
				 </Button>



			</ImageBackground>




              <TouchableOpacity onPress={() => this.props.navigation.navigate('CatlogListing')}>

			<Footer style={{backgroundColor: 'orange'}} >


				<Icon name="person" style={{color: 'white', margin: 9}}/>
				<Text style={{color: 'white', marginTop: 11, fontSize: 21, marginBottom: 11}}>Login</Text>


			</Footer>
			</TouchableOpacity>
			</Container>
			);
		}
	}

	const styles = StyleSheet.create({
		TextMain : {
			textAlign: 'center',
			fontSize : 40,
			color: 'orange',
			marginTop: 80,
			marginBottom : 20,
			fontFamily: 'Roboto'
		},
		TextMainBlack : {
			textAlign: 'center',
			marginTop: 80,
			fontSize : 40,
			color: 'black',
			marginBottom : 20,
			fontFamily: 'Roboto'
		}
	});
	AppRegistry.registerComponent('resturant', () =>PinCodeWise);