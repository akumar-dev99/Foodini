import * as React from 'react';
import { StyleSheet, View, Text as RNText, ScrollView } from 'react-native';
import { Text } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import { Badge } from 'react-native-elements';

// Import custom components for this profile screen
import UserAvatar from '../components/ProfileScreen/UserAvatar';

const interests = ["Japanese", "Korean", "Indian", "African", "Chinese", "Spanish", "Mexican"];

export default function ProfileScreen(props) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} nestedScrollEnabled>

      {/* Introduction Section */}
      <View style={styles.introductionContainer}>
        <UserAvatar userName='John Doe' userImage='https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'/>
        <ScrollView style={{marginLeft: 10}}> 
          <Text style={{fontSize: 20, color: "#5a5d81"}}>John Doe</Text>
          <Text style={{marginTop: 5}}>"I'm an easy going foodie new in town. I love to eat Korean food. It's a pleasure eating."</Text> 
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
          <Text style={{fontSize: 18}}>109 Reviews</Text>
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
          <Text style={{fontSize: 18}}>5004 Likes</Text>
        </View>
      </View>

      <View style={{marginVertical: 10, marginHorizontal: 20, backgroundColor: "whitesmoke", elevation: 1, height: 1}} />

      {/* Interests Section */}
      <View style={styles.interestsContainer}>
        <View>
          <Text style={{fontSize:15, color: "#5a5d81"}}> I'm interested in...</Text>
        </View>
        <View style={{padding: 10, flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
          {interests.map(x => {
            return (
              <Badge 
                badgeStyle={{
                  backgroundColor: "white", 
                  padding: 12, 
                  margin: 3, 
                  elevation: 3
                }} 
                key={x} 
                value={<Text> {x} </Text>} 
              />
            ) 
          })}
        </View>
      </View> 

      <View style={{marginVertical: 10, marginHorizontal: 20, backgroundColor: "whitesmoke", elevation: 1, height: 1}} />

      

    </ScrollView>
  );
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
  },
  likesAndReviewsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  interestsContainer: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
});

ProfileScreen.navigationOptions = {
  header: null,
};


