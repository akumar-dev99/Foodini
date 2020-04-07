import * as React from 'react';
import { StyleSheet, View, Text as RNText, SafeAreaView, ScrollView, 
  TextInput, Dimensions, ActivityIndicator, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Badge } from 'react-native-elements';
import { Text } from '../components/StyledText';

// import firestore document update function
import { UpdateDocTracker } from '../utils/db';

// get useSession to obtain user
import { useSession } from '../utils/auth';

export default function ProfileEditScreen({ navigation, route, }) {
  // TODO: Initialize state variables in score of ProfileEditScreen
  // function just to store the changed values. These states will not be
  // used as values in TextInputs in the functions (EditName/EditCity) etc.
  // This is to replace individual update buttons with one button on the 
  // the header
  // ======================================================================
  const user = useSession();
  // Avatar NOT EDITABLE AT THE MOMENT (TODO)
  function EditName({ initialFirst, initialLast }) {
    const [first, setFirst] = React.useState(initialFirst);
    const [last, setLast] = React.useState(initialLast);
    return (
      <React.Fragment>
        {/* Headers */}
        <View style={{flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
          <View style={{ flex: 0.87, flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
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
          <View style={{ flex: 0.1, padding: 5, }}/>
        </View>
        {/* Fields */}
        <View style={{ flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between", }}>
          <View style={{ flex: 0.87, flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between", }}>
            <View style={{ flex: 0.48, ...styles.input, }}> 
              <TextInput
                defaultValue={first}
                value={first}
                onChangeText={(text) => setFirst(text)}
              />
            </View>
            <View style={{ flex: 0.48, ...styles.input}}> 
              <TextInput
                defaultValue={last}
                value={last}
                onChangeText={(text) => setLast(text)}
              />
          </View>
          </View>
          <View style={{flex: 0.1, justifyContent: "center", 
            alignItems: "center", padding: 5,}}>
            <UpdateDocTracker 
              collectionName="users" 
              docName={user.uid}
              icon="ios-checkmark-circle-outline"
              updatePayload={{
                "info.firstname": first,
                "info.lastname": last,
              }}
            />
          </View>
        </View>
      </React.Fragment>
    );
  }

  function EditBio({ initialBio }) {
    const [bio, setBio] = React.useState(initialBio);
    return (
      <React.Fragment>
        <View style={{flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
          <View style={{ flex: 0.87, }}>
            <View style={{ flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
              <Text style={{ fontSize: 12, }}>
                Bio
              </Text>
              <Text style={{color: "black", fontSize: 10, alignSelf: "flex-end", }}>
                {bio.length}/150
              </Text>
            </View>
            <View style={{ ...styles.input, }}>
                <TextInput
                    multiline
                    numberOfLines={5}
                    maxLength={150}
                    onChangeText={(text) => { setBio(text) }}
                    defaultValue={bio}
                    value={bio}
                    textAlignVertical="top"
                />
            </View>
          </View>
          <View style={{flex: 0.1, justifyContent: "center", 
            alignItems: "center", padding: 5,}}>
            <UpdateDocTracker 
              collectionName="users" 
              icon="ios-checkmark-circle-outline"
              docName={user.uid}
              updatePayload={{
                "info.bio": bio,
              }}
            />
          </View>
        </View>
      </React.Fragment>
    );
  }

  function EditCultures({ initialCultures }) {
    const [cultureSelection, setCultureSelection] = React.useState(null);
    const [cultures, setCultures] = React.useState(initialCultures)

    const addCulture = () => {
      if(cultureSelection && !(cultures.includes(cultureSelection))) {
        let tmp = cultures;
        tmp.push(cultureSelection);
        setCultureSelection(null);
        setCultures(tmp);
      }
    }



    const CultureBadge = (props) => {
      const [show, setShow] = React.useState(true);

      const removeCulture = () => {
        let tmp = cultures;
        console.log(tmp);
        let index = tmp.indexOf(props.title);
        if (index !== -1) {
            tmp.splice(index, 1);
            setCultureSelection(null);
            setCultures(tmp);
            setShow(false);
        }
      }

      if(show) {
        return (
          <Badge 
            badgeStyle={styles.badgeStyle}
            onPress={removeCulture}
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
        <View style={{flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
          <View style={{ flex: 0.87, }}>
            <View style={{ flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
              <Text style={{ fontSize: 12, }}>
                Cultures
              </Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "nowrap", }}>
              <KeyboardAvoidingView enabled 
                style={{ 
                  ...styles.input, flex: 6, 
                  borderTopRightRadius: 0, 
                  borderBottomRightRadius: 0, 
                }}>
                  <TextInput
                      onChangeText={(text) => { setCultureSelection(text) }}
                      placeholder={"Persian"}
                      value={cultureSelection}
                  />
              </KeyboardAvoidingView>
              <TouchableOpacity style={{ 
                padding: 5, justifyContent: "center",
                flex: 1, alignItems: "center",
                ...styles.button }}
                onPress={addCulture}
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
              Press on a Culture Badge to remove it
            </Text>
            <View style={{
              flexDirection: "row", flexWrap: "wrap",
              justifyContent: "center",
            }}>
              {cultures.map((culture, index) => {
                return (
                  <CultureBadge title={culture} key={index}/>
                )
              })}
            </View>
          </View>
          <View style={{flex: 0.1, justifyContent: "center", 
            alignItems: "center", padding: 5,}}>
            <UpdateDocTracker 
              collectionName="users" 
              icon="ios-checkmark-circle-outline"
              docName={user.uid}
              updatePayload={{
                "preferences.cultures": cultures,
              }}
            />
          </View>
        </View>
      </React.Fragment>
    );
  }

  function EditCity({ initialCity }) {
    const [city, setCity] = React.useState(initialCity);
    return (
      <React.Fragment>
        <Text style={{ fontSize: 12, }}>
          City
        </Text> 
        <View style={{flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
          <View style={{ flex: 0.87, }}>
            <View style={{ ...styles.input, }}>
                <TextInput
                    onChangeText={(text) => { setCity(text) }}
                    defaultValue={city}
                    value={city}
                />
            </View>
          </View>
          <View style={{flex: 0.1, justifyContent: "center", 
            alignItems: "center", padding: 5,}}>
            <UpdateDocTracker 
              collectionName="users" 
              icon="ios-checkmark-circle-outline"
              docName={user.uid}
              updatePayload={{
                "info.location.city": city,
              }}
            />
          </View>
        </View>
      </React.Fragment>
    );
  }

  function EditEthnicity({ initialEthnicity }) {
    const [ethnicity, setEthnicity] = React.useState(initialEthnicity);
    return (
      <React.Fragment>
        <Text style={{ fontSize: 12, }}>
          Ethnicity
        </Text> 
        <View style={{flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
          <View style={{ flex: 0.87, }}>
            <View style={{ ...styles.input, }}>
                <TextInput
                    onChangeText={(text) => { setEthnicity(text) }}
                    defaultValue={ethnicity}
                    value={ethnicity}
                />
            </View>
          </View>
          <View style={{flex: 0.1, justifyContent: "center", 
            alignItems: "center", padding: 5,}}>
            <UpdateDocTracker 
              collectionName="users" 
              icon="ios-checkmark-circle-outline"
              docName={user.uid}
              updatePayload={{
                "info.ethnicity": ethnicity,
              }}
            />
          </View>
        </View>
      </React.Fragment>
    );
  }
  
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 10, }}>
        <EditName 
          initialFirst={route.params.data.info.firstname}
          initialLast={route.params.data.info.lastname}
        /> 
      </View>
      <View style={{ marginBottom: 10, }}>
        <EditBio 
          initialBio={route.params.data.info.bio}
        />
      </View>
      <View style={{ marginBottom: 10, }}>
        <EditCultures
          initialCultures={route.params.data.preferences.cultures}
        />
      </View>
      <View style={{ marginBottom: 10, }}>
        <EditCity
          initialCity={route.params.data.info.location.city}
        />
      </View>
      <View style={{ marginBottom: 30, }}>
        <EditEthnicity
          initialEthnicity={route.params.data.info.ethnicity}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
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

ProfileEditScreen.navigationOptions = {
  header: null,
};