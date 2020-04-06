import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text as RNText, Button} from 'react-native';
import { Text } from '../components/StyledText';
import * as Animatable  from 'react-native-animatable';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import {Feather, Ionicons} from '@expo/vector-icons';


// import sign in util function
import { loginWithPassword, } from '../utils/auth';


export default function LoginScreen({ navigation, route }) {
    // state hook to track input for email and password
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errMsg, setErrMsg] = React.useState(null);

    
    this.state = {
        showPass: true,
        press: false
      }
    
    
    showPass = () => {
      if (this.state.press== false) {
        this.setState({showPass: false, press: true})
      } else {
        this.setState({showPass: true, press: false})
      }

    }

    return (

        <View style={styles.loginContainer}>
             <View style={styles.header}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}> Welcome to Foodini! </Text>
            </View>


           <Animatable.View
           animation="fadeInUpBig" style={styles.footer}>
            
            <Text style={styles.signin}> E-MAIL</Text>
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
                    marginTop: 35
                             }]}> Password</Text>
            <View style={styles.action}>
            <Feather
            name="lock"
            color="#05375a"
            size={20}
            />
                <TextInput
                    placeholder='Enter your password'
                    style={styles.textinput}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry
                />
                <TouchableOpacity onPress = {this.showPass.bind(this)}>
                     <Feather
                     name={ this.state.press == false ? "eye": "eye-off"}
                     color="gray"
                     size={20}
                     />
          </TouchableOpacity>
            </View>
            
            <TouchableOpacity><Text style={{color:'#009bd1', marginTop: 15}}> Forgot Password?</Text></TouchableOpacity>
            

                <TouchableOpacity style={styles.button}
                    disabled={(email == "") || (password == "")}
                    color="#555555" 
                    title="Login" 
                    onPress={() => {
                        loginWithPassword(email, password)
                        .then(response => { 
                            console.log("Logged in!"); 
                            console.log(response);
                        })
                        .catch(error => { setErrMsg(error.message) });
                    }}
                ><Text>LOGIN</Text></TouchableOpacity>
                
                     <View style={{minWidth: "60%", marginTop: 10}}>
                     <TouchableOpacity  onPress = {() => navigation.navigate('Signup')}>
                        <View style={styles.button1}>
                     <Text style={styles.textSign1}> Sign Up </Text>
                    </View>
                    </TouchableOpacity>
               
            </View>
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
  loginContainer: {
    flex: 1,
    backgroundColor: 'orange',
  },
  header: {
    flex: 1,
    justifyContent:'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  button1: {
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 50,
    height: 50,
    justifyContent: 'center',
    borderColor: 'orange',
  },
  footer: {
    flex: 3,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
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

textSign1: {
    color: 'orange',
    fontWeight: 'bold'
},


});

LoginScreen.navigationOptions = {
  header: null,
};


