import * as React from 'react';
import { ActivityIndicator, StyleSheet, View, TouchableOpacity, 
  Text as RNText, ScrollView, Button, SafeAreaView } from 'react-native';
import { Text } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import { Badge, ListItem, SearchBar } from 'react-native-elements';

// Import custom components for this profile screen
import UserAvatar from '../components/ProfileScreen/UserAvatar';

// Link screen to firebase functionality
import { useSession } from '../utils/auth';
import { useFirestoreDoc } from '../utils/db';
import { logout } from '../utils/auth';

export default function ProfileScreen({ navigation, route, }) {
  navigation.setOptions({
    headerRight: () => {
        return (
            <View style={{flexDirection: "row", flexWrap: "nowrap", marginRight: 5,}}>
                <TouchableOpacity style={{ padding: 10}}
                    onPress={() => {
                      if(data) { 
                        navigation.navigate("Edit Profile", {
                          data,
                        }); 
                      }
                    }}    
                >
                    <Ionicons
                        name="ios-build"
                        size={30}
                        color="#333"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10}} 
                    onPress={logout}
                >
                    <Ionicons
                        name="ios-log-out"
                        size={30}
                        color="#333"
                    />
                </TouchableOpacity>
            </View>
        )
    }
  })

  // data retrieval
  const user = useSession();
  const { isLoading, data } = useFirestoreDoc('users', user.uid);
  // retrive the data for the user, using the firestore doc function. First parameter is collection name
  // while the second is the name of the document to query.
  return (
    <React.Fragment>
      { isLoading && <Loading/>}
      { !isLoading && 
      <SafeAreaView style={styles.container} >
        <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>

          <View style={{ padding: 15, paddingBottom: 0, backgroundColor: "#fefefe", elevation: 5,}}>
          {/* Introduction Section */}
          <View style={styles.introductionContainer}>
              <View style={{marginRight: 10,}}>
                <UserAvatar userName={data.info.firstname} 
                  userImage={data.avatar}/>
              </View>
              <View style={{flexDirection: "column", flex: 1,}}>
                <Text style={{fontSize: 22,}}>{data.info.firstname + " " + data.info.lastname}</Text>
                <ScrollView style={{marginTop: 5, }}> 
                  <Text style={{color: "#5a5d81", textAlign: "left",}}>
                    {data.info.bio}
                    </Text> 
                </ScrollView>
              </View>
            </View>

            {/* Reviews and Likes Section */}
            <View style={styles.likesAndReviewsContainer}> 
              <TouchableOpacity style={{
                flex: 1,
                paddingVertical: 10, 
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}>
                <Ionicons
                  name='ios-quote'
                  size={30}
                  style={{ marginRight: 15 }}
                  color="#5a5d81"
                />
                <Text style={{fontSize: 18}}>{data.activity.reviews} Reviews</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                flex: 1,
                paddingVertical: 10,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}>
                <Ionicons
                  name='ios-heart'
                  size={30}
                  style={{ marginRight: 15 }}
                  color="#5a5d81"
                />
                <Text style={{fontSize: 18}}>{data.activity.likes} Likes</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Interests Section */}
          <View style={{padding: 20, flex: 1, }}>
            <View>
              <View>
                <Text style={{fontSize:15, color: "#5a5d81"}}>Cultural Preferences</Text>
              </View>
              <View style={{paddingVertical: 10, flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
                {
                  data.preferences.cultures.map((x, i) => {
                    return (
                      <Badge 
                        badgeStyle={{
                          backgroundColor: "#dbdbdb", 
                          borderColor: "#cccccc",
                          borderWidth: 0.5,
                          elevation: 1,
                          padding: 13, 
                          margin: 3, 
                        }} 
                        key={i} 
                        value={<Text style={{color: "#555555", }}> {x} </Text>} 
                      />
                    ) 
                  })
                }
              </View>
            </View>

            {/* Basic Info Section */}
            <View style={{marginTop: 10 }}>
              <Text style={{fontSize:15, color: "#5a5d81"}}>Basic Information</Text>
              <View style={{paddingVertical: 10}}>
                <ListItem
                  title={<Text>{data.info.location.street} </Text>}
                  leftIcon={<Ionicons name='md-home' size={25} color="#5a5d81"/>}
                  containerStyle={{paddingVertical: 10, paddingHorizontal: 0, backgroundColor: "#f2f2f2"}}
                  bottomDivider
                />
                <ListItem
                  title={<Text>{data.info.location.city} </Text>}
                  leftIcon={<Ionicons name='md-business' size={25} color="#5a5d81"/>}
                  containerStyle={{paddingVertical: 10, paddingHorizontal: 0, backgroundColor: "#f2f2f2"}}
                  bottomDivider
                />
                <ListItem
                  title={<Text>{data.info.ethnicity}</Text>}
                  leftIcon={<Ionicons name='md-globe' size={25} color="#5a5d81"/>}
                  containerStyle={{paddingVertical: 10, paddingHorizontal: 0, backgroundColor: "#f2f2f2"}}
                />
              </View>
            </View>
        </View>
        </ScrollView> 
      </SafeAreaView>
      }
    </React.Fragment>
  );
}

function Loading() {
  return (
    <View style={{ 
      flex: 1, 
      alignItems: "center", 
      justifyContent: "center", 
    }}>
      <ActivityIndicator style={styles.activityIndicator} size={50} color="#000000" />
      <Text style={{
        marginTop: 15,
        fontSize: 13, 
        color: "grey" 
      }}> Please wait while we get your data </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  introductionContainer: {
    flexDirection: "row",
    maxHeight: 120,  
  },
  likesAndReviewsContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    marginTop: 10,
  },
});

ProfileScreen.navigationOptions = {
  header: null,
};


