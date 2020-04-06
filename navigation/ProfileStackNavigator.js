import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity } from 'react-native';

import { Text } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';

// create the stack navigator for the post functionality.
// 1. stack 1 to see profile
// 2. stack 2 to edit profile
const ProfileStack = createStackNavigator(); 
const INITIAL_ROUTE_NAME = 'View Profile';

export default function ProfileStackNavigator({ navigation, route, }) {
    return (
        <ProfileStack.Navigator initialRouteName={INITIAL_ROUTE_NAME} 
            options={{headerShown: true}}
        >
            <ProfileStack.Screen
                name="View Profile"
                component={ProfileScreen}
                options={{
                    title: "Profile",
                }}
            />
            <ProfileStack.Screen
                name="Edit Profile"
                component={ProfileEditScreen}
                options={{
                    title: "Edit Profile",
                }}
            />
        </ProfileStack.Navigator>
    )
}

