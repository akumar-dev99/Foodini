import * as React from 'react';
import { StyleSheet, View, Text as RNText } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../components/StyledText';

export default function PostScreen() {
  console.log("Post Screen has mounted!")

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={{fontSize: 20}}> PostScreen </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

PostScreen.navigationOptions = {
  header: null,
};
