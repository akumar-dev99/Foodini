import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, YellowBox } from 'react-native';

import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './navigation/BottomTabNavigator';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import DetailsScreen from './screens/DetailsScreen';

// for authentication
import { useAuth } from './utils/auth';
import { userContext } from './utils/auth';

// for firestore and storage
import {decode, encode} from 'base-64'
import Splash from './screens/Spalsh';
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

// ignore timer warnings
YellowBox.ignoreWarnings(['Setting a timer']);

const Stack = createStackNavigator();

export default function App() {
  // save return values of useAuth hook
  const { initializing, user } = useAuth();

  // Load any resources or data that we need prior to rendering the app
  async function loadResourcesAndDataAsync() {
    // Prevent the SplashScreen from autohiding.
    SplashScreen.preventAutoHide();
    // Load fonts
    await Font.loadAsync({
      ...Ionicons.font,
      'rubik': require('./assets/fonts/Rubik-Regular.ttf'),
      'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf"),
    });
  }

  React.useEffect(() => {
    // when component mounts load all the necessary resources
    // such as font and Ionicons
    loadResourcesAndDataAsync();
  }, []);

  if(initializing) return null;
  else {
    SplashScreen.hide();
    return (
      <userContext.Provider value = {{ user }}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer>
            {(user) ? (
              <BottomTabNavigator/> 
            ) : (
              <Stack.Navigator>
                <Stack.Screen 
                  name="Root" 
                  component={Splash} 
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen 
                  name="Login" 
                  component={LoginScreen} 
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen 
                  name="Signup" 
                  component={SignupScreen} 
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen 
                  name="Details" 
                  component={DetailsScreen} 
                  options={{
                    headerShown: true,
                  }}
                />
              </Stack.Navigator>
            )}
          </NavigationContainer>
        </View>
      </userContext.Provider>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
