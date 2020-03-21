import * as React from 'react';
import { StyleSheet, View, Text as RNText, Button, TextInput } from 'react-native';
import { Text } from '../components/StyledText';

const doSignup = (email, password) => {
    console.log("Virtual sign up with email", email);
    console.log("and password", password);
}

export default function DetailsScreen({ navigation, route }) {
    const first = route.params.firstName;
    const last = route.params.lastName;
    return (
        <>
            <View style={styles.container}>
                <View style={{ width: "100%", marginTop: 50, }}>
                    <Text style={{fontSize: 40}}>Hi, {first}! </Text>
                    <Text style={{color: "grey"}}> It's a pleasure to see you here!</Text>
                    <Text style={{color: "grey"}}> Please, tell us more about yourself.</Text>

                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: { 
      flex: 1,
      padding: 20,
    },
  })

DetailsScreen.navigationOptions = {
  header: null,
};




