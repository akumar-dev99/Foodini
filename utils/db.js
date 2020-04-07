import * as React from 'react';
import firebase from './firebaseConfig';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
var db = firebase.firestore();

// Functions for pulling database datat, filtering and submitting custom queries 

export const useFirestoreDoc = (collectionName, docName) => {
    const [docState, setDocState] = React.useState({ isLoading: true, data: null });
    React.useEffect(() => {
        return db.collection(collectionName)
            .doc(docName)
            .onSnapshot(doc => {
            setDocState({ isLoading: false, data: doc.data() });
        });
    }, []);
    return docState;
}

export function createNewUserDoc(uid, first, last, allergyList, restrictionList) {
    const data = {
        activity: { likes: 0, reviews: 0 },
        avatar: "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg",
        info: { 
            bio: "Edit your profile to add a bio!", 
            ethnicity: "Not Provided", 
            firstname: first, 
            lastname: last,
            location: {
                city: "Not Provided",
                street: "Not Provided",
            },
        },
        preferences: {
            cultures: [],
            restrictions: {
                allergies: allergyList,
                religious: restrictionList,
            },
            taste: {
                bitter: null,
                sour: null,
                spice: null,
                sweet: null,
                umami: null,
            }
        }
    }
    return db.collection("users").doc(uid).set(data);
}

export function UpdateDocTracker({ collectionName, docName, updatePayload, icon }) {
    // NOTE: for nested object updates, provide field in format
    // "higherLevelField.lowerLevelField"
    var docRef = db.collection(collectionName).doc(docName);
    const [isLoading, setIsLoading] = React.useState(null);

    async function update(payload) {
        setIsLoading(true); // turn on the activity indicator
        await docRef.update(payload);
        setIsLoading(false);
    }

    return (
        <React.Fragment>
            {   isLoading &&
                <ActivityIndicator style={{padding: 0}}/>
            }

            {   !isLoading &&
                <TouchableOpacity style={{padding: 0, justifyContent: "center"}}
                    onPress={() => update(updatePayload)}>
                    <Ionicons
                        name={icon}
                        size={30}
                        color="#329932"
                    />
                </TouchableOpacity>
            }
        </React.Fragment>
    )

    

}
