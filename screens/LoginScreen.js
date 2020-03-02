import * as React from 'react';
import { StyleSheet, View, Text as RNText, Button, TextInput } from 'react-native';
import { Text } from '../components/StyledText';

// import sign in util function
import { loginWithPassword, logout } from '../utils/auth';

export default function LoginScreen() {
    // state hook to track input for email and password
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={{ fontSize: 25, marginBottom: 10 }}> Login to Foodini </Text>

                <View style={styles.input}>
                    <TextInput
                        placeholder="johndoe@gmail.com"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                </View>

                <View style={styles.input}>
                    <TextInput
                        placeholder='Enter your password'
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry
                    />
                </View>

                <View style={{marginTop: 10}}>
                    <Button 
                    color="orange" 
                    title="Login" 
                    onPress={() => {
                        loginWithPassword(email, password);
                    }}
                    // onPress={logout}
                    />
                </View>
            </View>
        </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    width: "65%",
    alignItems: "center",
    flexDirection: "column",
  },
  input: {
      width: "100%",
      padding: 10, 
      marginTop: 5,
      backgroundColor: "whitesmoke",
      borderRadius: 2, elevation: 1,
  }
});

LoginScreen.navigationOptions = {
  header: null,
};


