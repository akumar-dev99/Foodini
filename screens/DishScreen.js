import React, {Component} from 'react';
import { Animated, Image, SafeAreaView, TextInput, Platform, StatusBar, StyleSheet, View, Text as RNText } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '../components/StyledText';
import { Container } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Culture from '../components/DishScreen/Culture';
import DishType from '../components/DishScreen/DishType';
import Filter from '../components/DishScreen/Filter';
import DishDetailScreen from './DishDetailScreen';
import * as Animatable  from 'react-native-animatable';

export default class DishScreen extends Component{
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
  const { search } = this.state;

  return (
    <Container>
    <SafeAreaView style={{flex: 1}}>
        <Animatable.View 
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
        </Animatable.View>
        
        <ScrollView
        scrollEventThrottle={16}>

        <Animatable.View 
         animation="fadeInUpBig"
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

        </Animatable.View>

      
        <Animatable.View 
         animation="fadeInUpBig" style={{ flex: 1, backgroundColor:'white', paddingTop: 10}}>
      <View style={{flexDirection: 'row',  }}>
      <Text style={{fontSize: 20, fontWeight: '700', paddingHorizontal:20, justifyContent: 'flex-start'}}>
      
      Explore New Cuisines!
      </Text>
      <TouchableOpacity>
      <Text style={{ marginLeft: 90, textDecorationLine: 'underline', fontWeight: '700', borderWidth: 1, borderRadius: 5, padding: 2}}>View More</Text>
      </TouchableOpacity>
      </View>
      <View style={{ height: 220, marginTop: 10, paddingBottom: 10}}>
      
      
      <ScrollView horizontal={true}
      showsHorizontalScrollIndicator={false}>
      <TouchableOpacity  onPress = {() => this.props.navigation.navigate('DishDetails')}>
      <Culture           
      imageUri={require ('../assets/images/dosa.jpg')}
      name = "INDIAN"/>
      </TouchableOpacity>

      <TouchableOpacity  onPress = {() => this.props.navigation.navigate('DishDetails')}>
      <Culture 
      imageUri={require ('../assets/images/ramen.jpg')}
      name = "CHINESE"/>
      </TouchableOpacity>

      <TouchableOpacity  onPress = {() => this.props.navigation.navigate('DishDetails')}>
      <Culture 
      imageUri={require ('../assets/images/korea.jpg')}
      name = "KOREAN"/>
      </TouchableOpacity>

      <TouchableOpacity  onPress = {() => this.props.navigation.navigate('DishDetails')}>
      <Culture 
      imageUri={require ('../assets/images/mexican.jpg')}
      name = "MEXICAN"/>
      </TouchableOpacity>
      
      </ScrollView>
      </View>
      </Animatable.View>

      <Animatable.View 
         animation="fadeInUpBig"
          style={{marginTop: 10}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>Trending Dishes</Text>

      <TouchableOpacity>
      <Text style={{ marginTop: 10, marginLeft: 115, textDecorationLine: 'underline', fontWeight: '700', borderWidth: 1, borderRadius: 5, padding: 2}}>View More</Text>
      </TouchableOpacity>
      </View>
      
        <View style={{paddingHorizontal: 25, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      <TouchableOpacity  onPress = {() => this.props.navigation.navigate('DishDetails')}>
        <DishType
      imageUri={require ('../assets/images/samosa-620.jpg')}
      dish ="Samosa"
      country="Type: Indian"
      price="ave. price: 3"
      />

      </TouchableOpacity>

      <TouchableOpacity  onPress = {() => this.props.navigation.navigate('DishDetails')}>
      <DishType
      imageUri={require ('../assets/images/ramen.jpg')}
      dish ="Ramen"
      country="Type: Japanese"
      price="ave. price: 3"
      />

      </TouchableOpacity>
      <TouchableOpacity  onPress = {() => this.props.navigation.navigate('DishDetails')}>
      <DishType 
      imageUri={require ('../assets/images/dosa.jpg')}
      dish ="Dosa"
      country="Type: Indian"
      price="ave. price: 3"
      />

      </TouchableOpacity>
      <TouchableOpacity  onPress = {() => this.props.navigation.navigate('DishDetails')}>
      <DishType 
      imageUri={require ('../assets/images/brocollichicken.jpg')}
      dish ="Brocolli Chicken rice"
      country="Type: Chinese"
      price="ave. price: 3"/>
      </TouchableOpacity>
      <DishType  
      imageUri={require ('../assets/images/porkdumpling.jpg')}
      dish ="Pork Dumpling"
      country="Type: Chinese"
      price="ave. price: 3"/>
      <DishType
      imageUri={require ('../assets/images/Butterchicken.jpg')}
      dish ="Butter Chicken"
      country="Type: Indian"
      price="ave. price: 3" />
        

      </View>    
     </Animatable.View>  

       </ScrollView>


       
   </SafeAreaView>
    </Container>
  );
}
}

DishScreen.navigationOptions = {
  header: null,
};


