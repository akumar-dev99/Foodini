import React, {Component} from 'react';
import { ImageBackground, TextInput, StyleSheet, View, Text as RNText } from 'react-native';
import { Text } from '../StyledText';


class Dishinfo extends Component{

  render() {

  return (
    <View>
    
    <View style={{justifyContent: 'space-evenly', paddingLeft: 15, marginBottom: 10 }}>

    <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black", paddingLeft: 10, textDecorationLine: 'underline'}}>COUNTRY: {this.props.country}</Text>

    <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 10, fontStyle: 'italic'}}>{this.props.dish}</Text>
    <Text style={{paddingLeft:15, paddingRight:15, fontSize: 15, fontWeight: 'bold',}}>{this.props.info}</Text>
    </View>
    </View>
  );
     
}
}

export default Dishinfo;