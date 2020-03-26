import * as React from 'react';
import { StyleSheet, View, Text as RNText, Button, TextInput } from 'react-native';
import { Text } from '../components/StyledText';

import { createAccountWithPasswordAdmin, checkEmailExists } from '../utils/auth';


export default function SignupScreen({ navigation, route }) {
    // state hook to track input for email and password
    const [first, setFirst] = React.useState("");
    const [last, setLast] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confPassword, setConfPassword] = React.useState("");
    const [errMsg, setErrMsg] = React.useState(null);
    return (
        <View style={styles.container}>
            <Text style={{ color: "#555555", fontSize: 25, marginBottom: 10 }}> Create an Account </Text>
            <View style={{flexDirection: "row", flexWrap: "nowrap", width: "65%",}}>
              <View style={{...styles.input, flex: 1}}>
                  <TextInput
                      placeholder="John"
                      onChangeText={(text) => setFirst(text)}
                      value={first}
                  />
              </View>

              <View style={{...styles.input, marginLeft: 5, flex: 1,}}>
                <TextInput
                    placeholder="Doe"
                    onChangeText={(text) => setLast(text)}
                    value={last}
                />
              </View>
            </View>

            <View style={{...styles.input, width: "65%",}}>
                <TextInput
                    placeholder="johndoe@gmail.com"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
            </View>
            <View style={{...styles.input, width: "65%",}}>
                <TextInput
                    placeholder='Enter your password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry
                />
            </View>
            <View style={{...styles.input, width: "65%",}}>
                <TextInput
                    editable={password != "" && password.length >= 6}
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfPassword(text)}
                    value={confPassword}
                    secureTextEntry
                />
            </View>

            <View style={{minWidth: "60%", marginTop: 20}}>
                <Button 
                    disabled={(first == "") || (last == "") || (email == "")  
                            || (password == "") || (confPassword == "")}
                    color="#555555" 
                    title="Sign up" 
                    onPress={() => {
                      checkEmailExists(email)
                      .then((response) => {
                        if(response.length == 0) {
                          createAccountWithPasswordAdmin(email, password)
                          .then((createdUser) => {
                            navigation.navigate("Details", {
                              uid: createdUser.data.uid,
                              firstName: first,
                              lastName: last,
                            });
                          })
                          .catch(() => { setErrMsg("Account creation failed!") });
                        } else { setErrMsg("Email is already in use. Please try again!"); }
                      })
                      .catch((error) => setErrMsg(error.message));
                    }}
                />
            </View>
            <View style={{minWidth: "60%", marginTop: 10}}>
                <Button
                    color="#aaaaaa"
                    title="Login to your account"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>

            {
              ((password != "") && (password.length < 6)) &&
              <Text style={{textAlign: "center", color: "red", marginTop: 15,}}>
                Passwords must be at least 6 alphanumeric characters
              </Text>
            }


            {
              ((confPassword != "") && (confPassword != password))  &&
              <Text style={{color: "red", marginTop: 15,}}>
                Passwords must match!
              </Text>
            }

            {
              ((confPassword != "") && (confPassword == password))  &&
              <Text style={{color: "green", marginTop: 15,}}>
                Passwords match
              </Text>
            }

            {
              errMsg &&
              <Text style={{color: "red", marginTop: 15, width: "65%",
                      textAlign: "center",}}>
                {errMsg}
              </Text>
            } 


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      elevation: 1, backgroundColor: "#e0e0e0", 
      borderRadius: 10, marginTop: 10,
      padding: 10,
    }
  })

SignupScreen.navigationOptions = {
  header: null,
};




