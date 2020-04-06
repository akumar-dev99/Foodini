import React, {Component} from 'react';
import { Animated, Image, SafeAreaView, TextInput, Platform, StatusBar, StyleSheet, View, Text} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Card, CardItem, Left, Right, ReadMoreButton, Content, Thumbnail, Grid, Col, Button, Subtitle, Title, } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable  from 'react-native-animatable';




class Tastelike extends Component{

  render() {

  return (
    
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={{fontSize: 20}}> Tastelike</Text>
    </ScrollView>
    



  );
     
}
}

export default Tastelike;


Tastelike.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});


