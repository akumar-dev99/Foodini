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
	const {score} = this.props;
	return(
		<View style={{height: 200}}>
		<ImageBackground source = {imageLink} style={{flex:1}} >
		<View style={styles.coverContainer}>
		
		<View style={{flex: 2}}>
		<Text style={styles.title}>
		{name}
	    </Text>
	    </View>
		
		<View style ={styles.descriptionContainer}>
		
		<View style = {styles.descriptionRow}>
		
	    <View style = {styles.descriptionLeft}>
		<Text style = {styles.description}>
		{cuisine}
	    </Text>
		</View>
		<View style={styles.descriptionRight}>
	    <Text style= {styles.description}>
		{score} / 5
	    </Text>
		</View>
		</View>
		
	    
	    <View style = {styles.descriptionRow}>
		<View style={styles.descriptionLeft}>
		<Text style={styles.description}>
		{open} - {close}
	    </Text>
		</View>
		<View style={styles.descriptionRight}>
	    <Text style = {styles.description}>
		{dist} mi
	    </Text>
		</View>
		</View>
		
	    </View>
	    </View>
		</ImageBackground>
		</View>
	);
    }
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
