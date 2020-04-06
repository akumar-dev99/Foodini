import * as React from 'react';
import { StyleSheet, View, Text as RNText, ScrollView, 
  SafeAreaView, TouchableOpacity, Image, TextInput, KeyboardAvoidingView
} from 'react-native';

// custom rubik font test
import { Text } from '../components/StyledText';
import { Badge, Slider, AirbnbRating, CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export default function PostFormScreen({navigation, route, user}) {
    // for part 1
    const [title, setTitle] = React.useState("");
    const [review, setReview] = React.useState("");
    const [keyword, setKeyword] = React.useState("");
    // for part 2
    const [restaurant, setRestaurant] = React.useState("");
    const [restaurantReview, setRestaurantReview] = React.useState("");
    const [rating, setRating] = React.useState(null);

    const [keywordList, setKeywordList] = React.useState([]);
    const [taste, setTaste] = React.useState([]);

    console.log(route.params.data.height);
    console.log(route.params.data.width);

    const [formStatus, setFormStatus] = React.useState(0);

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
        <ScrollView style={{flex: 1, flexDirection: "column",}}>
            <View style={{padding: 10, flexDirection: "row", justifyContent: "center",
                backgroundColor: "#fefefe", borderBottomColor: "#ededed",
                borderBottomWidth: 1, }}>
                <Image 
                style={{ width: 156, height: 208, borderRadius: 20, }}
                source={
                    { uri: route.params.data.uri }
                }
                />
            </View>
            <View style={{padding: 15, flex: 1, }}> 
                {
                    (formStatus == 0) &&
                    <React.Fragment>
                        <Text style={{color: "#333333", fontSize: 20, marginBottom: 15,}}>
                            What did you eat?
                            </Text>
                        <Text style={{color: "#666666", fontSize: 14, marginBottom: 5,}}>
                            Name of Dish
                        </Text>
                        <View style={styles.input}>
                            <TextInput
                                placeholder="General Tso's Chicken"
                                onChangeText={(text) => setTitle(text)}
                                value={title}
                            />
                        </View>

                        <Text style={{color: "#333333", fontSize: 20, marginVertical: 15,}}>
                            How was your experience?
                        </Text>
                        <Text style={{color: "#666666", fontSize: 14, marginBottom: 5,}}>
                            What keywords would you use?
                        </Text>

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
                                backgroundColor: "#cccccc", 
                                borderColor: "#aaaaaa",
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
                            {
                                ['Sour', 'Savory', 'Bitter', 'Sweet', 'Umami'].map((val, index) => {
                                    return (
                                        <TasteButton title={val} key={index}/>
                                    )
                                })

                            }
                        </View>

                        <View style={{flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
                            <Text style={{color: "#666666", fontSize: 14, paddingVertical: 5,}}>Any review or comments?</Text>
                            <Text style={{color: "black", fontSize: 10, alignSelf: "flex-end"}}>{review.length}/150</Text>
                        </View>
                        <View style={{...styles.input, marginTop: 2, marginBottom: 5,}}>
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
                        <View style={{flexDirection: "row", flexWrap: "nowrap", justifyContent: "flex-end"}}>
                            <TouchableOpacity style={{...styles.button, paddingVertical: 0, paddingHorizontal: 30, borderRadius: 5,}} onPress={() => {
                                    setFormStatus(1);
                                }}
                            >
                                <Ionicons
                                    name="ios-arrow-round-forward"
                                    color="#444444"
                                    size={50}
                                />
                            </TouchableOpacity>
                        </View>
                    </React.Fragment>
                }

                {
                    (formStatus == 1) &&
                    <React.Fragment>
                        <View style={{flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}> 
                            <TouchableOpacity style={{paddingHorizontal: 30, paddingLeft: 0, paddingBottom: 10, backgroundColor: "transparent"}}
                                onPress={() => { setFormStatus(0); }}
                            >
                                <Ionicons
                                    name="md-arrow-back"
                                    size={25}
                                    color="#888888"
                                />
                            </TouchableOpacity>
                            {/* <TouchableOpacity style={{justifyContent: "center", paddingBottom: }} onPress={() => { setFormStatus(2); }}>
                                <Text style={{color: "#666666",}}> Skip </Text>
                            </TouchableOpacity> */}
                        </View>
                        <Text style={{color: "#333333", fontSize: 20, marginBottom: 15,}}>How was the place?</Text>
                        <Text style={{color: "#666666", fontSize: 14, marginBottom: 5,}}>Name of Restaurant</Text>
                        <View style={styles.input}>
                            <TextInput
                                placeholder="Red Mountain Noodle House"
                                onChangeText={(text) => setRestaurant(text)}
                                value={restaurant}
                            />
                        </View>
                        <Text style={{color: "#666666", fontSize: 14, marginVertical: 5,}}>How would you rate it?</Text>
                        <View style={{ backgroundColor: "#fefefe", padding: 10, borderColor: "#dddddd", borderWidth: 1, borderRadius: 5,}}>
                            <AirbnbRating
                                onFinishRating={(rating) => { setRating(rating); }}
                                showRating={false}
                                defaultRating={rating}
                                size={35}
                                
                            />
                        </View>
                        <View style={{flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
                            <Text style={{color: "#666666", fontSize: 14, marginVertical: 5,}}>What was the place like?</Text>
                            <Text style={{color: "black", fontSize: 10, alignSelf: "flex-end",}}>{restaurantReview.length}/150</Text>
                        </View>

                        <View style={{...styles.input, marginBottom: 5,}}>
                            <TextInput
                                multiline
                                numberOfLines={4}
                                maxLength={150}
                                onChangeText={(text) => { setRestaurantReview(text) }}
                                value={restaurantReview}
                                placeholder="The vibe of the place was amazing. Very homey."
                                textAlignVertical="top"
                            />
                        </View>
                        <View style={{flexDirection: "row", flexWrap: "nowrap", justifyContent: "flex-end"}}>
                            <TouchableOpacity style={{...styles.button, paddingVertical: 0, paddingHorizontal: 30, borderRadius: 5,}} onPress={() => {
                                    setFormStatus(2);
                                }}
                            >
                                <Ionicons
                                    name="ios-arrow-round-forward"
                                    color="#444444"
                                    size={50}
                                />
                            </TouchableOpacity>
                        </View>
                    </React.Fragment>
                }

                { 
                    (formStatus == 2) &&
                    <React.Fragment>
                        <View style={{flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}> 
                            <TouchableOpacity style={{paddingHorizontal: 30, paddingLeft: 0, paddingBottom: 10, backgroundColor: "transparent"}}
                                onPress={() => { setFormStatus(1); }}
                            >
                                <Ionicons
                                    name="md-arrow-back"
                                    size={25}
                                    color="#888888"
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={{color: "#333333", fontSize: 20, marginBottom: 15,}}>You're all set!</Text>
                        <Text style={{color: "#666666", fontSize: 14, marginBottom: 5,}}>Heres an overview.</Text>
                        <View style={{backgroundColor: "#fefefe", borderColor: "#dddddd", 
                            borderWidth: 1, marginVertical: 5, elevation: 2, height: 200}}/>
                        <View style={{flexDirection: "row", flexWrap: "nowrap", justifyContent: "flex-end", marginVertical: 5,}}>
                            <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 15, backgroundColor: "#dedede",
                                    borderColor: "#bbbbbb", borderWidth: 1, borderRadius: 5, }}
                                    onPress={() => {
                                        // do backend stuff here
                                        navigation.navigate("Picture");
                                    }}>
                                <Text> Submit Post </Text>
                            </TouchableOpacity>

                        </View>
                    </React.Fragment>
                }
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
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#bbbbbb",
        elevation: 0,
        margin: 4,
    },
    tasteButtonSelected: {
        padding: 15, 
        backgroundColor: "#999999",
        borderRadius: 15,
        borderWidth: 1, 
        borderColor: "#777777",
        margin: 4,
    }
});

PostFormScreen.navigationOptions = {
    header: null,
};
  