import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RestaurantScreen from '../screens/RestaurantScreen';
import SelectedRestaurantScreen from '../screens/SelectedRestaurantScreen';



export default function RestaurantNavigator({ navigation, route }){
    const stackNav = createStackNavigator();
    const INITIAL_ROUTE_NAME = 'Restaurants';
    return (
	    <stackNav.Navigator initialRouteName = {INITIAL_ROUTE_NAME}>
	    <stackNav.Screen
	name = "Restaurants"
	component = {RestaurantScreen}
	options={{
	    headerShown: false,
	    title: ''
	}}
	    />
	    <stackNav.Screen
	name = "SelectedRestaurant"
	component = {SelectedRestaurantScreen}
	    />
	    </stackNav.Navigator>
    );
}
