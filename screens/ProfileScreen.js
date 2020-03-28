import * as React from 'react';
import { ActivityIndicator, StyleSheet, View, TouchableOpacity, Text as RNText, ScrollView, Button, SafeAreaView} from 'react-native';
import { Text } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import { Badge, ListItem, SearchBar } from 'react-native-elements';

// Import custom components for this profile screen
import UserAvatar from '../components/ProfileScreen/UserAvatar';

// Link screen to firebase functionality
import { logout } from '../utils/auth';
import { useFirestoreDoc } from '../utils/db';

export default function ProfileScreen({ navigation, route, user }) {
  console.log("Profile Screen has mounted!")

  // data retrieval
  const { isLoading, data } = useFirestoreDoc('users', user.uid);
  // retrive the data for the user, using the firestore doc function. First parameter is collection name
  // while the second is the name of the document to query.
  
  return (
    <>
      { isLoading && <Loading/>}
      { data && 
      <SafeAreaView style={styles.container} >
        <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} style={styles.contentContainer}>

          {/* Introduction Section */}
          <View style={styles.introductionContainer}>
            <View style={{marginRight: 10,}}>
              <UserAvatar userName={data.info.firstname} 
                userImage={data.avatar}/>
            </View>
            <View style={{flexDirection: "column", flex: 1,}}>
              <Text style={{fontSize: 20,}}>{data.info.firstname + " " + data.info.lastname}</Text>
              <ScrollView style={{marginTop: 2, }}> 
                <Text style={{marginTop: 5, color: "#5a5d81", textAlign: "justify",}}>
                  {data.info.bio} {data.info.bio} {data.info.bio}
                  </Text> 
              </ScrollView>
            </View>
          </View>

          {/* Reviews and Likes Section */}
          <View style={styles.likesAndReviewsContainer}> 
            <View style={{
                
                alignItems: "center",
                paddingHorizontal: 10,
                flexDirection: "row",
            }}>
              <Ionicons
                name='ios-quote'
                size={30}
                style={{ marginRight: 15 }}
                color="#5a5d81"
              />
              <Text style={{fontSize: 18}}>{data.activity.reviews} Reviews</Text>
            </View>
            <View style={{
                alignItems: "center",
                paddingHorizontal: 10,
                flexDirection: "row",
            }}>
              <Ionicons
                name='ios-heart'
                size={30}
                style={{ marginRight: 15 }}
                color="#5a5d81"
              />
              <Text style={{fontSize: 18}}>{data.activity.likes} Likes</Text>
            </View>
          </View>

          {/* Interests Section */}
          <View style={styles.interestsContainer}>
            <View>
              <Text style={{fontSize:15, color: "#5a5d81"}}> I'm interested in...</Text>
            </View>
            <View style={{paddingVertical: 10, flexDirection: "row", flexWrap: "wrap",}}>
              {data.preferences.cultures.map((x, i) => {
                return (
                  <Badge 
                    badgeStyle={{
                      backgroundColor: "white", 
                      padding: 14, 
                      margin: 3, 
                      elevation: 1
                    }} 
                    key={i} 
                    value={<Text> {x} </Text>} 
                  />
                ) 
              })}
            </View>
          </View> 

          {/* Basic Info Section */}
          <View style={styles.basicInfoContainer}>
            <View>
              <Text style={{fontSize:15, color: "#5a5d81"}}> Basic Information </Text>
            </View>
            <View style={{paddingVertical: 6}}>
              <ListItem
                title={<Text>{data.info.location.street} </Text>}
                leftIcon={<Ionicons name='md-home' size={25} color="#5a5d81"/>}
                containerStyle={{backgroundColor: "#fafafa", padding: 10}}
                bottomDivider
              />
              <ListItem
                title={<Text>{data.info.location.city} </Text>}
                leftIcon={<Ionicons name='md-business' size={25} color="#5a5d81"/>}
                containerStyle={{backgroundColor: "#fafafa", padding: 10}}
                bottomDivider
              />
              <ListItem
                title={<Text>{data.info.ethnicity} Background</Text>}
                leftIcon={<Ionicons name='md-globe' size={25} color="#5a5d81"/>}
                containerStyle={{backgroundColor: "#fafafa", padding: 10}}
              />
            </View>
          </View>
          <Button color="grey" title="Logout" onPress={logout}/>
        </ScrollView> 
      </SafeAreaView>
      }
      { !data &&
      <Button color="grey" title="Logout" onPress={logout}/>
      }
    </>
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
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 15,
  },
  introductionContainer: {
    flexDirection: "row",
    maxHeight: 120,  
  },
  likesAndReviewsContainer: {
    paddingVertical: 15,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
  },
  interestsContainer: {
  },
  basicInfoContainer: {
  },
});

ProfileScreen.navigationOptions = {
  header: null,
};


