import firebase from './firebaseConfig';
import axios from 'axios';

var auth = firebase.auth(); // access to auth tools

export function loginWithPassword(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
    auth.signOut().then(() => console.log("User Signed out"))
    .catch(() => console.log(error.message));
}

export function createAccountWithPasswordAdmin(email, password) {
    return axios({
        method: "POST",
        url: "https://us-central1-foodini-app-177fc.cloudfunctions.net/addUser",
        data: JSON.stringify({ email: email, password: password }),
        headers: {
          'Content-Type': 'application/json',
        },
    })
}

export function checkEmailExists(email) {
    return auth.fetchSignInMethodsForEmail(email);
}

