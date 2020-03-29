import React, {Component} from 'react';
import {Image, StyleSheet, View, Text as RNText } from 'react-native';
import { Text } from '../StyledText';
import StarRating from 'react-native-star-rating';

class DishType extends Component{

  render() {


  return (
    <View style={{paddingBottom: 10}}>
    <View style={{width: 100, height: 100, borderWidth: 0.5, borderRadius: 10, borderColor: "#dddddd", marginRight: 15, marginBottom: 10}}>
      <View style={{flex: 5}}>
      <Image source={this.props.imageUri}
      style={{ flex: 1, width: null, height: null, resizeMode:'cover', borderRadius: 10}}/>
      </View>
      </View>

      <View style={{flex: 5, alignItems: 'flex-start', minHeight: 50, width: 100,  padding: 3, backgroundColor: 'white', borderColor: '#dddddd', 
                    justifyContent: 'space-evenly', borderWidth: 1, borderRadius:10}}>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>{this.props.dish}</Text>
      <Text style={{fontSize: 12}}>{this.props.country}</Text>
      <Text style={{fontSize: 12}}>{this.props.price}</Text> 
      </View>
      </View>
      

      /*StarRating
      disable={true}
      maxStars={5}
      rating={this.props.rating}
      starSize={10}*/
  );
     
}
}

export default DishType;