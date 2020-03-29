import React, {Component} from 'react';
import { Image, TextInput, StyleSheet, View, Text as RNText } from 'react-native';
import { Text } from '../StyledText';


class Culture extends Component{

  render() {

  return (
    <View style={{paddingBottom: 10}}>

    <View style={{marginRight: 10, height: 160, width: 150, marginLeft: 10, borderWidth: 0.5, borderColor: "#dddddd", borderRadius: 15}}>
    <Image source={this.props.imageUri}
    style={{ flex: 1, width: null, height: null, resizeMode:'cover', borderRadius: 15}}/>
    </View>


    <View style={{ top: 5, paddingLeft:10, paddingTop: 10, minHeight: 20, minWidth: 80, padding: 10,
        backgroundColor: 'white', borderColor: '#dddddd', 
        borderWidth: 1, borderRadius:10, marginRight: 20, left: 10, alignItems:'center'}}>
    <Text style={{fontWeight: 'bold'}}>{this.props.name}</Text>      
    </View>     

    </View>
  );
     
}
}

export default Culture;