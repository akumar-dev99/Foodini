import React, {Component} from 'react';
import { ImageBackground, TextInput, StyleSheet, View, Text as RNText, imageStyle } from 'react-native';
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
    <View style={{height:230, width: 410, paddingLeft: 10, paddingRight: 10}}>
    <ImageBackground source={this.props.imageDetail}
     imageStyle={{ borderRadius: 15}}
      style={{ height: 220, width: null, resizeMode:'cover',  }}>
      </ImageBackground>
      
      </View>

      <View style={{height:230, width: 410, paddingLeft: 10, paddingRight: 10 }}>
      <ImageBackground source={this.props.imageDetail2}
      imageStyle={{ borderRadius: 15}}
      style={{ height: 220, width: null, resizeMode:'cover', elevation: 10}}>
       
      </ImageBackground>
      </View>

      <View style={{height:230, width: 410, paddingLeft: 10, paddingRight: 10}}>
      <ImageBackground source={this.props.imageDetail3}
       imageStyle={{ borderRadius: 15}}
      style={{ height: 220, width: null, resizeMode:'cover', elevation: 10}}>
      </ImageBackground>
      </View>
      </SwiperFlatList>    
    
    
  );
     
}
}

export default DetailImage;