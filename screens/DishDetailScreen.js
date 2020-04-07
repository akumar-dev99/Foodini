import React, {Component} from 'react';
import { Animated, Image, SafeAreaView, TextInput, Platform, StatusBar, StyleSheet, View, Text as RNText, TouchableWithoutFeedback} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '../components/StyledText';
import { Container } from 'native-base';
import MoreImage from '../components/DishDetailScreen/MoreImage';
import DishSearchScreen from '../components/DishDetailScreen/DishSearchScreen';
import Tastelike from '../components/DishDetailScreen/Tastelike';
import DetailImage from '../components/DishDetailScreen/DetailImage';
import DishInfo from '../components/DishDetailScreen/DishInfo';
import * as Animatable  from 'react-native-animatable';
import DishHead from '../components/DishDetailScreen/DishHead';
import Dishtag from '../components/DishDetailScreen/Dishtag';
import {AntDesign, Entypo} from '@expo/vector-icons'
import FloatingButton from '../components/DishDetailScreen/FloatingButton';



export default class DishDetailScreen extends Component{
    
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

            <View style={{paddingLeft: 10, paddingRight: 10, paddingTop: 10}}>
             <DishHead
               title="SAMOSA"
                imageHead={require ('../assets/images/India.png')}
                ethnic="समोसा"
                    />   

              </View>
           
               
              <View style={{elevation: 1}}>
              <DetailImage
              imageDetail={require ('../assets/images/samosa-620.jpg')}
              imageDetail2={require ('../assets/images/samosa-620.jpg')} 
              imageDetail3={require ('../assets/images/samosa-620.jpg')} />
              </View>
            
              
              <ScrollView
            scrollEventThrottle={16}
            style={{paddingLeft: 10, paddingRight: 10}}>
            <Animatable.View
              style={styles.footer}
             animation="fadeInUpBig">
              
              
              <DishInfo
              country="INDIAN"
              dish="SAMOSA"
              info="The samosas are a fried or baked pastry with a savoury filling, such as spiced potatoes, onions, peas, lentils, and minced meat (lamb, beef or chicken). ... Alternatively, the samosa can be eaten on its own with a side of chutney."
              
           
              />



                <View style={{marginTop: 40}}>   
                <View style={{flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', flexWrap: 'wrap' }}>
                <Dishtag
                imageTag={require ('../assets/images/sweet.png')}
                tag="SWEET"
                />

                 <Dishtag
                imageTag={require ('../assets/images/sour.png')}
                tag="SOUR"
                />

                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', flexWrap: 'wrap' }}>
                <Dishtag
                imageTag={require ('../assets/images/bitter.png')}
                tag="BITTER"
                />

                 <Dishtag
                imageTag={require ('../assets/images/umami.png')}
                tag="UMAMI"
                />

                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', flexWrap: 'wrap' }}>
                <Dishtag
                imageTag={require ('../assets/images/bitter.png')}
                tag="BITTER"
                />

                </View>
                </View>
                
                
            
             </Animatable.View>
         
             </ScrollView>


             <FloatingButton style={{bottom: 70}}/>


          <View style={{paddingLeft: 10, paddingRight: 10}}>
           <View style={{flexDirection:"row", justifyContent: 'space-evenly', backgroundColor: '#e2e2e2', width: '100%', paddingLeft: 20, paddingRight: 20, paddingBottom: 5, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
           <TouchableOpacity style= {styles.review} onPress = {() => this.props.navigation.navigate('DishSearch')}>
           <Text style = {styles.text}>Dish Search</Text>
           </TouchableOpacity>
           <TouchableOpacity style= {styles.review} onPress = {() => this.props.navigation.navigate('Tastelike')}>
           <Text style = {styles.text}>Taste-Like</Text>
           </TouchableOpacity>
           {/*<TouchableOpacity style= {styles.review} onPress = {() => this.props.navigation.navigate('MoreImage')}>
           <Text style = {styles.text}>More Image</Text>
      </TouchableOpacity>*/}
           </View>
           </View>
        

       </SafeAreaView>
        </Container>
      );
    }
    }
    
    
    const styles = StyleSheet.create({
    review: {
      height: 40, 
      borderRadius: 30, 
      flexDirection: 'row', 
      alignItems: 'center', 
      margin: 5,
      backgroundColor: 'white',
      width: 100,
      justifyContent: 'center',
    },
    text: {
      color: 'black',
      fontSize: 16,
      textAlign: 'center',
      fontFamily: 'Roboto',
    },
    footer: {
      flex: 1,
      backgroundColor: '#e2e2e2',
      borderTopRightRadius:20,
      borderTopLeftRadius: 20,
      paddingVertical: 20,
      height: 800,
      zIndex: 2, 
      paddingLeft: 10,
      paddingRight: 10

      },
  });





DishDetailScreen.navigationOptions = {
  header: null,
};