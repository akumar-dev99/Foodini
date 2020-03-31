import * as React from 'react';
import { StyleSheet, Image, ImageBackground, View, Text as RNText } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../components/StyledText';
import { RestaurantHeader } from '../components/RestaurantScreen/RestaurantHeader';
import { RestaurantMenu } from '../components/RestaurantScreen/RestaurantMenu';

export default function SelectedRestaurantScreen({ navigation, route }){
    const {name} = route.params;
    const {imageLink} = route.params;
    const {cuisine} = route.params;
    const {score} = route.params;
    const open = '10:00AM';
    const close = '11:00PM';
    const {dist} = route.params;
    const menu = {};
    for (var i = 1; i < 10; i++){
	menu['food'+i] = Math.floor(Math.random()* 1000)/100;
    }
    navigation.setOptions({title: name});
    return (
	    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
	    <RestaurantHeader name = {name} imageLink = {imageLink} cuisine = {cuisine} open = {open} close = {close} dist = {dist} score={score}/>
	    <RestaurantMenu menu={menu}/>

	    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
	flex: 1
    },
    contentContainer: {
	flexDirection: 'column',
    },
    coverContainer:{
	backgroundColor: 'rgba(0,0,0,0.3)',
	flex: 1,
	flexDirection: 'column'
    },
    title:{
	paddingTop: 10,
	paddingLeft: 10,
	fontSize: 30,
	color: 'white',
	fontFamily: 'Roboto',
	fontWeight: 'bold'
    },
    descriptionLeft:{
	flex: 1
    },
    descriptionRight:{
	flex: 1,
	flexDirection: 'row-reverse'
    },
    description:{
	fontSize: 17,
	color: 'white',
	fontFamily: 'Roboto',
	fontWeight: "bold"
    },
    descriptionContainer:{
	flex: 1,
	flexDirection: 'column',
	justifyContent: 'flex-end',
	paddingLeft: 10,
	paddingRight: 10
    },
    descriptionRow:{
	flexDirection: 'row',
	marginLeft: 10,
	marginRight: 10
    }

});
