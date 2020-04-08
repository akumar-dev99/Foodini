import * as React from 'react';
import { StyleSheet, View, Text as RNText, SafeAreaView, ScrollView, 
    TextInput, Dimensions, ActivityIndicator, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Badge } from 'react-native-elements';
import { Text } from '../StyledText';

export function EditName({ initialFirst, initialLast, onChangeFirst, onChangeLast }) {
    const [first, setFirst] = React.useState(initialFirst);
    const [last, setLast] = React.useState(initialLast);
    return (
        <React.Fragment>
        {/* Headers */}
        <View style={{flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
            <View style={{ flex: 0.48, }}> 
                <Text style={{ fontSize: 12, }}>
                First
                </Text>
            </View>
            <View style={{ flex: 0.48,}}> 
                <Text style={{ fontSize: 12, }}>
                Last
                </Text>
            </View>
        </View>
        {/* Fields */}
        <View style={{ flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between", }}>
            <View style={{ flex: 0.48, ...styles.input, }}> 
                <TextInput
                defaultValue={first}
                value={first}
                onChangeText={(text) => {
                    setFirst(text);
                    onChangeFirst(text);
                }}
                />
            </View>
            <View style={{ flex: 0.48, ...styles.input}}> 
                <TextInput
                defaultValue={last}
                value={last}
                onChangeText={(text) => {
                    setLast(text);
                    onChangeLast(text);
                }}
                />
            </View>
        </View>
        </React.Fragment>
    );
}

export function EditMultiline({ title, initialVal, onChange }) {
    const [val, setVal] = React.useState(initialVal);
    return (
        <React.Fragment>
            <View style={{ flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
                <Text style={{ fontSize: 12, }}>
                {title}
                </Text>
                <Text style={{color: "black", fontSize: 10, alignSelf: "flex-end", }}>
                {val.length}/150
                </Text>
            </View>
            <View style={{ ...styles.input, }}>
                <TextInput
                    multiline
                    numberOfLines={5}
                    maxLength={150}
                    onChangeText={(text) => {
                        setVal(text);
                        onChange(text);
                    }}
                    defaultValue={val}
                    value={val}
                    textAlignVertical="top"
                />
            </View>
        </React.Fragment>
    );
}

export function EditArray({ title, initialArray, onChange }) {
    const [selection, setSelection] = React.useState(null);
    const [array, setArray] = React.useState(initialArray);

    const add = () => {
        if(selection && !(array.includes(selection))) {
            let tmp = array;
            tmp.push(selection);
            setSelection(null);
            setArray(tmp);
            onChange(tmp);
        }
    }

    const ArrayValue = (props) => {
        const [show, setShow] = React.useState(true);
        const remove = () => {
            let tmp = array;
            let index = tmp.indexOf(props.title);
            if (index !== -1) {
                tmp.splice(index, 1);
                setSelection(null);
                setArray(tmp);
                onChange(tmp);
                setShow(false);
            }
        }
        if(show) {
            return (
                <Badge 
                    badgeStyle={styles.badgeStyle}
                    onPress={remove}
                    value={
                        <Text style={{color: "#555555", }}>
                            {props.title}
                        </Text>
                    } 
                />
            )
        } else {
            return null;
        }
    }

    return (
        <React.Fragment>
            <View style={{ flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
                <Text style={{ fontSize: 12, }}>
                    {title}
                </Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "nowrap", }}>
                <View 
                    style={{ 
                        ...styles.input, flex: 6, 
                        borderTopRightRadius: 0, 
                        borderBottomRightRadius: 0, 
                    }}
                >
                    <TextInput
                        onChangeText={(text) => {
                            setSelection(text)
                        }}
                        placeholder={"Persian"}
                        value={selection}
                    />
                </View>
                <TouchableOpacity style={{ 
                    padding: 5, justifyContent: "center",
                    flex: 1, alignItems: "center",
                    ...styles.button }}
                    onPress={add}
                >
                    <Ionicons
                        name="ios-arrow-round-forward"
                        color="#333333"
                        size={35}
                    />
                </TouchableOpacity>
            </View>
            <Text style={{
                marginTop: 2, marginBottom: 10, fontSize: 10, 
                color: "#444444", fontWeight: "bold",
            }}>
                Press on a {title} Badge to remove it
            </Text>
            <View style={{
                flexDirection: "row", flexWrap: "wrap",
                justifyContent: "center",
            }}>
                {array.map((val, index) => {
                    return (
                        <ArrayValue title={val} key={index}/>
                    )
                })}
            </View>
        </React.Fragment>
    );
}

export function EditValue({ title, initialVal, onChange }) {
    const [val, setVal] = React.useState(initialVal);
    return (
        <React.Fragment>
            <Text style={{ fontSize: 12, }}>
                {title}
            </Text> 
            <View style={{ ...styles.input, }}>
                <TextInput
                    onChangeText={(text) => {
                        setVal(text);
                        onChange(text);
                    }}
                    defaultValue={val}
                    value={val}
                />
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#fefefe", borderColor: "#cccccc",
        borderWidth: 1, padding: 10, 
        borderRadius: 5,
    },
    button: {
        backgroundColor: "#ccc",
        borderTopRightRadius: 5, borderBottomRightRadius: 5,
    },
    badgeStyle: {
        backgroundColor: "#dbdbdb", 
        borderColor: "#cccccc",
        borderWidth: 0.5,
        elevation: 1,
        padding: 13, 
        margin: 3, 
    }
});