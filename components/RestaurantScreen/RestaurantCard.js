import * as React from 'react';
import {TouchableHighlight, StyleSheet, View, Text as RNText } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../StyledText';
import {Image} from 'react-native';

export class RestaurantCard extends React.Component {
    
    render(){
	const {navigation} = this.props;
	const {name} = this.props;
	const {imageLink} = this.props;
	const {cuisine} = this.props;
	const {score} = this.props;
	const {dist} = this.props;
	return (
		<TouchableHighlight onPress = { () => {navigation.navigate('SelectedRestaurant', {name:name, imageLink: imageLink, cuisine: cuisine, score: score})}}>
		<View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 100}}>
		<View style = {{flex: 1, flexDirection: 'column'}}>
		<Text style = {{fontSize: 18}}> {name} </Text>
		<Text style = {{fontSize: 12}}> {dist} mi </Text>
		<Text style = {{fontSize: 12}}> {cuisine} </Text>
		<Text style = {{fontSize: 12}}> {score}/5 out of {this.props.reviews} </Text>
		</View>
		
		<View style = {{flex: 1}}>
		<Image source = {imageLink} style={{ alignSelf: 'flex-end', flex: 1, width: 120, resizeMode:'cover'}}/>
		</View>
		</View>
		</TouchableHighlight>
	);
    }
}
	    
		
	
	    
	    
    
