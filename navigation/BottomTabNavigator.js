import * as React from 'react';
import { StyleSheet, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screens
import DishScreen from '../screens/DishScreen';
import SocialScreen from '../screens/SocialScreen';

// some components are navigators. Import navigators.
import PostStackNavigator from './PostStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import RestaurantNavigator from './RestaurantNavigator';

// Import TabBarIcon Component
import TabBarIcon from '../components/TabBarIcon';

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
        keyboardHidesTabBar: true,
      }}
    >
      <BottomTab.Screen
        name="Dishes"
        component={DishScreen}
        options={{
          title: 'Dishes',
          tabBarIcon: ({ focused }) => 
            <TabBarIcon focused={focused} name="md-pizza" />,
        }}
      />
      <BottomTab.Screen
        name="Restaurants"
        component={RestaurantNavigator}
        options={{
          title: 'Restaurants',
          tabBarIcon: ({ focused }) => 
            <TabBarIcon focused={focused} name="md-restaurant" />,
        }}
      />
      <BottomTab.Screen
        name="Add Post"
        component={PostStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => 
            <TabBarIcon post focused={focused} name="ios-add-circle-outline" />,
          tabBarLabel: () => { return }
        }}
      />
      <BottomTab.Screen
        name="Social"
        component={SocialScreen}
        options={{
          tabBarIcon: ({ focused }) => 
            <TabBarIcon focused={focused} name="md-heart" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => 
            <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    fontFamily: "rubik",
  }
})
