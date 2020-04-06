import React from 'react';
import { StyleSheet, View, StatusBar, Dimensions } from 'react-native';
import * as Animatable  from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import LoginScreen from './LoginScreen';
import * as Font from 'expo-font';
import { Text } from '../components/StyledText';
export default class Splash extends React.Component {
  render(){
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
     <View style={styles.header}>
      <Animatable.Image
        animation ="bounceIn" 
        duration={1500}
        source={require('../assets/images/foodini_logo.png')}
        style={styles.logo}
          resizeMode={'stretch'}
        />    
      </View>
      <Animatable.View 
      style={styles.footer}
      animation="fadeInUpBig">
        <Text style={styles.title}>Stay connected with all the foodies around the World!</Text>
        <Text style={styles.text}> Sign In With Account</Text>
        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Login')}>
        <View style={styles.button}>
        <Text style={styles.textSign}> Get Started! </Text>
        <MaterialIcons
        name="navigate-next"
        color="white"
        size={20}
        justifyContent='flex-end' />
        </View>
        </TouchableOpacity> 
      </Animatable.View>
      </View>

    );
  }
}


const {height} = Dimensions.get("screen");
const height_logo = height * 0.5 * 0.3;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange"
    
  },
  header: {
    flex: 2
  },
  footer: {
  flex: 1,
  backgroundColor: 'white',
  borderTopRightRadius: 30,
  borderTopLeftRadius: 30,
  paddingVertical: 50,
  paddingHorizontal: 30,  
  },

  logo: {
    alignSelf: 'center',
    top: 200,
  },
  title: {
    color: '#05375a',
    fontWeight: 'bold',
    fontSize: 50
  },
  title: {
      color: 'gray',
      marginTop: 30
  },

  text: {
      color:'gray',
      marginTop: 5,
  },

  button: {
      marginTop: 30,
      padding: 15,
      borderWidth: 0.5,
      borderRadius: 50,
      width: 150,
      height: 50,
      justifyContent: 'center',
      backgroundColor: 'orange',
      borderColor: 'white',
      flexDirection: 'row',
      


      
  },

  textSign: {
      color: 'white',
      fontWeight: 'bold'

  },


});