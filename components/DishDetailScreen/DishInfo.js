import React, {Component} from 'react';
import { ImageBackground, TextInput, StyleSheet, View, Text as RNText } from 'react-native';
import { Text } from '../StyledText';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container } from 'native-base';


class Dishinfo extends Component{

  render() {

  return (
    <View>
    
    <View style={{marginTop:10, height: 200, width: 410, borderColor: '#5a5d81', borderWidth: 3, borderRadius: 25}}>
    <View style={{ marginTop: 10, marginLeft: 5, justifyContent: 'space-evenly', paddingLeft: 10 }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#5a5d81"}}>About {this.props.dish}</Text>
    <Text style={{marginTop: 10, fontSize: 15}}>{this.props.info}</Text>
    </View>
  
    <View style={{ marginLeft: 10, justifyContent: 'space-evenly', paddingLeft: 10, bottom: 10}}>
    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.props.dishname}</Text>
    <Text style={{fontSize: 20}}>{this.props.country}</Text>
    <Text style={{fontSize: 18}}>ave $:{this.props.price}</Text>
    </View>
    </View>
    </View>
  );
     
}
}

export default Dishinfo;