import * as React from 'react';
import { StyleSheet, Image, ImageBackground, View, Text as RNText } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../StyledText';
export class RestaurantMenu extends React.Component{

    render(){
	const {menu} = this.props;
	const contents = Object.keys(menu).map(function (food){
		    return (
			    <View key= {food} style={{height:15, borderBottomWidth:0.25, borderColor: '#777777',marginBottom: 7, flexDirection: 'row', justifyContent:'space-between'}}>
			    <Text>
			    {food}
			</Text>
			    <Text>
			    {menu[food]}
			</Text>
			    </View>
		    );
		});
	return(
		<View style={{ padding: 10, backgroundColor:'white', paddingTop:0}}>
		<Text style={{fontWeight: 'bold', fontSize: 18}}>
		Menu
	    </Text>
		<View style={{padding: 10}}>
		{ contents }
	    </View>
		</View>
	);
    }
}
