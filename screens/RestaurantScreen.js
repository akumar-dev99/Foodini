import * as React from 'react';
import { StyleSheet,TouchableHighlight, View, Text as RNText } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../components/StyledText';
import { RestaurantSearch } from '../components/RestaurantScreen/RestaurantSearch';
import { RestaurantCard } from '../components/RestaurantScreen/RestaurantCard';


export default function RestaurantScreen({ navigation, route }) {
    return (
	    <View style={{flex: 1, flexDirection: 'column'}}>

	    <View>
	    <RestaurantSearch/>
	    </View>
	    
	    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
	    <RestaurantCard name = 'Best Restaurant' dist = '0.5' cuisine = 'American' score = '4.7' reviews = '300' imageLink={require ('../assets/images/testfood.jpg')} navigation={navigation} />
	    <RestaurantCard name = 'Bester Restaurant' dist = '0.6' cuisine = 'American, Fusion' score = '4.8' reviews = '400' imageLink={require ('../assets/images/testfood.jpg')}  navigation={navigation} />
	    <RestaurantCard name = 'Bestest Restaurant' dist = '0.7' cuisine = 'American, Fusion, Contemporary' score = '4.8' reviews = '500' imageLink={require ('../assets/images/testfood.jpg')} navigation={navigation} />
	    <RestaurantCard name = 'Bestest Restaurant' dist = '0.7' cuisine = 'American, Fusion, Contemporary' score = '4.8' reviews = '500' imageLink={require ('../assets/images/testfood.jpg')}  navigation={navigation}/>
	    <RestaurantCard name = 'Bestest Restaurant' dist = '0.7' cuisine = 'American, Fusion, Contemporary' score = '4.8' reviews = '500' imageLink={require ('../assets/images/testfood.jpg')} navigation={navigation} />
	    <RestaurantCard name = 'Bestest Restaurant' dist = '0.7' cuisine = 'American, Fusion, Contemporary' score = '4.8' reviews = '500' imageLink={require ('../assets/images/testfood.jpg')}  navigation={navigation}/>
	    </ScrollView>
	    </View>
    );
}

const styles = StyleSheet.create({
    container: {
	flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
      flexDirection: 'column',
  },
});

RestaurantScreen.navigationOptions = {
  header: null,
};
