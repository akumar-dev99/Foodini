import React, {Component} from 'react';
import { StyleSheet, View, Text as RNText } from 'react-native';
import { Text } from '../StyledText';

class Filter extends Component{

  render() {

  return (
    <View style={{minHeight: 20, minWidth: 90, padding: 5,
        backgroundColor: 'white', borderColor: '#dddddd', elevation: 2, 
        borderWidth: 1, borderRadius:10, marginRight: 10, left: 8, alignItems:'center'}}>
        <Text style={{fontWeight: '700', fontSize: 14}}>{this.props.Fil}</Text>
      </View>
  );
     
}
}


export default Filter;