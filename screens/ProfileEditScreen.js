import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
// import components from EditableFields
import { EditName, EditMultiline, 
  EditArray, EditValue } from '../components/ProfileEditScreen/EditableFields';
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
  // Add the document updater to the right of the header
  navigation.setOptions({
    headerRight: () => {
      if(user.uid) {
        return (
          <View style={{ paddingRight: 18, }}>
            <UpdateDocTracker
              collectionName="users"
              docName={user.uid}
              updatePayload={{
                "info.firstname": first,
                "info.lastname": last,
                "info.bio": bio,
                "preferences.cultures": cultures,
                "info.location.city": city,
                "info.ethnicity": ethnicity,
              }}
              icon="ios-checkmark-circle-outline"
            />
          </View>
        )
      }
    }
  })
  // Avatar NOT EDITABLE AT THE MOMENT (TODO)
  const [first, setFirst] = React.useState(route.params.data.info.firstname);
  const [last, setLast] = React.useState(route.params.data.info.lastname);
  const [bio, setBio] = React.useState(route.params.data.info.bio);
  const [cultures, setCultures] = React.useState(route.params.data.preferences.cultures);
  const [city, setCity] = React.useState(route.params.data.info.location.city);
  const [ethnicity, setEthnicity] = React.useState(route.params.data.info.ethnicity);
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 10, }}>
        <EditName 
          initialFirst={first}
          initialLast={last}
          onChangeFirst={setFirst}
          onChangeLast={setLast}
        /> 
      </View>
      <View style={{ marginBottom: 10, }}>
        <EditMultiline
          title="Bio"
          initialVal={bio}
          onChange={setBio}
        />
      </View>
      <View style={{ marginBottom: 10, }}>
        <EditArray
          title="Culture"
          initialArray={cultures}
          onChange={setCultures}
        />
      </View>
      <View style={{ marginBottom: 10, }}>
        <EditValue
          title="City"
          initialVal={city}
          onChange={setCity}
        />
      </View>
      <View style={{ marginBottom: 10, }}>
        <EditValue
          title="Ethnicity"
          initialVal={ethnicity}
          onChange={setEthnicity}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

ProfileEditScreen.navigationOptions = {
  header: null,
};