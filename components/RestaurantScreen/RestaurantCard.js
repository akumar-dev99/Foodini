import * as React from 'react';
import {TouchableHighlight, StyleSheet, View, Text as RNText, ImageBackground } from 'react-native';
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
	const {reviews} = this.props;
	const {originName} = this.props;
	var stars = [];
	for (var i = 0; i < 5; i++){
	    if (i+ 1 <= score){
		stars.push(
			<View key={i} style={{width: 16, height: 16, position: 'absolute', top:0, left: i* 18}} >
			<Image key={i+5} source={require('../../assets/images/dish-colored.png')}/>
			</View>
		);
	    }
	    else if (score - i > 0){
		stars.push(
		    	<View key={i} style={{width: 16, height: 16, position: 'absolute', top:0, left: i* 18}} >
			<Image key={i+5} style= {{position: 'absolute', top: 0, left: 0}} source={require('../../assets/images/dish.png')}/>
			<View key = {i+15} style = {{position: 'absolute', top: 0, left: 0, width: (score-i)*100 +" %", height: 16}}>
			<Image key={i+10} overflow = 'hidden' style= {{position: 'absolute', top: 0, left: 0}} source={require('../../assets/images/dish-colored.png')}/>
			</View>			     
			</View>
		);
	    }
	    else {
		stars.push(
			<View key={i} style={{width: 16, height: 16, position: 'absolute', top:0, left: i* 18}} >
			<Image key={i+5} source={require('../../assets/images/dish.png')}/>
			</View>
		);
	    }
	}
	return (
		<TouchableHighlight style={styles.cardContainer} underlayColor= '#EEEEEE' onPress = { () => {navigation.navigate('SelectedRestaurant', {name:name, originName: originName, imageLink: imageLink, cuisine: cuisine, score: score, dist: dist})}}>
		<View style = {{ flex: 1, flexDirection: 'row'}}>
		
		<View style = {{flex: 2, paddingRight: 5}}>
		<ImageBackground source = {imageLink} style={{flex: 1, resizeMode:'cover'}}/>
		</View>
	    
		<View style = {{flex: 5, flexDirection: 'column'}}>

		<View style={{flex: 3}}> 
		<View style = {{flex: 0, flexDirection: 'row', alignItems:'flex-end', justifyContent:'space-between'}}>
		<Text style = {{fontSize: 18 , fontWeight:'600'}}>{name}</Text>
		<Text style = {{fontSize: 12}}>{dist} mi</Text>
		</View>

		<Text style = {{fontSize: 12}}>{cuisine}</Text>
		</View>
		
		<View style={{flex: 2, flexDirection:'row', justifyContent: 'space-between'}}>

		<View style={{flexDirection: 'column'}}>
		<View style = {{flex: 1}}>
		{stars}
	    </View>
		<Text style={{flex: 1, fontSize: 10}}>Avg Dish</Text>
		</View>
		<Text style={{fontSize:12}}>{reviews} posts </Text>
	    </View>
		</View>
		</View>
		</TouchableHighlight>
	);
    }
}
	    
		
	
	    
	    
    
const styles = StyleSheet.create({
    cardContainer: {
	borderRadius: 5,
	margin: 7,
	marginLeft: 6,
	marginRight: 6,
	backgroundColor: '#ffffff',
	paddingLeft: 8,
	paddingRight: 8,
	paddingTop: 10,
	paddingBottom: 10,
	height: 100,
	shadowColor: '#000000',
	shadowOffset: {width: 0, height: 4},
	shadowOpacity: 1,
	elevation: 10,
	shadowRadius: 4
	
    }
});
