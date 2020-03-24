import firebase from './firebaseConfig';
var auth = firebase.auth(); // access to auth tools

export function loginWithPassword(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
    auth.signOut().then(() => console.log("User Signed out"))
    .catch(() => console.log(error.message));
}

export function createAccountWithPassword(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
}

export function checkEmailExists(email) {
    return auth.fetchSignInMethodsForEmail(email);
}

