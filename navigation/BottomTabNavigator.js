import * as React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';

// Import Screens
import ProfileScreen from '../screens/ProfileScreen';
import DishScreen from '../screens/DishScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import SocialScreen from '../screens/SocialScreen';

import PostStackNavigator from './PostStackNavigator';

// Import TabBarIcon Component
import TabBarIcon from '../components/TabBarIcon';

import { logout } from '../utils/auth';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Profile';

export default function BottomTabNavigator({user}) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  // We want to pass down the uid to each of the screens below.
  // This will help us determine the data we show on each screen.
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{ 
        labelStyle: styles.tabLabel,
      }}
    >
      <BottomTab.Screen
        name="Dishes"
        options={{
          title: 'Dishes',
          tabBarIcon: ({ focused }) => 
            <TabBarIcon focused={focused} name="md-pizza" />,
        }}
      >
        {(props) => <DishScreen {...props} user={user}/>}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="Restaurants"
        options={{
          title: 'Restaurants',
          tabBarIcon: ({ focused }) => 
            <TabBarIcon focused={focused} name="md-restaurant" />,
        }}
      >
        {(props) => <RestaurantScreen {...props} user={user}/>}
      </BottomTab.Screen>

      <BottomTab.Screen
        name="Add Post"
        options={{
          tabBarIcon: ({ focused }) => 
            <TabBarIcon post focused={focused} name="ios-add-circle-outline" />,
          tabBarLabel: () => { return }
        }}
      >
        {(props) => <PostStackNavigator {...props} user={user}/>}
      </BottomTab.Screen>

      <BottomTab.Screen
        name="Social"
        options={{
          tabBarIcon: ({ focused }) => 
            <TabBarIcon focused={focused} name="md-heart" />,
        }}
      >
        {(props) => <SocialScreen {...props} user={user}/>}
      </BottomTab.Screen>

      <BottomTab.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => 
            <TabBarIcon focused={focused} name="md-person" />,
        }}
      >
        {(props) => <ProfileScreen {...props} user={user}/>} 
      </BottomTab.Screen>
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    fontFamily: "rubik",
  }
})