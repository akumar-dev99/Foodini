import firebase from './firebaseConfig';
var db = firebase.firestore(); // access to firestore (which is our database)

var docRef = db.collection("users").doc("eOdeVsh2CLeQ8mwYTIVJwi8Lp2q1");

export default function easyCopy() {
    docRef.get().then(function(doc) {
        if (doc.exists) {
            let docData = doc.data();
            console.log("Document data:", docData);
            db.collection("users").doc("random").set(docData)
            .then(function() {
                console.log("Document successfully written!");
            }).catch(function(error) {
                console.error("Error writing document: ", error);
            });
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}