import React, {Component} from 'react';
import { ImageBackground, TextInput, StyleSheet, View, Text as RNText } from 'react-native';
import { Text } from '../StyledText';
import Icon from 'react-native-vector-icons/Ionicons';
import SwiperFlatList from 'react-native-swiper-flatlist';


class DetailImage extends Component{

  render() {

  return (
    
    <SwiperFlatList
    autoplay
    autoplayDelay={2}
    autoplayLoop
    index={2}>       
    <View style={{height:250, width: 410}}>
    <ImageBackground source={this.props.imageDetail}
      style={{ height: 220, width: null, resizeMode:'cover'}}>
      </ImageBackground>
      
      </View>

      <View style={{height:250, width: 410, padding: 2}}>
      <ImageBackground source={this.props.imageDetail2}
      style={{ height: 220, width: null, resizeMode:'cover'}}>
       
      </ImageBackground>
      </View>

      <View style={{height:250, width: 410, padding: 2}}>
      <ImageBackground source={this.props.imageDetail3}
      style={{ height: 220, width: null, resizeMode:'cover'}}>
      </ImageBackground>
      </View>
      </SwiperFlatList>    
    
    
  );
     
}
}

export default DetailImage;