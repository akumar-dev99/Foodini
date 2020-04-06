
import React, {Component} from 'react';
import { StyleSheet, View, Text as RNText, Image } from 'react-native';
import { Text } from '../StyledText';

export default class Dishtag extends Component {
    state={ }
  render() {
      const {tag, imageTag} = this.props;
  return (

      <View style={{ height: 40, borderRadius: 30, flexDirection: 'row', 
      alignItems: 'center', margin: 5,
      backgroundColor: 'white', elevation: 5}}>
      <View style={{width: 40, height: 40, borderRadius: 15}}>
      <Image source={imageTag}
      style={{width: 40, height: 40, borderRadius: 30, resizeMode: 'cover'}}></Image>
      </View>
      <Text style={{ textAlign: 'center', marginHorizontal:15}}>{tag}</Text>
      </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Dishtag.navigationOptions = {
  header: null,
};