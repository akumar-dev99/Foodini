import * as React from 'react';
import { StyleSheet, View, Text as RNText, SafeAreaView, ScrollView, 
  TextInput, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text } from '../components/StyledText';

// import firestore document update function
import { UpdateDocTracker } from '../utils/db';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function ProfileEditScreen({navigation, route, user}) {
  /*
  Sections in Profile Screen
  1. Name EDITABLE
  2. Bio EDITABLE
  3. Avatar 
  4. Cultural Preferences EDITABLE
  5. Address EDITABLE
  6. City EDITABLE
  7. Ethnicity EDITABLE
  */
  function EditName({ initial }) {
    const [first, setFirst] = React.useState(initial.first);
    const [last, setLast] = React.useState(initial.last);
    return (
      <React.Fragment>
        {/* Headers */}
        <View style={{flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
          <View style={{ flex: 0.87, flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
            <View style={{ flex: 0.48, }}> 
              <Text style={{ fontSize: 12, fontWeight: "bold", }}>
                First
              </Text>
            </View>
            <View style={{ flex: 0.48,}}> 
              <Text style={{ fontSize: 12, fontWeight: "bold", }}>
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

  function EditBio({ initial }) {
    const [bio, setBio] = React.useState(initial.bio);
    return (
      <React.Fragment>
        <View style={{flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
          <View style={{ flex: 0.87, }}>
            <View style={{ flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between"}}>
              <Text style={{ fontSize: 12, fontWeight: "bold", }}>
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

  return (
    
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 10, }}>
        <EditName initial={{ first: "Foodini", last: "Admin", }}/> 
      </View>
      <EditBio initial={{bio: "Hello"}}/>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    backgroundColor: "#fefefe", borderColor: "#cccccc",
    borderWidth: 1, padding: 10, 
    borderRadius: 5,
  },
});

ProfileEditScreen.navigationOptions = {
  header: null,
};


