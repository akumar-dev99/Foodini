import * as React from 'react';
import { StyleSheet, Image, ImageBackground, View, Text as RNText,FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../components/StyledText';
import { RestaurantHeader } from '../components/RestaurantScreen/RestaurantHeader';
import { RestaurantMenu } from '../components/RestaurantScreen/RestaurantMenu';
import { RestaurantContact } from '../components/RestaurantScreen/RestaurantContact';
export default function SelectedRestaurantScreen({ navigation, route }){
    const {name} = route.params;
    const {imageLink} = route.params;
    const {cuisine} = route.params;
    const {score} = route.params;
    const open = '10:00AM';
    const close = '11:00PM';
    const {dist} = route.params;
    const {originName} = route.params;
    const menu = {};
    for (var i = 1; i < 10; i++){
	menu['food'+i] = Math.floor(Math.random()* 1000)/100;
    }
    navigation.setOptions({title: name});
    return (
	    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
	    <View style={styles.card}>	    	    
	    <RestaurantHeader name={name} imageLink={imageLink} cuisine={cuisine} open={open} close={close} dist={dist} score={score} originName={originName}/>
	    <View style={{marginTop:15}}>
	    <RestaurantMenu menu={menu}/>
	    <RestaurantContact/>
	    </View>
	    </View>
	    </ScrollView>
    );
}

const styles = StyleSheet.create({
    card:{
	marginTop: 10,
	marginLeft: 30,
	marginRight: 30,
	backgroundColor: '#E1E1E1',
	borderTopRightRadius: 15,
	borderTopLeftRadius: 15,
	shadowColor: '#000000',
	shadowOffset: {width: 0, height: 4},
	shadowOpacity: 1,
	elevation: 10,
	shadowRadius: 4,
	borderWidth: 0.3,
	borderColor: '#333333'
	
    },
    container: {
	backgroundColor: '#FFA235',
	flex: 1
    },
    contentContainer: {
	flexDirection: 'column',

    },


});
