import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from '../components/StyledText';

// Import Screens
import ProfileScreen from '../screens/ProfileScreen';
import DishScreen from '../screens/DishScreen';
import RestaurantScreen from '../screens/RestaurantScreen';

// Import TabBarIcon Component
import TabBarIcon from '../components/TabBarIcon';

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
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => 
            <TabBarIcon focused={focused} name="ios-person" />,
        }}
      > 
        {(props) => <ProfileScreen {...props} user={user} />  }
      </BottomTab.Screen>
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
        component={RestaurantScreen}
        options={{
          title: 'Restaurants',
          tabBarIcon: ({ focused }) => 
            <TabBarIcon focused={focused} name="md-restaurant" />,
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

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  
  switch (routeName) {
    case 'Profile':
      return <Text> Profile </Text>
    case 'Dishes':
      return <Text> Explore your tastes </Text>
    case 'Restaurants':
      return <Text> Find your platter </Text>;
  }
}

// return {
//   interests: ["Japanese", "Korean", "Indian", "African", "Chinese", "Spanish", "Mexican"],
//   basicInfo: {
//     address: "39-02 Primary Avenue",
//     city: "Cape Town",
//     ethnicity: "Asian"
//   },
//   likes: 5004,
//   reviews: 109,
//   name: "Johnny Sins",
//   bio: "I'm an easy going foodie new in town. I love to eat Korean food. It's a pleasure eating.",
//   avatarImage: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
// }