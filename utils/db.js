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