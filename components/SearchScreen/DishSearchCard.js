import React, {Component} from 'react';
import { Animated, Image, SafeAreaView, TextInput, Platform, StatusBar, StyleSheet, View, Text} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Card, CardItem, Left, Right, ReadMoreButton, Content, Thumbnail, Grid, Col, Button, Subtitle, Title, } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable  from 'react-native-animatable';




class DishSearchCard extends Component{

  render() {

  return (
    
    
    <Card style={{ height: 160, borderRadius: 20, width: '100%'}}>
    <CardItem style={{ borderRadius: 20}}>
      <Left>
        <Thumbnail
        source={this.props.Image}
        style={{width: 100, height: 100, marginTop: 15, borderRadius: 10, resizeMode: 'cover' }}/>
        <View style={{alignItems: 'flex-start', paddingBottom: 40, marginLeft: 10, }}>
          <Title style={{color: 'black', fontSize: 18, marginBottom: 20, }}>{this.props.title}</Title> 
            <Subtitle numberOfLines={3} style={{color: 'black', fontSize: 13, }} >{this.props.description}</Subtitle> 
        </View>
      </Left>

      <Right >
          <View style={{alignItems: 'flex-end', marginLeft: 5, flex: 0.5, marginBottom: 80}}>
                <View style={{borderWidth: 0.5, borderRadius: 10, width: 90, elevation: 1, backgroundColor: '#e2e2e2', alignItems: 'center', height: 25, justifyContent: 'center'}}>
                <Subtitle style={{color: 'black'}}>{this.props.country}</Subtitle> 
                </View>
                  <Text>{this.props.type}</Text>
           </View>


      </Right>
    </CardItem>

</Card>




  );
     
}
}

export default DishSearchCard;


DishSearchCard.navigationOptions = {
  header: null,
};


