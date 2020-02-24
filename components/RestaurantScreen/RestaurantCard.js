import * as React from 'react';
import { StyleSheet, View, Text as RNText } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../StyledText';
import {Image} from 'react-native';

export class RestaurantCard extends React.Component {
    render(){
	return (
		<View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 100}}>
		
		<View style = {{flex: 1, flexDirection: 'column'}}>
		<Text style = {{fontSize: 18}}> {this.props.name} </Text>
		<Text style = {{fontSize: 12}}> {this.props.dist} mi </Text>
		<Text style = {{fontSize: 12}}> {this.props.cuisine} </Text>
		<Text style = {{fontSize: 12}}> {this.props.score}/5 out of {this.props.reviews} </Text>
		</View>
		
		<View style = {{flex: 1}}>
		<Image source = {this.props.imageLink} style={{ alignSelf: 'flex-end', flex: 1, width: 120, resizeMode:'cover'}}/>
		</View>
		
		</View>
	);
    }
}
	    
		
		
	
	    
	    
    
