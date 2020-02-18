import * as React from 'react';
import { StyleSheet, View, Text as RNText } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../components/StyledText';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={{fontSize: 20}}> ProfileScreen</Text>
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

ProfileScreen.navigationOptions = {
  header: null,
};


