import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import PostPictureScreen from '../screens/PostPictureScreen';
import PostFormScreen from '../screens/PostFormScreen';

// create the stack navigator for the post functionality.
// 1. stack 1 taking picture
// 2. stack 2 filling out relevant information form
const PostStack = createStackNavigator(); 
const INITIAL_ROUTE_NAME = 'Picture';

export default function PostStackNavigator({navigation, route, user}) {
    // user contains the uid of the user that is currently logged in
    return (
        <PostStack.Navigator initialRouteName={INITIAL_ROUTE_NAME} 
            options={{headerShown: true}}
        >
            <PostStack.Screen
                name="Picture"
                component={PostPictureScreen}
                options={{
                    title: "Make it look nice!",
                    headerShown: false,
                }}
            />
            <PostStack.Screen
                name="Form"
                options={{
                    title: "Complete Foodini Post",
                }}
            >
                {(props) => <PostFormScreen {...props} user={user}/>}
            </PostStack.Screen>
        </PostStack.Navigator>
    )
}