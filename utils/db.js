import * as React from 'react';
import firebase from './firebaseConfig';
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

