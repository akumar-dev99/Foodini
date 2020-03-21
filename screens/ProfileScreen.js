import * as React from 'react';
import { ActivityIndicator, StyleSheet, View, Text as RNText, ScrollView, Button} from 'react-native';
import { Text } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import { Badge, ListItem } from 'react-native-elements';

// Import custom components for this profile screen
import UserAvatar from '../components/ProfileScreen/UserAvatar';

// Link screen to firebase functionality
import { logout } from '../utils/auth';
import { useFirestoreDoc } from '../utils/db';

export default function ProfileScreen({ navigation, route, user }) {
  console.log("Profile Screen has mounted!")

  // data retrieval
  const { isLoading, data } = useFirestoreDoc('users', user.uid);

  return (
    <>
      { isLoading && <Loading/>}
      { data && 
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} nestedScrollEnabled>
        {/* Introduction Section */}
        <View style={styles.introductionContainer}>
          <UserAvatar userName={data.info.firstname} 
            userImage={data.avatar}/>
          <ScrollView style={{marginLeft: 10}}> 
            <Text style={{fontSize: 20, color: "#5a5d81"}}>{data.info.firstname + " " + data.info.lastname}</Text>
            <Text style={{marginTop: 5}}>{data.info.bio}</Text> 
          </ScrollView>
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

        <View style={{marginBottom: 10, backgroundColor: "whitesmoke", elevation: 1, height: 0.5}} />
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
      </ScrollView> }
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
      flexDirection: "column",
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
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
  },
  introductionContainer: {
    padding: 25,
    flexDirection: "row",
    backgroundColor: "white",
  },
  likesAndReviewsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    paddingBottom: 10,
  },
  interestsContainer: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  basicInfoContainer: {
    flexDirection: "column",
    paddingHorizontal: 20,
  },
});

// const useFirestoreDoc = (ref) => {
//   const [docState, setDocState] = React.useState({ isLoading: true, data: null });
//   React.useEffect(() => {
//     ref.onSnapshot(doc => {
//       setDocState({ isLoading: false, data: doc.data() });
//     })
//   }, []);
//   return docState;
// }

ProfileScreen.navigationOptions = {
  header: null,
};


