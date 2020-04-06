import React, {Component} from 'react';
import { ImageBackground, TextInput, StyleSheet, View, Text as RNText, Image } from 'react-native';
import { Text } from '../StyledText';


class DishHead extends Component{

  render() {

  return (
    
    
    <View style={{justifyContent: 'space-evenly', marginBottom: 10, 
    height: 100, width:'100%', backgroundColor: '#ffa500', borderBottomLeftRadius: 20, borderRadius: 20, 
    borderBottomRightRadius: 20, flexDirection: 'row',}}>
    
    <View style={{paddingLeft: 15, flex: 2, alignItems: 'center', alignSelf: 'center'}}>
    <Text style={{ fontSize: 25, fontWeight: 'bold', color: "black", flex: 2, }}>{this.props.title} {this.props.ethnic}</Text>
    </View>

    <View style={{
                borderLeftWidth: 1,
                borderLeftColor: 'white',
                flex: 0.5,
                alignItems: 'center',
                height: 90,
                alignSelf: 'center'

                    }}/>

    <View style={{flex: 2, alignItems: 'center', alignSelf: 'center'}}>
        <Image source={this.props.imageHead}
        style={{ width: 140, height: 90, resizeMode:'cover', borderRadius: 15}}/>
    </View>

    </View>
  );
     
}
}

export default DishHead;