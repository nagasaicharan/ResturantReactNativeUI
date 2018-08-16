import React, { Component } from 'react';
import { StackNavigator } from "react-navigation";


import PinCodeWise from './src/components/resturants/PinCodeWise';
import ResListingOld from './src/components/resturants/ResListingOld';
import Login from './src/components/Login/Login';
import AddToCart from './src/components/Task/AddToCart';
import SignUp from './src/components/Login/SignUp';
import MenuLis from './src/components/resturants/MenuLis';
import MenuSub from './src/components/resturants/MenuSub';
import FooterCus1 from './FooterCus1';
import FlatListDemo from './FlatListDemo';
import CartEmpty from './src/components/Task/CartEmpty';
import CartProduct from './src/components/Task/CartProduct';
import CatlogListing from './CatlogListing'

const MainScreenNavigator = StackNavigator({
	PinCodeWise: { screen: PinCodeWise },
	ResListingOld: { screen: ResListingOld },
	MenuLis :{screen: MenuLis},
	Login :{ screen: Login},
	SignUp :{screen: SignUp},
	AddToCart :{screen: AddToCart},
	MenuSub :{screen: MenuSub},
    FooterCus1 :{screen: FooterCus1},
	FlatListDemo :{screen: FlatListDemo},
	CartEmpty :{screen: CartEmpty},
	CartProduct :{screen: CartProduct},
	CatlogListing :{screen: CatlogListing}

},{
	headerMode: 'none'
});

export default MainScreenNavigator;