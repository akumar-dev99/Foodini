import * as React from 'react';
import { StyleSheet, Image, ImageBackground, View, Text as RNText } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../StyledText';
export class RestaurantHeader extends React.Component{

    render(){
	const {name} = this.props;
	const {imageLink} = this.props;
	const {cuisine} = this.props;
	const {open} = this.props;
	const {close} = this.props;
	const {dist} = this.props;
	const address = '44-13 Kissena Blvd Flushing, NY';
	const {score} = this.props;
	const originName = '萬山紅蘭州拉麵';
	return(
	    <View>
		<View style={{height: 200}}>
		<ImageBackground source = {imageLink} style={{flex:1, borderTopRightRadius: 15, borderTopLeftRadius: 15, overflow: 'hidden', shadowColor:'black', shadowOpacity: 1, shadowRadius: 2, shadowOffset: {width:0, height: 1},elevation: 5}}>
		<View style={{flex: 1, flexDirection:'column-reverse', paddingLeft: 10, paddingRight: 10}}>

		<View style={{flex: 0, flexDirection:'row', justifyContent:'space-between'}}>
		<Text style={styles.subtitle}>{originName}</Text>
		<Text style={styles.subtitle}>{score} <Text style={{fontSize: 10}} >avg dish </Text></Text>
		</View>
		
		<Text style={styles.title}>{name} </Text>
		</View>
		</ImageBackground>
		</View>

		<View style={{flexDirection:'row', backgroundColor: 'white', flex: 1, padding: 5}}>
		<View style={{flex: 1}}>
		<Text>Open</Text>
		<Text>{address}</Text>
		</View>
		
		<View style={{flex: 1, alignItems:'flex-end'}}>
		<Text>{open}-{close}</Text>
		<Text>{dist} mi</Text>
		</View>
		</View>

	    </View>
	);
    }
}

const styles = StyleSheet.create({
    title: {
	color: 'white',
	fontSize: 24,
	textShadowColor: 'black',
	textShadowRadius: 0.5,
	textShadowOffset: {width: 0.5, height: 0.5},
    },
    subtitle: {
	color: 'white',
	fontSize: 16,
	textShadowColor: 'black',
	textShadowRadius: 0.5,
	textShadowOffset: {width: 0.5, height: 0.5}
    }

});
