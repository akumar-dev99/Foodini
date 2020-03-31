import * as React from 'react';
import { StyleSheet,TouchableHighlight, View, Text as RNText, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../components/StyledText';
import { RestaurantSearch } from '../components/RestaurantScreen/RestaurantSearch';
import { RestaurantCard } from '../components/RestaurantScreen/RestaurantCard';


export default function RestaurantScreen({ navigation, route }) {

    return (
	    <SafeAreaView style={styles.safeArea}>
	    <View style={{flex: 1, flexDirection: 'column'}}>

	    <View>
	    <RestaurantSearch/>
	    </View>
	    
	    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
	    <RestaurantCard name = 'Best Restaurant' dist = '0.5' cuisine = 'American' score = '4.7' reviews = '300' imageLink={require ('../assets/images/testfood.jpg')} navigation={navigation} />
	    <RestaurantCard name = 'Bester Restaurant' dist = '0.6' cuisine = 'American, Fusion' score = '3.3' reviews = '400' imageLink={require ('../assets/images/testfood.jpg')}  navigation={navigation} />
	    <RestaurantCard name = 'Bestest Restaurant' dist = '0.7' cuisine = 'American, Fusion, Contemporary' score = '4.4' reviews = '500' imageLink={require ('../assets/images/testfood.jpg')} navigation={navigation} />
	    <RestaurantCard name = 'Bestest Restaurant' dist = '0.7' cuisine = 'American, Fusion, Contemporary' score = '4.3' reviews = '500' imageLink={require ('../assets/images/testfood.jpg')}  navigation={navigation}/>
	    <RestaurantCard name = 'Bestest Restaurant' dist = '0.7' cuisine = 'American, Fusion, Contemporary' score = '2.8' reviews = '500' imageLink={require ('../assets/images/testfood.jpg')} navigation={navigation} />
	    <RestaurantCard name = 'Bestest Restaurant' dist = '0.7' cuisine = 'American, Fusion, Contemporary' score = '3.7' reviews = '500' imageLink={require ('../assets/images/testfood.jpg')}  navigation={navigation}/>
	    </ScrollView>
	    </View>
	    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
	flex: 1,
	backgroundColor: '#fafafa',
    },
    contentContainer: {
	flexDirection: 'column',
	backgroundColor: '#FFA235'
    },
    safeArea: {
	flex: 1,
	paddingTop: Platform.OS === 'android' ? 25: 0	
    }
});

RestaurantScreen.navigationOptions = {
  header: null,
};
