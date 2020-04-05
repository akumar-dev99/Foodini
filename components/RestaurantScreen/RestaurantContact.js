import * as React from 'react';
import { StyleSheet, Image, ImageBackground, View, Text as RNText,FlatList,TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../StyledText';

export class RestaurantContact extends React.Component{
    render(){
	const {number} = this.props;
	const {email} = this.props;
	const {website} = this.props;
	var test = 0;
	return (
		<View style={{height: 50, borderColor: '#333333', borderTopWidth:0.5, borderBottomWidth: 0.5, backgroundColor: '#FFA235',flexDirection:'row'}}>
		<TouchableHighlight underlayColor= '#EEEEEE' style={{flex: 1, marginRight: 2.5,backgroundColor: 'white',justifyContent: 'space-around', alignItems: 'center', borderColor:'#333333'}} onPress={()=> {test = 1}}>
		
		<Image source={require('../../assets/images/phone.png')} style={{width: 20, height: 20}}/>
		</TouchableHighlight>

		<TouchableHighlight underlayColor= '#EEEEEE' style={{flex: 1, marginRight: 2.5, marginLeft: 2.5, backgroundColor: 'white',justifyContent: 'space-around', alignItems: 'center', borderColor:'#333333'}}  onPress={()=> {test = 1}}>
		<Image source={require('../../assets/images/website.png')} style={{width: 20, height: 20}}/>
		</TouchableHighlight>
		<TouchableHighlight underlayColor= '#EEEEEE' style={{flex: 1, marginLeft: 2.5,backgroundColor: 'white',justifyContent: 'space-around', alignItems: 'center' , borderColor:'#333333'}} onPress={()=> {test = 1}}>
		<Image source={require('../../assets/images/email.png')} style={{width: 20, height: 20}}/>
		</TouchableHighlight>
	    </View>
	);
    }
}
