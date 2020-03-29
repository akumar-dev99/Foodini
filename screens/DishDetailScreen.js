import React, {Component} from 'react';
import { Animated, Image, SafeAreaView, TextInput, Platform, StatusBar, StyleSheet, View, Text as RNText } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '../components/StyledText';
import { Container } from 'native-base';
import MoreImage from '../components/DishDetailScreen/MoreImage';
import Review from '../components/DishDetailScreen/Review';
import Tastelike from '../components/DishDetailScreen/Tastelike';
import DetailImage from '../components/DishDetailScreen/DetailImage';
import DishInfo from '../components/DishDetailScreen/DishInfo';




export default class DishDetailScreen extends Component{
    
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
            <ScrollView
            scrollEventThrottle={16}>

              <View>
              <View style={{marginHorizontal: 15,
              position: 'relative', flexDirection: 'row'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: "#5a5d81"}} bottomDivider>CUSINE</Text>
              <Text style={{fontSize: 20, position: 'relative', left: 200, fontWeight: 'bold', color: "#5a5d81"}}>SPICEMETER</Text>
              </View>
              </View>     

              <DetailImage
              imageDetail={require ('../assets/images/samosa-620.jpg')}
              imageDetail2={require ('../assets/images/samosa-620.jpg')} 
              imageDetail3={require ('../assets/images/samosa-620.jpg')} />

            
              
              <DishInfo
              
              dish="Samosa"
              info="jsfbs SAMOSA IS AN INDIAN SNACCK LMAOOOOfljsbfljsbf sljfbsjhbsdlfjbshbfsdljfbsdljfbsjhbsfbsfsbdlfsdfjnsf"
              country="Indian"
              price="3-5"
           
              />
             

           </ScrollView>
           <View >
           <View style={{flexDirection:"row" }}>
           <TouchableOpacity style= {styles.review} onPress = {() => this.props.navigation.navigate('Review')}>
           <Text style = {styles.text}>Reviews</Text>
           </TouchableOpacity>
           <TouchableOpacity style= {styles.review} onPress = {() => this.props.navigation.navigate('Tastelike')}>
           <Text style = {styles.text}>Taste-Like</Text>
           </TouchableOpacity>
           <TouchableOpacity style= {styles.review} onPress = {() => this.props.navigation.navigate('MoreImage')}>
           <Text style = {styles.text}>More Image</Text>
           </TouchableOpacity>
           </View>
           </View>

       </SafeAreaView>
        </Container>
      );
    }
    }
    
    
    const styles = StyleSheet.create({
    review: {
      left: 10,
      height: 30,
      width: 100,
      margin: 3,
      borderRadius: 25,
      justifyContent: 'space-evenly',
      backgroundColor: 'orange',
      fontWeight: 'bold',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
      fontFamily: 'Roboto',
    },
  });





DishDetailScreen.navigationOptions = {
  header: null,
};