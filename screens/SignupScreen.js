import * as React from 'react';
import { StyleSheet, View, Text as RNText, Button, TouchableOpacity} from 'react-native';
import { Text } from '../components/StyledText';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import Feather from '@expo/vector-icons/Feather';
import * as Animatable  from 'react-native-animatable';
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
           <View style={styles.header}>
        <Text style={styles.text_header}>BECOME A PART OF FOODINI!</Text>
      </View>
      <Animatable.View 
        animation="fadeInUpBig" style={styles.footer}>
            <View style={{ justifyContent: 'space-between', flexWrap: "nowrap"}}>
              
            <Text style={styles.signin}> FIRST</Text>
              <View style={styles.action}>
                  <TextInput
                      placeholder="John"
                      style={styles.textinput}
                      onChangeText={(text) => setFirst(text)}
                      value={first}
                  />
              </View>

              <Text style={[styles.signin, {marginTop: 10}]}> LAST</Text>
              <View style={styles.action}>
                <TextInput
                    placeholder="Doe"
                    onChangeText={(text) => setLast(text)}
                    style={styles.textinput}
                    value={last}
                />
              </View>
            </View>

          <Text style={[styles.signin, {
           marginTop: 10
             }]}> E-MAIL</Text>
           <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color="#05375a"
            size={20}
            />
                <TextInput
                    placeholder="johndoe@gmail.com"
                    style={styles.textinput}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
            </View>


            <Text style={[styles.signin, {
           marginTop: 10
             }]}>Password</Text>
               <View style={styles.action}>
               <Feather
                 name="lock"
                color="#05375a"
                  size={20}
                  />
                <TextInput
                    placeholder='Enter your password'
                    onChangeText={(text) => setPassword(text)}
                    style={styles.textinput}
                    value={password}
                    secureTextEntry
                />
                 <TouchableOpacity>
                   <Feather
                 name="eye-off"
                 color="gray"
                size={20}
                 />
                </TouchableOpacity>
            </View>

           <Text style={[styles.signin, {
           marginTop: 10
             }]}> Confirm Password</Text>
               <View style={styles.action}>
               <Feather
                 name="lock"
                color="#05375a"
                  size={20}
                  />
                <TextInput
                    editable={password != "" && password.length >= 6}
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfPassword(text)}
                    style={styles.textinput}
                    value={confPassword}
                    secureTextEntry
                />
                 <TouchableOpacity>
                   <Feather
                 name="eye-off"
                 color="gray"
                size={20}
                 />
                </TouchableOpacity>
            </View>

                <TouchableOpacity style={styles.button}
                    disabled={(first == "") || (last == "") || (email == "")  
                            || (password == "") || (confPassword == "")}
                    color="#555555" 
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
                >
                  <Text  style={styles.textSign} >SIGN UP</Text>
                    </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => navigation.navigate('Login')}
                >
                <Text style={styles.textSign1}>Login to your Account</Text>
                </TouchableOpacity>
     

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

        </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
    },
   
    header: {
      flex: 1,
      justifyContent:'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50,
    },
    footer: {
      flex: 3,
      backgroundColor: 'white',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
    },
    text_header: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30
    },

    input: {
      elevation: 1, backgroundColor: "#e0e0e0", 
      borderRadius: 10, marginTop: 10,
      padding: 10,
    },
    signin: {
      color: '#05375a',
      fontSize: 18
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
    },
    textinput: {
      flex: 1,
      paddingLeft: 10,
      color: '#05375a'
    },
    button: {
        alignItems: 'center',
        marginTop: 30,
        borderWidth: 0.5,
        borderRadius: 50,
        height: 50,
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderColor: 'orange',
    },
  
    button1: {
      alignItems: 'center',
      marginTop: 10,
      borderWidth: 0.5,
      borderRadius: 50,
      height: 50,
      justifyContent: 'center',
      borderColor: 'orange',
  },
    textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
  textSign1: {
      color: 'orange',
      fontWeight: 'bold'
  },
  
  })

SignupScreen.navigationOptions = {
  header: null,
};




