import * as React from 'react';
import { StyleSheet, View, Text as RNText } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../StyledText';
import { SearchBar } from 'react-native-elements';


export class RestaurantSearch extends React.Component {
    state = {
	search: '',
    };
    
    updateSearch = search => {
	this.setState({ search });
    };
    
    render() {
	const { search } = this.state;
	
	return (
		<SearchBar
            placeholder="Search Restaurants..."
            onChangeText={this.updateSearch}
            value={search}
		/>
	);
    }
}
