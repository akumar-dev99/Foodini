import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from '../components/StyledText';

// Import Screens
import ProfileScreen from '../screens/ProfileScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import PostScreen from '../screens/PostScreen';
import SocialScreen from '../screens/SocialScreen';

// Import TabBarIcon Component
import TabBarIcon from '../components/TabBarIcon';

// import the Dish navigator
import DishStackNavigator from '../navigation/DishStackNavigator';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Profile';

export default function BottomTabNavigator({navigation, route, user}) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  // We want to pass down the uid to each of the screens below.
  // This will help us determine the data we show on each screen.

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{ 
        labelStyle: styles.tabLabel,
      }}
    >
      <BottomTab.Screen
        name="Dish"
        component={DishStackNavigator}
        options={{
          title: 'Dish',
          tabBarIcon: ({ focused }) => 
            <TabBarIcon focused={focused} name="md-pizza" />,
        }}
      />
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
        {(props) => <PostScreen {...props} user={user}/>}
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

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  
  switch (routeName) {
    case 'Profile':
      return <Text> Profile </Text>
    case 'Dishes':
      return <Text> Explore your tastes </Text>
    case 'Restaurants':
      return <Text> Find your platter </Text>
    case 'Social':
      return <Text> Activity Feed </Text>
    case 'Add Post':
      return <Text> New Post </Text>
  }
}