  
import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import DishDetailScreen from '../screens/DishDetailScreen';
import MoreImage from '../components/DishDetailScreen/MoreImage';
import Tastelike from '../components/DishDetailScreen/Tastelike';
import DishSearchScreen from '../components/DishDetailScreen/DishSearchScreen';
import DishScreen from '../screens/DishScreen';

// create the stack navigator for the post functionality.
// 1. stack 1 to see profile
// 2. stack 2 to edit profile
const DishStack = createStackNavigator(); 
const INITIAL_ROUTE_NAME = 'Dishes';

export default function DishStackNavigator({ navigation, route, }) {
    return (
        <DishStack.Navigator initialRouteName={INITIAL_ROUTE_NAME} 
            options={{headerShown: true}}
        >
            <DishStack.Screen name="Dishes" component={DishScreen} />
            <DishStack.Screen name="DishDetails" component={DishDetailScreen} />
            <DishStack.Screen name="MoreImage" component={MoreImage} />
            <DishStack.Screen name="Tastelike" component={Tastelike} />
            <DishStack.Screen name="DishSearch" component={DishSearchScreen} />
        </DishStack.Navigator>
    )
}