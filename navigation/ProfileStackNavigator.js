import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';

// create the stack navigator for the post functionality.
// 1. stack 1 to see profile
// 2. stack 2 to edit profile
const ProfileStack = createStackNavigator(); 
const INITIAL_ROUTE_NAME = 'View Profile';

export default function ProfileStackNavigator({navigation, route, user}) {
    // user contains the uid of the user that is currently logged in
    return (
        <ProfileStack.Navigator initialRouteName={INITIAL_ROUTE_NAME} 
            options={{headerShown: true}}
        >
            <ProfileStack.Screen
                name="View Profile"
                options={{
                    title: "Profile",
                }}
            >
                {(props) => <ProfileScreen {...props} user={user}/>}
            </ProfileStack.Screen>
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