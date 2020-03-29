import * as React from 'react';
import { StyleSheet, View, Text as RNText, ScrollView, 
  SafeAreaView, TouchableOpacity, Image, TextInput, KeyboardAvoidingView
} from 'react-native';
import { Text } from '../components/StyledText';
import { Badge } from 'react-native-elements';

import { Camera } from 'expo-camera';

import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

import { Slider } from 'react-native-elements';
import { setLightEstimationEnabled } from 'expo/build/AR';

export default function PostScreen() {
  console.log("POST")

  const [pictureTaken, setPictureTaken] = React.useState(false);
  const [imageData, setImageData] = React.useState(null);

  const CameraComponent = () => {
    const [hasPermission, setHasPermission] = React.useState(null);
    const [type, setType] = React.useState(Camera.Constants.Type.back);
    const isFocused = useIsFocused();
    var camera;
  
    React.useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, [])
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <React.Fragment>
        { isFocused &&
        <Camera style={{ flex: 1, }} type={type} ratio="4:3"
          ref={(ref) => { camera = ref; }}>
  
          <View style={{flex: 1, flexDirection: "column", justifyContent: "flex-end"}}>
            <View style={{paddingBottom: 20, flexDirection: "row", justifyContent: "space-evenly", 
                alignItems: "center",}}>
  
              <TouchableOpacity
                onPress={() => {
                  camera.takePictureAsync({ onPictureSaved: onPictureSaved});
              }}>
                <Ionicons
                  name='ios-radio-button-off'
                  color="#fefefe"
                  size={70}
                />
              </TouchableOpacity>
  
              <TouchableOpacity
                onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
                <Ionicons
                  name='ios-refresh'
                  color="#fefefe"
                  size={35}
                />
              </TouchableOpacity>
  
              </View>
            </View>
  
          </Camera>
          }
        </React.Fragment>
    );
  }

  const SliderComponent = (props) => {
    return (
      <View style={{...styles.input, margin: 4,}}>
        <Slider
          style={{width: 110}}
          thumbStyle={styles.sliderThumb}
          thumbTintColor="#dbdbdb"
          minimumTrackTintColor="#aaaaaa"
          maximumTrackTintColor="#dddddd"
          value={props.stateValue}
          onValueChange={value => { props.stateSetter(value); }}
          maximumValue={5}
          step={1}
        />   
        <View style={{flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
          <Text style={{color: "#555555", fontSize: 11, marginHorizontal: 5,}}>1</Text>
          <Text style={{fontWeight: "bold"}}>{props.title}</Text>
          <Text style={{color: "#555555", fontSize: 11, }}>5</Text>

        </View>
      </View>  
    )
  }

  const FormComponent = () => {
    const [title, setTitle] = React.useState("");
    const [keyword, setKeyword] = React.useState("");
    const [keywordList, setKeywordList] = React.useState([]);

    const [sour, setSour] = React.useState(null);
    const [umami, setUmami] = React.useState(null);
    const [sweet, setSweet] = React.useState(null);
    const [bitter, setBitter] = React.useState(null);
    const [savory, setSavory] = React.useState(null);
  
    return (
      <ScrollView style={{padding: 25, flex: 1, flexDirection: "column",}}
      showsVerticalScrollIndicator={true}>
        <Text style={{fontSize: 25, color: "#666666"}}>That looks delicious!</Text>
        <Text style={{fontSize: 15, color: "#aaaaaa"}}>Tell us about it.</Text>
        <View style={{flexDirection: "row", flexWrap: "nowrap", 
            paddingVertical: 15, alignItems: "center", justifyContent: "space-evenly"}}>
          <Image 
            style={{ width: 180, height: 240, borderRadius: 20,
              borderColor: "#ffffff", borderWidth: 3, }}
            source={
              { uri: imageData.uri }
            }
          />
          <View style={{flexDirection: "column", justifyContent: "center",
              alignItems: "center", paddingHorizontal: 10,}}>
            <TouchableOpacity style={{padding: 0, }}
              onPress={() => {
                setPictureTaken(false);
                setImageData(null);
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

          <View style={{paddingVertical: 10, flexDirection: "row", flexWrap: "wrap",}}>
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

          <Text style={{color: "#666666", fontSize: 14, marginTop: 0,}}>How did it taste?</Text>
          <View style={{marginTop: 10, flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
              <SliderComponent title="Sour" stateValue={sour} stateSetter={setSour} />
              <SliderComponent title="Savory" stateValue={savory} stateSetter={setSavory} />
              <SliderComponent title="Sweet" stateValue={sweet} stateSetter={setSweet} />
              <SliderComponent title="Umami" stateValue={umami} stateSetter={setUmami} />
              <SliderComponent title="Bitter" stateValue={bitter} stateSetter={setBitter} />
          </View>


        </View>
      </ScrollView>
    )
  }

  const onPictureSaved = photo => {
    console.log(photo);
    setPictureTaken(true);
    setImageData(photo);
  }

  return (
    <KeyboardAvoidingView style={styles.container} enabled >
      { !pictureTaken && <CameraComponent/> }
      { pictureTaken && <FormComponent/> }
    </KeyboardAvoidingView>
  );


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
  sliderThumb: {
    borderColor: "#bbbbbb",
    borderWidth: 1,
    elevation: 1,
  }
});

PostScreen.navigationOptions = {
  header: null,
};
