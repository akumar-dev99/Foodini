import firebase from './firebaseConfig';
var auth = firebase.auth(); // access to auth tools

export function loginWithPassword(email, password) {
    if(email && password) {
        auth.signInWithEmailAndPassword(email, password).then(function(response) {
            console.log("Logged in!");
        })
        .catch(function(error) {
            // Handle Errors here.
            console.log(error);
            // ...
        });
    }  
}

export function logout() {
    auth.signOut().then(function() {
        console.log("User Signed out");
    }).catch(function(error) {
        console.log(error)
    });
}
