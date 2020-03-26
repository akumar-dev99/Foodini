import * as React from 'react';
import { StyleSheet, View, Text as RNText, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { Text } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import { Badge } from 'react-native-elements';

import { createNewUserDoc } from '../utils/db';

export default function DetailsScreen({ navigation, route }) {
    // helps us render items in the forms in perfect order  
    const [formStatus, setFormStatus] = React.useState(0); 
    const [allergyList, setAllergyList] = React.useState([]);
    const [restrictionList, setRestrictionList] = React.useState([]);


    const first = route.params.firstName;
    const last = route.params.lastName;
    const uid = route.params.uid;
    console.log(uid)
    navigation.setOptions({
        headerTitle: () => <Text style={{fontSize: 30}}>Hi, {first}!</Text>, 
        headerLeft: null
    })


    const AllergyForm = () => {
        const [allergy, setAllergy] = React.useState(null);
        const [allergySelection, setAllergySelection] = React.useState("");
        return (
            <>
                <Text style={{ fontSize: 22, color: "#222222", }}> 
                    Do you have any food allergies?
                </Text>

                <View style={{ alignItems: "center" ,marginTop: 12, 
                        flexDirection: "row", flexWrap: "nowrap", justifyContent: "center", }}> 
                    <TouchableOpacity onPress={() => { 
                            setAllergy(true);
                        }} style={allergy ? styles.buttonSelected : styles.button}>
                        <Text style={{fontSize: 15, textAlign: "center", }}> Yes </Text>
                    </TouchableOpacity>
                    <View style={{flex: 1}}/>
                    <TouchableOpacity onPress={() => { 
                            setAllergy(false);
                            setFormStatus(1);
                        }} style={(!allergy && allergy != null) ? styles.buttonSelected : styles.button}>
                        <Text style={{fontSize: 15, textAlign: "center", }}> No </Text>
                    </TouchableOpacity>

                </View>   
                {
                    allergy &&
                    <View style={{paddingVertical: 12,}}>
                        <Text style={{ fontSize: 15, color: "grey", }}>
                            No problem! Foodini will help you avoid them. Please indicate your allergies below
                        </Text>
                        <View style={{flexDirection: "row", flexWrap: "nowrap", marginTop: 10,}}>
                            <KeyboardAvoidingView enabled style={{...styles.input, flex: 5,}}>
                                <TextInput
                                    placeholder='Peanuts'
                                    onChangeText={(text) => setAllergySelection(text)}
                                    value={allergySelection}
                                />
                            </KeyboardAvoidingView>

                            <TouchableOpacity style={{...styles.button, marginHorizontal: 0,
                                alignItems: "center", justifyContent: "center", elevation: 0,
                                borderRadius: 0, borderTopRightRadius: 5, borderBottomRightRadius: 5,
                                borderWidth: 0, flex: 1,}}
                                onPress={() => {
                                    if(allergySelection) { 
                                        let tmp = allergyList;
                                        tmp.push(allergySelection);
                                        setAllergyList(tmp);
                                        setAllergySelection("");

                                        console.log("after adding allergy, now list is ", allergyList)
                                    }
                                }}
                            >
                                <Ionicons
                                    size={20}
                                    name='md-checkmark'
                                    color="#5a5d81"
                                />
                            </TouchableOpacity>
                            
                        </View>
                        <View style={{paddingVertical: 10, flexDirection: "row", flexWrap: "wrap",}}>
                            {allergyList.map((x, i) => {
                            return (
                                <Badge 
                                badgeStyle={{
                                    backgroundColor: "#eeeeee", 
                                    padding: 12, 
                                    margin: 3, 
                                    borderColor: "#cccccc",
                                    borderWidth: 0.5,
                                    elevation: 1,
                                }} 
                                key={i} 
                                value={<Text> {x} </Text>} 
                                />
                            ) 
                            })}
                        </View>
                        { allergyList.length > 0 &&
                            <TouchableOpacity style={{...styles.button, flex: 0, marginHorizontal: 0, marginTop: 0, 
                                    width: "50%", alignSelf: "center",}}
                                onPress={() => {
                                    setFormStatus(1);
                                }}
                            >
                                <Text style={{textAlign: "center",}}> Submit </Text>
                            </TouchableOpacity>
                        }
                    </View>
                }
            </>
        )
    }

    const RestrictionForm = () => {
        const [restriction, setRestriction] = React.useState(null);
        const [restrictionSelection, setRestrictionSelection] = React.useState("");
        return (
            <>
                <Text style={{ fontSize: 22, color: "#222222", }}> 
                    How about any dietary restrictions?
                </Text>

                <View style={{ alignItems: "center" ,marginTop: 12, 
                        flexDirection: "row", flexWrap: "nowrap", justifyContent: "center", }}> 
                    <TouchableOpacity onPress={() => { 
                            setRestriction(true);
                        }} style={restriction ? styles.buttonSelected : styles.button}>
                        <Text style={{fontSize: 15, textAlign: "center", }}> Yes </Text>
                    </TouchableOpacity>
                    <View style={{flex: 1}}/>
                    <TouchableOpacity onPress={() => { 
                            setRestriction(false);
                            setFormStatus(2);
                        }} style={(!restriction && restriction != null) ? styles.buttonSelected : styles.button}>
                        <Text style={{fontSize: 15, textAlign: "center", }}> No </Text>
                    </TouchableOpacity>

                </View>   
                {
                    restriction &&
                    <View style={{paddingVertical: 12,}}>
                        <Text style={{ fontSize: 15, color: "grey", }}>
                            Foodini's got your back for this, too. Just list them out for us, {first}
                        </Text>
                        <View style={{flexDirection: "row", flexWrap: "nowrap", marginTop: 10,}}>
                            <View style={{...styles.input, flex: 5,}}>
                                <TextInput
                                    placeholder='Halal'
                                    onChangeText={(text) => setRestrictionSelection(text)}
                                    value={restrictionSelection}
                                />
                            </View>

                            <TouchableOpacity style={{...styles.button, marginHorizontal: 0,
                                alignItems: "center", justifyContent: "center", elevation: 0,
                                borderRadius: 0, borderTopRightRadius: 5, borderBottomRightRadius: 5,
                                borderWidth: 0, flex: 1,}}
                                onPress={() => {
                                    if(restrictionSelection) { 
                                        let tmp = restrictionList;
                                        tmp.push(restrictionSelection);
                                        setRestrictionList(tmp);
                                        setRestrictionSelection("");

                                        console.log("after adding restriction, now list is ", restrictionList)
                                    }
                                }}
                            >
                                <Ionicons
                                    size={20}
                                    name='md-checkmark'
                                    color="#5a5d81"
                                />
                            </TouchableOpacity>
                            
                        </View>
                        <View style={{paddingVertical: 10, flexDirection: "row", flexWrap: "wrap",}}>
                            {restrictionList.map((x, i) => {
                            return (
                                <Badge 
                                badgeStyle={{
                                    backgroundColor: "#eeeeee", 
                                    padding: 12, 
                                    margin: 3, 
                                    borderColor: "#cccccc",
                                    borderWidth: 0.5,
                                    elevation: 1,
                                }} 
                                key={i} 
                                value={<Text> {x} </Text>} 
                                />
                            ) 
                            })}
                        </View>
                        { restrictionList.length > 0 &&
                            <TouchableOpacity style={{...styles.button, flex: 0, marginHorizontal: 0, marginTop: 0, 
                                    width: "50%", alignSelf: "center",}}
                                    onPress={() => {
                                        setFormStatus(2);
                                    }}
                            >
                                <Text style={{textAlign: "center",}}> Submit </Text>
                            </TouchableOpacity>
                        }
                    </View>
                }
            </>
        )
    }

    const FormHeader = () => {
        return (
            <View style={{marginBottom: 10, flexDirection: "row", flexWrap: "nowrap",}}> 
                <TouchableOpacity onPress={() => {
                    setFormStatus(0);    
                }}> 
                    <Ionicons
                        size={30}
                        name="ios-arrow-round-back"
                        color={formStatus == 1 ? "#5a5d81" : "#f1f1f1"}
                    />
                </TouchableOpacity>
                <View style={{flexDirection: "row", flex: 1, flexWrap: "nowrap", justifyContent: "center",}}>
                    <View style={{justifyContent: "center", marginHorizontal: 10,}}>
                        <Text style={{fontSize: 12, fontWeight: (formStatus == 0) ? "bold" : "normal", 
                            color: (formStatus == 0) ? "black" : "grey" }}> Allergies </Text>
                    </View>
                    <View style={{justifyContent: "center", marginHorizontal: 10}}>
                        <Text style={{fontSize: 12, fontWeight: (formStatus == 0) ? "normal" : "bold", 
                            color: (formStatus == 1) ? "black" : "grey" }}> Dietary Restrictions </Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
            <KeyboardAvoidingView style={styles.container} enabled behavior="height"> 
                <View style={{ paddingBottom: 10, 
                        borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#aaaaaa", }}>
                    <Text style={{width: "85%", color: "grey", margin: StyleSheet.hairlineWidth, textAlign: "justify",}}>
                        We need a little more information before we can get started.
                    </Text>
                </View>
                <View style={{ padding: 15, flex: 1, justifyContent: "center", }}>
                    { (formStatus != 2) && <FormHeader/> }
                    { (formStatus == 0) && <AllergyForm/> }
                    { (formStatus == 1) && <RestrictionForm/> }
                    { 
                        (formStatus == 2) && 
                        <>
                            <Text style={{ fontSize: 22, color: "#222222", }}> 
                                You're all set. Welcome to Foodini!
                            </Text>
                            <View style={{flexDirection: "row", flexWrap: "nowrap", flex: 0, justifyContent: "center"}}>
                            <TouchableOpacity style={{...styles.button, flex: 0, marginTop: 10, paddingHorizontal: 20}}
                                onPress={() => {
                                    createNewUserDoc(uid, first, last, allergyList, restrictionList)
                                    .then((response) => {
                                        navigation.navigate("Login");
                                    })
                                    .catch((error) => { console.log(error) });
                                }}
                            >
                                <Text> Login </Text>
                            </TouchableOpacity>
                            </View>
                        </>
                    }
                </View>
            </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    button: {
        paddingVertical: 10,
        backgroundColor: "#dddddd",
        borderColor: "#cccccc",
        borderWidth: 0.5,
        borderRadius: 5,
        elevation: 2,
        flex: 4,
    },
    buttonSelected: {
        paddingVertical: 10,
        backgroundColor: "#bbbbbb",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#999999",
        flex: 4,
    },
    input: {
        backgroundColor: "#ffffff", 
        borderTopLeftRadius: 5, borderBottomLeftRadius: 5,
        width: "65%", padding: 10, borderColor: "#eeeeee", 
        borderWidth: 1,
    }
    
  })

DetailsScreen.navigationOptions = {
  header: null,
};




