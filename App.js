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


import useLinking from './navigation/useLinking';

// for sign in observer
import firebase from './utils/firebaseConfig';
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

YellowBox.ignoreWarnings(['Setting a timer']);

var auth = firebase.auth();
const Stack = createStackNavigator();

export default function App(props) {
  // States for loading
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const [authState, setState] = React.useState(null);

  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'rubik': require('./assets/fonts/Rubik-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
        const unsubscribe = auth.onAuthStateChanged(userDetails => {
          console.log(userDetails);
          setState(userDetails)
        });
        return unsubscribe;
      }
    }
    loadResourcesAndDataAsync();
  }, [auth]);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          {(authState) ? (
            <BottomTabNavigator user={authState}/> 
          ) : (
            <Stack.Navigator>
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
