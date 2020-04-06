import React, {Component} from 'react';
import { Animated, Image, SafeAreaView, TextInput, Platform, StatusBar, StyleSheet, View, Text as RNText, TouchableWithoutFeedback} from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '../StyledText';
import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons'
import MoreImage from './MoreImage';
import DishSearchScreen from './DishSearchScreen';
import Tastelike from './Tastelike';
import { EventType } from 'expo/build/Updates/Updates';

export default class FloatingButton extends Component {


    componentDidMount(){
    
        this.scrollY = new Animated.Value(0)
    
    
        this.startHeaderHeight = 80
        if(Platform.OS== 'android') {
          this.startHeaderHeight = 100 + StatusBar.currentHeight
        }    
      };

    animation = new Animated.Value(0);

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1;


        Animated.spring(this.animation, {
            toValue,
            friction: 5
        }).start();

        this.open = !this.open;

    };

    render ()    {


        const imageStyle = {
            transform: [
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -260]
                    })
                }
            ]
        };

        
        
        
        
        const heartStyle = {
            transform: [
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -200]
                    })
                }
            ]
        };

        const shareStyle = {
            transform: [
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -140]
                    })
                }
            ]
        };

        const pencilStyle = {
            transform: [
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -80]
                    })
                }
            ]
        };


        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"]
                    })
                }
            ]
        };

        const Opacity = this.animation.interpolate ({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0, 1]

        })

        return (

            <View style={[styles.container, this.props.style]}>

            <TouchableWithoutFeedback>
               <Animated.View style={[styles.button, styles.secondary, pencilStyle, Opacity]}>
                   <Entypo name="image" size={24} color="orange"/>
               </Animated.View>
               </TouchableWithoutFeedback>
                 <TouchableWithoutFeedback>
               <Animated.View style={[styles.button, styles.secondary, shareStyle, Opacity]}>
                   <Entypo name="pencil" size={24} color="orange"/>
               </Animated.View>
               </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
               <Animated.View style={[styles.button, styles.secondary, heartStyle, Opacity]}>
                   <Entypo name="share" size={24} color="orange" onPress = {() => this.props.navigation.navigate('Tastelike')}/>
               </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
               <Animated.View style={[styles.button, styles.secondary, imageStyle, Opacity]}>
                   <TouchableOpacity onPress = {() => this.props.navigation.navigate('MoreImage')}>
                   <Entypo name="heart" size={24} color="orange"  />
                   </TouchableOpacity>
               </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={this.toggleMenu}>
               <Animated.View style={[styles.button, styles.menu, rotation]}>
                   <AntDesign name="plus" size={24} color="#FFF"/>
               </Animated.View>
            </TouchableWithoutFeedback>

          </View>



        );
    }
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
      },
      
      button: {
        position: 'absolute',
        top: 10,
        left: 20,
        width: 60,
        height: 60,
        borderRadius: 60/2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#F02A4B',
        shadowOpacity: 0.3,
        shadowOffset: { height: 10}
        
      },

      menu: {
        backgroundColor: 'orange',

      },

      secondary: {
          width: 48,
          height: 48, 
          borderRadius: 48/2,
          backgroundColor: '#FFF'
      }


});
           
           
        