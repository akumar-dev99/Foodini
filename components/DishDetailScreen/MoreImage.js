import React, {Component} from 'react';
import { Image, StyleSheet, View, Text as RNText } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../StyledText';
import { createStackNavigator } from '@react-navigation/native';

export default class MoreImage extends Component {
  render() {
  return (
    <ScrollView>
    <View style={{paddingHorizontal: 2, marginTop: 2, flexDirection: 'row', marginRight: 10, marginLeft: 10, width: 100, height: 100, borderWidth: 0.5, borderColor: "#dddddd"}}>
    <View>
    <Image source={require('../../assets/images/samosa-620.jpg')}
    style={{ width: 160, height: 160,}}/>
    <Image source={require('../../assets/images/samosa-620.jpg')}
    style={{width: 160, height: 160, resizeMode:'cover'}}/>
    <Image source={require('../../assets/images/samosa-620.jpg')}
    style={{width: 160, height: 160, resizeMode:'cover'}}/>
    <Image source={require('../../assets/images/samosa-620.jpg')}
    style={{width: 160, height: 160, resizeMode:'cover'}}/>
    </View>
    </View>

    </ScrollView>
  

  );
}
}


MoreImage.navigationOptions = {
  header: null,
};