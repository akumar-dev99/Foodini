import firebase from '../firebaseConfig';
var db = firebase.firestore(); // Access to the firestore class for our instance

export function retrieveUserData(uid) {
    const docRef = db.collection('users').doc(uid);
    return docRef.get();
    // .then(function(doc) {
    //     if(doc.exists) { return doc.data(); }
    //     else { 
    //         console.log("No such document exists!");
    //         return {};
    //     }
    // }).catch(function(error) {
    //     console.log("Error getting the document: ", error);
    // });
}