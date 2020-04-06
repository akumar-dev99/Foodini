import React, {Component} from 'react';
import { Animated, Image, SafeAreaView, TextInput, Platform, StatusBar, StyleSheet, View, Text as RNText } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '../StyledText';
import { Container, Title, Card, CardItem, Left, Right, Content, Thumbnail, Grid, Col, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable  from 'react-native-animatable';
import Filter from '../DishScreen/Filter';
import DishSearchCard from '../SearchScreen/DishSearchCard';




export default class DishSearchScreen extends Component {

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };


  componentDidMount(){

    this.scrollY = new Animated.Value(0)


    this.startHeaderHeight = 80
    if(Platform.OS== 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }


  }
  render() {
  return (
    <Container>
    <SafeAreaView style={{flex: 1}}>
        <View 
         animation="fadeInUpBig"
        style={{height: this.startHeaderHeight, backgroundColor: 'white',
          borderBottomWidth: 1, borderBottomColor: "white"}}>
        <View style={{
    flexDirection: 'row', padding: 10, backgroundColor: 'white',
    marginHorizontal: 10, borderRadius: 20, shadowOffset:{width: 0, height:0},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation:1,
    marginTop: Platform.OS=='android'? 10 : null}}>
      <Icon name="ios-search" size={30} color={'grey'} />
      <TextInput
       underlineColorAndroid="transparent"
        placeholder="What do you want to try?"
        placeholderTextColo="grey"
        style={{flex: 1, fontWeight: '700'}}
       /*onChangeText={this.updateSearch}
        value={search} */ />
        </View>
        </View>
        
        <ScrollView
        scrollEventThrottle={16}>

        <View 
         View style={{flexDirection: 'row', marginHorizontal: 15, 
                    position: 'relative', top: 5, justifyContent: 'center', padding: 5}}>
        
        <Filter
        Fil="Filter"/>
        <Filter
        Fil="Near Me"/>
        <Filter
        Fil="Rating"/>
        <Filter
        Fil="Price"/>      

        </View>

          
          <TouchableOpacity onPress = {() => this.props.navigation.navigate('DishDetails')}>
          <DishSearchCard
          Image={require ('../../assets/images/samosa-620.jpg')}
          title="Samosa"
          description='this is samosa bro...'
          country="INDIAN"
          type="HALAL"/>
          </TouchableOpacity>

          <DishSearchCard
           Image={require ('../../assets/images/Butterchicken.jpg')}
          title="Butten Chicken"
          description='this is Butter Chicken bro...'
          country="INDIAN"
          type="HALAL"/>
          
          <DishSearchCard
           Image={require ('../../assets/images/dosa.jpg')}
          title="Dosa"
          description='this is Dosa bro...'
          country="INDIAN"
          type="HALAL"/>
          
          <DishSearchCard
           Image={require ('../../assets/images/korea.jpg')}
          title="Korean"
          description='this is Korean BBQ bro...'
          country="INDIAN"
          type="HALAL"/>
          
          <DishSearchCard
           Image={require ('../../assets/images/porkdumpling.jpg')}
          title="Pork Dumpling"
          description='this is Pork Dumpling dfoja fsd fasdf  sfds dfd fsad fds fsdff  fafasd asdad sdsada as sfds dfd fsad fds fsdff  fafasd asdad sdsada as dad  sfdalfda fdkfjkfljs f safasd f asfa asf asfasf asf s'
          country="INDIAN"
          type="HALAL"/>
          
          <DishSearchCard
           Image={require ('../../assets/images/mexican.jpg')}
          title="Mexican"
          description='this is Mexican bro...'
          country="INDIAN"
          type="HALAL"/>
      
        
        
       </ScrollView>


       
   </SafeAreaView>
    </Container>
  );
}
}




DishSearchScreen.navigationOptions = {
  header: null,
};


