import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity } from 'react-native';

import { Text } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';

// to logout
import { logout } from '../utils/auth';

// create the stack navigator for the post functionality.
// 1. stack 1 to see profile
// 2. stack 2 to edit profile
const ProfileStack = createStackNavigator(); 
const INITIAL_ROUTE_NAME = 'View Profile';

export default function ProfileStackNavigator({navigation, route, user}) {
    const navigateToEdit = () => {
        navigation.navigate("Edit Profile");
    }

    return (
        <ProfileStack.Navigator initialRouteName={INITIAL_ROUTE_NAME} 
            options={{headerShown: true}}
        >
            <ProfileStack.Screen
                name="View Profile"
                options={{
                    title: "Profile",
                    headerRight: () => {
                        return (
                            <View style={{flexDirection: "row", flexWrap: "nowrap", marginRight: 5,}}>
                                <TouchableOpacity style={{ padding: 10}}
                                    onPress={navigateToEdit}    
                                >
                                    <Ionicons
                                        name="ios-build"
                                        size={30}
                                        color="#333"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ padding: 10}} 
                                    onPress={logout}
                                >
                                    <Ionicons
                                        name="ios-log-out"
                                        size={30}
                                        color="#333"
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    }
                }}
            >
                {(props) => <ProfileScreen {...props} user={user}/>}
            </ProfileStack.Screen>
            <ProfileStack.Screen
                name="Edit Profile"
                options={{
                    title: "Edit Profile",
                }}
            >
                {(props) => <ProfileEditScreen {...props} user={user}/>}
            </ProfileStack.Screen>
        </ProfileStack.Navigator>
    )
}

