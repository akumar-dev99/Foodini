import * as React from 'react';
import { StyleSheet, View, Text as RNText, ScrollView, 
  SafeAreaView, TouchableOpacity, Image, TextInput, KeyboardAvoidingView
} from 'react-native';

// custom rubik font test
import { Text } from '../components/StyledText';
import { Badge, Slider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { logout } from '../utils/auth';


export default function PostFormScreen({navigation, route, user}) {
    const [title, setTitle] = React.useState("");
    const [review, setReview] = React.useState("");
    const [keyword, setKeyword] = React.useState("");
    const [keywordList, setKeywordList] = React.useState([]);

    // state variables for the taste sliders
    const [taste, setTaste] = React.useState([]);

    function TasteButton(props) {
        const [pressed, setPressed] = React.useState(taste.includes(props.title))

        const addTaste = () => {
            if(!(taste.length == 2)) {
                let tmp = taste;
                tmp.push(props.title);
                setTaste(tmp);
                setPressed(true);
            }
        }

        const removeTaste = () => {
            let tmp = taste;
            let index = tmp.indexOf(props.title);
            if (index !== -1) {
                tmp.splice(index, 1);
                setTaste(tmp);
                setPressed(false);
            }

        }

        return (
            <TouchableOpacity style={pressed ? styles.tasteButtonSelected : styles.tasteButton}
                onPress={() => {
                    if(pressed) { removeTaste(); }
                    else { addTaste(); }
                }}
            >
                <Text> {props.title} </Text>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView style={{padding: 30, flex: 1, flexDirection: "column",}}
        showsVerticalScrollIndicator={true}>
            <Text style={{fontSize: 25, color: "#666666"}}>That looks delicious!</Text>
            <Text style={{fontSize: 15, color: "#aaaaaa"}}>Tell us about it.</Text>
            <View style={{flexDirection: "row", flexWrap: "nowrap", 
                paddingVertical: 15, alignItems: "center", justifyContent: "space-evenly"}}>
                <Image 
                style={{ width: 180, height: 240, borderRadius: 20,
                    borderColor: "#ffffff", borderWidth: 3, }}
                source={
                    { uri: route.params.data.uri }
                }
                />
                <View style={{flexDirection: "column", justifyContent: "center",
                    alignItems: "center", paddingHorizontal: 10,}}>
                <TouchableOpacity style={{padding: 0, }}
                    onPress={() => {
                        navigation.navigate("Picture");
                    }}>
                    <Ionicons
                    name="ios-close-circle-outline"
                    color="#444444"
                    size={50}
                    />
                </TouchableOpacity>
                </View>
            </View>
            <View style={{flex: 1, paddingVertical: 5,}}> 
                <Text style={{color: "#333333", fontSize: 20, marginBottom: 15,}}>What did you eat?</Text>

                <View style={styles.input}>
                <TextInput
                    placeholder="General Tso's Chicken"
                    onChangeText={(text) => setTitle(text)}
                    value={title}
                />
                </View>

                <Text style={{color: "#333333", fontSize: 20, marginVertical: 15,}}>How was your experience?</Text>
                <Text style={{color: "#666666", fontSize: 14, marginBottom: 5,}}>What keywords would you use?</Text>

                <View style={{flexDirection: "row", flexWrap: "nowrap", }}>
                <View style={{...styles.input, flex: 5, borderBottomRightRadius: 0, 
                        borderTopRightRadius: 0,}}>
                    <TextInput
                        placeholder='Smokey'
                        onChangeText={(text) => setKeyword(text)}
                        value={keyword}
                    />
                </View>

                <TouchableOpacity style={{...styles.button,
                    alignItems: "center", justifyContent: "center",
                    borderTopRightRadius: 5, borderBottomRightRadius: 5,
                    flex: 1,}}
                    onPress={() => {
                        if(keyword) { 
                            let tmp = keywordList;
                            tmp.push(keyword);
                            setKeywordList(tmp);
                            setKeyword("");
                        }
                    }}
                >
                    <Ionicons
                        size={25}
                        name='md-checkmark'
                        color="#5a5d81"
                    />
                </TouchableOpacity>
                
                </View> 

                <View style={{paddingVertical: 5, flexDirection: "row", flexWrap: "wrap",}}>
                {keywordList.map((x, i) => {
                return (
                    <Badge 
                    badgeStyle={{
                        backgroundColor: "#dddddd", 
                        borderColor: "#cccccc",
                        borderWidth: 1,
                        padding: 13, 
                        margin: 3, 
                        borderRadius: 0,
                    }} 
                    key={i} 
                    value={<Text style={{color: "#555555",}}> {x} </Text>} 
                    />
                ) 
                })}
                </View>

                <Text style={{color: "#666666", fontSize: 14, paddingBottom: 0,}}>How did it taste?</Text>
                <View style={{marginTop: 5, flexDirection: "row", flexWrap: "wrap", justifyContent: "center",  }}>
                    {/* <SliderComponent title="Sour" stateValue={sour} stateSetter={setSour} />
                    <SliderComponent title="Savory" stateValue={savory} stateSetter={setSavory} />
                    <SliderComponent title="Sweet" stateValue={sweet} stateSetter={setSweet} />
                    <SliderComponent title="Umami" stateValue={umami} stateSetter={setUmami} />
                    <SliderComponent title="Bitter" stateValue={bitter} stateSetter={setBitter} /> */}
                    {
                        ['Sour', 'Savory', 'Bitter', 'Sweet', 'Umami'].map((val, index) => {
                            return (
                                <TasteButton title={val} key={index}/>
                            )
                        })

                    }
                </View>

                <Text style={{color: "#666666", fontSize: 14, paddingVertical: 5,}}>Any review or comments?</Text>
                <View style={{...styles.input, justifyContent: "flex-start", marginTop: 2, marginBottom: 5,}}>
                    <TextInput
                        multiline
                        numberOfLines={4}
                        onChangeText={(text) => setReview(text)}
                        value={review}
                        editable
                        maxLength={150}
                        textAlignVertical="top"
                        placeholder="The mixture of sweet and spicy works really well. I definitely loved the veggies on the side, too!"
                    />
                </View>
                <View style={{flexDirection: "row", flexWrap: "nowrap", marginBottom: 30, justifyContent: "space-between"}}>
                    <Text style={{color: "black", fontSize: 10,}}>{review.length}/150</Text>
                    <TouchableOpacity style={{...styles.button, paddingVertical: 0, paddingHorizontal: 30, borderRadius: 5,}} onPress={() => {
                            console.log("completed form part 1!");
                        }}
                    >
                        <Ionicons
                            name="ios-arrow-round-forward"
                            color="#444444"
                            size={50}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      flex: 1,
    },
    input: {
      backgroundColor: "#fefefe", 
      borderRadius: 5, borderColor: "#dddddd", borderWidth: 1,
      padding: 10,
    },
    button: {
      paddingVertical: 10,
      backgroundColor: "#dddddd",
      borderColor: "#cccccc",
    },
    tasteButton: {
        padding: 15, 
        backgroundColor: "#dddddd",
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#bbbbbb",
        elevation: 0,
        margin: 4,
    },
    tasteButtonSelected: {
        padding: 15, 
        backgroundColor: "#999999",
        borderRadius: 3,
        borderWidth: 1, 
        borderColor: "#777777",
        margin: 4,
    }
});

PostFormScreen.navigationOptions = {
    header: null,
};
  